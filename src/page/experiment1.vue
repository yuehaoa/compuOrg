<template>
    <row>
        <Menu mode="horizontal" theme="dark" active-name="1" class="head-menu">
            <div class="layout-logo">
                <div class="wrapper">
                    <div class="layout-logo-text">
                        实验平台
                    </div>
                </div>
            </div>
        </Menu>
        <i-col span="4">
            <div v-if="menuShow">
                <card class="tree2">
                    <Button type="primary" @click="backWords()">返回</Button>
                    <Button type="success" style="float:right" @click="startExeperiment()" :disabled="!lineRight">测试实验结果</Button>
                    <Button type="info" style="float:right;margin-top:10px" v-if="lineRight" @click="showAllLine()">显示所有连线</Button>
                    <Table v-if="tableShow" highlight-row stripe :columns = "tableCol" :data ="tableData" style="margin-top:.2rem;"  @on-current-change="showLine">
                        <template slot="Check" slot-scope="{row}">
                            <Icon type="md-checkmark" color="limegreen" v-if="exist(row)"/>
                            <Icon type="md-close" color="red" v-else/>
                        </template>
                    </Table>
                    <div style="margin-top:.2rem" v-if="tableShow">
                        <Button type="error" style="float:right" @click="remove()">删除连线</Button>
                    </div>
                    <div style="margin-bottom:.2rem" v-if="tableShow">
                        <Button type="success" style="float:left" @click="lineCheck()">校验所有连线</Button>
                    </div>
                    <Button type="success" style="float:right;margin-top:10px" @click="getImg" v-show="!centerDialogVisible">截图</Button>
                    <Button type="success" style="margin-top:10px" @click="downImg" v-show="centerDialogVisible">下载截图</Button>
                    <Button type="success" style="float:right;margin-top:10px" @click="cancel" v-show="centerDialogVisible">取消截图</Button>
                </card>
            </div>
        </i-col>
        <i-col span="18">
            <div class="svg-style" id="svg-container">
                    <vueCropper v-show="centerDialogVisible"
                        ref="cropper" 
                        :img="option.img"  
                        :info="false" 
                        :outputSize="option.size"
                        :outputType="option.outputType"
                        :fixed-box="option.fixedBox"
                        :can-move="option.canMove"
                        :can-move-box="option.canMoveBox"
                        :auto-crop="option.autoCrop"
                        :auto-crop-width="option.autoCropWidth"
                        :auto-crop-height="option.autoCropHeight" >
                    </vueCropper>
                    <div v-show="!centerDialogVisible">
                        <div class="power-source box">
                            <div class="wrapper">
                                <div class="power-source-text text">
                                    电源
                                </div>
                            </div>
                        </div>
                        <div class="sys-unit box">
                            <div class="wrapper">
                                <div class="sys-unit-text text">
                                    SYS单元
                                </div>
                            </div>
                        </div>
                        <div class="cpld-unit box">
                            <div class="wrapper">
                                <div class="cpld-unit-text text">
                                    CPLD单元
                                </div>
                            </div>
                        </div>
                        <vue-draggable-resizable
                            w="auto"
                            h="auto"
                            :grid="[20,40]"
                            :resizable="false"
                        >
                            <div class="time-control-unit box" ref="timeControl" @wheel.prevent="handleTableWheel(0,$event)">
                                <div class="wrapper">
                                    <div class="time-control-unit-text text">
                                        时序与操作台
                                    </div>
                                    <div class="clk0 twoNeedle" @click="buttonClick('clk0')" id="clk0"/>
                                    <div class="clk0-text text">
                                        clk0
                                    </div>
                                    <div class="three-hundred-hz twoNeedle invisible"/>
                                    <div class="three-hundred-hz-text text invisible">
                                        300HZ
                                    </div>
                                    <div class="thirty-hz twoNeedle" @click="buttonClick('30HZ')" id="30HZ"/>
                                    <div class="thirty-hz-text text">
                                        30HZ
                                    </div>
                                    <div class="three-hz twoNeedle invisible"/>
                                    <div class="three-hz-text text invisible">
                                        3HZ
                                    </div>

                                    <div class="st">
                                        <Dropdown class="white-btn stMenu" placement="right-start">
                                            <DropdownMenu slot="list">
                                                <DropdownItem style="width:0.8rem">T1</DropdownItem>
                                                <DropdownItem style="width:0.8rem">T2</DropdownItem>
                                                <DropdownItem style="width:0.8rem">T3</DropdownItem>
                                                <DropdownItem style="width:0.8rem" @click.native="t4Option">T4</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    <div class="st-text text">
                                        ST
                                    </div>
                                    <div class="st-text text">
                                        ST
                                    </div>
                                    <div class="start bulb" @click="changeImage" id="kk1Start"/>
                                    <div class="start-text text">
                                        运行
                                    </div>
                                    <div class="text kk1-text">
                                        kk1
                                    </div>
                                    <div class="stop bulb" @click="changeImage"/>
                                    <div class="stop-text text">
                                        停止
                                    </div>
                                    <div class="singleShot bulb" @click="changeImage" id="singleBeat"/>
                                    <div class="singleShot-text text">
                                        单拍
                                    </div>
                                    <div class="singleStep bulb" @click="changeImage"/>
                                    <div class="singleStep-text text">
                                        单步
                                    </div>
                                    <div class="continue bulb" @click="changeImage"/>
                                    <div class="continue-text text">
                                        连续
                                    </div>
                                    <div class="text kk2-text">
                                        kk2
                                    </div>
                                    <div class="program bulb" @click="changeImage"/>
                                    <div class="program-text text">
                                        编程
                                    </div>
                                    <div class="check bulb" @click="changeImage"/>
                                    <div class="check-text text">
                                        校验
                                    </div>
                                    <div class="run bulb" @click="changeImage" id="kk3Start"/>
                                    <div class="run-text text">
                                        运行
                                    </div>
                                    <div class="text kk3-text">
                                        kk3
                                    </div>

                                    <div class="tfourNeedle fourNeedle" @click="buttonClick('time-con-T4-T1')" id="time-con-T4-T1"></div>

                    
                                    <div class="tfourNeedle-text text">
                                        T4—T1
                                    </div>
                                </div>
                            </div>
                        </vue-draggable-resizable>
                        <div class="expansion-unit box">
                            <div class="wrapper">
                                <div class="expansion-unit-text text">
                                    扩展单元
                                </div>
                            </div>
                        </div>
                        <!--结果列表栏-->
                        <div class="box result-unit" v-if="start">
                            <div class="wrapper">
                                <div class="text result-unit-text">
                                    --结果列表栏--
                                </div>
                                <div>
                                    <br>
                                    <br>
                                    <div style="text-align:center;margin-top:10px">
                                        <span class="result">F: {{F.toString().replace(/,/g," ")}}</span>
                                    </div>
                                    <br>
                                    <div style="margin-left:18px" v-for="(value,index) in S3_0_Flag" v-bind:key="index">
                                        <span class="result">
                                            S{{3-index}}: {{value}}
                                            <br>
                                            <br>
                                        </span>
                                    </div>
                                    <div style="margin-left:18px">
                                        <span class="result">
                                            ALU_B: {{alu_b}}
                                        </span>
                                    </div>
                                    <br>
                                    <br>
                                    <div style="margin-left:18px">
                                        <span class="result">
                                            LDA: {{lda}}
                                        </span>
                                    </div>
                                    <br>
                                    <br>
                                    <div style="margin-left:18px">
                                        <span class="result">
                                            LDB: {{ldb}}
                                        </span>
                                    </div>
                                    <br>
                                    <br>
                                    <div style="margin-left:18px">
                                        <span class="result">
                                            Cn: {{conCn}}
                                        </span>
                                    </div>
                                    <br>
                                    <br>
                                    <div style="margin-left:18px">
                                        <span class="result">
                                            FZ: {{FZ}}
                                        </span>
                                    </div>
                                    <br>
                                    <br>
                                    <div style="margin-left:18px">
                                        <span class="result">
                                            FC: {{FC}}
                                        </span>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                        <div class="cpu-text text">
                            CPU
                        </div>
                        <div class="mc-unit box">
                            <div class="wrapper">
                                <div class="mc-unit-text text">
                                    MC单元
                                </div>
                            </div>
                        </div>
                        <div class="ir-unit box">
                            <div class="wrapper">
                                <div class="ir-unit-text text">
                                    IR单元
                                </div>
                            </div>
                        </div>
                        <vue-draggable-resizable
                            w="auto"
                            h="auto"
                            :grid="[20,40]"
                            :resizable="false"
                        >
                            <div class="alu-reg-unit box" ref="aluReg" @wheel.prevent="handleTableWheel(1,$event)">
                                <div class="wrapper">
                                <div class="red-buble alu-red-a0" ref="A7"/>
                                <div class="red-buble alu-red-a1"/>
                                <div class="red-buble alu-red-a2"/>
                                <div class="red-buble alu-red-a3"/>
                                <div class="red-buble alu-red-a4"/>
                                <div class="red-buble alu-red-a5"/>
                                <div class="red-buble alu-red-a6"/>
                                <div class="red-buble alu-red-a7"/>
                                <div class="green-buble alu-green-a0"/>
                                <div class="green-buble alu-green-a1"/>
                                <div class="green-buble alu-green-a2"/>
                                <div class="green-buble alu-green-a3"/>
                                <div class="green-buble alu-green-a4"/>
                                <div class="green-buble alu-green-a5"/>
                                <div class="green-buble alu-green-a6"/>
                                <div class="green-buble alu-green-a7"/>
                                <div class="memA text">
                                    {{memA.toString().replace(/,/g," ")}}
                                </div>
                                <div class="memB text">
                                    {{memB.toString().replace(/,/g," ")}}
                                </div>
                                <div class="alu-twoNeedle-rob twoNeedle invisible"/>
                                <div class="alu-twoNeedle-rob-text text invisible">
                                    R0_B
                                </div>
                                <div class="alu-twoNeedle-ldro twoNeedle invisible"/>
                                <div class="alu-twoNeedle-ldro-text text invisible">
                                    LDRO
                                </div>
                                <div class="alu-eightNeedle-in eightNeedle" @click="buttonClick('aluIN7-IN0')" id="aluIN7-IN0"/>
                                <div class="alu-eightNeedle-in-text text">
                                    IN7—IN0
                                </div>
                                <div class="alu-fourNeedle-fzfc fourNeedle invisible"/>
                                <div class="text alu-fourNeedle-fzfc-text invisible">
                                    FZ-FC
                                </div>
                                <div class="alu-fourNeedle-s3s0 fourNeedle" @click="buttonClick('aluS3-S0')" id="aluS3-S0"/>
                                <div class="text alu-fourNeedle-s3s0-text">
                                    S3-S0
                                </div>

                                <div class="alu-twoNeedle-cn twoNeedle" @click="buttonClick('aluCn')" id="aluCn"/>
                                <div class="text alu-twoNeedle-cn-text">
                                    Cn
                                </div>

                                <div class="alu-fourNeedle-ldaldb fourNeedle" @click="buttonClick('aluLDA-LDB')" id="aluLDA-LDB"/>
                                <div class="text alu-fourNeedle-ldaldb-text">
                                    LDA-LDB
                                </div>
                                <div class="alu-eightNeedle-d0d7 eightNeedle" @click="buttonClick('aluD7-D0')" id="aluD7-D0"/>
                                <div class="text alu-eightNeedle-d0d7-text">
                                    D7——D0
                                </div>
                                <div class="alu-twoNeedle-alub twoNeedle" @click="buttonClick('aluALU_B')" id="aluALU_B"/>
                                <div class="text alu-twoNeedle-alub-text">
                                    ALU_B
                                </div>
                                <div class="alu-eightNeedle2-out eightNeedle2" @click="buttonClick('outD7-D0')" id="outD7-D0"/>
                                <div class="text alu-eightNeedle2-out-text-1">
                                    OUT7
                                </div>
                                <div class="text alu-eightNeedle2-out-text-2">
                                    OUT0
                                </div>

                                <div class="alu-reg-unit-text text">
                                    ALU及REG单元
                                </div>
                                <div class="memA-text text">
                                    LDA:
                                </div>
                                <div class="notice text">
                                    灯泡从左到右依次表示第高位-第低位
                                </div>
                                <div class="memB-text text">
                                    LDB:
                                </div>

                            </div>
                        </div>
                        </vue-draggable-resizable>
                        <vue-draggable-resizable
                            w="auto"
                            h="auto"
                            :grid="[20,40]"
                            :resizable="false"
                        >
                            <div class="cpu-bus box" ref="cpuBus" @wheel.prevent="handleTableWheel(2,$event)">
                                <div class="wrapper">
                                    <div class="cpu-eightNeedle-1 eightNeedle2" @click="buttonClick('cpuD7-D0-1')" id="cpuD7-D0-1"/>
                                    <div class="cpu-eightNeedle-2 eightNeedle2" @click="buttonClick('cpuD7-D0-2')" id="cpuD7-D0-2"/>
                                    <div class="cpu-eightNeedle-3 eightNeedle2" @click="buttonClick('cpuD7-D0-3')" id="cpuD7-D0-3"/>
                                    <div class="text cpu-eightNeedle-text-d7">
                                        D7
                                    </div>
                                    <div class="text cpu-eightNeedle-text-d0">
                                        D0
                                    </div>
                                    <div class="cpu-bus-text text">
                                        CPU内总线
                                    </div>
                                </div>
                            </div>
                        </vue-draggable-resizable>
                        <div class="pc-ar box">
                            <div class="wrapper">
                                <div class="pc-ar-text-1 text">
                                    PC及AR
                                </div>
                                <div class="pc-ar-text-2 text">
                                    单元
                                </div>
                            </div>
                        </div>
                        <div class="system-bus-text text">
                            系统总线
                        </div>
                        <vue-draggable-resizable
                            w="auto"
                            h="auto"
                            :grid="[20,40]"
                            :resizable="false"
                        >
                            <div class="system-bus box select-background" ref="systemBus" @wheel.prevent="handleTableWheel(3,$event)">
                            <div class="wrapper">
                                <div class="system-T4-T1 fourNeedle"  @click=" buttonClick('con-bus-T4-T1')" id="con-bus-T4-T1"/>
                                <div class="system-T4-T1-text text">
                                    T4 - T1
                                </div>
                                <div class="red-buble system-red-buble-1"/>
                                <div class="red-buble system-red-buble-2"/>z
                                <div class="red-buble system-red-buble-3"/>
                                <div class="red-buble system-red-buble-4"/>
                                <div class="twoNeedle system-twoNeedle-xiow invisible"/>
                                <div class="text system-twoNeedle-xiow-text invisible">
                                    XIOW
                                </div>

                                <div class="twoNeedle system-twoNeedle-xior invisible"/>
                                <div class="text system-twoNeedle-xior-text invisible">
                                    XIOR
                                </div>

                                <div class="fourNeedle system-fourNeedle-xmwr invisible"/>
                                <div class="text system-fourNeedle-xmwr-text invisible">
                                    XMWR-XMRD
                                </div>

                                <div class="twoNeedle system-twoNeedle-hold invisible"/>
                                <div class="text system-twoNeedle-hold-text invisible">
                                    HOLD
                                </div>

                                <div class="fourNeedle system-fourNeedle-iom invisible"/>
                                <div class="text system-fourNeedle-iom-text invisible">
                                    WR-RD-IOM
                                </div>
                                
                                <div class="eightNeedle2 system-eightNeedle-xd-1 invisible"/>
                                <div class="eightNeedle2 system-eightNeedle-xd-2 invisible"/>
                                <div class="text system-eightNeedle-xd7-text invisible">
                                    XD7
                                </div>
                                <div class="text system-eightNeedle-xd0-text invisible">
                                    XD0
                                </div>

                                <div class="system-eightNeedle-xa eightNeedle2 invisible"/>
                                <div class="text system-eightNeedle-xa7-text invisible">
                                    XA7
                                </div>
                                <div class="text system-eightNeedle-xa0-text invisible">
                                    XA0
                                </div>

                                <!----->
                                <div class="red-buble system-red-buble-a7" name="buble_F"/>
                                <div class="red-buble system-red-buble-a6" name="buble_F"/>
                                <div class="red-buble system-red-buble-a5" name="buble_F"/>
                                <div class="red-buble system-red-buble-a4" name="buble_F"/>
                                <div class="text system-red-buble-text">
                                    A7-----A0 代表F的值
                                </div>
                                <div class="green-buble system-green-buble-a3" name="buble_F"/>
                                <div class="green-buble system-green-buble-a2" name="buble_F"/>
                                <div class="green-buble system-green-buble-a1" name="buble_F"/>
                                <div class="green-buble system-green-buble-a0" name="buble_F"/>
                                <!---->



                                <div class="system-bus-text-1 text">
                                    控制总线
                                </div>
                                <div class="system-bus-text-2 text">
                                    数据总线
                                </div>
                                <div class="system-bus-text-3 text">
                                    地址总线
                                </div>
                            </div>
                            </div>
                        </vue-draggable-resizable>
                        <div class="mm-io-text text">
                            主存及外设
                        </div>
                        <div class="mm box">
                            <div class="wrapper">
                                <div class="mm-text text">
                                    MEM单元
                                </div>
                            </div>
                        </div>
                        <div class="eightTwoNine box">
                            <div class="wrapper">
                                <div class="eightTwoNine-text">
                                    8259单元
                                </div>
                            </div>
                        </div>
                        <div class="expand-bus box">
                            <div class="wrapper">
                                <div class="expand-bus-text text">
                                    扩展总线
                                </div>
                            </div>
                        </div>
                        <div class="eightTwoSeven box">
                            <div class='wrapper'>
                                <div class="eightTwoSeven-text">
                                    8237单元
                                </div>
                            </div>
                        </div>
                        <div class="extra box">
                        </div>
                        <div class="out-unit box">
                            <div class="wrapper">
                                <div class="out-unit-text text">
                                    OUT单元
                                </div>
                            </div>
                        </div>
                        <vue-draggable-resizable
                            w="auto"
                            h="auto"
                            :grid="[20,40]"
                            :resizable="false"
                        >
                            <div class="con-unit box" ref="conUnit" @wheel.prevent="handleTableWheel(4,$event)">
                                <div class="wrapper">
                                    <div class="con-unit-text text">
                                        CON单元
                                    </div>
                                    <div class="switch SD20" @click="changeSwitch" />
                                    <div class="SD20-text text">
                                        SD20  K0
                                    </div>
                                    <div class="switch SD21" @click="changeSwitch" />
                                    <div class="SD21-text text">
                                        21  K1

                                    </div>
                                    <div class="switch SD22" @click="changeSwitch" />
                                    <div class="SD22-text text">
                                        22  K2
                                    </div>
                                    <div class="switch SD23" @click="changeSwitch" />
                                    <div class="SD23-text text">
                                        23  K3
                                    </div>
                                    <div class="switch SD24" @click="changeSwitch"/>
                                    <div class="SD24-text text">
                                        24  K4
                                    </div>
                                    <div class="switch SD25" @click="changeSwitch"/>
                                    <div class="SD25-text text">
                                        25  K5
                                    </div>


                                    <div class="switch SD26" @click="changeSwitch"/>
                                    <div class="SD26-text text">
                                        26  K6
                                    </div>
                                    <div class="switch SD27" @click="changeSwitch" ref="num7"/>
                                    <div class="SD27-text text">
                                        SD27  K7
                                    </div>

                                    <div class="switch SD17 invisible" @click="changeSwitch" id="ALU_B"/>
                                    <div class="SD17-text text invisible">
                                        SD17  ALU_B
                                    </div>
                                    <div class="switch SD16" @click="changeSwitch" name="SD03-00"/>
                                    <div class="SD16-text text">
                                        16  S3
                                    </div>
                                    <div class="switch SD15" @click="changeSwitch" name="SD03-00"/>
                                    <div class="SD15-text text">
                                        15  S2
                                    </div>
                                    <div class="switch SD14" @click="changeSwitch" name="SD03-00"/>
                                    <div class="SD14-text text">
                                        14  S1
                                    </div>
                                    <div class="switch SD13" @click="changeSwitch" name="SD03-00"/>
                                    <div class="SD13-text text">
                                        13  S0
                                    </div>
                                    <div class="switch SD12" @click="changeSwitch" id="SD_Cn"/>
                    
                                    <div class="SD12-text text">
                                        12  Cn
                                    </div>
                                    <div class="switch SD11" @click="changeSwitch" ref="lda"/>
                                    <div class="SD11-text text">
                                        11  LDA
                                    </div>
                                    <div class="switch SD10" @click="changeSwitch" ref="ldb"/>
                                    <div class="SD10-text text">
                                        SD10  LDB
                                    </div>
                                    <div class="switch SD7 invisible"/>
                                    <div class="SD7-text text invisible">
                                        SD07  WR
                                    </div>
                                    <div class="switch SD6 invisible"/>
                                    <div class="SD6-text text invisible">
                                        06  RD
                                    </div>
                                    <div class="switch SD5 invisible"/>
                                    <div class="SD5-text text invisible">
                                        05  IOM
                                    </div>
                                    <div class="switch SD4 invisible"/>
                                    <div class="SD4-text text invisible">
                                        04
                                    </div>
                                    <div class="switch SD3 invisible"/>
                                    <div class="SD3-text text invisible">
                                        03
                                    </div>
                                    <div class="switch SD2 invisible"/>
                                    <div class="SD2-text text invisible">
                                        02
                                    </div>
                                    <div class="switch SD1 invisible"/>
                                    <div class="SD1-text text invisible">
                                        01  LDAR
                                    </div>
                                    <div class="switch SD0 invisible"/>
                                    <div class="SD0-text text invisible">
                                        SD00 LOR
                                    </div>
                                    <div class="clr-white-btn white-btn" @click="clear()"/>
                                    <div class="white-btn-text text">
                                        CLR
                                    </div>
                                    <div class="fourNeedle-k7k6 fourNeedle invisible"/>
                                    <div class="fourNeedle-k7k6-text text invisible">
                                        K7--K6
                                    </div>
                                    <div class="fourNeedle-k5k4 fourNeedle invisible"/>
                                    <div class="fourNeedle-k5k4-text text invisible">
                                        K5--K4
                                    </div>
                                    <div class="fourNeedle-k3k2 fourNeedle invisible"/>
                                    <div class="fourNeedle-k3k2-text text invisible">
                                        K3--K0
                                    </div>
                                    <div class="eightNeedle-SD27 eightNeedle" @click="buttonClick('SD27-SD20')" id="SD27-SD20"/>
                                    <div class="eightNeedle-SD27-text text">
                                        SD27-SD20
                                    </div>
                                    <div class="twoNeedle-alu twoNeedle" @click="buttonClick('conALU_B')" id="conALU_B"/>
                                    <div class="twoNeedle-alu-text text">
                                        ALU_B
                                    </div>
                                    <div class="fourNeedle-s3s0 fourNeedle" @click="buttonClick('conS3-S0')" id="conS3-S0"/>
                                    <div class="fourNeedle-s3s0-text text">
                                        S3-S0
                                    </div>

                                    <div class="twoNeedle-cn twoNeedle" @click="buttonClick('conCn')" id="conCn"/>

                                    <div class="twoNeedle-cn-text text">
                                        Cn
                                    </div>
                                    <div class="fourNeedle-ldaldb fourNeedle" @click="buttonClick('conLDA-LDB')" id="conLDA-LDB"/>
                                    <div class="fourNeedle-ldaldb-text text">
                                        LDA--LDB
                                    </div>
                                    <div class="eightNeedle-SD17 eightNeedle invisible"/>
                                    <div class="eightNeedle-SD17-text text invisible">
                                        SD17-SD10
                                    </div>
                                    <div class="fourNeedle-iom fourNeedle invisible"/>
                                    <div class="fourNeedle-iom-text text invisible">
                                        WR-RD-IOM
                                    </div>
                                    <div class="twoNeedle-ldar twoNeedle invisible"/>
                                    <div class="twoNeedle-ldar-text text invisible">
                                        LDAR
                                    </div>
                                    <div class="twoNeedle-ior twoNeedle invisible"/>
                                    <div class="twoNeedle-ior-text text invisible">
                                        IOR
                                    </div>
                                    <div class="eightNeedle-SD07 eightNeedle invisible"/>
                                    <div class="eightNeedle-SD07-text text invisible">
                                        SD07-SD00
                                    </div>
                                </div>
                            </div>
                        </vue-draggable-resizable>
                        <div class="in-unit box">
                            <div class="wrapper">
                                <div class="in-unit-text text">
                                    IN单元
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <card class="card-menu" v-show="!centerDialogVisible">
                <div class="time-control-unit box select-background"/>
                <div class="alu-reg-unit box select-background"/>
                <div class="cpu-bus box select-background"/>
                <div class="con-unit box select-background"/>
            </card>
        </i-col>
    </row>
</template>
<script>
    const axios = require("axios");
    import html2canvas from 'html2canvas'
    import VueDraggableResizable from "vue-draggable-resizable";
    import { SVG } from '@svgdotjs/svg.js'
    import { screenChange } from "../scripts/screen.js"
    import { watermark, deleteMark } from "../scripts/waterMark.js"
    import { VueCropper } from "vue-cropper" 
    export default {
        components: {
            VueCropper,
        },
        data() {
            return{
                option: {              
                    img: '', //等待裁剪图片路径
                    size: 1, // 裁剪生成图片的质量
                    outputType: "jpeg",//截图格式
                    full: false,      // 输出原图比例截图 props名full
                    fixedBox: false,  // 固定截图框大小 不允许改变
                    canMove: true, // 上传图片是否可以移动
                    canMoveBox: true, // 截图框能否拖动
                    autoCrop: true,   // 是否默认生成截图框
                    original: false,// 上传图片按照原始比例渲染
                    // 只有自动截图开启 宽度高度才生效
                    autoCropWidth: 345,
                    autoCropHeight: 259,
                    centerBox: false,  // 是否按照设备的dpr 输出等比例图片
                    high: true,
                },
                centerDialogVisible:false,
                imgURL:'', //裁剪后图片资源路径
                menuShow: true,
                show: false,
                count: 0,
                x1:0,
                x2:0,
                y1:0,
                y2:0,
                isStart: false,
                tableShow: true,
                tableCol:[
                    {
                        type: 'index',
                        width: 60,
                        align: 'center',
                        fixed: "left"
                    },
                    {
                        title: 'A',
                        key: 'A'
                    },
                    {
                        title: 'B',
                        key: 'B'
                    },
                    {
                        title: '校验',
                        slot: 'Check',
                        fixed: "right"
                    }
                ],
                tableData:[
                ],
                lineList: [
                     "aluALU_BconALU_B",
                     "aluS3-S0conS3-S0",
                     "aluCnconCn",
                     "conLDA-LDBaluLDA-LDB",
                     "SD27-SD20aluIN7-IN0",
                     "cpuD7-D0outD7-D0",
                     "cpuD7-D0aluD7-D0",    
                     "clk030HZ",
                     "time-con-T4-T1con-bus-T4-T1"
                 ],
                temp:[], //用来清除上一次的连线
                totalRow: [],
                allLineTemp: [], //用来删除所有连线的draw
                FZ:0,
                FC:0,
                lineRight: false,  //布线检查，true表示布线正确
                start:false,      //true表示开始试验
                lda:0,
                ldb:0,
                conCn:0,
                alu_b:0,
                S3_0_Flag:[0,0,0,0], //运算指令
                memA:[0,0,0,0,0,0,0,0],  //暂存器A
                memB:[0,0,0,0,0,0,0,0],  //暂存器B
                F:[0,0,0,0,0,0,0,0],
                resize: [

                ],
                exams: []
            }
        },
        mounted() {
            screenChange(document,window);
            let obj = [
                this.$refs.timeControl,
                this.$refs.aluReg,
                this.$refs.cpuBus,
                this.$refs.systemBus,
                this.$refs.conUnit,
            ]
            this.resize = obj;
            this.test3();
        },
        methods: {
            test() {
                axios.post("/compuOrgService/api/exammanage/generateExam", {flag: "001"})
                .then(response =>{
                    this.exams = response.data.data;
                    this.test2();
                })
            },
            test3() {
                axios.post("/compuOrgService/api/exammanage/getStudentExam", {expID: "001" , studentId: "002"})
                .then(response =>{
                    console.log(response);
                })
            },
            test2() {
                /* let i =0;
                let exams = [];
                for(;i<this.exams.length;i++) {
                    let temp = {"examID": this.exams[i].examID, "answer": "测试"};
                    exams.push(temp);
                }
                console.log(exams); */
               axios.post("/compuOrgService/api/exammanage/uploadTest", {expID: "001" , studentId: "002", score: 97})
                .then(response =>{
                    console.log(response);
                })
            },
            showImg() {
                this.show = !this.show;
            },
            handleTableWheel(i, event) {
                let obj = this.resize[i];
                return this.tableZoom(obj, event);
            },
            tableZoom(obj, event) {
                // 一开始默认是100%
                let zoom = parseInt(obj.style.zoom, 10) || 100;
                // 滚轮滚一下wheelDelta的值增加或减少120
                zoom += event.wheelDelta / 120;
                if (zoom > 0) {
                    obj.style.zoom = zoom + "%";
                }
                return false;
            },
            backWords() {
                this.menuShow = !this.menuShow;
                if(this.temp.length!=0) {
                    var draw2 = this.temp.pop();
                    draw2.remove();
                }
            },
            clear () {
                let temp = [0,0,0,0,0,0,0,0]
                this.memA = temp;
                this.memB = temp;
                this.F = temp;
                this.lda = 0;
                this.ldb = 0;
                this.conCn = 0;
                this.FZ = 0;
                this.FC = 0;
                this.S3_0_Flag = [0,0,0,0];
                var bulbelist=this.$refs.A7.parentElement.children;
                var numlist=this.$refs.num7.parentElement.children;
                 let bubleArr = Array.from(bulbelist).splice(0,16);
                /*获取lda的灯泡和ldb的灯泡 */
                let ldaBuble = bubleArr.splice(0,8)
                let ldbBuble = bubleArr.splice(0,8)
                let index = 0;
                let redOff = "url(\""+require("../assets/red-bulbe.png")+"\")";
                let greenOff = "url(\""+require("../assets/green-buble.png")+"\")";
                let switchArr1 = Array.from(numlist).filter((item,index)=>{if(index%2!=0) return item})
                let switchOff = "url(\""+require("../assets/off.png")+"\")";
                let switchArr = switchArr1.splice(0,8);
                for(;index<8;index++) {
                    ldaBuble[index].style.backgroundImage = redOff;
                    ldbBuble[index].style.backgroundImage = greenOff;
                    switchArr[index].style.backgroundImage = switchOff;
                }
            },
            changeImage(e) {
                let bulb = "url(\""+require("../assets/bulb.png")+"\")";
                let lightOn = "url(\""+require("../assets/bulb-green.png")+"\")"
                e.srcElement.style.backgroundImage 
                    = e.srcElement.style.backgroundImage ===  bulb|| e.srcElement.style.backgroundImage === "" ? lightOn : bulb;
            },
            changeSwitch(e){
                let off = "url(\""+require("../assets/off.png")+"\")";
                let on = "url(\""+require("../assets/on.png")+"\")";
                e.srcElement.style.backgroundImage = 
                    e.srcElement.style.backgroundImage === off || e.srcElement.style.backgroundImage === "" ? on : off;
            },

            t4Option(){               

                var numlist=this.$refs.num7.parentElement.children;
                var bulbelist=this.$refs.A7.parentElement.children;
                let switchOn = "url(\""+require("../assets/on.png")+"\")";
                let switchOff = "url(\""+require("../assets/off.png")+"\")";
                let redLight ="url(\""+require("../assets/red.png")+"\")";
                let redOff = "url(\""+require("../assets/red-bulbe.png")+"\")";
                let greenLight ="url(\""+require("../assets/green.png")+"\")";
                let greenOff = "url(\""+require("../assets/green-buble.png")+"\")";
                let ldaImage = this.$refs.lda.style.backgroundImage;
                let ldbImage = this.$refs.ldb.style.backgroundImage;
                var isLda = false;
                /*获取0-15的所有buble */
                let bubleArr = Array.from(bulbelist).splice(0,16);
                /*获取lda的灯泡和ldb的灯泡 */
                let ldaBuble = bubleArr.splice(0,8)
                let ldbBuble = bubleArr.splice(0,8)
                /*获取0-7的所有开关 */
                let switchArr1 = Array.from(numlist).filter((item,index)=>{if(index%2!=0) return item})
                let switchArr = switchArr1.splice(0,8);
                /*通过filter找到亮灯的开关，然后找到相应的灯泡 */
                if(ldaImage===switchOn&&(ldbImage==switchOff||ldbImage==="")) isLda=!isLda;
                else if(ldbImage===switchOn&&(ldaImage==switchOff||ldaImage==="")) isLda=false;
                else {
                    alert("请先打开LDA或LDB");
                    return;
                }
                if(isLda){
                    this.lda=1;
                    this.ldb=0;
                    let temp = [0,0,0,0,0,0,0,0]
                    switchArr.forEach((v,index)=>{
                        if(v.style.backgroundImage === switchOn) {
                            ldaBuble[7-index].style.backgroundImage = redLight;
                            temp[7-index]=1;
                        } else{
                            ldaBuble[7-index].style.backgroundImage = redOff;
                            temp[7-index]=0;
                        }
                    })
                    this.memA = temp;
                } else{
                    this.lda=0;
                    this.ldb=1;
                    let temp = [0,0,0,0,0,0,0,0]
                    switchArr.forEach((v,index)=>{
                        if(v.style.backgroundImage === switchOn) {
                            ldbBuble[7-index].style.backgroundImage = greenLight;
                            temp[7-index]=1;
                        } else{
                            ldbBuble[7-index].style.backgroundImage = greenOff;
                            temp[7-index]=0;
                        }
                    })
                    this.memB = temp;
                }
            },
            buttonClick(name) {
                if(this.count%2==0) {
                    let x = {A: name, B: ""}
                    let x1 = {A: name, B: ""}
                    this.tableData.push(x);
                    this.totalRow.push(x1);
                }
                else {
                   var y = Math.floor(this.count/2)
                    this.tableData[y].B = name;
                    this.totalRow[y].B = name;
                }
                this.count++;
            },
            exist(row) {
                if(row.A.indexOf("cpuD7-D0")!==-1) row.A ='cpuD7-D0';
                if(row.B.indexOf("cpuD7-D0")!==-1) row.B ='cpuD7-D0';
                let ele1 = row.A+row.B;
                let ele2 = row.B+row.A;
                if(this.lineList.indexOf(ele1)>-1||this.lineList.indexOf(ele2)>-1) return true;
                return false;
            },
            /*布线检查函数 */
            lineCheck(){
               if (this.tableData.length>9)
                {
                   this.$Message.warning({
                        content: "布线多余，请重新布线"
                    })
                    return;
                }
                if (this.tableData.length<9)
                {
                   this.$Message.warning({
                        content: "布线缺失，请检查布线"
                    })
                    return;
                }
                 /*实验一连线情况*/
                 var lineList = [];
                /* this.tableData.forEach((element)=>{
                     /*检查布线表中连线是否正确*/                   
                    /* this.lineList.forEach((v)=>{
                        if(element.A.indexOf("cpuD7-D0")!==-1) element.A ='cpuD7-D0';
                        if(element.B.indexOf("cpuD7-D0")!==-1) element.B ='cpuD7-D0';
                        if ((element.A+element.B)===v||v===(element.B+element.A)){
                            lineList.push(v);
                        }
                    })
                 }) */
                 let i = 0;
                 for(;i<this.tableData.length;i++) {
                     let element = this.tableData[i];
                     let v = this.lineList[i];
                     if(element.A.indexOf("cpuD7-D0")!==-1) element.A ='cpuD7-D0';
                     if(element.B.indexOf("cpuD7-D0")!==-1) element.B ='cpuD7-D0';
                     if ((element.A+element.B)===v||v===(element.B+element.A)){
                        lineList.push(v);
                     }
                 }
                 /*布线数正确 */
                 // let str1 = lineList.sort().toString();
                 // let str2 = this.lineList.sort().toString();
                 let str1 = lineList.toString();
                 let str2 = this.lineList.toString();
                 if (str1 === str2){
                     this.$Message.success({
                         content: "布线正确! 请调整kk1-kk3准备开始实验"
                     });
                     this.lineRight=true;
                     this.tableShow = false;
                 }
                 else{
                     this.$Message.warning({
                        content: "布线错误！请检查布线，并且注意连接顺序"
                    })
                 }
            },
            /**逻辑运算 */
            _0000_X(){
                //F=A
                let temp = [];
                this.memA.forEach((v,index)=>{
                    temp[index]=v;
                })
               this.F = temp;
            },
            _0001_X(){
                //F=B
                let temp = [];
                 this.memB.forEach((v,index)=>{
                    temp[index]=v;
                })
                this.F = temp;
            },
            _0010_X(){
                //F=A与B
                let temp = []
                 this.memA.forEach((v,index)=>{
                        temp[index]= this.memB[index] && v;
                    })
                    this.F = temp;
                    let zero = [0,0,0,0,0,0,0,0]
                    this.FZ= this.F.toString()=== zero.toString() ?1:0;
            },
            _0011_X(){
                //F=A或B
                let temp = []
                 this.memA.forEach((v,index)=>{
                        temp[index]= this.memB[index] || v;
                    })
                    this.F = temp;
                    let zero = [0,0,0,0,0,0,0,0]
                    this.FZ= this.F.toString()=== zero.toString() ?1:0;
            },
            _0100_X(){
                //F=/A
                let temp = []
                this.memA.forEach((v,index)=>{
                        temp[index]= v === 0 ? 1 : 0;
                    })
                this.F = temp;
                //同步暂存器A的灯泡
                this.memA = temp;
                let i=0;
                let redLight ="url(\""+require("../assets/red.png")+"\")";
                let redOff = "url(\""+require("../assets/red-bulbe.png")+"\")";
                var bulbelist=this.$refs.A7.parentElement.children;
                let bubleArr = Array.from(bulbelist).splice(0,16);
                let ldaBuble = bubleArr.splice(0,8);
                for(;i<8;i++) {
                    if (this.memA[i]===1) ldaBuble[i].style.backgroundImage = redLight;
                    else ldaBuble[i].style.backgroundImage = redOff;
                }

                let zero = [0,0,0,0,0,0,0,0]
                this.FZ= this.F.toString()=== zero.toString() ?1:0;
            },
            /**移位运算 */
            _0101_X(){
                //F=A 不带进位循环右移 B（取低 3 位）位
                let count=this.memB[7]+this.memB[6]*2+this.memB[5]*4;
                let temp = [0,0,0,0,0,0,0,0];
                let index = 0;
                for(;index<8;index++) {
                    let v=this.memA[(index-count+8)%8];
                    temp[index] = v;
                }                  
                this.F = temp;
                this.memA = temp;

                let i=0;
                let redLight ="url(\""+require("../assets/red.png")+"\")";
                let redOff = "url(\""+require("../assets/red-bulbe.png")+"\")";
                var bulbelist=this.$refs.A7.parentElement.children;
                let bubleArr = Array.from(bulbelist).splice(0,16);
                let ldaBuble = bubleArr.splice(0,8);
                for(;i<8;i++) {
                    if (this.memA[i]===1) ldaBuble[i].style.backgroundImage = redLight;
                    else ldaBuble[i].style.backgroundImage = redOff;
                }

                let zero = [0,0,0,0,0,0,0,0]
                this.FZ= this.F.toString()=== zero.toString() ?1:0;
            },
            _0110_0(){
                //F=A 逻辑右移一位
                let temp = [0,0,0,0,0,0,0,0];
                let index = 0;
                for(;index<8;index++) {
                    if (index===0){
                        temp[0] = 0;
                    }
                    else{
                        temp[index]=this.memA[index-1];
                    }
                }
                this.F = temp;
                this.memA = temp;

                let i=0;
                let redLight ="url(\""+require("../assets/red.png")+"\")";
                let redOff = "url(\""+require("../assets/red-bulbe.png")+"\")";
                var bulbelist=this.$refs.A7.parentElement.children;
                let bubleArr = Array.from(bulbelist).splice(0,16);
                let ldaBuble = bubleArr.splice(0,8);
                for(;i<8;i++) {
                    if (this.memA[i]===1) ldaBuble[i].style.backgroundImage = redLight;
                    else ldaBuble[i].style.backgroundImage = redOff;
                }

                let zero = [0,0,0,0,0,0,0,0]
                this.FZ= this.F.toString()=== zero.toString() ?1:0;
            },
            _0110_1(){
                //F=A 带进位循环右移一位
                let temp = [0,0,0,0,0,0,0,0];
                let index = 0;
                for(;index<8;index++) {
                    if (index===0){
                        temp[0]=this.FC;
                        this.FC=this.memA[7];
                    }
                    else{
                        temp[index]=this.memA[index-1];
                    }
                }
                this.F = temp;
                this.memA = temp;

                let i=0;
                let redLight ="url(\""+require("../assets/red.png")+"\")";
                let redOff = "url(\""+require("../assets/red-bulbe.png")+"\")";
                var bulbelist=this.$refs.A7.parentElement.children;
                let bubleArr = Array.from(bulbelist).splice(0,16);
                let ldaBuble = bubleArr.splice(0,8);
                for(;i<8;i++) {
                    if (this.memA[i]===1) ldaBuble[i].style.backgroundImage = redLight;
                    else ldaBuble[i].style.backgroundImage = redOff;
                }

                let zero = [0,0,0,0,0,0,0,0]
                this.FZ= this.F.toString()=== zero.toString() ?1:0;
            },
            _0111_0(){
                //F=A 逻辑左移一位
                let temp = [0,0,0,0,0,0,0,0];
                let index = 0;
                for(;index<8;index++) {
                    if(index==7) temp[7] = 0;
                    else temp[index] = this.memA[index+1];
                }
                this.F = temp;
                this.memA = temp;

                let i=0;
                let redLight ="url(\""+require("../assets/red.png")+"\")";
                let redOff = "url(\""+require("../assets/red-bulbe.png")+"\")";
                var bulbelist=this.$refs.A7.parentElement.children;
                let bubleArr = Array.from(bulbelist).splice(0,16);
                let ldaBuble = bubleArr.splice(0,8);
                for(;i<8;i++) {
                    if (this.memA[i]===1) ldaBuble[i].style.backgroundImage = redLight;
                    else ldaBuble[i].style.backgroundImage = redOff;
                }

                let zero = [0,0,0,0,0,0,0,0]
                this.FZ= this.F.toString()=== zero.toString() ?1:0;
            },
            _0111_1(){
                //F=A 带进位循环左移一位
                let temp = [0,0,0,0,0,0,0,0];
                let index = 0;
                for(;index<8;index++) {
                    if (index==7) {
                        temp[7] = this.FC;
                        this.FC=this.memA[0];
                    }
                    else {
                        temp[index] = this.memA[index+1];
                    }
                }
                this.F = temp;
                this.memA = temp;

                let i=0;
                let redLight ="url(\""+require("../assets/red.png")+"\")";
                let redOff = "url(\""+require("../assets/red-bulbe.png")+"\")";
                var bulbelist=this.$refs.A7.parentElement.children;
                let bubleArr = Array.from(bulbelist).splice(0,16);
                let ldaBuble = bubleArr.splice(0,8);
                for(;i<8;i++) {
                    if (this.memA[i]===1) ldaBuble[i].style.backgroundImage = redLight;
                    else ldaBuble[i].style.backgroundImage = redOff;
                }

                let zero = [0,0,0,0,0,0,0,0]
                this.FZ= this.F.toString()=== zero.toString() ?1:0;
            },
            /**算术运算 */
            _1000_X(Cn){
                //置 FC=CN
                this.FC=Cn;
            },
            _1001_X(){
                //F=A 加 B
                let flag=0;
                let index = 0;
                let temp = [0,0,0,0,0,0,0,0];
                for(;index<8;index++) {           
                    temp[7-index]=this.memA[7-index]+this.memB[7-index]+flag;
                    if (temp[7-index]>=2){
                        temp[7-index]-=2;
                        if (index===7){
                            this.FC=1;
                        }
                        flag=1;  //有进位1
                    }
                    else{
                        flag=0;
                    }                
                }
                this.F = temp;
                let zero = [0,0,0,0,0,0,0,0]
                this.FZ= this.F.toString()=== zero.toString() ?1:0;
            },
            _1010_X(){
                //F=A 加 B 加 FC
                let flag=0;
                let index = 0;
                let temp = [0,0,0,0,0,0,0,0];
                for(;index<8;index++) {
                    temp[7-index] = this.memA[7-index] + this.memB[7-index] +flag;
                     if (temp[7-index]>=2){
                        temp[7-index]-=2;
                        if (index===7){
                            this.FC=1;
                        }
                        flag=1;  //有进位1
                    }
                    else{
                        flag=0;
                    }
                }
                this.F = temp;

                // 在A+B的基础上加FC
                let temp2 = [0,0,0,0,0,0,0,0];
                index = 0;
                flag = 0;
                for(;index<8;index++) {
                    if(index==0)
                    {
                        temp2[7-index] = this.F[7-index] +this.FC;
                    }
                    else {
                        temp2[7-index] = this.F[7-index] +flag;
                    }
                     if (temp2[7-index]>=2){
                        temp2[7-index]-=2;
                        if (index===7){
                            this.FC=1;
                        }
                        flag=1;  //有进位1
                    }
                    else{
                        flag=0;
                    }
                }
                this.F = temp2

                let zero = [0,0,0,0,0,0,0,0]
                this.FZ= this.F.toString()=== zero.toString() ?1:0;
            },
            _1011_X(){
                //F=A 减 B
                let flag=0;
                let index = 0;
                let temp = [0,0,0,0,0,0,0,0];
                for(;index<8;index++) {
                    temp[7-index] = this.memA[7-index] -this.memB[7-index] -flag;
                    if (temp[7-index]<0){
                        temp[7-index]+=2;
                        if (index===7){
                            this.FC=1;
                        }
                        flag=1;  //有借位
                    }
                    else {
                        flag = 0;
                    }
                }
                this.F = temp;
                let zero = [0,0,0,0,0,0,0,0]
                this.FZ= this.F.toString()=== zero.toString() ?1:0;
            },
            _1100_X(){
                //F=A 减 1
                let flag=0;
                let index = 0;
                let temp = [0,0,0,0,0,0,0,0]
                for(;index<8;index++) {
                    if (index===0)
                    temp[7-index] = this.memA[7-index] -1 - flag;
                    else temp[7-index] = this.memA[7-index] - flag;
                    if (temp[7-index]<0){
                        temp[7-index]+=2;
                        if (index===7){
                            this.FC=1;
                        }
                        flag=1;  //有借位
                    }
                    else flag=0;
                }
                this.F = temp;
                this.memA = this.F;
                let zero = [0,0,0,0,0,0,0,0]
                this.FZ= this.F.toString()=== zero.toString() ?1:0;
            },
            _1101_X(){
                //F=A 加 1
                let flag=0;
                let index = 0;
                let temp = [0,0,0,0,0,0,0,0]
                for(;index<8;index++) {
                    if(index===0)
                    temp[7-index] = this.memA[7-index]+1+flag;
                    else temp[7-index] = this.memA[7-index]+flag;
                    if (temp[7-index]>=2){
                        temp[7-index]-=2;
                        if (index===7){
                            this.FC=1;
                        }
                        flag=1;  //有进位1
                    }
                    else{
                        flag=0;
                    }
                }
                this.F = temp;
                this.memA = this.F;
                let zero = [0,0,0,0,0,0,0,0]
                this.FZ= this.F.toString()=== zero.toString() ?1:0;
            },
            startExeperiment(){
                if (!this.lineRight)
                {
                    this.$Message.warning({
                        content: '请先布线'
                    })
                    return;
                }
                //清空所有连线，只有点击显示所有连线才会显示连线
                if(this.temp.length!=0) {
                    var draw2 = this.temp.pop();
                    draw2.remove();
                }

                let timeStartLight = "url(\""+require("../assets/bulb-green.png")+"\")";
                let kk1Start = document.getElementById('kk1Start').style.backgroundImage;
                let kk3Start = document.getElementById('kk3Start').style.backgroundImage;
                let kk2SingleBeat = document.getElementById('singleBeat').style.backgroundImage;
                if (kk1Start!=timeStartLight || kk2SingleBeat!=timeStartLight || kk3Start!=timeStartLight) {
                    this.$Message.warning({
                        content: '未打开时序控制台开关'
                    })
                    return;
                }
                this.start=true;
                let switchOn = "url(\""+require("../assets/on.png")+"\")";
                let redLight ="url(\""+require("../assets/red.png")+"\")";
                let redOff = "url(\""+require("../assets/red-bulbe.png")+"\")";
                let greenLight ="url(\""+require("../assets/green.png")+"\")";
                let greenOff = "url(\""+require("../assets/green-buble.png")+"\")";
                //获取系统总线区灯泡数组
                let buble_F_list=document.getElementsByName('buble_F');
                //获取S3-S0开关
                var SD3_0=document.getElementsByName('SD03-00');
                //置Cn
                this.conCn=document.getElementById('SD_Cn').style.backgroundImage===switchOn?1:0 ;
                //置ALU_B
                this.alu_b=document.getElementById('ALU_B').style.backgroundImage===switchOn?1:0 ;
                /*根据SD03-00置相应的功能号*/
                SD3_0.forEach((element,index)=>{
                    if (element.style.backgroundImage===switchOn){
                        this.S3_0_Flag[index]=1;
                    }
                    else{
                        this.S3_0_Flag[index]=0;
                    }
                });
                let flag=this.S3_0_Flag.toString().replace(",","").replace(",","").replace(",","").replace(",","");
                console.log("指令： "+flag);
                switch(flag){
                    case "0000": this._0000_X();break;
                    case "0001": this._0001_X();break;
                    case "0010": this._0010_X();break;
                    case "0011": this._0011_X();break;
                    case "0100": this._0100_X();break;
                    case "0101": this._0101_X();break;
                    case "0110": { 
                        if (this.conCn===0) 
                            this._0110_0();
                        else 
                            this._0110_1();    
                        break;
                        }
                    case "0111": { 
                        if (this.conCn===0) 
                            this._0111_0();
                        else 
                            this._0111_1();    
                        break;
                        }
                    case "1000": this._1000_X();break;
                    case "1001": this._1001_X();break;
                    case "1010": this._1010_X();break;
                    case "1011": this._1011_X();break;
                    case "1100": this._1100_X();break;
                    case "1101": this._1101_X();break;           
                }
                //将结果显示在系统总线的灯泡中
               this.F.forEach((v,index)=>{
                    console.log(index+" : "+v);
                    if (index<4){
                        if (v===1){
                            buble_F_list[index].style.backgroundImage=redLight;
                        }
                        else{
                            buble_F_list[index].style.backgroundImage=redOff; 
                        } 
                    }
                    else{
                        if (v===1){
                            buble_F_list[index].style.backgroundImage=greenLight;
                        }
                        else{
                            buble_F_list[index].style.backgroundImage=greenOff; 
                        } 
                    }
                })
            },

            remove() {
                this.tableData.pop();
                this.count = this.count-2;
            },
            showAllLine() {
                //清理单独连线
                if(this.temp.length!=0) {
                    var draw2 = this.temp.pop();
                    draw2.remove();
                }
                //清除所有连线的draw
                if(this.allLineTemp.length!=0) {
                    var draw3 = this.allLineTemp.pop();
                    draw3.remove();
                    return;
                }
                console.log(this.totalRow)
                var draw = SVG().addTo('#svg-container').size('100%', '100%')
                let i=0;
                for(;i<this.totalRow.length;i++) {

                   this.drawLine(this.totalRow[i], draw);
                }
                this.allLineTemp.push(draw);
            },
            drawLine (currentRow, draw) {
                 let A   = currentRow.A;
                let B = currentRow.B;
                /*获取 svg-container相对窗口左上角的位置 */
                let x = document.getElementById("svg-container").getBoundingClientRect().left;
                let y = document.getElementById("svg-container").getBoundingClientRect().top;
                /*获取A相对窗口左上角位置 */
                var x1 = document.getElementById(A).getBoundingClientRect().left;
                var y1 = document.getElementById(A).getBoundingClientRect().top;
                /*获取B相对窗口左上角位置 */
                var x2 = document.getElementById(B).getBoundingClientRect().left;
                var y2 = document.getElementById(B).getBoundingClientRect().top;
                /*获得A,B相对 svg-container的位置 */
                let fx1 = x1-x;
                let fy1 = y1-y;
                let fx2 = x2-x;
                let fy2 = y2-y;
                var line = draw.line(fx1,fy1+10,fx2,fy2+10).stroke({ width: 1, color: "#fff" })
                var line2 = draw.line(fx1,fy1+10,fx1+10,fy1+10).stroke({ width: 1, color: "#fff" })
                var line3 = draw.line(fx2,fy2+10,fx2+10,fy2+10).stroke({ width: 1, color: "#fff" })
                console.log(line);
                console.log(line2);
                console.log(line3);
            },
            showLine(currentRow) {
                /*每次清除上一次的连线 */
               if(this.temp.length!=0) {
                    var draw2 = this.temp.pop();
                    draw2.remove();
                }
                /*将svg画板加入到div中 */
                var draw = SVG().addTo('#svg-container').size('100%', '100%')
                this.drawLine(currentRow, draw)
                this.temp.push(draw)
            },
            //截图方法
            getImg(){
                //获取水印id，方便一会删除
                var mark_div=watermark();
               
                //html2canvas方法获取浏览器截图
                html2canvas(
                //获取截图内容的元素，svg-container即整个面板，若想获得特定截图，可将节点id传入    
                document.getElementById('svg-container'),  
                {
                   backgroundColor:'#244475',//画出来的图片有白色的边框,不要可设置背景为透明色（null）
                   useCORS: true,//支持图片跨域
                   scale:2,//设置放大的倍数
                }
                ).then(canvas => {    
       
                let url=canvas.toDataURL('image/jpeg');// toDataURL :图片格式转成 base64
                //this.imgURL = url;
                this.option.img=url;
                this.centerDialogVisible=true;   
                })
                // 开始截图
                this.$refs.cropper.startCrop();
                //删除水印
                deleteMark(mark_div);
            }, 
            downImg(){
                // 完成截图
                this.$refs.cropper.stopCrop();
                /*使用a标签下载图片*/
                let a = document.createElement('a');
                a.download = '截图'; //下载名
                this.$refs.cropper.getCropData((data) => {
                    this.imgURL = data
                    a.href = data
                    a.click()
                }) 
                this.centerDialogVisible=false;
            },
            //取消截图
            cancel(){
                this.centerDialogVisible=false;
            } 
        }
    }
</script>
<style>
@import '../static/background.css';
@import '../static/con-in.css';
@import '../static/cpld-power-sys-unit.css';
@import '../static/cpu.css';
@import '../static/mm-io.css';
@import '../static/system-bus.css';
@import '../static/time-control+expand.css';
@import '../elements/public-elements.css';
@import '../elements/system-bus.css';
@import '../elements/time-control.css';
@import '../elements/alu.css';
@import '../elements/con2.css';
@import '../elements/cpu.css';

@import '../elements/result.css';

.svg-style{
    position:absolute;
    background:transparent;
    width:24rem;
    height:14rem;
    left:4.8rem;
    top:1.26rem;
    z-index: 1;
}
</style>
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
                </card>
            </div>
        </i-col>
        <i-col span="18">
            <div class="svg-style" id="svg-container">
                    <div class="power-source box">
                        <div class="wrapper">

                            <div class="switch power-switch" @click="powerOnAction" id="power" />

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
                    <div class="time-control-unit box">
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
                                        <DropdownItem style="width:0.8rem" @click.native="t3Option">T3</DropdownItem>
                                        <DropdownItem style="width:0.8rem">T4</DropdownItem>


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

       
                            <div class="singleStep bulb" @click="changeImage" id="singleStep"/>

                            <div class="singleShot bulb" @click="changeImage" id="singleBeat"/>
                            <div class="singleShot-text text">
                                单拍
                            </div>
                     
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
                    <div class="alu-reg-unit box">
                        <div class="wrapper">
                            <div class="alu-reg-unit-text text">
                                ALU及REG单元
                            </div>
                        </div>
                    </div>
                    <div class="cpu-bus box">
                        <div class="wrapper">
                            <div class="cpu-eightNeedle-1 eightNeedle2" @click="buttonClick('cpuD7-D0')" id="cpuD7-D0-1"/>
                            <div class="cpu-eightNeedle-2 eightNeedle2" @click="buttonClick('cpuD7-D0')" id="cpuD7-D0-2"/>
                            <div class="cpu-eightNeedle-3 eightNeedle2" @click="buttonClick('cpuD7-D0')" id="cpuD7-D0-3"/>
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
                    <div class="pc-ar box">
                        <div class="wrapper">
                            <div class="pc-ar-text-1 text">
                                PC及AR
                            </div>
                            <div class="pc-ar-text-2 text">
                                单元
                            </div>
                            <div class="pc-ar-eightNeedle eightNeedle" @click="buttonClick('pc-ar-D7-D0')" id="pc-ar-D7-D0"/>
                            <div class="pc-ar-eightNeedle-D7-text text">D7</div>
                            <div class="pc-ar-eightNeedle-D0-text text">D0</div>
                            <div class="pc-ar-twoNeedle-1 twoNeedle" @click="buttonClick('pc-ar-LDAR')" id="pc-ar-LDAR"/>
                            <div class="pc-ar-twoNeedle-LDAR-text text">LDAR</div>
                            <div class="pc-ar-twoNeedle-2 twoNeedle"/>
                            <div class="pc-ar-twoNeedle-LDPC-text text">LDPC</div>
                            <div class="pc-ar-twoNeedle-3 twoNeedle"/>
                            <div class="pc-ar-twoNeedle-PC_B-text text">PC_B</div>
                        </div>
                    </div>
                    <div class="system-bus-text text">
                        系统总线
                    </div>
                    <div class="system-bus box select-background">
                        <div class="wrapper">
                            <div class="system-T4-T1 fourNeedle"  @click=" buttonClick('con-bus-T4-T1')" id="con-bus-T4-T1"/>
                            <div class="system-T4-T1-text text">
                                T4 - T1
                            </div>
                            <div class="red-buble system-red-buble-1"/>
                            <div class="red-buble system-red-buble-2"/>
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

                            <div class="fourNeedle system-fourNeedle-xmwr" @click="buttonClick('con-bus-XMWR-XMRD')" id="con-bus-XMWR-XMRD"/>
                            <div class="text system-fourNeedle-xmwr-text">
                                XMWR-XMRD
                            </div>

                            <div class="twoNeedle system-twoNeedle-hold invisible"/>
                            <div class="text system-twoNeedle-hold-text invisible">
                                HOLD
                            </div>

                            <div class="fourNeedle system-fourNeedle-iom" @click="buttonClick('con-bus-WR-RD-IOM')" id="con-bus-WR-RD-IOM"/>
                            <div class="text system-fourNeedle-iom-text">
                                WR-RD-IOM
                            </div>
                            
                            <div class="eightNeedle2 system-eightNeedle-xd-1" @click="buttonClick('con-bus-XD7-XD0')" id="con-bus-XD7-XD0-1"/>
                            <div class="eightNeedle2 system-eightNeedle-xd-2" @click="buttonClick('con-bus-XD7-XD0')" id="con-bus-XD7-XD0-2"/>
                            <div class="text system-eightNeedle-xd7-text">
                                XD7
                            </div>
                            <div class="text system-eightNeedle-xd0-text">
                                XD0
                            </div>
                            
                            <!----->
                            <div class="red-buble system-red-buble-a7" name="buble_F"/>
                            <div class="red-buble system-red-buble-a6" name="buble_F"/>
                            <div class="red-buble system-red-buble-a5" name="buble_F"/>
                            <div class="red-buble system-red-buble-a4" name="buble_F"/>
                            <div class="text system-red-buble-text">
                                A7------A4 
                            </div>
                            <div class="green-buble system-green-buble-a3" name="buble_F"/>
                            <div class="green-buble system-green-buble-a2" name="buble_F"/>
                            <div class="green-buble system-green-buble-a1" name="buble_F"/>
                            <div class="green-buble system-green-buble-a0" name="buble_F"/>
                            <div class="text system-green-buble-text">
                                A3------A0 
                            </div>
                            <!---->

                            <div class="text system-eightNeedle-xa7-text">
                                XA7
                            </div>
                            <div class="text system-eightNeedle-xa0-text">
                                XA0
                            </div>
                            <div class="eightNeedle2 system-eightNeedle-xa" @click="buttonClick('con-bus-XA7-XA0')" id="con-bus-XA7-XA0"></div>

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
                    <div class="mm-io-text text">
                        主存及外设
                    </div>
                    <div class="mm box">
                        <div class="wrapper">
                            <div class="mm-text text">
                                MEM单元
                            </div>
                            <div class="MEM-eightNeedle-1 eightNeedle" @click="buttonClick('MEM-unit-D7-D0')" id="MEM-unit-D7-D0"/>
                            <div class="MEM-eightNeedle-D7-text text">D7</div>
                            <div class="MEM-eightNeedle-D0-text text">D0</div>
                            <div class="MEM-eightNeedle-2 eightNeedle" @click="buttonClick('MEM-unit-A7-A0')" id="MEM-unit-A7-A0"/>
                            <div class="MEM-eightNeedle-A7-text text">A7</div>
                            <div class="MEM-eightNeedle-A0-text text">A0</div>
                            <div class="MEM-fourNeedle fourNeedle" @click="buttonClick('MEM-unit-WR-RD')" id="MEM-unit-WR-RD"/>
                            <div class="MEM-fourNeedle-WR-text text">WR</div>
                            <div class="MEM-fourNeedle-RD-text text">RD</div>
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
                    <div class="con-unit box">
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

                            <div class="switch SD7"  @click="changeSwitch" id="conWR_switch"/>
                            <div class="SD7-text text ">
                                SD07  WR
                            </div>
                            <div class="switch SD6"  @click="changeSwitch" id="conRD_switch"/>
                            <div class="SD6-text text ">
                                06  RD
                            </div>
                            <div class="switch SD5"  @click="changeSwitch" id="conIOM_switch"/>
                            <div class="SD5-text text ">
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

                            <div class="switch SD1 "  @click="changeSwitch" id="conLDAR_switch"/>
                            <div class="SD1-text text ">
                                01  LDAR
                            </div>
                            <div class="switch SD0 "  @click="changeSwitch" id="conIOR_switch"/>
                            <div class="SD0-text text ">
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
                            <div class="eightNeedle-SD27 eightNeedle invisible" id="SD27-SD20"/>
                            <div class="eightNeedle-SD27-text text invisible">
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
                            <div class="fourNeedle-iom fourNeedle" @click="buttonClick('con-unit-WR-RD-IOM')" id="con-unit-WR-RD-IOM"/>
                            <div class="fourNeedle-iom-text text">
                                WR-RD-IOM
                            </div>
                            <div class="twoNeedle-ldar twoNeedle" @click="buttonClick('con-unit-LDAR')" id="con-unit-LDAR"/>
                            <div class="twoNeedle-ldar-text text">
                                LDAR
                            </div>
                            <div class="twoNeedle-ior twoNeedle" @click="buttonClick('con-unit-IOR')" id="con-unit-IOR"/>
                            <div class="twoNeedle-ior-text text">
                                IOR
                            </div>
                            <div class="eightNeedle-SD07 eightNeedle invisible"/>
                            <div class="eightNeedle-SD07-text text invisible">
                                SD07-SD00
                            </div>
                        </div>
                    </div>
                    <div class="in-unit box">
                        <div class="wrapper">
                            <div class="in-unit-text text">
                                IN单元
                            </div>
                            <div class="in-unit-fourNeedle fourNeedle" @click="buttonClick('in-unit-IN_B-RD')" id="in-unit-IN_B-RD"/>
                            <div class="in-unit-fourNeedle-IN_B-RD-text text">IN_B RD</div>
                            <div class="in-unit-eightNeedle eightNeedle" @click="buttonClick('in-unit-D7-D0')" id="in-unit-D7-D0"/>
                            <div class="in-unit-eightNeedle-D7-text text">D7</div>
                            <div class="in-unit-eightNeedle-D0-text text">D0</div>
                            <div class="in-unit-D7-text text">D7</div>
                            <div class="in-unit-D4-text text">D4</div>
                            <div class="in-unit-D3-text text">D3</div>
                            <div class="in-unit-D0-text text">D0</div>

                            <div class="switch in-unit-D7" @click="changeSwitch" name="in-D7-D0"/>
                            <div class="switch in-unit-D6" @click="changeSwitch" name="in-D7-D0"/>
                            <div class="switch in-unit-D5" @click="changeSwitch" name="in-D7-D0"/>
                            <div class="switch in-unit-D4" @click="changeSwitch" name="in-D7-D0"/>
                            <div class="switch in-unit-D3" @click="changeSwitch" name="in-D7-D0"/>
                            <div class="switch in-unit-D2" @click="changeSwitch" name="in-D7-D0"/>
                            <div class="switch in-unit-D1" @click="changeSwitch" name="in-D7-D0"/>
                            <div class="switch in-unit-D0" @click="changeSwitch" name="in-D7-D0"/>

                        </div>
                    </div>
            </div>
            <card class="card-menu">
                <div class="time-control-unit box select-background"/>
                <div class="cpu-bus box select-background"/>
                <div class="mm box select-background"/>
                <div class="pc-ar box select-background"/>
                <div class="con-unit box select-background"/>
                <div class="in-unit box select-background"/>
            </card>
        </i-col>
    </row>
</template>
<script>
    import { SVG } from '@svgdotjs/svg.js'
    import { screenChange } from "../scripts/screen.js"
    export default {

        data() {
            return{
                menuShow: true,
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
                     "clk030HZ",
                     "time-con-T4-T1con-bus-T4-T1",
                     "con-bus-XD7-XD0MEM-unit-D7-D0",
                     "con-bus-XA7-XA0MEM-unit-A7-A0",
                     "con-bus-XMWR-XMRDMEM-unit-WR-RD",
                     "con-bus-WR-RD-IOMcon-unit-WR-RD-IOM",
                     "con-unit-IORin-unit-IN_B-RD",
                     "con-unit-LDARpc-ar-LDAR",
                     "cpuD7-D0pc-ar-D7-D0",
                     "cpuD7-D0in-unit-D7-D0",
                     "pc-ar-D7-D0in-unit-D7-D0"
                 ],
                temp:[], //用来清除上一次的连线
                totalRow: [],
                allLineTemp: [], //用来删除所有连线的draw

                // FZ:0,
                // FC:0,
                buttonRight:false, //时序开关按钮检查
                lineRight: false,  //布线检查，true表示布线正确
                start:false,      //true表示开始试验
                power:false,  //电源开关
                mem: [],  //存储器，下标代表地址（10进制），内容代表数据（二进制）
                is_address:false,
                is_data:false,
                address:0,
                // lda:0,
                // ldb:0,
                // conCn:0,
                // alu_b:0,
                // S3_0_Flag:[0,0,0,0], //运算指令
                // memA:[0,0,0,0,0,0,0,0],  //暂存器A
                // memB:[0,0,0,0,0,0,0,0],  //暂存器B
                // F:[0,0,0,0,0,0,0,0]

            }
        },
        mounted() {
            screenChange(document,window);
        },
        methods: {
            backWords() {
                this.menuShow = !this.menuShow;
                if(this.temp.length!=0) {
                    var draw2 = this.temp.pop();
                    draw2.remove();
                }
                this.$router.push({name:'exp_environment2'});
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
                let ele1 = row.A+row.B;
                let ele2 = row.B+row.A;
                //console.log('row.A: ' + row.A + ' row.B: ' + row.B + ' ele1: ' + ele1 + ' ele2:' + ele2);
                if(this.lineList.indexOf(ele1)>-1||this.lineList.indexOf(ele2)>-1) return true;
                return false;
            },
            /*布线检查函数 */
            lineCheck(){
               if (this.tableData.length>11)
                {
                   this.$Message.warning({
                        content: "布线多余，请重新布线"
                    })
                    return;
                }
                if (this.tableData.length<11)
                {
                   this.$Message.warning({
                        content: "布线缺失，请检查布线"
                    })
                    return;
                }
                 /*实验二连线情况*/
                 var lineList = [];
                 let i = 0;
                 for(;i<this.tableData.length;i++) {
                     let element = this.tableData[i];
                     let v = this.lineList[i];
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
                if(A.indexOf('con-bus-XD7-XD0') !== -1 && A.indexOf('cpuD7-D0')) A += '-1';
                if(B.indexOf('con-bus-XD7-XD0') !== -1 && B.indexOf('cpuD7-D0')) B += '-1';
                //console.log(A + ' ' + B);
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
            powerOnAction(e){
                let off = "url(\""+require("../assets/off.png")+"\")";
                let on = "url(\""+require("../assets/on.png")+"\")";
                e.srcElement.style.backgroundImage = 
                    e.srcElement.style.backgroundImage === off || e.srcElement.style.backgroundImage === "" ? on : off;
            
                let powerState = e.srcElement.style.backgroundImage;
                //电源开启，开始实验
                if (powerState===on){
                    this.power=true;
                    this.$Message.success({
                        content: '电源已打开'
                    })
                    
                    if (!this.lineRight){
                        this.$Message.warning({
                            content: '请先检查布线'
                        })
                        return;
                    }
                    let timeStartLight = "url(\""+require("../assets/bulb-green.png")+"\")";
                    
                    let kk1Start = document.getElementById('kk1Start').style.backgroundImage;
                    let kk3Start = document.getElementById('kk3Start').style.backgroundImage;
                    let kk2SingleStep = document.getElementById('singleStep').style.backgroundImage;
                    if (kk1Start!=timeStartLight || kk2SingleStep!=timeStartLight || kk3Start!=timeStartLight) {
                        this.$Message.warning({
                            content: '未打开时序控制台开关'
                        })
                        
                        return;
                    }
                    let conIOR_switch=document.getElementById('conIOR_switch').style.backgroundImage;
                    if (conIOR_switch!=on){
                        this.$Message.warning({
                            content: '未打开con单元IOR！'
                        })
                        
                        return;
                    }
                    this.buttonRight=true;
                    /**总线竞争如何判断 */
                }
                else{
                    this.power=false;
                    this.$Message.warning({
                        content: '电源已关闭'
                    })
                }
                
                
            },
            t3Option(){
                
                if (this.power===false){
                    this.$Message.warning({
                            content: '电源未开启'
                        })
                    return;
                }
                if (this.buttonRight===false){
                    this.$Message.warning({
                            content: '请检查布线与时序开关'
                        })
                    return;
                }
                let is_write=true;
                let is_read=false;
                let switchOn = "url(\""+require("../assets/on.png")+"\")";
                let wr = document.getElementById('conWR_switch').style.backgroundImage===switchOn?1:0;
                
                let rd = document.getElementById('conRD_switch').style.backgroundImage===switchOn?1:0;
               
                let ior = document.getElementById('conIOR_switch').style.backgroundImage===switchOn?1:0;
               
                let iom = document.getElementById('conIOM_switch').style.backgroundImage===switchOn?1:0;
                
                let ldar = document.getElementById('conLDAR_switch').style.backgroundImage===switchOn?1:0;
                
                let in_D7_D0=document.getElementsByName('in-D7-D0');
                
                
                let redLight ="url(\""+require("../assets/red.png")+"\")";
                let redOff = "url(\""+require("../assets/red-bulbe.png")+"\")";
                let greenLight ="url(\""+require("../assets/green.png")+"\")";
                let greenOff = "url(\""+require("../assets/green-buble.png")+"\")";
                //获取系统总线区灯泡数组
                let buble_F_list=document.getElementsByName('buble_F');
                /**判断是读还是写 */
                if (ior===1&&wr===0&&rd===1&&iom===0){
                    this.$Message.success({
                            content: '数据读取成功'
                        })
                    is_read=true;
                    is_write=false;
                }
                /**判断写地址还是写数据 */
                if (wr===0&&rd===0&&ior===0&&ldar===1){
                    this.is_address=true;
                    this.is_data=false;
                    this.$Message.success({
                        content: '地址单元写入成功'
                    })
                }
                else if(wr===1&&rd===0&&ior===0&&ldar===0&&iom===0){
                    this.is_address=false;
                    this.is_data=true;
                    this.$Message.success({
                        content: '数据单元写入成功'
                    })
                }
                /**获取in单元数据*/
                let t=0;//存储十进制，用于下标
                let dataList=[];//存储二进制数据
                let i=1;
                in_D7_D0.forEach((v,index)=>{
                    if(in_D7_D0[7-index].style.backgroundImage===switchOn){
                        t+=i;
                        dataList[index]=1;
                    }
                    else{
                        dataList[index]=0;
                    }
                    i*=2;   
                });
                if(is_write){
                    //地址打入AR
                    if (this.is_address&&!this.is_data){
                        this.address=t;
                    }
                    //数据写入或者读取数据
                    else if (!this.is_address&&this.is_data){
                        if (ior==0){
                            this.mem[this.address]=dataList;
                        }
                    } 

                }
                else if (is_read){
                    let data=this.mem[t];
                    data.forEach((v,index)=>{
                        //将结果显示在系统总线的灯泡中
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
                }

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
@import '../elements/MEM.css';
@import '../elements/pc-ar.css';
@import '../elements/in-unit.css';

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

.power-switch{
    left: 0rem;
    top: 0rem;
    /* width: 0.8rem;
    height: 2rem; */
}

</style>
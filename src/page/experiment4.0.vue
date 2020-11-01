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
                            <div class="power-source-text text">
                                电源
                            </div>
                            <div class="power-switch" @click="changePowerSwitch"></div>
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
                    <div class="expansion-unit box">
                        <div class="wrapper">
                            <div class="expansion-unit-text text">
                                扩展单元
                            </div>
                            <div class="expansion-unit-twoNeedle-1 twoNeedle" @click=" buttonClick('expansion-GND')" id="expansion-GND"/>
                            <div class="expansion-unit-twoNeedle-GND-text text">GND</div>
                            <div class="expansion-unit-twoNeedle-2 twoNeedle" @click=" buttonClick('expansion-5V')" id="expansion-5V"/>
                            <div class="expansion-unit-twoNeedle-5V-text text">+5V</div>
                            <div class="expansion-unit-twoNeedle-3 twoNeedle-slim "/>
                            <div class="expansion-unit-twoNeedle-E7-text text">E7</div>
                            <div class="expansion-unit-twoNeedle-E6-text text">E6</div>
                            <div class="expansion-unit-twoNeedle-4 twoNeedle-slim"/>
                            <div class="expansion-unit-twoNeedle-E5-text text">E5</div>
                            <div class="expansion-unit-twoNeedle-E4-text text">E4</div>
                            <div class="expansion-unit-twoNeedle-5 twoNeedle-slim" @click=" buttonClick('expansion-E3-E2')" id="expansion-E3-E2"/>
                            <div class="expansion-unit-twoNeedle-E3-text text">E3</div>
                            <div class="expansion-unit-twoNeedle-E2-text text">E2</div>
                            <div class="expansion-unit-twoNeedle-6 twoNeedle-slim" @click=" buttonClick('expansion-E1-E0')" id="expansion-E1-E0"/>
                            <div class="expansion-unit-twoNeedle-E1-text text">E1</div>
                            <div class="expansion-unit-twoNeedle-E0-text text">E0</div>
                            <div class="red-buble expansion-unit-red-buble-1" name="buble_F"/>
                            <div class="red-buble expansion-unit-red-buble-2" name="buble_F"/>
                            <div class="green-buble expansion-unit-green-buble-1" name="buble_F"/>
                            <div class="green-buble expansion-unit-green-buble-2" name="buble_F"/>
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
                            <div class="mc-unit-twoNeedle-1 twoNeedle" @click="buttonClick('mc-unit-LDIR')"></div>
                            <div class="mc-unit-LDIR-text text">LDIR</div>
                            <div class="mc-unit-twoNeedle-2 twoNeedle" @click="buttonClick('mc-unit-F1')"></div>
                            <div class="mc-unit-F1-text text">F&lt;1&gt;</div>
                            <div class="mc-unit-sixNeedle sixNeedle" @click="buttonClick('mc-unit-SE5-SE0')"></div>
                            <div class="mc-unit-SE0-text text">SE0</div>
                            <div class="mc-unit-SE5-text text">SE5</div>
                            <div class="mc-unit-twoNeedle-3 twoNeedle" @click="buttonClick('mc-unit-RS_B')"></div>
                            <div class="mc-unit-RS_B-text text">RS_B</div>
                            <div class="mc-unit-twoNeedle-4 twoNeedle" @click="buttonClick('mc-unit-LDRi')"></div>
                            <div class="mc-unit-LDRi-text text">LDRi</div>
                            <div class="mc-unit-fourNeedle-1 fourNeedle" @click="buttonClick('mc-unit-S3-S0')"></div>
                            <div class="mc-unit-S0-text text">S0</div>
                            <div class="mc-unit-S3-text text">S3</div>
                            <div class="mc-unit-fourNeedle-2 fourNeedle" @click="buttonClick('mc-unit-LDA-LDB')"></div>
                            <div class="mc-unit-LDA-text text">LDA</div>
                            <div class="mc-unit-LDB-text text">LDB</div>
                            <div class="mc-unit-twoNeedle-5 twoNeedle-slim" @click="buttonClick('mc-unit-ALU_B')"></div>
                            <div class="mc-unit-ALU_B-text text">ALU_B</div>
                            <div class="mc-unit-twoNeedle-6 twoNeedle-slim" @click="buttonClick('mc-unit-LDAR')"></div>
                            <div class="mc-unit-LDAR-text text">LDAR</div>
                            <div class="mc-unit-twoNeedle-7 twoNeedle-slim" @click="buttonClick('mc-unit-LDPC')"></div>
                            <div class="mc-unit-LDPC-text text">LDPC</div>
                            <div class="mc-unit-twoNeedle-8 twoNeedle-slim" @click="buttonClick('mc-unit-PC_B')"></div>
                            <div class="mc-unit-PC_B-text text">PC_B</div>
                            <div class="mc-unit-fourNeedle-3 fourNeedle" @click="buttonClick('mc-unit-WR-RD-IOM')"></div>
                            <div class="mc-unit-WR-text text">WR</div>
                            <div class="mc-unit-RD-text text">RD</div>
                            <div class="mc-unit-IOM-text text">IOM</div>
                            <div class="mc-unit-buble-box">
                                <div class="mc-unit-red-buble-1-1 red-buble"/>
                                <div class="mc-unit-red-buble-1-2 red-buble"/>
                                <div class="mc-unit-red-buble-1-3 red-buble"/>
                                <div class="mc-unit-red-buble-1-4 red-buble"/>
                                <div class="mc-unit-red-buble-2-1 red-buble"/>
                                <div class="mc-unit-red-buble-2-2 red-buble"/>
                                <div class="mc-unit-red-buble-2-3 red-buble"/>
                                <div class="mc-unit-red-buble-2-4 red-buble"/>
                                <div class="mc-unit-red-buble-3-1 red-buble"/>
                                <div class="mc-unit-red-buble-3-2 red-buble"/>
                                <div class="mc-unit-red-buble-3-3 red-buble"/>
                                <div class="mc-unit-red-buble-3-4 red-buble"/>
                                <div class="mc-unit-green-buble-1-1 green-buble"/>
                                <div class="mc-unit-green-buble-1-2 green-buble"/>
                                <div class="mc-unit-green-buble-1-3 green-buble"/>
                                <div class="mc-unit-green-buble-1-4 green-buble"/>
                                <div class="mc-unit-green-buble-2-1 green-buble"/>
                                <div class="mc-unit-green-buble-2-2 green-buble"/>
                                <div class="mc-unit-green-buble-2-3 green-buble"/>
                                <div class="mc-unit-green-buble-2-4 green-buble"/>
                                <div class="mc-unit-green-buble-3-1 green-buble"/>
                                <div class="mc-unit-green-buble-3-2 green-buble"/>
                                <div class="mc-unit-green-buble-3-3 green-buble"/>
                                <div class="mc-unit-green-buble-3-4 green-buble"/>
                            </div>
                        </div>
                    </div>
                    <div class="ir-unit box">
                        <div class="wrapper">
                            <div class="ir-unit-text text">
                                IR单元
                            </div>
                            <div class="ir-unit-twoNeedle-1 twoNeedle" @click="buttonClick('ir-unit-LDIR')"></div>
                            <div class="ir-unit-LDIR-text text">LDIR</div>
                            <div class="ir-unit-twoNeedle-2 twoNeedle" @click="buttonClick('ir-unit-F1')"></div>
                            <div class="ir-unit-F1-text text">F&lt;1&gt;</div>
                            <div class="ir-unit-sixNeedle sixNeedle" @click="buttonClick('ir-unit-SE5-SE0')"></div>
                            <div class="ir-unit-SE5-text text">SE5</div>
                            <div class="ir-unit-SE0-text text">SE0</div>
                            <div class="ir-unit-eightNeedle eightNeedle" @click="buttonClick('ir-unit-D7-D0')"></div>
                            <div class="ir-unit-D7-text text">D7</div>
                            <div class="ir-unit-D0-text text">D0</div>
                        </div>
                    </div>
                    <div class="alu-reg-unit box">
                        <div class="wrapper">
                            <div class="alu-reg-unit-text text">
                                ALU及REG单元
                            </div>
                            <div class="alu-reg-unit-twoNeedle-1 twoNeedle" @click="buttonClick('alu-reg-unit-RO_B')"/>
                            <div class="alu-reg-unit-RO_B-text text">RO_B</div>
                            <div class="alu-reg-unit-twoNeedle-2 twoNeedle" @click="buttonClick('alu-reg-unit-LDRO')"/>
                            <div class="alu-reg-unit-LDRO-text text">LDRO</div>
                            <div class="alu-reg-unit-twoNeedle-3 twoNeedle" @click="buttonClick('alu-reg-unit-ALU_B')"></div>
                            <div class="alu-reg-unit-ALU_B-text text">ALU_B</div>
                            <div class="alu-reg-unit-twoNeedle-4 twoNeedle"></div>
                            <div class="alu-reg-unit-Cn-text text">Cn</div>
                            <div class="alu-reg-unit-red-buble red-buble"/>
                            <div class="alu-reg-unit-green-buble green-buble"/>
                            <div class="alu-reg-unit-fourNeedle-1 fourNeedle"></div>
                            <div class="alu-reg-unit-FZ-text text">FZ</div>
                            <div class="alu-reg-unit-FC-text text">FC</div>
                            <div class="alu-reg-unit-fourNeedle-2 fourNeedle" @click="buttonClick('alu-reg-unit-S3-S0')"></div>
                            <div class="alu-reg-unit-S3-text text">S3</div>
                            <div class="alu-reg-unit-S0-text text">S0</div>
                            <div class="alu-reg-unit-fourNeedle-3 fourNeedle" @click="buttonClick('alu-reg-unit-LDA-LDB')"></div>
                            <div class="alu-reg-unit-LDA-text text">LDA</div>
                            <div class="alu-reg-unit-LDB-text text">LDB</div>
                            <div class="alu-reg-unit-eightNeedle-1 eightNeedle" @click="buttonClick('alu-reg-unit-IN7-IN0')"></div>
                            <div class="alu-reg-unit-IN7-text text">IN7</div>
                            <div class="alu-reg-unit-IN0-text text">IN0</div>
                            <div class="alu-reg-unit-eightNeedle-2 eightNeedle" @click="buttonClick('alu-reg-unit-OUT7-OUT0')"></div>
                            <div class="alu-reg-unit-OUT7-text text">OUT7</div>
                            <div class="alu-reg-unit-OUT0-text text">OUT0</div>
                            <div class="alu-reg-unit-eightNeedle-3 eightNeedle" @click="buttonClick('alu-reg-unit-D7-D0')"></div>
                            <div class="alu-reg-unit-D7-text text">D7</div>
                            <div class="alu-reg-unit-D0-text text">D0</div>
                            <div class="alu-reg-unit-buble-box">
                                <div class="alu-reg-unit-red-buble-1-1 red-buble"/>
                                <div class="alu-reg-unit-red-buble-1-2 red-buble"/>
                                <div class="alu-reg-unit-red-buble-1-3 red-buble"/>
                                <div class="alu-reg-unit-red-buble-1-4 red-buble"/>
                                <div class="alu-reg-unit-red-buble-2-1 red-buble"/>
                                <div class="alu-reg-unit-red-buble-2-2 red-buble"/>
                                <div class="alu-reg-unit-red-buble-2-3 red-buble"/>
                                <div class="alu-reg-unit-red-buble-2-4 red-buble"/>
                                <div class="alu-reg-unit-green-buble-1-1 green-buble"/>
                                <div class="alu-reg-unit-green-buble-1-2 green-buble"/>
                                <div class="alu-reg-unit-green-buble-1-3 green-buble"/>
                                <div class="alu-reg-unit-green-buble-1-4 green-buble"/>
                                <div class="alu-reg-unit-green-buble-2-1 green-buble"/>
                                <div class="alu-reg-unit-green-buble-2-2 green-buble"/>
                                <div class="alu-reg-unit-green-buble-2-3 green-buble"/>
                                <div class="alu-reg-unit-green-buble-2-4 green-buble"/>
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
                            <div class="twoNeedle system-twoNeedle-xiow" @click=" buttonClick('con-bus-XIOW')" id="con-bus-XIOW"/>
                            <div class="text system-twoNeedle-xiow-text">
                                XIOW
                            </div>

                            <div class="twoNeedle system-twoNeedle-xior" @click=" buttonClick('con-bus-XIOR')" id="con-bus-XIOR"/>
                            <div class="text system-twoNeedle-xior-text">
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
                            <div class="out-unit-twoNeedle-1 twoNeedle" @click="buttonClick('out-unit-WR')"/>
                            <div class="out-unit-WR-text text">WR</div>
                            <div class="out-unit-twoNeedle-2 twoNeedle" @click="buttonClick('out-unit-LED_B')"/>
                            <div class="out-unit-LED_B-text text">LED_B</div>
                            <div class="out-unit-eightNeedle eightNeedle"  @click="buttonClick('out-unit-D7-D0')"/>
                            <div class="out-unit-D7-text text">D7</div>
                            <div class="out-unit-D0-text text">D0</div>
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
                            <div class="eightNeedle-SD27 eightNeedle" id="SD27-SD20" @click="buttonClick('con-unit-SD27-SD20')"/>
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
                            <div class="switch in-unit-D7" @click="changeSwitch"/>
                            <div class="switch in-unit-D6" @click="changeSwitch"/>
                            <div class="switch in-unit-D5" @click="changeSwitch"/>
                            <div class="switch in-unit-D4" @click="changeSwitch"/>
                            <div class="switch in-unit-D3" @click="changeSwitch"/>
                            <div class="switch in-unit-D2" @click="changeSwitch"/>
                            <div class="switch in-unit-D1" @click="changeSwitch"/>
                            <div class="switch in-unit-D0" @click="changeSwitch"/>
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
                <div class="expansion-unit box select-background"/>
                <div class="mc-unit box select-background"/>
                <div class="ir-unit box select-background"/>
                <div class="out-unit box select-background"/>
                <div class="alu-reg-unit box select-background"/>
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
                powerStatus: false,
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
                     "con-bus-XD7-XD0in-unit-D7-D0",
                     "con-bus-XD7-XD0out-unit-D7-D0",
                     "con-bus-WR-RD-IOMmc-unit-WR-RD-IOM",
                     "con-bus-XIORin-unit-IN_B-RD",
                     "con-bus-XIOWout-unit-WR",
                     "out-unit-LED_Bexpansion-GND",
                     "cpuD7-D0alu-reg-unit-IN7-IN0",
                     "cpuD7-D0alu-reg-unit-OUT7-OUT0",
                     "cpuD7-D0alu-reg-unit-D7-D0",
                     "mc-unit-ALU_Balu-reg-unit-ALU_B",
                     "mc-unit-LDA-LDBalu-reg-unit-LDA-LDB",
                     "mc-unit-S3-S0alu-reg-unit-S3-S0",
                     "mc-unit-RS_Balu-reg-unit-RO_B",
                     "mc-unit-LDRialu-reg-unit-LDRO",
                     "mc-unit-LDIRir-unit-LDIR",
                     "mc-unit-F1ir-unit-F1",
                     "mc-unit-SE5-SE0ir-unit-SE5-SE0",
                     "ir-unit-D7-D0con-unit-SD27-SD20"
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
                F:[0,0,0,0,0,0,0,0]
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
            changePowerSwitch(e){
                let off = "url(\""+require("../assets/powerOff.png")+"\")";
                let on = "url(\""+require("../assets/powerOn.png")+"\")";
                if(this.powerStatus){
                    this.powerStatus = false;
                    e.srcElement.style.backgroundImage = off;
                }
                else{
                    this.powerStatus = true;
                    e.srcElement.style.backgroundImage = on;
                }
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
                let ele1 = row.A+row.B;
                let ele2 = row.B+row.A;
                //console.log('row.A: ' + row.A + ' row.B: ' + row.B + ' ele1: ' + ele1 + ' ele2:' + ele2);
                if(this.lineList.indexOf(ele1)>-1||this.lineList.indexOf(ele2)>-1) return true;
                return false;
            },
            /*布线检查函数 */
            lineCheck(){
                if (!this.powerStatus)
                {
                   this.$Message.warning({
                        content: "请先开启电源"
                    })
                    return;
                }
                if (this.tableData.length>20)
                {
                   this.$Message.warning({
                        content: "布线多余，请重新布线"
                    })
                    return;
                }
                if (this.tableData.length<20)
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
                 //let str1 = lineList.sort().toString();
                 //let str2 = this.lineList.sort().toString();
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
@import '../elements/expansion-unit.css';
@import '../elements/mc-unit.css';
@import '../elements/ir-unit.css';
@import '../elements/out-unit.css';
@import '../elements/alu-reg-unit.css';

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
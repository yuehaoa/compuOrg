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
            <div class="tree">
            <Sider>
                <div class="wrapper">
                    <div class="tree-menu">
                        <Menu active-name="我的实验" theme="light" width="auto" :open-names="['我的实验']">
                            <Submenu name="我的实验">
                                <template slot="title">
                                        <Icon type="ios-navigate"></Icon>
                                            我的实验
                                </template>
                                <Submenu name="1">
                                    <template slot="title">
                                        <Icon type="ios-stats" />
                                        实验选择
                                    </template>
                                    <MenuItem name="1-1">运算器</MenuItem>
                                    <MenuItem name="1-2">存储器</MenuItem>
                                    <MenuItem name="1-3">系统总线</MenuItem>
                                </Submenu>
                                <Submenu name="2">
                                    <template slot="title">
                                        <Icon type="ios-stats" />
                                        实验准备
                                    </template>
                                    <MenuItem name="2-1">实验手册</MenuItem>
                                    <MenuItem name="2-2">实验原理解析</MenuItem>
                                    <MenuItem name="2-3">实验演示</MenuItem>
                                </Submenu>
                                <Submenu name="3">
                                    <template slot="title">
                                        <Icon type="ios-stats" />
                                        布线
                                    </template>
                                    <MenuItem name="3-1">准备布线</MenuItem>
                                    <MenuItem name="3-2">取消布线</MenuItem>
                                    <MenuItem name="3-3">校验布线</MenuItem>
                                </Submenu>
                                <Submenu name="4">
                                    <template slot="title">
                                        <Icon type="ios-stats" />
                                        实验整理
                                    </template>
                                    <MenuItem name="4-1">生成报告</MenuItem>
                                </Submenu>
                            </Submenu>
                            <Submenu name="用户管理">
                                <template slot="title">
                                    <Icon type="ios-keypad"></Icon>
                                    用户管理
                                </template>
                                <MenuItem name="个人信息">个人信息</MenuItem>
                            </Submenu>
                            <Submenu name="系统配置">
                                <template slot="title">
                                    <Icon type="ios-analytics"></Icon>
                                    系统配置
                                </template>
                                <MenuItem name="系统配置-安全配置">安全配置</MenuItem>
                                <MenuItem name="系统配置-关于本系统">关于本系统</MenuItem>
                            </Submenu>
                        </Menu>
                    </div>
                </div>
            </Sider>
            </div>
        </i-col>
        <i-col span="19">
            <card class="card-menu">
                <div class="wrapper">
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
                    <div class="time-control-unit box select-background">
                        <div class="wrapper">
                            <div class="time-control-unit-text text">
                                时序与操作台
                            </div>
                            <div class="clk0 twoNeedle"/>
                            <div class="clk0-text text">
                                clk0
                            </div>
                            <div class="three-hundred-hz twoNeedle" @click="changeNeedle"/>
                            <div class="three-hundred-hz-text text">
                                300HZ
                            </div>
                            <div class="thirty-hz twoNeedle"  @click="changeNeedle"/>
                            <div class="thirty-hz-text text">
                                30HZ
                            </div>
                            <div class="three-hz twoNeedle"/>
                            <div class="three-hz-text text">
                                3HZ
                            </div>
                            <div class="st">
                                <Dropdown class="white-btn stMenu" placement="right-start">
                                    <DropdownMenu slot="list">
                                        <DropdownItem style="width:0.8rem">T1</DropdownItem>
                                        <DropdownItem style="width:0.8rem">T2</DropdownItem>
                                        <DropdownItem style="width:0.8rem">T3</DropdownItem>
                                        <DropdownItem style="width:0.8rem" @click.native="T4">T4</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                            <div class="st-text text">
                                ST
                            </div>
                            
                            <div class="start bulb" @click="changeImage"/>
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
                            <div class="singleShot bulb" @click="changeImage"/>
                            <div class="singleShot-text text">
                                单拍
                            </div>
                            <div class="singleStep bulb"/>
                            <div class="singleStep-text text">
                                单步
                            </div>
                            <div class="continue bulb"/>
                            <div class="continue-text text">
                                连续
                            </div>
                            <div class="text kk2-text">
                                kk2
                            </div>
                            <div class="program bulb"/>
                            <div class="program-text text">
                                编程
                            </div>
                            <div class="check bulb"/>
                            <div class="check-text text">
                                校验
                            </div>
                            <div class="run bulb"/>
                            <div class="run-text text">
                                运行
                            </div>
                            <div class="text kk3-text">
                                kk3
                            </div>
                            <div class="tfourNeedle fourNeedle"></div>
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
                    <div class="alu-reg-unit box select-background">
                        <div class="wrapper">
                            <div class="red-buble alu-red-a0" ref="A7"/>
                            <div class="red-buble alu-red-a1"/>
                            <div class="red-buble alu-red-a2"/>
                            <div class="red-buble alu-red-a3"/>
                            <div class="green-buble alu-green-a4"/>
                            <div class="green-buble alu-green-a5"/>
                            <div class="green-buble alu-green-a6"/>
                            <div class="green-buble alu-green-a7"/>
                            <div class="red-buble alu-red-a8"/>
                            <div class="red-buble alu-red-a9"/>
                            <div class="red-buble alu-red-a10"/>
                            <div class="red-buble alu-red-a11"/>
                            <div class="green-buble alu-green-a12"/>
                            <div class="green-buble alu-green-a13"/>
                            <div class="green-buble alu-green-a14"/>
                            <div class="green-buble alu-green-a15"/>

                            <div class="alu-twoNeedle-rob twoNeedle"/>
                            <div class="alu-twoNeedle-rob-text text">
                                R0_B
                            </div>
                            <div class="alu-twoNeedle-ldro twoNeedle"/>
                            <div class="alu-twoNeedle-ldro-text text">
                                LDRO
                            </div>
                            <div class="alu-eightNeedle-in eightNeedle"/>
                            <div class="alu-eightNeedle-in-text text">
                                IN7—IN0
                            </div>
                            <div class="alu-fourNeedle-fzfc fourNeedle"/>
                            <div class="text alu-fourNeedle-fzfc-text">
                                FZ-FC
                            </div>
                            <div class="alu-fourNeedle-s3s0 fourNeedle"/>
                            <div class="text alu-fourNeedle-s3s0-text">
                                S3-S0
                            </div>
                            <div class="alu-twoNeedle-cn twoNeedle"/>
                            <div class="text alu-twoNeedle-cn-text">
                                Cn
                            </div>
                            <div class="alu-fourNeedle-ldaldb fourNeedle"/>
                            <div class="text alu-fourNeedle-ldaldb-text">
                                LDA-LDB
                            </div>
                            <div class="alu-eightNeedle-d0d7 eightNeedle"/>
                            <div class="text alu-eightNeedle-d0d7-text">
                                D7——D0
                            </div>
                            <div class="alu-twoNeedle-alub twoNeedle"/>
                            <div class="text alu-twoNeedle-alub-text">
                                ALU_B
                            </div>
                            <div class="alu-eightNeedle2-out eightNeedle2"/>
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
                            <div class="memB-text text">
                                LDB:
                            </div>
                            <!---->

                        </div>
                    </div>
                    <div class="cpu-bus box select-background">
                        <div class="wrapper">
                            <div class="cpu-eightNeedle-1 eightNeedle2"/>
                            <div class="cpu-eightNeedle-2 eightNeedle2"/>
                            <div class="cpu-eightNeedle-3 eightNeedle2"/>
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
                        </div>
                    </div>
                    <div class="system-bus-text text">
                        系统总线
                    </div>
                    <div class="system-bus box select-background">
                        <div class="wrapper">
                            <div class="system-T4-T1 fourNeedle"/>
                            <div class="system-T4-T1-text text">
                                T4 - T1
                            </div>
                            <div class="red-buble system-red-buble-1"/>
                            <div class="red-buble system-red-buble-2"/>z
                            <div class="red-buble system-red-buble-3"/>
                            <div class="red-buble system-red-buble-4"/>
                            <div class="twoNeedle system-twoNeedle-xiow"/>
                            <div class="text system-twoNeedle-xiow-text">
                                XIOW
                            </div>

                            <div class="twoNeedle system-twoNeedle-xior"/>
                            <div class="text system-twoNeedle-xior-text">
                                XIOR
                            </div>

                            <div class="fourNeedle system-fourNeedle-xmwr"/>
                            <div class="text system-fourNeedle-xmwr-text">
                                XMWR-XMRD
                            </div>

                            <div class="twoNeedle system-twoNeedle-hold"/>
                            <div class="text system-twoNeedle-hold-text">
                                HOLD
                            </div>

                            <div class="fourNeedle system-fourNeedle-iom"/>
                            <div class="text system-fourNeedle-iom-text">
                                WR-RD-IOM
                            </div>
                            
                            <div class="eightNeedle2 system-eightNeedle-xd-1"/>
                            <div class="eightNeedle2 system-eightNeedle-xd-2"/>
                            <div class="text system-eightNeedle-xd7-text">
                                XD7
                            </div>
                            <div class="text system-eightNeedle-xd0-text">
                                XD0
                            </div>

                            <div class="system-eightNeedle-xa eightNeedle2"/>
                            <div class="text system-eightNeedle-xa7-text">
                                XA7
                            </div>
                            <div class="text system-eightNeedle-xa0-text">
                                XA0
                            </div>

                            <div class="red-buble system-red-buble-a7"/>
                            <div class="red-buble system-red-buble-a6"/>
                            <div class="red-buble system-red-buble-a5"/>
                            <div class="red-buble system-red-buble-a4"/>
                            <div class="text system-red-buble-text">
                                A7--------A4
                            </div>
                            <div class="green-buble system-green-buble-a3"/>
                            <div class="green-buble system-green-buble-a2"/>
                            <div class="green-buble system-green-buble-a1"/>
                            <div class="green-buble system-green-buble-a0"/>
                            <div class="text system-green-buble-text">
                                A3--------A0
                            </div>

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
                    <div class="con-unit box  select-background">
                        <div class="wrapper">
                            <div class="con-unit-text text">
                                CON单元
                            </div>
                            <div class="switch SD27" @click="changeSwitch" ref="num7"/>
                            <div class="SD27-text text">
                                SD27  K7
                            </div>
                            <div class="switch SD26" @click="changeSwitch" ref="num6"/>
                            <div class="SD26-text text">
                                26  K6
                            </div>

                            <div class="switch SD25" @click="changeSwitch" ref="num5"/>
                            <div class="SD25-text text">
                                25  K5
                            </div>
                            <div class="switch SD24" @click="changeSwitch" ref="num4"/>
                            <div class="SD24-text text">
                                24  K4
                            </div>
                            <div class="switch SD23" @click="changeSwitch" />
                            <div class="SD23-text text">
                                23  K3
                            </div>
                            <div class="switch SD22" @click="changeSwitch" />
                            <div class="SD22-text text">
                                22  K2
                            </div>
                            <div class="switch SD21" @click="changeSwitch" />
                            <div class="SD21-text text">
                                21  K1
                            </div>
                            <div class="switch SD20" @click="changeSwitch" />
                            <div class="SD20-text text">
                                SD20  K0
                            </div>
                            <div class="switch SD17" @click="changeSwitch"/>
                            <div class="SD17-text text">
                                SD17  ALU_B
                            </div>
                            <div class="switch SD16" @click="changeSwitch"/>
                            <div class="SD16-text text">
                                16  S3
                            </div>
                            <div class="switch SD15" @click="changeSwitch"/>
                            <div class="SD15-text text">
                                15  S2
                            </div>
                            <div class="switch SD14" @click="changeSwitch"/>
                            <div class="SD14-text text">
                                14  S1
                            </div>
                            <div class="switch SD13" @click="changeSwitch"/>
                            <div class="SD13-text text">
                                13  S0
                            </div>
                            <div class="switch SD12" @click="changeSwitch"/>
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
                            <div class="switch SD7" @click="changeSwitch"/>
                            <div class="SD7-text text">
                                SD07  WR
                            </div>
                            <div class="switch SD6" @click="changeSwitch"/>
                            <div class="SD6-text text">
                                06  RD
                            </div>
                            <div class="switch SD5" @click="changeSwitch"/>
                            <div class="SD5-text text">
                                05  IOM
                            </div>
                            <div class="switch SD4" @click="changeSwitch"/>
                            <div class="SD4-text text">
                                04
                            </div>
                            <div class="switch SD3" @click="changeSwitch"/>
                            <div class="SD3-text text">
                                03
                            </div>
                            <div class="switch SD2" @click="changeSwitch"/>
                            <div class="SD2-text text">
                                02
                            </div>
                            <div class="switch SD1" @click="changeSwitch"/>
                            <div class="SD1-text text">
                                01  LDAR
                            </div>
                            <div class="switch SD0" @click="changeSwitch"/>
                            <div class="SD0-text text">
                                SD00 LOR
                            </div>
                            <div class="clr-white-btn white-btn"/>
                            <div class="white-btn-text text">
                                CLR
                            </div>
                            <div class="fourNeedle-k7k6 fourNeedle"/>
                            <div class="fourNeedle-k7k6-text text">
                                K7--K6
                            </div>
                            <div class="fourNeedle-k5k4 fourNeedle"/>
                            <div class="fourNeedle-k5k4-text text">
                                K5--K4
                            </div>
                            <div class="fourNeedle-k3k2 fourNeedle"/>
                            <div class="fourNeedle-k3k2-text text">
                                K3--K0
                            </div>
                            <div class="eightNeedle-SD27 eightNeedle"/>
                            <div class="eightNeedle-SD27-text text">
                                SD27-SD20
                            </div>
                            <div class="twoNeedle-alu twoNeedle"/>
                            <div class="twoNeedle-alu-text text">
                                ALU_B
                            </div>
                            <div class="fourNeedle-s3s0 fourNeedle"/>
                            <div class="fourNeedle-s3s0-text text">
                                S3-S0
                            </div>
                            <div class="twoNeedle-cn twoNeedle"/>
                            <div class="twoNeedle-cn-text text">
                                Cn
                            </div>
                            <div class="fourNeedle-ldaldb fourNeedle"/>
                            <div class="fourNeedle-ldaldb-text text">
                                LDA--LDB
                            </div>
                            <div class="eightNeedle-SD17 eightNeedle"/>
                            <div class="eightNeedle-SD17-text text">
                                SD17-SD10
                            </div>
                            <div class="fourNeedle-iom fourNeedle"/>
                            <div class="fourNeedle-iom-text text">
                                WR-RD-IOM
                            </div>
                            <div class="twoNeedle-ldar twoNeedle"/>
                            <div class="twoNeedle-ldar-text text">
                                LDAR
                            </div>
                            <div class="twoNeedle-ior twoNeedle"/>
                            <div class="twoNeedle-ior-text text">
                                IOR
                            </div>
                            <div class="eightNeedle-SD07 eightNeedle"/>
                            <div class="eightNeedle-SD07-text text">
                                SD07-SD00
                            </div>


                        </div>
                    </div>
                    <div class="in-unit box">
                        <div class="wrapper">
                            <div class="in-unit-text text">
                                IN单元
                            </div>
                        </div>
                    </div>
                </div>
            </card>
        </i-col>
    </row>
</template>
<script>
    
    import { screenChange } from "../scripts/screen.js"
    export default {
    
        data() {
            return{
                imageUrl: require('../assets/bulb.png'),
                needleUrl: require('../assets/2针.png'),
                threeHundred: require('../assets/2针.png'),
                three:require('../assets/2针.png'),
               
            }
        },
        mounted() {
            screenChange(document,window);
        },
        methods: {
            
            changeImage(e) {
                
                e.srcElement.style.backgroundImage 
                    = e.srcElement.style.backgroundImage === "url(\""+require("../assets/bulb.png")+"\")" || e.srcElement.style.backgroundImage === ""
                        ?"url(\""+require("../assets/bulb-green.png")+"\")":"url(\""+require("../assets/bulb.png")+"\")"
            },
            changeNeedle(e) {
               e.srcElement.style.backgroundImage = 
                    e.srcElement.style.backgroundImage === "url(\""+require("../assets/2针.png")+"\")" || e.srcElement.style.backgroundImage === ""
                        ?"url(\""+require("../assets/2针-green.png")+"\")":"url(\""+require("../assets/2针.png")+"\")"
            },
            changeSwitch(e){
                e.srcElement.style.backgroundImage = 
                    e.srcElement.style.backgroundImage === "url(\""+require("../assets/on.png")+"\")" || e.srcElement.style.backgroundImage === ""
                        ?"url(\""+require("../assets/off.png")+"\")":"url(\""+require("../assets/on.png")+"\")"
            },
            T4(){
                
                var numlist=this.$refs.num7.parentElement.children;
                var bulbelist=this.$refs.A7.parentElement.children;
                let j=-1;  //灯节点起始位置，0表示暂存器A，8表示暂存器B
                if (this.$refs.lda.style.backgroundImage==="url(\""+require("../assets/off.png")+"\")"
                    &&(this.$refs.ldb.style.backgroundImage==="url(\""+require("../assets/on.png")+"\")"||this.$refs.ldb.style.backgroundImage==="")){
                        // lda开，ldb关，送暂存器A
                        j=0;
                    }
                else if(this.$refs.ldb.style.backgroundImage==="url(\""+require("../assets/off.png")+"\")"
                    &&(this.$refs.lda.style.backgroundImage==="url(\""+require("../assets/on.png")+"\")"||this.$refs.lda.style.backgroundImage==="")){
                        j=8;
                    }
                else {
                    alert("请先打开LDA或LDB");
                    return;
                }
                for(let i=1;i<=15;i+=2,j++){
                    if (numlist[i].style.backgroundImage==="url(\""+require("../assets/off.png")+"\")"&&i<=7){
                        bulbelist[j].style.backgroundImage="url(\""+require("../assets/red.png")+"\")";
                        
                    }
                    else if (numlist[i].style.backgroundImage==="url(\""+require("../assets/on.png")+"\")"&&i<=7){
                        bulbelist[j].style.backgroundImage="url(\""+require("../assets/red-bulbe.png")+"\")";
                    }    
                    else if (numlist[i].style.backgroundImage==="url(\""+require("../assets/off.png")+"\")"&&i>7){
                        bulbelist[j].style.backgroundImage="url(\""+require("../assets/green.png")+"\")";
                       
                    }
                    else if (numlist[i].style.backgroundImage==="url(\""+require("../assets/on.png")+"\")"&&i>7){
                        bulbelist[j].style.backgroundImage="url(\""+require("../assets/green-buble.png")+"\")";
                       
                    }
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
</style>
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
                            <div class="three-hundred-hz twoNeedle"/>
                            <div class="three-hundred-hz-text text">
                                300HZ
                            </div>
                            <div class="thirty-hz twoNeedle"/>
                            <div class="thirty-hz-text text">
                                30HZ
                            </div>
                            <div class="three-hz twoNeedle"/>
                            <div class="three-hz-text text">
                                3HZ
                            </div>
                            <div class="st white-btn"/>
                            <div class="start bulb"/>
                            <div class="start-text text">
                                运行
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
                            <div class="red-buble alu-red-a0"/>
                            <div class="red-buble alu-red-a1"/>
                            <div class="red-buble alu-red-a2"/>
                            <div class="red-buble alu-red-a3"/>
                            <div class="green-buble alu-green-a4"/>
                            <div class="green-buble alu-green-a5"/>
                            <div class="green-buble alu-green-a6"/>
                            <div class="green-buble alu-green-a7"/>
                            <div class="alu-reg-unit-text text">
                                ALU及REG单元
                            </div>
                        </div>
                    </div>
                    <div class="cpu-bus box">
                        <div class="wrapper">
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
                            <div class="red-buble system-red-buble-2"/>
                            <div class="red-buble system-red-buble-3"/>
                            <div class="red-buble system-red-buble-4"/>
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
                            <div class="switch SD27"/>
                            <div class="SD27-text text">
                                SD27  K7
                            </div>
                            <div class="switch SD26"/>
                            <div class="SD26-text text">
                                26  K6
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
        mounted() {
            screenChange(document,window);
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
</style>
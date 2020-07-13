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
            <div class="tree" v-if="menuShow">
                <Sider>
                    <div class="wrapper">
                        <div class="tree-menu">
                            <Menu active-name="我的实验" theme="light" width="auto" :open-names="['我的实验']"  @on-select="menuChange">
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
                                        <MenuItem name="1-1" to="experiment1">运算器</MenuItem>
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
            <div class="tree2" v-if="!menuShow">
                <card>
                    <Button type="primary" @click="menuShow = !menuShow">退出</Button>
                    <Button type="success" style="float:right">校验</Button>
                    <Table :columns = "tableCol" :data ="tableData" style="margin-top:10px;"></Table>
                </card>
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
                    <div class="time-control-unit box">
                        <div class="wrapper">
                            <div class="time-control-unit-text text">
                                时序与操作台
                            </div>
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
                    <div class="alu-reg-unit box">
                        <div class="wrapper">
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
                    <div class="system-bus box">
                        <div class="wrapper">
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
                    <div class="con-unit box">
                        <div class="wrapper">
                            <div class="con-unit-text text">
                                CON单元
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
        },
        data() {
            return {
                imageUrl: require('../assets/bulb.png'),
                menuShow: true,
                tableCol:[
                    {
                        title: '已连接A',
                        key: 'A'
                    },
                    {
                        title: '已连接B',
                        key: 'B'
                    }
                ],
                tableData:[
                ]
            }
        },
        methods: {
            changeImage() {
                this.imageUrl = this.imageUrl === require('../assets/bulb.png') ? require('../assets/bulb-green.png'): require('../assets/bulb.png');
            },
            menuChange(name) {
                if(name === '3-1') {
                    this.menuShow = this.menuShow === true ? false: true;
                }
            },
            buttonClick(name) {
                let x = {A: name}
                this.tableData.push(x);
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
</style>
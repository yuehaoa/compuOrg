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
                                    <MenuItem name="1-3">系统纵向</MenuItem>
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
                    <div class="time-control-unit box">
                        <div class="wrapper">
                            <div class="time-control-unit-text text">
                                时序与操作台
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
        (function (doc, win) {
            var docEl = doc.documentElement,
                isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,
                // dpr = window.top === window.self ? dpr : 1, //被iframe引用时，禁止缩放
                // dpr = 1,
                scale = 1 / dpr,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
            docEl.dataset.dpr = dpr;
            var metaEl = doc.createElement('meta');
            metaEl.name = 'viewport';
            metaEl.content = 'initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale;
            docEl.firstElementChild.appendChild(metaEl);
            var recalc = function () {
                var width = docEl.clientWidth;
                if (width / dpr > 2850) {
                    width = 2850 * dpr;
                }
                // 乘以100，px : rem = 100 : 1
                docEl.style.fontSize = 100 * (width / 2850) + 'px';
            };
            recalc()
            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
        })(document, window);
    </script>
<style>
.card-menu{
    width:22rem;
    height:14rem;
    left:4.8rem;
    top:1.26rem;
    background: #244475;
    position: absolute;
}
.box{
    border-style: solid;
    border-color: #ffffff;
}
.power-source{
    width: 1.488rem;
    height:2.472rem;
    position: absolute;
    left:1.8rem;
    top:.432rem;
}
.sys-unit{
    width:1.812rem;
    height:2.472rem;
    position:absolute;
    left: 3.28rem;
    top: .432rem;
}
.mm-io-text{
    width:1.86rem;
    height:3.96rem;
    position:absolute;
    left:16.644rem;
    top:2.93rem;
    font-size: .25rem;
    line-height: .25rem;
}
.mm{
    width:4.5rem;
    height:1.716rem;
    position:absolute;
    left:15.192rem;
    top:3.204rem;
}
.mm-text{
    width:1.86rem;
    height:3.96rem;
    position:absolute;
    left:3.306rem;
    top:.876rem;
    font-size: .192rem;
    line-height: .192rem;
}
.out-unit{
    width:2.29rem;
    height:3.408rem;
    position:absolute;
    left:17.4rem;
    top:6.6rem;
}
.out-unit-text{
    width:1.86rem;
    height:3.96rem;
    position:absolute;
    left:1.3rem;
    top:.3rem;
    font-size: .192rem;
    line-height: .192rem;
}
.con-unit{
    width:14.5rem;
    height:2.064rem;
    position:absolute;
    left:1.776rem;
    top:10.236rem;
}
.con-unit-text{
    width:1rem;
    height:.4rem;
    position:absolute;
    left: .2rem;
    top:.288rem;
    font-size: .192rem;
    line-height: .192rem;
}
.in-unit{
    width:3.45rem;
    height:2.064rem;
    position:absolute;
    left:16.25rem;
    top:10.236rem;
}
.in-unit-text{
    width:1rem;
    height:.4rem;
    position:absolute;
    left: .2rem;
    top:.288rem;
    font-size: .192rem;
    line-height: .192rem;
}
.eightTwoNine{
    width:2.25rem;
    height:1.704rem;
    position:absolute;
    left:15.192rem;
    top:4.9rem;
}
.eightTwoNine-text{
    width: .54rem;
    height: .54rem;
    font-size: .192rem;
    line-height: .192rem;
    position: absolute;
    color: #fff;
    left: 1.6rem;
    top: 0.68rem;
}
.eightTwoSeven{
    width:2.25rem;
    height:1.704rem;
    position:absolute;
    left:15.192rem;
    top:8.328rem;
}
.eightTwoSeven-text{
    width: .54rem;
    height: .54rem;
    font-size: .192rem;
    line-height: .192rem;
    position: absolute;
    color: #fff;
    left: 1.6rem;
    top: 0.96rem;
}
.extra{
    width:2.26rem;
    height:1.704rem;
    position:absolute;
    left:17.43rem;
    top:4.9rem;
}
.expand-bus{
    width:2.25rem;
    height:1.8rem;
    position:absolute;
    left:15.192rem;
    top:6.55rem;
}
.expand-bus-text{
    width:1.464rem;
    height:.4rem;
    left:.24rem;
    top:1.02rem;
    position:absolute;
    font-size: .192rem;
    line-height: .192rem;
}
.cpld-unit{
    width: 6.96rem;
    height: 2.472rem;
    position:absolute;
    left:5.05rem;
    top:.432rem;
}
.cpld-unit-text{
    width: 1rem;
    height: .4rem;
    position:absolute;
    left:.4rem;
    top:1.14rem;
    font-size: .192rem;
    line-height: .192rem;
}
.mc-unit{
    width:8.64rem;
    height:3.756rem;
    position:absolute;
    left:1.776rem;
    top:3.204rem;
}
.mc-unit-text{
    width:1rem;
    height:.4rem;
    position:absolute;
    left: 0.5rem;
    top:3.156rem;
    font-size: .192rem;
    line-height: .192rem;
}
.ir-unit{
    width:1.968rem;
    height:3.756rem;
    position:absolute;
    left:10.4rem;
    top: 3.204rem;
}
.ir-unit-text{
    width:1rem;
    height:.4rem;
    position:absolute;
    left:1.08rem;
    top:.28rem;
    font-size: .192rem;
    line-height: .192rem;
}
.alu-reg-unit{
    width:6.996rem;
    height:3.12rem;
    position:absolute;
    top:6.95rem;
    left:1.776rem;
}
.alu-reg-unit-text{
    width:1.692rem;
    height:.4rem;
    left:1.62rem;
    top:2.16rem;
    position:absolute;
    font-size: .192rem;
    line-height: .192rem;
}
.cpu-bus{
    width:3.6rem;
    height:1.56rem;
    position:absolute;
    left:8.77rem;
    top:6.95rem;
}
.cpu-bus-text{
    width:1.464rem;
    height:.4rem;
    left:.54rem;
    top:.924rem;
    position:absolute;
    font-size: .192rem;
    line-height: .192rem;
}
.pc-ar{
    width:3.6rem;
    height:1.56rem;
    position:absolute;
    left:8.77rem;
    top:8.51rem;
}
.pc-ar-text-1{
    width:1.464rem;
    height:.4rem;
    position:absolute;
    left:.25rem;
    top:.66rem;
    font-size: .192rem;
    line-height: .192rem;
}
.pc-ar-text-2{
    width:1.464rem;
    height:.4rem;
    position:absolute;
    left:.35rem;
    top:.996rem;
    font-size: .192rem;
    line-height: .192rem;
}
.cpu-text{
    width:9.24rem;
    height:3.96rem;
    position:absolute;
    left:5.892rem;
    top:2.93rem;
    font-size: .25rem;
    line-height: .25rem;
}
.system-bus{
    width:2.22rem;
    height:6.84rem;
    position:absolute;
    left:12.804rem;
    top:3.204rem;
}
.system-bus-text-1{
    width:1.08rem;
    height:.42rem;
    position:absolute;
    left:.216rem;
    top:1.128rem;
    font-size: .192rem;
    line-height: .192rem;
}
.system-bus-text-2{
    width:1.08rem;
    height:.42rem;
    position:absolute;
    left:.216rem;
    top:3.66rem;
    font-size: .192rem;
    line-height: .192rem;
}
.system-bus-text-3{
    width:1.08rem;
    height:.42rem;
    position:absolute;
    left:.216rem;
    top:4.92rem;
    font-size: .192rem;
    line-height: .192rem;
}
.system-bus-text{
    width:9.24rem;
    height:3.96rem;
    position:absolute;
    left:13.404rem;
    top:2.93rem;
    font-size: .25rem;
    line-height: .25rem;
}
.time-control-unit{
    width: 5.196rem;
    height:2.472rem;
    position:absolute;
    left:12rem;
    top:.432rem;
}
.time-control-unit-text{
    width:1.3rem;
    height:.4rem;
    position:absolute;
    top:1.14rem;
    left:.4rem;
    font-size: .192rem;
    line-height: .192rem;
}
.expansion-unit{
    width:2.472rem;
    height:2.472rem;
    position:absolute;
    top:.432rem;
    left:17.19rem;
}
.expansion-unit-text{
    width:1.26rem;
    height:.36rem;
    position:absolute;
    top:2.15rem;
    left:1.4rem;
    font-size: .192rem;
    line-height: .192rem;
}
.text{
    position: absolute;
    color: #fff;
}
.sys-unit-text{
    width:.8rem;
    height:.48rem;
    left: .48rem;
    top: 1.14rem;
    font-size: .192rem;
    line-height: .192rem;
}
.power-source-text{    
    width:.672rem;
    height:.384rem;
    font-size: .192rem;
    line-height: .192rem;
    left:.54rem;
    top:1.116rem;
}
.wrapper {
    width: 100%;
    height: 100%;
    position: relative;
}
.head-menu{
    width:28.5rem;
    height:1.06rem;
    position: absolute;
}
.tree{
    width:3rem;
    height:18rem;
    top:1.06rem;
    position:absolute;
    background-color:#fff;
}
.tree-menu{
    width:3rem;
    height:18rem;
    position:absolute;
    background-color:#fff;
}
.layout-logo{
    width: 1.85rem;
    height: .58rem;
    left:.4rem;
    top:.3rem;
    background: #5b6270;
    position: absolute;
}
.layout-logo-text{
    width:1.06rem;
    height:.34rem;
    color: #fff;
    position:absolute;
    line-height:.2rem;
    font-size:.2rem;
    left: .4rem;
    top:.2rem;
}
</style>
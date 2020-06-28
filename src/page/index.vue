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
    width:25.6rem;
    height:18rem;
    left:3.27rem;
    top:1.26rem;
    background: #244475;
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
.card-image{
    background-image: url('../assets/实验箱背景.png');
    height:800px;
}
</style>
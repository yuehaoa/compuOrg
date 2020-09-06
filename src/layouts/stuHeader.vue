<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                        <div class="wrapper">
                            <div class="layout-logo-text">
                                实验平台
                            </div>
                        </div>
                    </div>
                    <div class="layout-button">
                        <Button type="primary" long @click="download">下载实验报告模板</Button>
                    </div>
                     <div class="layout-button2">
                        <Button type="primary" style="float:right;margin-right:15px;margin-top:15px" @click="sign('signOutTime')" v-if="isSignIn">签退</Button>
                    </div>
                     <div class="layout-button2">
                        <Button type="primary" style="float:right;margin-top:15px;margin-right:15px" @click="sign('signInTime')" :disabled="isSignIn">签到</Button>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu :active-name="activeMenu" theme="light" width="auto" :open-names="['实验成绩']">
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
                                <MenuItem name="1-1" :to="{name:'Experiment1'}">运算器</MenuItem>
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
                        </Submenu>
                        <Submenu name="实验成绩">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                实验成绩
                            </template>
                            <MenuItem name="我的实验成绩">我的实验成绩</MenuItem>
                        </Submenu>
                        <Submenu name="用户管理">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                用户管理
                            </template>
                            <MenuItem name="个人信息">个人信息</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <slot></slot>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
const axios = require("axios");
export default {
    data(){
        return{
            activeMenu:this.$route.name,
            isSignIn: false,
            date: '',
            hour: '',
            minute: ''
        }
    },
    mounted() {
        let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
        this.timer = setInterval(() => {
            _this.date = new Date(); // 修改数据date
            _this.hour = _this.date.getHours();
            _this.minute = _this.date.getMinutes();
        }, 1000)
    },
    methods:{
        download(){
            let link = document.createElement('a'); //创建a标签
            link.style.display = 'none';  //将a标签隐藏
            link.href = 'http://47.115.31.88:8080/实验模板.docx';  //给a标签添加下载链接
            link.setAttribute('download', '实验模板.doc'); // 要给a标签添加一个download属性，属性值就是文件名称 否则下载出来的文件是没有属性的
            document.body.appendChild(link);
            link.click(); //执行a标签*/
            document.body.removeChild(link);
        },
        sign(option){
            axios.post("/compuOrgService/api/usermanage/SignInOrOut", {signState: option})
                .then(response=>{
                    if(response.data.success) {
                        if(option === 'signInTime') {
                            this.$Message.success("签到成功")
                            this.isSignIn = !this.isSignIn;
                        }
                        else if(option === 'signOutTime') {
                             this.$Message.success("签退成功")
                        }
                    }
                })
        }
    }
}
</script>

<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-logo-text{
    width: 100px;
    height: 30px;
    color: #fff;
    position: absolute;
    line-height: 20px;
    font-size: 13px;
    left: 20px;
    top: 5px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-button{
    height: 30px;
    left: 150px;
    position: absolute;
}
</style>
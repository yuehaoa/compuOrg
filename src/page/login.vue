<template>
   <div class="body">
       <a class="about-software" @click="$router.push({'name':'aboutSoftware'})"><span style="font-size:14px;">关于软件</span></a>
        <div class="title">
            <div class="main-title">计算机硬件课程实验仿真平台</div>
            <div class="sub-title">厦门大学信息学院</div>
        </div>
        <!--  <div class="logo-form">
                <img src="../assets/login-logo.jpg"/>
            </div>
            <div class="title">
                <div class="main-title">计算机组成原理实验平台</div>
                <div class="sub-title">厦门大学信息学院</div>
            </div>-->
            <div id="login-form">
                <div class="container">
                    <div class="container-title">学生账号登录</div>
                    <div class="content">
                        <i-form v-show="method === 'password'" :model="passwordModel" :rules="passwordRules" ref="password">
                            <form-item prop="userName">
                                <i-input placeholder="手机号或邮箱" prefix="ios-contact" size="large" v-model="passwordModel.userName"/>
                            </form-item>
                            <form-item prop="password">
                                <i-input placeholder="密码" v-model="passwordModel.password" @keyup.enter.native="login()" @input="isPwd=true" prefix="ios-lock" size="large" type="password"/>
                            </form-item>
                            <form-item>
                                <i-button long size="large" type="primary" @click="login()" :loading="isloading">登 录</i-button>
                                <a href="javascript:;" class="to-mobile" @click="register()" style="float:right">忘记密码</a>
                            </form-item>
                        </i-form>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
const axios = require("axios");
let regex = require("@/regex")
export default {
    methods: {
        login () {
            let userName = this[this.method + "Model"].userName;
            let password = this[this.method + "Model"].password;
            let form = this.$refs[this.method];
            form.validate(v => {
                if (!v) {
                    return;
                }
                this.isloading = true;
                if(this.method === "password") {
                    axios.post('/compuOrgService/api/usermanage/login',{userName:this[this.method + "Model"].userName,password:this[this.method + "Model"].password})
                    .then(response =>{
                        if(response.data.success){
                            this.$Message.success("用户登录成功");
                            let roles = response.data.roles;
                            let direct = "";
                            if(roles.indexOf("student")>-1) direct = "/index";
                            else if(roles.indexOf("teacher")>-1) direct = "/exp1_List";
                            setTimeout(()=>{
                                this.$router.push(direct);
                            },1500);
                        }else{
                            this.$Message.error(response.data.msg);
                        }
                    })
                    .catch(error =>{
                        if(error.response){
                            this.$Message.error(error.message);
                        }else{
                            this.$Message.error("无法发送请求");
                        }
                    })
                    .finally(()=>{
                        this.isloading=false;
                    });
                }
                else if(this.method === "mobile") {
                    if(userName === "15102242777" && password === "123456") {
                        this.$router.push("/index")
                    } else{
                        this.$Message.warning("用户名或密码错误");
                    }
                }
                this.isloading = false;
            })

        }
    },
    data () {
        return {
            method: "password",
            passwordModel: {
                //userName: "admin",
                userName: "小王",
                //userName: "张老师"
                password: "88888888"
            },
            isRemember: true,
            isloading: false,
            mobileModel: {
                userName: "15102242777",
                password: "123456"
            },
            passwordRules: {
                userName: [
                    { required: true, message: "请输入正确的手机号或邮箱", trigger: 'submit' }
                ],
                password: { required: true, message: "请输入密码", trigger: 'submit' }
            },
            mobileRules: {
                userName: { required: true, pattern: regex.mobile, message: "请输入正确的手机号", trigger: 'submit' },
                password: { required: true, message: "请输入手机验证码", trigger: 'submit' }
            }
        }
    }
}
</script>
<style lang="less">
.body{
    background: url(../../src/image/login-bg.34416485.jpg) no-repeat center center fixed;
    background-size: cover;
    overflow-x: hidden;
    overflow-y: hidden;
    position: fixed;
    width: 100%;
    height:100%;
}
#login-form {
    background: url(../../src/image/login_box.731ee520.png);
    position: absolute;
    top: 24%;
    left: 59%;
    right: 30%;
    width: 487px;
    height: 524px;
    .forgot-link {
        color: #8c8c8c;
        font-size: 14px;
        float: right;
    }
    .to-mobile {
        color: #8c8c8c;
        font-size: 14px;
        float: left;
    }
    .third-login {
        text-align: left;
    }
    .register {
        text-align: right;
    }
}
.container{
    position:relative;
    top: 120px;
    margin: 0 auto;
    width: 370px;
    .container-title{
        text-align:center;
        color:#fff;
        font-size: 20px;
        line-height: 20px;
    }
    .content{
        margin-top:1.5rem;
    }
}
.logo-form{
    text-align: center;
    padding-bottom: 20px;
}
.title{
    margin: 0 auto;
    border-radius: 4px;
    font-size: 10px;
    text-align: center;
    color: #fff;
    margin-top: 50px;
}
.main-title{
    font-size: 50px;
    line-height: 50px;
}
.sub-title{
    margin-top: 8px;
    font-size: 30px;
    margin-bottom: 10px;
}
.about-software{
    float:right;
    color:white;
    width:80px;
    height:40px;
    border:none;
    padding:10px;
}
</style>
<template>
    <div id="login-form">
        <div class="logo-form">
            <img src="../assets/login-logo.jpg"/>
        </div>
        <div class="title">
            <div class="main-title">计算机组成原理实验平台</div>
            <div class="sub-title">厦门大学信息学院</div>
        </div>
        <i-form v-show="method === 'password'" :model="passwordModel" :rules="passwordRules" ref="password">
            <form-item prop="userName">
                <i-input placeholder="手机号或邮箱" prefix="ios-contact" size="large" style="width:340px" v-model="passwordModel.userName"/>
            </form-item>
            <form-item prop="password">
                <i-input placeholder="密码" v-model="passwordModel.password" @keyup.enter.native="login()" @input="isPwd=true" prefix="ios-lock" size="large" type="password" style="width:340px"/>
                <checkbox v-model="isRemember" style="float:left;font-size:15px">记住密码</checkbox>
                <a class="forgot-link" :to="{name:'Forgot'}">忘记密码?</a>
            </form-item>
            <form-item>
                <i-button long size="large" type="primary" style="width:340px" @click="login()" :loading="isloading">登 录</i-button>
                <a href="javascript:;" class="to-mobile" @click="method='mobile'">使用手机短信登录</a>
            </form-item>
        </i-form>
        <i-form v-show="method === 'mobile'" :model="mobileModel" ref="mobile" :rules="mobileRules">
            <form-item prop="userName">
                <i-input placeholder="手机号" prefix="ios-contact" size="large" style="width:340px" v-model="mobileModel.userName" />
            </form-item>
            <i-input prop="password" :mobile="mobileModel.userName" size="large" style="width:340px" v-model="mobileModel.password" />
            <form-item>
                <i-button long size="large" type="primary" @click="login()" :loading="isloading">登 录</i-button>
                <a href="javascript:;" class="to-mobile" @click="method='password'">使用账号密码登录</a>
            </form-item>
        </i-form>
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
                    axios.post('/compuOrgTest/api/usermanage/login',{userName:this[this.method + "Model"].userName,password:this[this.method + "Model"].password})
                    .then(response =>{
                        if(response.data.success){
                            this.$Message.success("用户登录成功");
                            setTimeout(()=>{
                                this.$router.push("/index");
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
                userName: "admin",
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
#login-form {
    max-width: 400px;
    padding-left: 16px;
    padding-right: 16px;
    margin: 0 auto;
    background-color: #fff;
    padding: 40px 28px 48px;
    margin-bottom: 64px;
    border: 1px solid #e9e9e9;
    border-radius: 4px;
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
.logo-form{
    max-width: 200px;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 20px;
}
.title{
    margin: 0 auto;
    border-radius: 4px;
    font-size: 10px;
    text-align: center;
    max-width: 300px;
}
.main-title{
    font-size: 32px;
    line-height: 32px;
    color: #262626;
}
.sub-title{
    color: #595959;
    margin-top: 8px;
    font-size: 18px;
    margin-bottom: 10px;
}
</style>
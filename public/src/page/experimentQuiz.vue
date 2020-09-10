<template>
    <Layout :style="{padding: '0 50px',background:'#fff'}">
        <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
            <Layout>
                <Content :style="{padding: '0 24px', minHeight: '280px', background: '#fff'}">
                    <Form label-position="top">
                        <p style="font-size:25px;margin-bottom:20px;">实验一小测</p>
                        <FormItem v-for="(item,index) in quizQuestion"
                        v-bind:key="index">
                            <template slot="label" >
                                <div style="font-size:20px">{{index+1}}、{{item.title}}</div>
                            </template>                      
                            <Input v-model="item.answer" type="textarea" :rows="3" placeholder="Enter something..." />
                        </FormItem>
                    </Form>
                </Content>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Affix>
                    <Card dis-hover>
                        <p style="font-size:25px;">剩余时间：</p>
                        <p style="font-size:40px;text-align: center;">{{this.minute}}:{{this.second}}</p>
                        <Button type="success" long @click="submit">提交</Button>
                    </Card>
                    </Affix>
                </Sider>
            </Layout>
        </Content>
    </Layout>
</template>

<script>
const axios = require("axios");
export default {
    data(){
        return{
            quizQuestion:[],
            answerSet:[],
            minutes:30,
            seconds:0,
            flag: ''
        }
    },
    mounted(){
        this.flag = this.$route.params.dataObj;
        this.add();
        this.generateExam();
    },
    computed:{
        second: function () {
                return this.num(this.seconds)
         },
        minute: function () {
            return this.num(this.minutes)
         },
    },
    watch:{
        second: {
            handler(newVal) {
                this.num(newVal)
            }
        },
        minute: {
            handler(newVal) {
                this.num(newVal)
            }
        },
    },
    methods:{
        generateExam() {
            axios.post("/compuOrgService/api/exammanage/generateExam", {flag: this.flag})
            .then(response =>{
                this.quizQuestion = response.data.data;
                let i= 0;
                for(;i<this.quizQuestion.length;i++) {
                    this.quizQuestion[i].answer = "";
                }
            })
        },
        submit() {
            if(confirm("确认提交答案")===true){
                axios.post("/compuOrgService/api/exammanage/uploadTest", {expID: this.flag , exams: this.quizQuestion})
                .then(response =>{
                    if(response.data.success) {
                        this.$Message.success("提交成功");
                        setTimeout(()=>{
                            this.$router.push('/experiment1');
                        },1500);
                    }
                })
            }
        },
        num:function (n){
            return n<10?'0'+n:''+n
        },
        add(){
            var _this=this;
            var time= setInterval( ()=> {
                    if (_this.minutes != 0 &&_this.seconds === 0) {
                        _this.minutes -=1;
                        _this.seconds = 59;
                    }  else if (_this.minutes === 0 && _this.seconds === 0) {
                        window.clearInterval(time);
                        this.$router.push("/quizOver");
                    } 
                    else {
                       _this.seconds -= 1;
                    }
                }, 1000)
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
    color: #f5f7f9;
    text-align: center;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>
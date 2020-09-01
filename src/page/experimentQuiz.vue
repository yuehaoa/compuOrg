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
                                <div>{{index+1}}、{{item}}</div>
                            </template>
                        
                            <Input :v-model="item" v-bind:key="index" type="textarea" :rows="3" placeholder="Enter something..." />
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
export default {
    data(){
        return{
            quizQuestion:['题目一','题目二','题目三'],
            answerSet:[],
            minutes:0,
            seconds:10
        }
    },
    mounted(){
        this.add();
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
        num:function (n){
            return n<10?'0'+n:''+n
        },
        add(){
            var _this=this;
            var time= setInterval( ()=> {
               console.log(_this.minutes+":"+_this.seconds);
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
        },
        submit(){
            if(confirm("确认提交答案")===true){
                this.$router.push('/experiment1');
            }
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
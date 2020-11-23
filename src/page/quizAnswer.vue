<template>
    <Layout style="background:#fff;">
        <Form label-position="top" style="padding:0 20px;">
            <Affix>
            <Row type="flex" style="background-color:rgba(255, 255, 255, 0.5);">
                <i-col span="4">
                    <Button :to="{name:'Exp1_List'}" v-if="!isStudent">
                        <Icon type="ios-arrow-back" />返回
                    </Button>
                    <Button :to="{name:'stuIndex'}" v-else>
                        <Icon type="ios-arrow-back" />返回
                    </Button>
                </i-col>
                <i-col span='16'></i-col>
                <i-col span='2' >
                    <Button type="primary" style="float:right;" @click="submit" v-if="!isStudent">
                        保存
                    </Button>
                </i-col>
            </Row>
            </Affix>
            <p style="font-size:25px;margin:15px 0;">实验一小测</p>
            <FormItem v-for="(item,index) in quizQuestion"
            v-bind:key="index" class="formItem">
                <template slot="label" >
                    <p class="text">{{index+1}}、{{item.title}}</p>
                </template>
                <p class="text" style="padding-bottom:10px;border-bottom:1px dashed #fff;">作答情况：{{item.answer}}</p>
                <Row type="flex">
                    <i-col span='2'>
                        <p class="text">选项评分：</p>
                    </i-col>
                    <i-col span="6"  v-if="!isStudent">
                        <RadioGroup v-model="item.score">
                            <Radio label="0">
                                <span>0分</span>
                            </Radio>
                            <Radio label="3">
                                <span>3分</span>
                            </Radio>
                            <Radio label="5">
                                <span>5分</span>
                            </Radio>
                            <Radio label="10">
                                <span>10分</span>
                            </Radio>
                        </RadioGroup>
                    </i-col>
                    <i-col span='6'>
                        <p class="text" v-if="item.score!= ''">{{item.score}} 分</p>
                        <p class="text" v-else>0分</p>
                    </i-col>
                    <i-col span='2'></i-col>
                    <i-col span='3'  v-if="!isStudent">
                        <p class="text" align='right'>自定义评分：</p>
                    </i-col>
                    <i-col span="3"  v-if="!isStudent">
                        <Input v-model="item.score" size="small" placeholder="输入得分" style=""/>
                    </i-col>
                </Row>
                <Row type='flex'>
                    <i-col span='2'>
                        <p class="text">该题批语：</p>
                    </i-col>
                    <i-col span='22'>
                        <Input v-model="item.comment" type="textarea" :rows='2' placeholder="请输入批语" :disabled ="isStudent"/>
                    </i-col>
                </Row>
            </FormItem>
        </Form>
    </Layout>
</template>

<script>
const axios = require("axios");
export default {
    mounted() {
        this.studentId = this.$route.params.studentId;
        this.flag = this.$route.params.flag;
        this.isStudent = this.$route.params.isStudent;
       // this.getStudentExam()
    },
    data(){
        return{
            studentId: '',
            quizQuestion:[
                {
                    title: "什么是ALU单元",
                    answer:"算术逻辑单元 Arithmetic Logic Unit, ALU是中央处理器CPU的执行单元，是所有中央处理器的核心组成部分"
                },
                {
                    title: "为什么在实验开始前将时序与操作台单元的开关 KK2 置为‘单拍’档",
                    answer:""
                },
                {
                    title: "请简述如何将数据存入LDA",
                    answer:"置 LDA=1，LDB=0，连续按动时序单元的 ST 按钮，产生一个 T4 上沿，则将二进制数01100101 置入暂存器 A 中，暂存器 A 的值通过 ALU 单元的 A7…A0 八位 LED 灯显示"
                },
                {
                    title: "请简述如何将数据存入LDB",
                    answer:" LDA=0，LDB=1，连续按动时序单元的 ST 按钮，产生一个 T4 上沿，则将二进制数10100111 置入暂存器 B 中，暂存器 B 的值通过 ALU 单元的 B7…B0 八位 LED 灯显示"
                },
                {
                    title: "请简述如何进行加法运算",
                    answer:""
                }
            ],
            score:'',
            value:'',
            value5:'',
            flag: "",
            exams: [],
            totalScore: 0,
            isStudent: false
        }
    },
    methods: {
        getStudentExam() {
            axios.post("/compuOrgService/api/exammanage/getStudentExam", {studentId: this.studentId, expID: this.flag})
                .then(response=>{
                    this.quizQuestion = response.data.data;
                })
        },
        submit() {
            this.quizQuestion.forEach(value=>{
                this.totalScore+= isNaN(parseFloat(value.score)) ?  0 :parseFloat(value.score);
                //console.log(this.totalScore+ ' '+isNaN(parseFloat(value.score)))
            })

            axios.post("/compuOrgService/api/exammanage/uploadTest", {exams: this.quizQuestion, totalScore: this.totalScore, studentId: this.studentId, expID: this.flag})
                .then(response=>{
                    if(response.data.success) {
                        this.$Message.success("保存成功");
                        setTimeout(()=>{
                            this.$router.go(-1)
                        },1000)
                    }
                })
        }
    }
}
</script>

<style scoped>
.formItem{
    padding: 10px 20px;
    background-color: rgb(242, 242, 242);
}
.text{
    font-size: 14px;
}
</style>
<template>
    <Card >
        <p slot="title">实验成绩</p>
        <Row type="flex" >
            <i-col span="8">
                <i-input placeholder="请输入实验名进行搜索" search enter-button @on-search="searchExperiment"></i-input>
            </i-col>
        </Row>
        <Tabs value="未批改">
            <TabPane label="未批改" name="未批改">
                <Table stripe :columns="columns" :data="this.explist" ref="stuTable">
                    <template v-slot:action="props">
                        <Button type="primary" @click="toDetail(props.row)">查看</Button>
                    </template>
                </Table>
            </TabPane>
            <TabPane label="已批改" name="已批改">
                <Table stripe :columns="columns2" :data="this.explistFinished" ref="stuTable">
                    <template slot-scope="{ row }" slot="score">
                        <p>{{ row.score }}分</p>
                    </template>
                    <template v-slot:action="props">
                        <Button type="primary" @click="toDetail(props.row)">查看</Button>
                    </template>
                </Table>
            </TabPane>
        </Tabs>
    </Card>
</template>

<script>
const axios = require("axios");
export default {
    data(){
        return{
             columns: [
                {
                    title:"实验名",
                    key:"name"
                },
                {
                    title: '操作',
                    slot: 'action',
                    align: 'center'
                }
            ],
            columns2: [
                {
                    title:"实验名",
                    key:"name"
                },
                {
                    title:"成绩",
                    slot:"score"
                },
                {
                    title: '操作',
                    slot: 'action',
                    align: 'center'
                }
            ],
            explist:[
            ],
            explistFinished: [],
            studentId: ""
        }
    },
    mounted() {
        this.getExperiments();
        this.getFinishedExperiment();
    },
    methods:{
        getExperiments() {
            axios.post("/compuOrgService/api/exammanage/getExperiments", {})
             .then(response=>{
                 this.explist = response.data.data;
                 this.studentId = response.data.studentId;
             })
        },
        getFinishedExperiment() {
            axios.post("/compuOrgService/api/exammanage/getExperiments", {finished: true})
             .then(response=>{
                 this.explistFinished = response.data.data;
                  this.studentId = response.data.studentId;
             })
        },
        searchExperiment(condition){
            return condition;
            //this.stulist = this.data.filter(e => e.stuName.indexOf(condition) !== -1 );
        },
        toDetail(row){
            this.$router.push({
                name:'QuizAnswer',
                params: {
                    name: 'studentId',
                    studentId: this.studentId,
                    flag: row.experID,
                    isStudent: true
                }
            });
        },
        delStu(){

        }
    }
}
</script>
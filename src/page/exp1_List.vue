<template>
    <Card >
        <p slot="title">实验一作业列表</p>
        <Row type="flex" >
            <i-col span="8">
                <i-input placeholder="请输入用户名进行搜索" search enter-button @on-search="searchStudent"></i-input>
            </i-col>
        </Row>
        <Tabs value="未批改">
            <TabPane label="未批改" name="未批改">
                <Table stripe :columns="columns" :data="this.stulist" ref="stuTable">
                    <template v-slot:action="props">
                        <Button type="primary" @click="toDetail(props.row)">小测评分</Button>
                    </template>
                </Table>
            </TabPane>
            <TabPane label="已批改" name="已批改">
                <Table stripe :columns="columns2" :data="this.stulistFinished" ref="stuTable">
                    <template slot-scope="{ row }" slot="score">
                        <p>{{ row.score }}分</p>
                    </template>
                    <template v-slot:action="props">
                        <Button type="primary" @click="toDetail(props.row)">修改</Button>
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
                    title:"姓名",
                    key:"name"
                },
                {
                    title:"班级",
                    key:"classname"
                },
                {
                    title:"年级",
                    key:"grade"
                },
                {
                    title: '操作',
                    slot: 'action',
                    align: 'center'
                }
            ],
            columns2: [
                {
                    title:"姓名",
                    key:"name"
                },
                {
                    title:"班级",
                    key:"classname"
                },
                {
                    title:"年级",
                    key:"grade"
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
            stulist:[
                {
                    stuName:"小赵",
                    class:"1班",
                    grade:"2018级本科"
                },
                {
                    stuName:"小李",
                    class:"1班",
                    grade:"2018级本科"
                },
                {
                    stuName:"小孙",
                    class:"1班",
                    grade:"2018级本科"
                }
            ],
            stulistFinished: []
        }
    },
    mounted() {
        this.getStudents();
        this.getFinishedStudent();
    },
    methods:{
        getStudents() {
            axios.post("/compuOrgService/api/usermanage/getStudents", {})
             .then(response=>{
                 this.stulist = response.data.students;
             })
        },
        getFinishedStudent() {
            axios.post("/compuOrgService/api/usermanage/getStudents", {finished: true})
             .then(response=>{
                 this.stulistFinished = response.data.students;
                 this.getStudents();
             })
        },
        searchStudent(condition){
            return condition;
            //this.stulist = this.data.filter(e => e.stuName.indexOf(condition) !== -1 );
        },
        toDetail(row){
            this.$router.push({
                name:'QuizAnswer',
                params: {
                    name: 'studentId',
                    studentId: row.studentId,
                    flag: "001",
                    isStudent: false
                }
            });
        },
        delStu(){

        }
    }
}
</script>
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
            <TabPane label="已批改" name="已批改">标签二的内容</TabPane>
        </Tabs>
    </Card>
</template>

<script>
export default {
    data(){
        return{
             columns: [
                {
                    title:"姓名",
                    key:"stuName"
                },
                {
                    title:"班级",
                    key:"class"
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
            ]
        }
    },
    methods:{
        searchStudent(condition){
            return condition;
            //this.stulist = this.data.filter(e => e.stuName.indexOf(condition) !== -1 );
        },
        toDetail(){
            this.$router.push({name:'QuizAnswer'});
        },
        delStu(){

        }
    }
}
</script>
<template>
    <Card >
        <p slot="title">学生信息列表</p>
        <Row type="flex" >
            <i-col span="8">
                <Input placeholder="请输入用户名进行搜索" search enter-button @on-search="searchStudent"/>
            </i-col>
        </Row>
        <Table stripe :columns="columns" :data="this.stulist" ref="stuTable" style="margin-top:20px;">
        </Table>
    </Card>
</template>

<!--template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1" class="head-menu">
                    <div class="layout-logo">
                        <div class="wrapper">
                            <div class="layout-logo-text">
                                实验平台
                            </div>
                        </div>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu :active-name="1" theme="light" width="auto" :open-names="['1']">
                        <MenuItem name="1">                     
                                <Icon type="ios-navigate"></Icon>
                                学生信息                    
                        </MenuItem>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                实验信息
                            </template>
                            <MenuItem name="2-1">实验1</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                个人信息
                            </template>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <Card >
                            <p slot="title">学生信息列表</p>
                            <Row type="flex" >
                                <i-col span="8">
                                    <i-input placeholder="请输入用户名进行搜索" search enter-button @on-search="searchStudent"></i-input>
                                </i-col>
                            </Row>
                            <Divider />
                            <i-table stripe :columns="columns" :data="this.stulist" ref="stuTable">
                                <template v-slot:action="props">
                                    <Button type="primary" @click="toDetail(props.row)">详情</Button>
                                </template>
                            </i-table>
                        </Card>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template-->

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
                    title: '学号',
                    key: "num"
                },
                {
                    title:"班级",
                    key:"class"
                },
                {
                    title:"年级",
                    key:"grade"
                }
            ],
            stulist:[
                {
                    stuName:"小赵",
                    class:"1班",
                    grade:"2018级本科",
                    num: "20180001"
                },
                {
                    stuName:"小李",
                    class:"1班",
                    grade:"2018级本科",
                     num: "20180002"
                },
                {
                    stuName:"小孙",
                    class:"1班",
                    grade:"2018级本科",
                    num: "20180003"
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

        },
        delStu(){

        }
    }
}
</script>
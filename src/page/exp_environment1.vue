<template>
    <div>
        <Layout>
            <Content :style="{background: '#fff'}">
                <Tabs value="allCourse">
                    <TabPane label="全部" name="allCourse">
                        <Row type="flex" style="margin-bottom:5px;" >
                            <i-col span="4">
                                <Button type="primary">
                                    <Icon type="ios-add-circle-outline" size="18"/>
                                    加入课程
                                    </Button>
                            </i-col>
                            <i-col span="4" offset="16">
                                <Button style="float:right;">
                                    <Icon type="ios-paper-outline" size="18"/>
                                    归档管理
                                    </Button>
                            </i-col>
                        </Row>
                        <Row type="flex">
                            <i-col span="6" style="margin:5px 0 10px 0;"
                                v-for="(item,index) in theoryCourseList"
                                v-bind:key="index"
                            >
                                <Card style="width:93%;">
                                    <template slot="title" >
                                        <p>{{item.name}}</p>
                                    </template>
                                    <template slot="extra">
                                        <Icon type="ios-paper-outline" size="18"/>
                                        <span>归档</span>
                                    </template>
                                    <p>年级：{{item.grade}}</p>
                                    <p>教师：{{item.teacher}}</p>
                                    <p>专业：{{item.major}}</p>
                                    <p>上课时间：{{item.startDate}}至{{item.endDate}}</p>
                                    <Row style="margin-top:10px;">
                                        <i-col span="8">
                                            <a>
                                                <Icon type="ios-qr-scanner" size="24"/>
                                            </a>
                                        </i-col>
                                        <i-col span="8">
                                            <a>
                                                <Icon type="ios-people-outline" size="24"/>
                                                &nbsp;45
                                            </a>
                                        </i-col>
                                        <i-col span="8" >
                                            <Tag color="orange" style="float:right;">理论课程</Tag>
                                        </i-col>
                                    </Row>
                                </Card>
                            </i-col>
                            <i-col span="6" style="margin:5px 0 10px 0;"
                                v-for="(item,index) in expCourseList"
                                v-bind:key="index"
                            >
                                <Card style="width:93%;">
                                    <template slot="title" >
                                        <p>{{item.name}}</p>
                                    </template>
                                    <template slot="extra">
                                        <Icon type="ios-paper-outline" size="18"/>
                                        <span>归档</span>
                                    </template>
                                    <p>年级：{{item.grade}}</p>
                                    <p>教师：{{item.teacher}}</p>
                                    <p>专业：{{item.major}}</p>
                                    <p>上课时间：{{item.startDate}}至{{item.endDate}}</p>
                                    <Row style="margin-top:10px;">
                                        <i-col span="8">
                                            <a>
                                                <Icon type="ios-qr-scanner" size="24"/>
                                            </a>
                                        </i-col>
                                        <i-col span="8">
                                            <a>
                                                <Icon type="ios-people-outline" size="24"/>
                                                &nbsp;45
                                            </a>
                                        </i-col>
                                        <i-col span="8" >
                                            <Tag color="geekblue" style="float:right;">实验课程</Tag>
                                        </i-col>
                                    </Row>
                                </Card>
                            </i-col>
                        </Row>
                    </TabPane>
                    <TabPane label="理论课程" name="theoryCourse">
                        <Row type="flex" style="margin-bottom:5px;" >
                            <i-col span="4">
                                <Button type="primary">
                                    <Icon type="ios-add-circle-outline" size="18"/>
                                    加入课程
                                    </Button>
                            </i-col>
                            <i-col span="4" offset="16">
                                <Button style="float:right;">
                                    <Icon type="ios-paper-outline" size="18"/>
                                    归档管理
                                    </Button>
                            </i-col>
                        </Row>
                        <Row type="flex" >
                            <i-col span="6" style="margin:5px 0 10px 0;"
                                v-for="(item,index) in theoryCourseList"
                                v-bind:key="index"
                            >
                                <Card style="width:93%;">
                                    <template slot="title" >
                                        <p>{{item.name}}</p>
                                    </template>
                                    <template slot="extra">
                                        <Icon type="ios-paper-outline" size="18"/>
                                        <span>归档</span>
                                    </template>
                                    <p>年级：{{item.grade}}</p>
                                    <p>教师：{{item.teacher}}</p>
                                    <p>专业：{{item.major}}</p>
                                    <p>上课时间：{{item.startDate}}至{{item.endDate}}</p>
                                    <Row style="margin-top:10px;">
                                        <i-col span="8">
                                            <a>
                                                <Icon type="ios-qr-scanner" size="24"/>
                                            </a>
                                        </i-col>
                                        <i-col span="8">
                                            <a>
                                                <Icon type="ios-people-outline" size="24"/>
                                                &nbsp;45
                                            </a>
                                        </i-col>
                                        <i-col span="8" >
                                            <Tag color="orange" style="float:right;">理论课程</Tag>
                                        </i-col>
                                    </Row>
                                </Card>
                            </i-col>
                        </Row>
                    </TabPane>
                    <TabPane label="实验课程" name="expCourse">
                        <Row type="flex" style="margin-bottom:5px;" >
                            <i-col span="4">
                                <Button type="primary">
                                    <Icon type="ios-add-circle-outline" size="18"/>
                                    加入课程
                                    </Button>
                            </i-col>
                            <i-col span="4" offset="16">
                                <Button style="float:right;">
                                    <Icon type="ios-paper-outline" size="18"/>
                                    归档管理
                                    </Button>
                            </i-col>
                        </Row>
                        <Row type="flex" >
                            <i-col span="6" style="margin:5px 0 10px 0;"
                                v-for="(item,index) in expCourseList"
                                v-bind:key="index"
                            >
                                <Card style="width:93%;">
                                    <template slot="title" >
                                        <p>{{item.name}}</p>
                                    </template>
                                    <template slot="extra">
                                        <Icon type="ios-paper-outline" size="18"/>
                                        <span>归档</span>
                                    </template>
                                    <p>年级：{{item.grade}}</p>
                                    <p>教师：{{item.teacher}}</p>
                                    <p>专业：{{item.major}}</p>
                                    <p>上课时间：{{item.startDate}}至{{item.endDate}}</p>
                                    <Row style="margin-top:10px;">
                                        <i-col span="8">
                                            <a>
                                                <Icon type="ios-qr-scanner" size="24"/>
                                            </a>
                                        </i-col>
                                        <i-col span="8">
                                            <a>
                                                <Icon type="ios-people-outline" size="24"/>
                                                &nbsp;45
                                            </a>
                                        </i-col>
                                        <i-col span="8" >
                                            <Tag color="geekblue" style="float:right;">实验课程</Tag>
                                        </i-col>
                                    </Row>
                                </Card>
                            </i-col>
                            
                        </Row>
                    </TabPane>
                </Tabs>
            </Content>
        </Layout>
    </div>
</template>

<script>
export default {
    data(){
        return{
            expCourseList:[
                {
                    name:"实验一",
                    grade:"2018",
                    teacher:"张老师",
                    major:"软件工程",
                    startDate:"2020-09-15",
                    endDate:"2021-01-31"
                },
                {
                    name:"实验二",
                    grade:"2018",
                    teacher:"张老师",
                    major:"软件工程",
                    startDate:"2020-09-15",
                    endDate:"2021-01-31"
                },
                {
                    name:"实验三",
                    grade:"2018",
                    teacher:"张老师",
                    major:"软件工程",
                    startDate:"2020-09-15",
                    endDate:"2021-01-31"
                },
                {
                    name:"实验四",
                    grade:"2018",
                    teacher:"张老师",
                    major:"软件工程",
                    startDate:"2020-09-15",
                    endDate:"2021-01-31"
                },
                {
                    name:"实验五",
                    grade:"2018",
                    teacher:"张老师",
                    major:"软件工程",
                    startDate:"2020-09-15",
                    endDate:"2021-01-31"
                },
            ],
            theoryCourseList:[
                {
                    name:"课程一",
                    grade:"2018",
                    teacher:"张老师",
                    major:"软件工程",
                    startDate:"2020-09-15",
                    endDate:"2021-01-31"
                },
                {
                    name:"课程二",
                    grade:"2018",
                    teacher:"张老师",
                    major:"软件工程",
                    startDate:"2020-09-15",
                    endDate:"2021-01-31"
                },
                {
                    name:"课程三",
                    grade:"2018",
                    teacher:"张老师",
                    major:"软件工程",
                    startDate:"2020-09-15",
                    endDate:"2021-01-31"
                },
                {
                    name:"课程四",
                    grade:"2018",
                    teacher:"张老师",
                    major:"软件工程",
                    startDate:"2020-09-15",
                    endDate:"2021-01-31"
                },
                {
                    name:"课程五",
                    grade:"2018",
                    teacher:"张老师",
                    major:"软件工程",
                    startDate:"2020-09-15",
                    endDate:"2021-01-31"
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>

</style>

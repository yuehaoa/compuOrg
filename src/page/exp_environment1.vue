<template>
    <Layout>
        <Content>
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
                            v-for="(item,index1) in theoryCourseList"
                            v-bind:key="index1"
                        >
                            <Card style="width:93%;" @click.native="toDetail">
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
                            v-for="(item,index2) in expCourseList"
                            v-bind:key="index2"
                        >
                            <Card style="width:93%;" @click.native="toDetail">
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
                            <Card style="width:93%;" @click.native="toDetail">
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
                            <div class="courseCard" style="width: 302px !important;min-width: 302px !important;">
                                <div class="course-container">
                                    <div class="course-top" :style="item.color">
                                        <div class="courseTopMask">
                                            <div class="courseName">
                                                {{item.name}}
                                            </div>
                                            <div style="display: flex; flex-direction: row; justify-content: flex-end; margin-right: 15px;">
                                                <div class="click-white">
                                                    <Icon type="ios-paper-outline" size="18"/>
                                                    <span>归档</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="courseContent">
                                            <div class="courseContentDetail">
                                                <span class="DetailText">年级：</span>
                                                <span>{{item.grade}}</span>
                                            </div>
                                            <div class="courseContentDetail">
                                                <span class="DetailText">教师：</span>
                                                <span>{{item.teacher}}</span>
                                            </div>
                                            <div class="courseContentDetail">
                                                <span class="DetailText">专业：</span>
                                                <span>{{item.major}}</span>
                                            </div>
                                            <div class="courseContentDetail">
                                                <span class="DetailText">开课时间：</span>
                                                <span>{{item.startDate}}至{{item.endDate}}</span>
                                            </div>
                                        </div>
                                        <div class="card-bottom-container">
                                            <div class="courseBottom">
                                                <div class="courseCode">
                                                    <Icon type="ios-qr-scanner" size="24"/>
                                                    <span>QSGAU3</span>
                                                </div>
                                                <div class="courseUser">
                                                    <Icon type="ios-people-outline" size="24"/>
                                                    <span class="stuNumber">{{item.member}}</span>
                                                </div>
                                            </div>
                                            <div class="theoryCourse">{{item.type}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </i-col>
                        
                    </Row>
                </TabPane>
            </Tabs>
        </Content>
    </Layout>
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
                    endDate:"2021-01-31",
                    member: 45,
                    color:"background-image: linear-gradient(rgb(2, 100, 232), rgb(1, 188, 250))",
                    type: "实验课程"
                },
                {
                    name:"实验二",
                    grade:"2018",
                    teacher:"张老师",
                    major:"软件工程",
                    startDate:"2020-09-15",
                    endDate:"2021-01-31",
                    color:"background-image: linear-gradient(rgb(2, 100, 232), rgb(1, 188, 250))",
                    member: 45,
                    type: "实验课程"
                },
                {
                    name:"实验三",
                    grade:"2018",
                    teacher:"张老师",
                    major:"软件工程",
                    startDate:"2020-09-15",
                    endDate:"2021-01-31",
                    color:"background-image: linear-gradient(rgb(2, 100, 232), rgb(1, 188, 250))",
                    member: 45,
                    type: "实验课程"
                },
                {
                    name:"实验四",
                    grade:"2018",
                    teacher:"张老师",
                    major:"软件工程",
                    startDate:"2020-09-15",
                    endDate:"2021-01-31",
                    color:"background-image: linear-gradient(rgb(2, 100, 232), rgb(1, 188, 250))",
                    member: 45,
                    type: "实验课程"
                },
                {
                    name:"实验五",
                    grade:"2018",
                    teacher:"张老师",
                    major:"软件工程",
                    startDate:"2020-09-15",
                    endDate:"2021-01-31",
                    color:"background-image: linear-gradient(rgb(2, 100, 232), rgb(1, 188, 250))",
                    member: 45,
                    type: "实验课程"
                },
            ],
            theoryCourseList:[
                {
                    name:"课程一",
                    grade:"2018",
                    teacher:"张老师",
                    major:"软件工程",
                    startDate:"2020-09-15",
                    endDate:"2021-01-31",
                    color:"background-image: linear-gradient(rgb(2, 100, 232), rgb(1, 188, 250))",
                    member: 45
                },
                {
                    name:"课程二",
                    grade:"2018",
                    teacher:"张老师",
                    major:"软件工程",
                    startDate:"2020-09-15",
                    endDate:"2021-01-31",
                    member: 45
                },
                {
                    name:"课程三",
                    grade:"2018",
                    teacher:"张老师",
                    major:"软件工程",
                    startDate:"2020-09-15",
                    endDate:"2021-01-31",
                    member: 45
                },
                {
                    name:"课程四",
                    grade:"2018",
                    teacher:"张老师",
                    major:"软件工程",
                    startDate:"2020-09-15",
                    endDate:"2021-01-31",
                    member: 45
                },
                {
                    name:"课程五",
                    grade:"2018",
                    teacher:"张老师",
                    major:"软件工程",
                    startDate:"2020-09-15",
                    endDate:"2021-01-31",
                    member: 45
                },
            ]
        }
    },
    methods:{
        toDetail() {
           this.$router.push({name:"exp_environment2"});
        },
    }
}
</script>

<style lang="less" scoped>
.courseCard{
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    min-width: 260px;
    max-width: 400px;
    height: 255px;
    padding: 5px;
    .course-container{
        width: 100%;
        height: 100%;
        background: #fff;
        border-radius: 10px;
        position: relative;
        .course-top{
            display: inline-block;
            height: 87px;
            width: 100%;
            color: #fff;
            cursor: pointer;
            position: relative;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            background-size: 100% 100%;
            -webkit-background-size: 100% 100%;
        }
    }
}
.courseTopMask{
    top: 0;
    left: 0;
    right: 0;
    height: 87px;
    position: absolute;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: rgba(0,0,0,.3);
}
.courseName{
        width: 190px;
        line-height: 20px;
        color: #fff;
        font-size: 16px;
        margin: 10px 0 5px 20px;
        height: 40px;
        word-wrap: break-word;
        overflow: hidden;
    }
.click-white{
    color: #fff;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.courseContent{
    cursor: default;
    font-size: 14px;
    text-align: left;
    background: #fff;
    padding: 10px 20px 0 20px;
    margin-top: 87px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.courseContentDetail{
    color: #333;
    line-height: 25px;
    height: 25px;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: keep-all;
    overflow: hidden;
}
.DetailText{
    font-size: 12px;
    color: #666;
}
.card-bottom-container{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.courseBottom{
    padding: 10px 20px;
    font-size: 14px;
    color: #666;
    width: 180px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.courseCode{
    color: #67aef7;
    cursor: pointer;
}
.stuNumber{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
}
.courseUser{
    color: #67aef7;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
}
.theoryCourse{
    width: 58px;
    height: 20px;
    line-height: 20px;
    margin-top: 10px;
    background-color: #46c0bd;
    color: #fff;
    font-size: 12px;
    border-top: 1px solid #30a3a0;
    border-bottom: 1px solid #30a3a0;
    border-left: 1px solid #30a3a0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    text-align: center;
    float: right;
}
</style>

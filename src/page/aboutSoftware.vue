<template>
    <Layout>
        <Content>
            <Card :bordered="false" dis-hover style="margin:20px 0;min-height:600px;border-radius:0px;">
                <h1 class="text1"><strong>关于软件</strong></h1>
                <div >
                    <h2 class="text1"><strong>软件名称：</strong>计算机硬件课程实验仿真平台</h2>
                    <!--p style="font-size:18px;line-height:20px;">计算机硬件课程实验仿真平台</p=-->
                    <h2 class="text1"><strong>制作单位：</strong>厦门大学信息学院</h2>
                    <!--p style="font-size:18px;line-height:20px;">厦门大学信息学院</p-->
                    <h2 class="text1"><strong>版本号：</strong>v1.0.0</h2>
                    <!--p style="font-size:18px;line-height:20px;">v1.0.0</p-->
                    <h2 class="text1"><strong>软件简介：</strong></h2>
                     <p class="text2">
                        《计算机组成原理》是计算机以及相关学科的专业基础课程。目前其硬件实验环节主要以线下实验箱为主。受到实验场地以及实验箱数量的限制，学生只能分批次进行现场布线，而且由于只能在有限的实验学时完成，导致学生照本宣科，对于实验原理无法深刻的理解，法随时进行预习和复习。
                     </p>
                     <p class="text2">
                         为此，我们开发了一个辅助的仿真虚拟网络平台，该平台界面友好，功能完善，用户角色设置有教师和学生两种角色。
                     </p>
                     <p class="text2">
                         学生可以通过学生端登录到软件平台，可以完成实验布线，实验检查，实验提交，现场答题以及实验报告提交等任务，并且可以做到实验预习以及复习。
                     </p>
                     <p class="text2">
                         老师则可以通过教师端进行实验报告检查，实验小测发布与评分，实时查看学生实验情况界面，并能与学生进行互动。老师也可以同时查看多位同学的实验情况，从而减轻老师的负担，提高效率。
                     </p> 
                     <p class="text2">
                         利用该平台，将原有的线下操作改进为方便灵活的线上操作；同时也可基于此平台进行灵活的实验扩展，有效促进课程理论的消化吸收。使之成为辅助学生学习《计算机组成原理》课程的一个实用工具。
                     </p>
                     <h2 class="text1"><strong>主要功能：</strong></h2>
                     <ul class="text2" style="padding-left:2em;">
                         <li>
                             实验前预习：学生在实验前利用实验指导手册熟悉此次实验项目的内容和步骤；系统给出实验布线的示范，使得学生用户可以提前了解实验的整个运行过程。
                         </li>
                         <li>
                            实验中：学生通过仿真平台完成相应实验项目的线路布线，并可进行布线的查错，帮助学生理解需要完成实验对应的理论知识。
                         </li>
                         <li>
                            系统对实验项目针对的线路进行判断与校验，纠正学生用户的布线错误。
                         </li>
                         <li>
                             实验结束：学生可进行现场小测，实验报告提交，查看老师批改小测结果。
                         </li>
                         <li>
                             老师可以查看学生实验现场布线的情况，可以发布实验的测试题目，并能够批改和查看每位同学的测试记录。
                         </li>
                     </ul>
                </div>
            </Card>
        </Content>
    </Layout>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.text1{
    font-weight: 400;
    margin:15px 0;
}
.text2{
    font-size:18px;
    line-height:25px;
    margin-bottom:10px;
}
</style>
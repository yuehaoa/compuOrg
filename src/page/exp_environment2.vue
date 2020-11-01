<template>
    <Layout>
        <Content :style="{background: '#fff'}" >
            <Row type="flex">
                <i-col span="5">
                   <Tag color="blue" style="float:left;">进行中</Tag>
                   <div class="text" style="float:left;">指导手册</div> 
                </i-col>
                <i-col span="6" offset="9">
                   <p class="text">实训时间剩余：
                       <span style="color:red;">91天12小时12分</span>
                </p> 
                </i-col>
                <i-col span="4" >
                   <Button long type="primary" :to="{name:'exp_environment3'}">
                       <span style="font-size:18px;">进入实验环境</span> 
                   </Button>
                </i-col>
            </Row>
            <List border size="large" style="margin:15px 0 15px 0;font-size:15px;">
                <template slot="header">
                    <div style="font-size:15px;">
                        <Icon type="ios-podium" />
                        <span>阶段一</span>
                    </div>
                </template>
                <ListItem style="padding:16px 40px 16px 40px;">实验资料</ListItem>
            </List>
        </Content>
    </Layout>
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>

<style lang="less" scoped>
.text{
    line-height: 38px;
    font-size: 18px;
}
</style>

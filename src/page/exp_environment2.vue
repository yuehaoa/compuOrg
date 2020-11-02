<template>
    <Layout>
        <Content style="margin-top:30px;background:#fff;minHeight:500px;" >
            <Row type="flex" style="padding:15px 20px;border-bottom:1px solid #C4C4C4;">
                <i-col span="5">
                   <div class="text"><strong>指导手册</strong></div> 
                </i-col>
                <i-col span="6" offset="9">
                   <p class="text">实训时间剩余：
                       <span style="color:red;">91天12小时12分</span>
                </p> 
                </i-col>
                <i-col span="4" >
                   <Button long type="primary" :to="{name:this.expPage}">
                       <span style="font-size:18px;">进入实验环境</span> 
                   </Button>
                </i-col>
            </Row>
            <Menu style="width:100%;" active-name="1" :open-names="['1']">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-podium" size="18"/>
                        阶段一
                    </template>
                        <MenuItem name="1-1">
                            <Icon type="md-list-box" size="18"/>
                             任务一
                        </MenuItem>
                </Submenu>
            </Menu>
        </Content>
    </Layout>
</template>

<script>
export default {
    data(){
        return{
            expPage:null,
        }
    },
    created(){
        this.expPage="Experiment"+this.$route.query.index.toString();
        console.log(this.expPage);
    }
}
</script>

<style lang="less" scoped>
.text{
    line-height: 38px;
    font-size: 18px;
}
.ivu-menu-vertical.ivu-menu-light:after {
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background: white;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
}
</style>

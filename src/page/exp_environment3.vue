<template>
    <Layout>
        <Row type="flex" style="background:#222;padding:10px 0;">
            <i-col span="10" offset="9" >
                <Icon type="md-alarm" size="26" style="color:white;"/>
                <span class="text" style="color:white;line-height:35px;">
                    距离实验结束还有
                    <span class="text" style="color:red;">
                        91天12时23分
                    </span>
                </span>
            </i-col>
            <i-col span="2" offet="3">
                <Button type="error" size="large" :to="{name:'exp_environment2'}">
                    <Icon type="ios-power" size="24"/>
                    <span>退出实验</span>
                </Button>
            </i-col>
        </Row>
        <Content style="background:#fff;">
            <div class="demo-split">
                <Split v-model="split1">
                    <div slot="left" class="demo-split-pane text">
                        <div style="border-bottom:1px solid #515a6e;">
                            <Icon type="ios-list" size="35"/>
                            <span>实验一：实验箱的初步使用</span>
                        </div>
                        <p class="text2">实验目的：</p>
                        <p class="text3">完成实验一内容</p>
                        <p class="text2">实验任务：</p>
                        <p class="text3">完成实验一内容,完成实验一内容,完成实验一内容,
                            完成实验一内容,完成实验一内容,完成实验一内容</p>
                    </div>
                    <div slot="right" >
                            <ButtonGroup vertical style="float:right;">
                                <Button icon="logo-facebook"></Button>
                                <Button icon="logo-twitter"></Button>
                                <Button icon="logo-googleplus"></Button>
                                <Button icon="logo-tumblr"></Button>
                            </ButtonGroup>
                    </div>
                </Split>
            </div>
        </Content>
    </Layout>
</template>

<script>
export default {
    data(){
        return{
            split1:0.5,
        }
    }
}
</script>

<style lang="less" scoped>


.svg-style{
    position:absolute;
    background:transparent;
    width:24rem;
    height:14rem;
    left:4.8rem;
    top:1.26rem;
    z-index: 1;
}
.text{
    line-height: 38px;
    font-size: 18px;
}
.text2{
    line-height: 50px;
    font-size: 24px;
}
.text3{
    line-height: 25px;
    font-size: 14px;
}
.demo-split{
    height: 500px;
    border: 1px solid #dcdee2;
}
.demo-split-pane{
    padding:10px 20px;
}
</style>
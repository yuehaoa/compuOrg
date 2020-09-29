<template>
    <Content :style="{padding: '20px 50px',background:'#fff'}">
        <Button @click="backward">
            <Icon type="ios-arrow-back" />返回
        </Button>
        <Row type="flex">
            <i-col span="8"></i-col>
            <i-col span="8">
                <Card style="margin:70px 0;" dis-hover>
                    <div style="height: 150px;text-align: center;line-height:150px;text-font:16px;">
                        <Icon type="ios-warning" size="30"/>
                        测试已结束
                    </div>
                </Card>
            </i-col>
            <i-col span="8"></i-col>
        </Row>
    </Content>
</template>

<script>
export default {
    methods:{
        backward(){
            this.$router.push('experiment1');
        }
    }
}
</script>

<style scoped>

</style>
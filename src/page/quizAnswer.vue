<template>
    <Layout style="background:#fff;">
        <Form label-position="top" style="padding:0 20px;">
            <Affix>
            <Row type="flex" style="background-color:rgba(255, 255, 255, 0.5);">
                <i-col span="4">
                    <Button :to="{name:'Exp1_List'}">
                        <Icon type="ios-arrow-back" />返回
                    </Button>
                </i-col>
                <i-col span='16'></i-col>
                <i-col span='2' >
                    <Button type="primary" style="float:right;">
                        保存
                    </Button>
                </i-col>
                <i-col span='2'>
                    <Button type="success" style="float:right;">
                        提交
                    </Button>
                </i-col>
            </Row>
            </Affix>
            <p style="font-size:25px;margin:15px 0;">实验一小测</p>
            <FormItem v-for="(item,index) in quizQuestion"
            v-bind:key="index" class="formItem">
                <template slot="label" >
                    <p class="text">{{index+1}}、{{item}}</p>
                </template>
                <p class="text" style="padding-bottom:10px;border-bottom:1px dashed #fff;">答：这题我会做</p>
                <Row type="flex">
                    <i-col span='2'>
                        <p class="text">选项评分：</p>
                    </i-col>
                    <i-col span="6">
                        <RadioGroup >
                            <Radio label="0">
                                <span>0分</span>
                            </Radio>
                            <Radio label="3">
                                <span>3分</span>
                            </Radio>
                            <Radio label="5">
                                <span>5分</span>
                            </Radio>
                            <Radio label="10">
                                <span>10分</span>
                            </Radio>
                        </RadioGroup>
                    </i-col>
                    <i-col span='2'></i-col>
                    <i-col span='3'>
                        <p class="text" align='right'>自定义评分：</p>
                    </i-col>
                    <i-col span="3">
                        <Input v-model="value" size="small" placeholder="输入得分" style=""/>
                    </i-col>
                </Row>
                <Row type='flex'>
                    <i-col span='2'>
                        <p class="text">该题批语：</p>
                    </i-col>
                    <i-col span='22'>
                        <Input v-model="value5" type="textarea" :rows='2' placeholder="请输入批语" />
                    </i-col>
                </Row>
            </FormItem>
        </Form>
    </Layout>
</template>

<script>
export default {
    data(){
        return{
            quizQuestion:['题目一','题目二','题目三'],
            score:'',
            value:'',
            value5:''
        }
    }
}
</script>

<style scoped>
.formItem{
    padding: 10px 20px;
    background-color: rgb(242, 242, 242);
}
.text{
    font-size: 14px;
}
</style>
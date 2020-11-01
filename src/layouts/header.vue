<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                        <div class="wrapper">
                            <!--img src="../assets/login-logo.jpg" alt="信息学院logo" width="50px"/-->
                            <div class="layout-logo-text">
                                计算机组成原理
                            </div>
                        </div>
                    </div>
                    <div class="layout-nav">
                        <Row type="flex">
                           <i-col span="3" offset="12" class="position">
                               <MenuItem>
                               <Icon type="ios-search" size="24" />
                               </MenuItem>
                           </i-col> 
                            <i-col span="3" class="position">
                                <MenuItem>
                               <Icon type="ios-add-circle-outline" size="24"/>
                               </MenuItem>
                           </i-col>     
                           <i-col span="3" class="position">
                               <MenuItem>
                               <Icon type="ios-help-circle-outline" size="24"/>
                               </MenuItem>
                           </i-col> 
                           <i-col span="3"  class="position">
                               <MenuItem>
                                 <Dropdown>
                                    <Icon type="ios-settings-outline" size="24"/>
                                    <DropdownMenu slot="list">
                                        <DropdownItem>
                                            <Icon type="ios-contact-outline" size="16"/>
                                            个人设置
                                        </DropdownItem>
                                        <DropdownItem divided>
                                            <Icon type="ios-power" size="16"/>
                                            退出
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                               <Icon type="ios-settings-outline" size="24"/>
                               </MenuItem>
                           </i-col> 
                        </Row>
                    </div>
                </Menu>
            </Header>
            <Layout :style="{padding: '0 50px'}">
                <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                    <slot></slot>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>
export default {
    data(){
        return{
            activeMenu:this.$route.name
        }
    },
    methods:{
        
    }
}
</script>

<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 130px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-logo-text{
    width: 100px;
    height: 30px;
    color: #fff;
    position: absolute;
    line-height: 20px;
    font-size: 13px;
    left: 20px;
    top: 5px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.position{
    float: right;
}
</style>
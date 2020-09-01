<template>
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
            <Content>
                <slot></slot>
            </Content>
         </Layout>
</template>

<script>
export default {
    
}
</script>

<style>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    
}
</style>

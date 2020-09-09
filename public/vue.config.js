module.exports = {
    outputDir: 'dist',   //build输出目录
    assetsDir: '', //静态资源目录（js, css, img）
    lintOnSave: true, //是否开启eslint
    publicPath: '/compuorg/',
    devServer: {
        proxy: {
            '/compuOrgService/api': {
                target: 'http://47.115.31.88:8080/', //API服务器的地址
               // target:'http://localhost:8088',
                changeOrigin: true,
                pathRewrite: {
                    '^/compuOrgService': '/compuOrgService'
                }
            }
        }
    }
}
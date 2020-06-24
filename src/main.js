import Vue from 'vue'
import App from './App.vue'
import iView from 'iview' // 引入iview依赖
import 'iview/dist/styles/iview.css' // 引入iview css样式
Vue.use(iView) //使用iview组件 
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

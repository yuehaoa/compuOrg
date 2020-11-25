import Vue from 'vue'
import App from './App.vue'
import iView from 'iview' // 引入iview依赖
import 'iview/dist/styles/iview.css' // 引入iview css样式
import VueRouter from 'vue-router'


import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
Vue.component('vue-draggable-resizable', VueDraggableResizable)

import vueCropper from 'vue-cropper' // 截图插件
Vue.use(vueCropper)

Vue.use(iView) //使用iview组件 
Vue.use(VueRouter)
Vue.config.productionTip = false
const routes = [
  {
    
    path: '/', 

    redirect: '/login'

    //redirect: '/test'
  },
  {
    path: "/index",
    name: 'stuIndex',
    meta:{layout:"stuHeader"},
    component: () => import("./page/index.vue")
  },
  {
    path: "/login",
    component: () => import("./page/login.vue")
  },
  {
    path: "/experiment1",
    name: "Experiment1",
    component: () => import("./page/experiment1.vue")
  },
  {
    path: "/experiment1.2",
    component: () => import("./page/experiment1.2.vue")
  },
  {
    path: "/experimentQuiz",
    name:"ExperimentQuiz",
    meta:{layout:"expHeader"},
    component: () => import("./page/experimentQuiz.vue")
  },
  {
    path: "/quizOver",
    name:'QuizOver',
    meta:{layout:"expHeader"},
    component: () => import("./page/quizOver.vue")
  },
  {
    path:'/stuList',
    meta: {layout: "teacherHeader"},
    name:'StuList',
    component: () => import("./page/stuList.vue")
  },
  {
    path:'/exp1_List',
    meta: {layout: "teacherHeader"},
    name:'Exp1_List',
    component: () => import("./page/exp1_List.vue")
  },
  {
    path:'/quizAnswer',
    meta: {layout: "teacherHeader"},
    name:'QuizAnswer',
    component: () => import("./page/quizAnswer.vue")
  },
  {
    path: "/PrtScr",
    component: () => import("./page/PrtScr.vue")

  },
  {
     path: "/experiment2",
     name:"Experiment2",
     component: () => import("./page/experiment2.vue")
  },
  {
    path: "/experiment3",
    name:"Experiment3",
    component: () => import("./page/experiment3.0.vue")
 },
 {
  path: "/experiment4",
  name:"Experiment4",
  component: () => import("./page/experiment4.0.vue")
  },
  {
    path: "/exp_environment1",
    meta:{layout:"header"},
    name:"exp_environment1",
    component: () => import("./page/exp_environment1.vue")
  },
  {
    path: "/exp_environment2",
    meta:{layout:"header"},
    name:"exp_environment2",
    component: () => import("./page/exp_environment2.vue")
  },
  {
    path: "/exp_environment3",
    meta:{layout:"empty"},
    name:"exp_environment3",
    component: () => import("./page/exp_environment3.vue")
  },
  {
    path: "/aboutSoftware",
    meta:{layout:"header"},
    name:"aboutSoftware",
    component: () => import("./page/aboutSoftware.vue")
  }

]
const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

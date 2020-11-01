<template>
    <component :is='layout' id='app'>
        <div>
            <router-link to="/login"></router-link>
            <router-link to="/index"></router-link>
            <template>
                <transition name="fade" mode="out-in" :duration="250">
                    <router-view></router-view>
                </transition>
            </template>
        </div>
    </component>
</template>

<script>
import teacherLayout from '@/layouts/teacherHeader.vue'
import emptyLayout from '@/layouts/empty.vue'
import expLayout from '@/layouts/expHeader.vue'
import stuLayout from '@/layouts/stuHeader.vue'
import stuLayout2 from '@/layouts/header.vue'
export default {
  name: 'app',
  components:{
      'teacherHeader-layout':teacherLayout,
      'empty-layout':emptyLayout,
      'expHeader-layout':expLayout,
      'stuHeader-layout':stuLayout,
      'header-layout':stuLayout2
  },
  data() {
    return{
      comName:'login',
    }
  },
  computed: {
        layout() {
            let layout = (this.$route.meta.layout || "empty") + "-layout";
            console.log(layout)
            return layout;
        }
    }
}
</script>


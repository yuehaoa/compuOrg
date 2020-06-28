<template>
  <div>
    <router-link to="/login"></router-link>
    <router-link to="/index"></router-link>
    <transition name="fade" mode="out-in" :duration="250">
          <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return{
      comName:'login',
    }
  }
}
</script>


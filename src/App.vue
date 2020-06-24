<template>
  <div id="app">
    <component :is="comName"></component>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import index from './page/index.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    index
  },
  data() {
  return{
  comName:'index',
  }
 },
 methods: {  
 }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

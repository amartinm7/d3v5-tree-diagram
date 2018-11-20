<template>
  <div id="app">
    <svg-tree msg="Welcome"/>
  </div>
</template>

<script>
import SvgTree from './components/SvgTree.vue'
export default {
  name: 'app',
  components: {
    SvgTree
  },
  mounted: function () {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

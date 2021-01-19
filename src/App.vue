<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <G2Demo msg="g2" />
    <G2PlotDemo msg="G2Plot" />
    <F2Demo msg="f2" />
    <G6Demo msg="g6" />
  </div>
</template>

<script>
import G2Demo from './components/G2Demo'
import G2PlotDemo from './components/G2PlotDemo'
import F2Demo from './components/F2Demo.vue'
import G6Demo from './components/G6Demo.vue'

export default {
  name: 'App',
  components: {
    G2Demo,
    G2PlotDemo,
    F2Demo,
    G6Demo
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

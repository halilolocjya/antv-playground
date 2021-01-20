<template>
  <div id="app">
    <G2Demo msg="G2-Demo" />
    <G2PlotDemo msg="G2Plot-Demo" />
    <F2Demo msg="F2-Demo" />
    <G6Demo msg="G6-Demo" />
    <X6Demo msg="X6-demo" />
    <L7Demo msg="L7-demo" />
    <AVADemo msg="AVA-demo" />
  </div>
</template>

<script>
import G2Demo from './components/G2Demo'
import G2PlotDemo from './components/G2PlotDemo'
import F2Demo from './components/F2Demo/index'
import G6Demo from './components/G6Demo/index'
import X6Demo from './components/X6Demo/index'
import L7Demo from './components/L7Demo/index'
import AVADemo from './components/AVADemo/index'

export default {
  name: 'App',
  components: {
    G2Demo,
    G2PlotDemo,
    F2Demo,
    G6Demo,
    X6Demo,
    L7Demo,
    AVADemo
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
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-shrink: 0;
  flex-wrap: wrap;
}
.wrapper-item{
  display: block;
  width: 45%;
  /* height: 800px; */
  position: relative;

}
</style>

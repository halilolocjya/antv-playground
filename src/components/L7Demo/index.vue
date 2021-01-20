<template>
  <div class="wrapper-item">
    <h1>{{ msg }}</h1>
    <div id="containerL7" />
  </div>
</template>

<script>
import { Scene } from '@antv/l7'
import { GaodeMap } from '@antv/l7-maps'

export default {
  name: 'L7Demo',
  props: {
    msg: String
  },
  mounted() {
    new Scene({
      id: 'containerL7',
      map: new GaodeMap({
        style: 'light',
        pitch: 0,
        center: [107.054293, 35.246265],
        zoom: 4.056,
        plugin: ['AMap.ToolBar']
      })
    })
  }
}
</script>

<style>
#containerL7{
  position:relative;
  width: 800px;
  height: 800px;
  margin: 0 auto;
}
</style>

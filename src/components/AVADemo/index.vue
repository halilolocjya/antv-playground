<template>
  <div class="wrapper-item">
    <h1>{{ msg }}</h1>
    <div id="containerAVA" />
  </div>
</template>

<script>
import { autoChart } from '@antv/chart-advisor'

export default {
  name: 'AVADemo',
  props: {
    msg: String
  },
  mounted() {
    const data = [
      { f1: '2019-01', f2: 100 },
      { f1: '2019-02', f2: 300 },
      { f1: '2019-03', f2: 340 },
      { f1: '2019-04', f2: 330 }
    ]

    autoChart(document.getElementById('containerAVA'), data, {
      toolbar: true,
      development: true,
      purpose: 'Trend' // Comparison

    })
  }
}
</script>

<style>
#containerAVA{
  position:relative;
  width: 800px;
  height: 800px;
  margin: 0 auto;
}
</style>

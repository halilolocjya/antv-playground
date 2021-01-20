<template>
  <div class="wrapper-item">
    <h1>{{ msg }}</h1>
    <canvas id="containerF2" width="400" height="260" />
  </div>
</template>

<script>
import F2 from '@antv/f2'

export default {
  name: 'F2DEMO',
  props: {
    msg: String
  },
  mounted() {
    this.initTTable()
  },
  methods: {
    initTTable() {
      // F2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
      const data = [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 }
      ]
      // Step 1: 创建 Chart 对象
      const chart = new F2.Chart({
        id: 'containerF2',
        pixelRatio: window.devicePixelRatio // 指定分辨率
      })
      // Step 2: 载入数据源
      chart.source(data)
      // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴// draw a column chart
      chart.interval().position('genre*sold').color('genre')
      // step 4: 渲染图表
      chart.render()
    }
  }
}
</script>

<style scoped lang="scss">

</style>

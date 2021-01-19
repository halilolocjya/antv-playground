<template>
  <div class="wrapper-item">
    <h1>{{ msg }}</h1>
    <div id="containerG2" />
  </div>
</template>

<script>
import { Chart } from '@antv/g2'
import './dataSet'
export default {
  name: 'G2Demo',
  props: {
    msg: String
  },
  data() {
    return {
      renderData: [
        { x: 'Sports', y: 275 },
        { x: 'Strategy', y: 115 },
        { x: 'Action', y: 120 },
        { x: 'Shooter', y: 350 },
        { x: 'Other', y: 150 }
      ],
      chart: null
    }
  },
  mounted() {
    // Step 1: 创建 Chart 对象
    this.chart = new Chart({
      container: 'containerG2', // 指定图表容器 ID
      width: 600, // 指定图表宽度
      height: 300 // 指定图表高度
    })
    this.renderChart()

    // 数据更新
    setTimeout(() => {
      this.renderData.push({ x: 'Action1', y: 320 })
      console.log(1)
      // 只需要更新数据的更新
      this.chart.changeData(this.renderData)
      // 需要更新图表的更新
    //    this.chart.render();
    }, 5000)
  },
  methods: {
    renderChart() {
      const chart = this.chart
      // Step 2: 载入数据源
      chart.data(this.renderData)

      chart.scale('y', {
        alias: '销售量'
      })
      chart.axis('y', {
        title: {}
      })
      chart.scale('y', {
        min: 0,
        max: 600
      })

      // 图例
      chart.legend({
        position: 'bottom', // 设置图例的显示位置
        itemGap: 20 // 图例项之间的间距
      })
      // Step 3: 创建图形语法，绘制柱状图
      const interval = chart.interval().position('x*y')
      // Step 4: 渲染图表
      chart.render()

      // more
      // 根据特定的条件查找 Element 实例
      const someElements = interval.getElementsBy((element) => {
        const data = element.getData()
        return data.y === 275
      })
      // 将 Interval 的第一个 Element 实例设置为 active 状态
      interval.elements[0].setState('active', false)
      console.log(someElements)

      chart.interval().position('x*y')
        .state({
          active: {
            style: {
              background: 'red',
              stroke: '#000'
            }
          }
        })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}

</style>

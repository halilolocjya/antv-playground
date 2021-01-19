<template>
  <div class="wrapper-item">
    <h1>{{ msg }}</h1>
    <!-- step1: 创建图表容器 -->
    <div id="containerG2Plot" />

  </div>
</template>

<script>
import { Line } from '@antv/g2plot'

export default {
  components: {

  },
  props: {
    msg: String

  },
  data() {
    return {
      // step2: 引入数据。G2Plot 的数据源格式是 JSON 数组，数组的每个元素是一个标准 JSON 对象，部分图表除外。
      renderData: [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 }
      ],
      line: null
    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {
    this.render()
    setTimeout(() => {
      this.renderData = this.renderData.concat([
        { year: '2000', value: 19 },
        { year: '2001', value: 12 }
      ])
      this.line.changeData(this.renderData)
    }, 6000)
  },
  methods: {
    render() {
      //   step3: 创建并渲染图表
      this.line = new Line('containerG2Plot', {

        data: this.renderData,
        xField: 'year',
        yField: 'value',
        // 自定义折线颜色
        color: '#FE740C',
        // 更改辅助数据点大小及样式
        point: {
          size: 5,
          shape: 'diamond',
          style: {
            stroke: '#FE740C',
            lineWidth: 2,
            fillOpacity: 0.6
          }
        },
        smooth: true
        //   seriesField: 'year'
        //   legend: {
        //     position: 'top-left'
        //   }
        //   width: 600, // 指定图表宽度
        //   height: 300 // 指定图表高度
      })
      const line = this.line
      // element 添加点击事件
      line.on('element:click', (e) => {
        console.log(e)
      })

      // annotation 添加点击事件
      line.on('annotation:click', (e) => {
        console.log(e)
      })

      // axis-label 添加点击事件
      line.on('axis-label:click', (e) => {
        console.log(e)
      })

      line.render()
    }

  }
}
</script>

<style scoped lang="scss">

</style>

<template>
  <div class="wrapper-item">
    <h1>{{ msg }}</h1>
    <div id="containerX6" />
  </div>
</template>

<script>
import { Graph } from '@antv/x6'
import '@antv/x6-vue-shape'
import Count from './Count.vue'

export default {
  name: 'X6Demo',
  props: {
    msg: String
  },
  mounted() {
    const data = { num: 0 }
    const graph = new Graph({
      container: document.getElementById('containerX6'),
      width: 600,
      height: 600,
      grid: true
    })

    graph.addNode({
      shape: 'vue-shape',
      width: 200,
      height: 200,
      x: 100,
      y: 100,
      attrs: {
        body: {
          width: 200,
          height: 200,
          stroke: 'red'
        }
      },
      component: {
        template: `<count :num="num" @add="add()"></count>`,
        data() {
          return data
        },
        methods: {
          add: () => {
            data.num += 1
          }
        },
        components: {
          Count
        }
      }
    })
  }
}
</script>

<style scoped lang="scss">

</style>

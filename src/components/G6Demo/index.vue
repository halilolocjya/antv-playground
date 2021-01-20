<template>
  <div class="wrapper-item">
    <h1>{{ msg }}</h1>
    <div id="containerG6" />
  </div>
</template>

<script>
import G6 from '@antv/g6'

export default {
  name: 'G6Demo',
  props: {
    msg: String
  },
  mounted() {
    this.initTTable()
  },
  methods: {
    initTTable() {
      // F2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
      const data = {
        nodes: [
          {
            id: 'node1',
            label: 'Circle1',
            x: 150,
            y: 150
          },
          {
            id: 'node2',
            label: 'Circle2',
            x: 400,
            y: 150
          }
        ],
        edges: [
          {
            source: 'node1',
            target: 'node2'
          }
        ]
      }
      const graph = new G6.Graph({
        container: 'containerG6',
        width: 500,
        height: 500,
        defaultNode: {
          shape: 'circle',
          size: [100],
          color: '#5B8FF9',
          style: {
            fill: '#9EC9FF',
            lineWidth: 3
          },
          labelCfg: {
            style: {
              fill: '#fff',
              fontSize: 20
            }
          }
        },
        defaultEdge: {
          style: {
            stroke: '#e2e2e2'
          }
        }
      })

      graph.data(data)
      graph.render()
    }
  }
}
</script>

<style scoped lang="scss">

</style>

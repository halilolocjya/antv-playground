import DataSet from '@antv/data-set'

const data = [
  { gender: 'female', height: 161.2, weight: 51.6 },
  { gender: 'female', height: 167.5, weight: 59 },
  { gender: 'female', height: 159.5, weight: 49.2 },
  { gender: 'female', height: 157, weight: 63 },
  { gender: 'female', height: 155.8, weight: 53.6 },
  { gender: 'female', height: 170, weight: 59 },
  { gender: 'female', height: 159.1, weight: 47.6 },
  { gender: 'female', height: 166, weight: 69.8 },
  { gender: 'female', height: 176.2, weight: 66.8 },
  { gender: 'female', height: 160.2, weight: 75.2 },
  { gender: 'female', height: 172.5, weight: 55.2 },
  { gender: 'female', height: 170.9, weight: 54.2 },
  { gender: 'female', height: 172.9, weight: 62.5 }
]

const ds = new DataSet()

const dv = ds.createView().source(data)

dv.transform({
  type: 'aggregate',
  fields: ['height', 'weight'], // 统计字段集
  operations: ['min', 'max'], // 统计操作集
  as: ['avgHeight', 'avgWeight']
})

// 统计结果以 JSON 数组的格式存储在 dv.rows 中
const { avgHeight, avgWeight } = dv.rows[0]

// 165.2923076923077, 58.97692307692308
console.log(dv, avgHeight, avgWeight)

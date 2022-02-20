/**
 * Created by zane on 2022/1/12 23:14
 * @description .
 */
import { Node } from 'common/builder'

const table = new Node()
table.style = {
  width: '100%',
  height: '500px'
}
table.class = {}
table.props = {
  data: [
    {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    },
    {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    },
    {
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    },
    {
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }
  ]
}
table.columns = [
  {
    prop: 'date',
    label: '日期',
    width: 180
  },
  {
    prop: 'name',
    label: '姓名',
    width: 180
  },
  {
    prop: 'address',
    label: '地址'
  }
]
export default {
  type: 'ElTable',
  name: '表格',
  model: '',
  tag: 'El-Table',
  options: table.getJSON()
}

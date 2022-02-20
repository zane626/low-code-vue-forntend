/**
 * Created by zane on 2022/1/8 17:30
 * @description .
 */
import { Node } from 'common/builder'

const box = new Node()
box.style = {
  width: '100%'
}
box.class = { 'widget-box': true }
export default {
  type: 'Box',
  name: '盒子',
  children: [],
  model: '',
  tag: 'div',
  options: box.getJSON()
}

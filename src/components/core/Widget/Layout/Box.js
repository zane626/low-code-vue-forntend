/**
 * Created by zane on 2022/1/8 17:30
 * @description .
 */
import { Node } from 'common/builder'

const box = new Node()
box.style = {
  width: '100%',
  height: '50px'
}
box.class = { 'widget-box': true }
box.domProps.innerHTML = '123'
export default {
  name: '盒子',
  children: [],
  model: '',
  tag: 'div',
  options: box.getJSON()
}

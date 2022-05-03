<template>
  <div class="WidgetConfig">
    <h3>配置区域</h3>
    <component
      :is="component"
      :options="data.options"
    ></component>
  </div>
</template>

<script>
/**
 * Created by zane on 2021/12/1 00:55
 * @description .
 */
import _ from 'lodash'
import WidgetConfig from '../core/widgetConfig'

export default {
  name: 'WidgetConfig',
  components: {
    ...WidgetConfig
  },
  props: {
    data: Object,
    default: () => ({})
  },
  computed: {
    component () {
      const type = _.get(this.data, 'type', '')
      return type in WidgetConfig ? type : ''
    }
  },
  mounted () {
    console.log(this)
  }
}
</script>

<style lang="scss" scoped>
.WidgetConfig {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  text-align: left;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>

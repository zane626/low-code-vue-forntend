<template>
  <el-container class="Container">
    <el-aside>
      <Widget
        @on-add-field="handleField"
      />
    </el-aside>
    <el-main class="Container-main">
      <widget-canvas
        ref="widgetCanvas"
        :list="list"
      />
    </el-main>
    <el-aside width="500px">
      <WidgetConfig :data="focusValue"/>
    </el-aside>
  </el-container>
</template>

<script>
/**
 * Created by zane on 2021/12/1 00:52
 * @description .
 */
import Widget from './Widget'
import WidgetConfig from './WidgetConfig'
import WidgetCanvas from '../core/WidgetCanvas/WidgetCanvas'
import { BUILDER } from 'common/name'

export default {
  name: 'Container',
  provide () {
    const data = {}
    data[BUILDER] = this
    return data
  },
  components: {
    Widget,
    WidgetConfig,
    WidgetCanvas
  },
  props: {
    props: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      list: [],
      focusValue: {}
    }
  },
  methods: {
    handleField (item) {
      this.list.push(item)
      // this.$refs.widgetCanvas.addField(...arguments)
    },
    emitEvent (eventName, ...val) {
      this.$emit('listener:' + eventName, val)
    },
    setFocus (el) {
      this.focusValue = el
    }
  }
}
</script>

<style lang="scss" scoped>
.Container {
  display: flex;
  height: 100vh;

  .Container-main {
    height: 100%;
    overflow: auto;
  }
}
</style>

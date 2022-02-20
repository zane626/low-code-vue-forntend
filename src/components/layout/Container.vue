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
    <el-aside>
      <WidgetConfig :data="list"/>
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
      list: []
    }
  },
  methods: {
    handleField (item) {
      this.list.push(item)
      // this.$refs.widgetCanvas.addField(...arguments)
    },
    emitEvent (eventName, ...val) {
      this.$emit('listener:' + eventName, val)
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

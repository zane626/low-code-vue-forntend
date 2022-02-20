<template>
  <div class="WidgetConfig">
    <h3>配置区域</h3>
    <pre>{{ data }}</pre>
  </div>
</template>

<script>
/**
 * Created by zane on 2021/12/1 00:55
 * @description .
 */
export default {
  name: 'WidgetConfig',
  props: {
    data: [Object, Array],
    default: () => ({})
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.WidgetConfig {
  height: 100vh;
  overflow: auto;
  text-align: left;
}
</style>

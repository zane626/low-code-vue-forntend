<template>
  <div class="Widget">
    <div>Element-UI</div>
    <div>布局</div>
    <ul>
      <li
        v-for="item in LayoutComponents"
        :key="item"
        @click="handleField(LayoutConfig[item])"
      >{{ LayoutConfig[item].name }}
      </li>
    </ul>
    <div>表格</div>
  </div>
</template>

<script>
/**
 * Created by zane on 2021/12/1 00:55
 * @description .
 */
import _ from 'lodash'
import onlyKey from 'common/onlyKey'
import {
  BUILDER
} from 'common/name'
import {
  LayoutConfig
} from 'components/core/Widget/WidgetConfig'

export default {
  name: 'Widget',
  inject: [BUILDER],
  data () {
    return {
      LayoutConfig
    }
  },
  computed: {
    LayoutComponents ({ LayoutConfig }) {
      return _.get(this[BUILDER].props, 'layoutFields', [])
        .filter(key => key in LayoutConfig)
    }
  },
  methods: {
    handleField (item) {
      const value = _.cloneDeep(item)
      value.model = onlyKey.getKey()
      this.$emit('on-add-field', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.Widget {
}
</style>

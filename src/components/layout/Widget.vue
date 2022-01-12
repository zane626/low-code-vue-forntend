<template>
  <div class="Widget">
    <h3>元素</h3>
    <div class="title">布局</div>
    <draggable
      class="widget-menu-list"
      tag="ul"
      :list="LayoutComponents"
      :group="{ name: 'people', pull: 'clone', put: false }"
      :sort="false"
      ghostClass="ghost"
    >
      <li
        class="widget-menu-list-item"
        v-for="item in LayoutComponents"
        :key="item.model"
        @click="handleField(item)"
      >{{ item.name }}
      </li>
    </draggable>
    <div class="title">element</div>
    <draggable
      class="widget-menu-list"
      tag="ul"
      :list="ElementComponents"
      :group="{ name: 'people', pull: 'clone', put: false }"
      :sort="false"
      ghostClass="ghost"
    >
      <li
        class="widget-menu-list-item"
        v-for="item in ElementComponents"
        :key="item.model"
        @click="handleField(item)"
      >{{ item.name }}
      </li>
    </draggable>
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
  LayoutConfig,
  ElementConfig
} from 'components/core/Widget/WidgetConfig'
import draggable from 'vuedraggable'

export default {
  name: 'Widget',
  inject: [BUILDER],
  components: {
    draggable
  },
  data () {
    return {
      LayoutConfig,
      ElementConfig
    }
  },
  computed: {
    LayoutField ({ LayoutConfig }) {
      return _.get(this[BUILDER].props, 'layoutFields', [])
        .filter(key => key in LayoutConfig)
    },
    ElementField ({ ElementConfig }) {
      return _.get(this[BUILDER].props, 'elementFields', [])
        .filter(key => key in ElementConfig)
    },
    LayoutComponents ({
      LayoutField,
      LayoutConfig
    }) {
      return LayoutField.map(key => LayoutConfig[key])
    },
    ElementComponents ({
      ElementField,
      ElementConfig
    }) {
      return ElementField.map(key => ElementConfig[key])
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
  height: 100vh;
  overflow: auto;

  .title {
    padding: 10px 20px;
    margin: 0;
    font-size: 12px;
    font-weight: 400;
    color: #999;
  }

  .widget-menu-list {
    list-style: none;
    padding-left: 0;

    .widget-menu-list-item {
      display: block;
      font-size: 12px;
      line-height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #333;
      border-bottom: 1px solid #eee;
      background-color: #fff;
      cursor: pointer;
    }
  }
}
</style>

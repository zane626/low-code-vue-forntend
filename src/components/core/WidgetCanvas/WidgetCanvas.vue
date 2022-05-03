<script>
/**
 * Created by zane on 2022/1/8 16:59
 * @description 画布
 */
import _ from 'lodash'
import draggable from 'vuedraggable/src/vuedraggable'
import OnlyKey from 'common/onlyKey'
import { BUILDER } from 'common/name'
export default {
  name: 'WidgetCanvas',
  inject: [BUILDER],
  props: {
    currentLevel: {
      type: Number,
      default: 0
    },
    list: {
      required: true,
      type: Array
    }
  },
  components: {
    draggable
  },
  data () {
    return {}
  },
  computed: {},
  mounted () {
  },
  methods: {
    renderElement (h, item, slot = []) {
      if (this.canAddChild(item)) {
        return h(item.tag, {
          ...item.options,
          attrs: {
            ..._.get(item, 'options.attrs', {}),
            id: item.model
          }
        }, slot)
      } else {
        const self = this
        return h(item.tag, {
          ...item.options,
          data: self.addMockValue(item),
          attrs: {
            ..._.get(item, 'options.attrs', {}),
            id: item.model
          },
          scopedSlots: {
            default: function () {
              return self.renderSlots(h, item)
            }
          }
        })
      }
    },
    addMockValue (item) {
      const data = _.cloneDeep(item.options.props.data)
      switch (item.tag) {
        case 'El-Table':
          data.forEach((i) => {
            item.options.columns.forEach((column) => {
              if (!(column in i)) {
                i[column] = '填充数据'
              }
            })
          })
          break
      }
      return data
    },
    renderSlots (h, item) {
      switch (item.tag) {
        case 'El-Table': {
          return item.options.columns.map((col) => h('El-Table-Column', { props: col }))
        }
        default:
          return ''
      }
    },
    renderChildren (h, el) {
      if (this.canAddChild(el) && this.currentLevel < 1) {
        return (<widget-canvas list={el.children} currentLevel={this.currentLevel + 1}/>)
      } else {
        return ''
      }
    },
    canAddChild (item) {
      return 'children' in item
    },
    addField () {
    },
    handleStart () {
      // console.log('handleStart', ...arguments, this.currentLevel)
    },
    handleEnd () {
      // console.log('handleMoveEnd', ...arguments, this.currentLevel)
    },
    handleRemove () {
      // console.log('handleRemove', ...arguments, this.currentLevel)
    },
    handleChoose () {
      // console.log('handleChoose', ...arguments, this.currentLevel)
    },
    handleUnChoose () {
      // console.log('handleUnChoose', ...arguments, this.currentLevel)
    },
    handleSort () {
      // console.log('handleSort', ...arguments, this.currentLevel)
    },
    handleFilter () {
      // console.log('handleFilter', ...arguments, this.currentLevel)
    },
    handleClone () {
      // console.log('handleClone', ...arguments, this.currentLevel)
    },
    handleWidgetAdd (evt) {
      let newIndex = evt.newIndex
      // const to = evt.to
      if (newIndex >= this.list.length) newIndex--
      // console.log(evt.target, to, newIndex)
      this.$set(this.list, newIndex, _.cloneDeep(this.list[newIndex]))
      this.$set(this.list, newIndex, {
        ...this.list[newIndex],
        model: OnlyKey.getKey()
      })
      // console.log('handleWidgetAdd', ...arguments, this.currentLevel)
    },
    handleWidgetUpdate () {
      // console.log('handleWidgetUpdate', ...arguments, this.currentLevel)
    },
    handleWidgetChange () {
      // console.log('handleWidgetChange', ...arguments, this.currentLevel)
    },
    click (el) {
      this[BUILDER].setFocus(el)
    }
  },
  render (h) {
    const events = {
      add: this.handleWidgetAdd.bind(this),
      update: this.handleWidgetUpdate.bind(this),
      change: this.handleWidgetChange.bind(this),
      start: this.handleStart,
      end: this.handleEnd,
      remove: this.handleRemove,
      choose: this.handleChoose,
      unchoose: this.handleUnChoose,
      sort: this.handleSort,
      filter: this.handleFilter,
      clone: this.handleClone
    }
    const draggableProps = {
      group: 'people',
      ghostClass: 'ghost',
      animation: 200
    }
    return (
      <draggable
        class="widget-draggable"
        list={this.list}
        group={draggableProps.group}
        ghostClass={draggableProps.ghostClass}
        animation={draggableProps.animation}
        on={events}
      >
        {
          this.list.map((el) => {
            const clickEvent = {
              click: this.click.bind(this, el)
            }
            return (
              <div key={el.model} on={clickEvent}>
                {this.renderElement(h, _.cloneDeep(el), [this.renderChildren(h, el)])}
              </div>
            )
          })
        }
      </draggable>
    )
  }
}
</script>

<style lang="scss" scoped>
.widget-draggable {
  padding-bottom: 40px;
  border: 1px solid red;
}

.widget-canvas {
}
</style>

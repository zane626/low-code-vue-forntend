<script>
/**
 * Created by zane on 2022/1/8 16:59
 * @description 画布
 */
import _ from 'lodash'
import draggable from 'vuedraggable'

export default {
  name: 'WidgetCanvas',
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
  computed: {
    draggableProps () {
      return {
        group: {
          name: `level_${this.currentLevel}`
        }
      }
    }
  },
  methods: {
    renderElement (h, item) {
      if (this.canAddChild(item)) {
        return h(item.tag, {
          ...item.options,
          attrs: {
            ..._.get(item, 'options.attrs', {}),
            id: item.model
          }
        }, [this.renderChildren(h, item)])
      }
    },
    renderChildren (h, el) {
      if (this.canAddChild(el)) {
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
    handleMoveEnd () {
      console.log('handleMoveEnd', ...arguments)
    },
    handleMoveStart () {
      console.log('handleMoveStart', ...arguments)
    },
    handleMove () {
      console.log('handleMove', ...arguments)
    },
    handleWidgetAdd () {
      console.log('handleWidgetAdd', ...arguments)
    },
    handleWidgetUpdate (val) {
      console.log('handleWidgetUpdate', val.from, val.to, val)
    }
  },
  render (h) {
    return (
      <draggable
        class="widget-draggable"
        list={this.list}
        {...this.draggableProps}
        on={{
          add: this.handleWidgetAdd.bind(this),
          update: this.handleWidgetUpdate.bind(this)
        }}
      >
        {
          this.list.map((el) => {
            return (
              <div key={el.model}>
                {this.renderElement(h, _.cloneDeep(el))}
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
.widget-canvas {
}
</style>

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
  computed: {},
  mounted () {
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
        })
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
    handleStart () {
      console.log('handleStart', ...arguments, this.currentLevel)
    },
    handleEnd () {
      console.log('handleMoveEnd', ...arguments, this.currentLevel)
    },
    handleRemove () {
      console.log('handleRemove', ...arguments, this.currentLevel)
    },
    handleChoose () {
      console.log('handleChoose', ...arguments, this.currentLevel)
    },
    handleUnChoose () {
      console.log('handleUnChoose', ...arguments, this.currentLevel)
    },
    handleSort () {
      console.log('handleSort', ...arguments, this.currentLevel)
    },
    handleFilter () {
      console.log('handleFilter', ...arguments, this.currentLevel)
    },
    handleClone () {
      console.log('handleClone', ...arguments, this.currentLevel)
    },
    handleWidgetAdd () {
      console.log('handleWidgetAdd', ...arguments, this.currentLevel)
    },
    handleWidgetUpdate () {
      console.log('handleWidgetUpdate', ...arguments, this.currentLevel)
    },
    handleWidgetChange () {
      console.log('handleWidgetChange', ...arguments, this.currentLevel)
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
            return (
              <div key={el.model}>
                {this.renderElement(h, _.cloneDeep(el))}
                {this.renderChildren(h, el)}
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

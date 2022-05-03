<template>
  <el-dialog
    title="编辑列"
    :visible.sync="dialogVisible"
  >
    <div></div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
/**
 * Created by zane on 2022/5/2 11:38
 * @description .
 */
import _ from 'lodash'

export default {
  name: 'customEdit',
  props: {
    visible: {
      type: Boolean,
      require: true
    },
    value: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
      data: []
    }
  },
  computed: {
    dialogVisible: {
      get () {
        return this.visible
      },
      set (val) {
        this.$emit('update:visible', val)
      }
    }
  },
  watch: {
    value: {
      deep: true,
      immediate: true,
      handler (val) {
        this.data = _.cloneDeep(val)
      }
    }
  },
  methods: {
    save () {
      this.$emit('input', this.data)
    }
  }
}
</script>

<style lang="scss" scoped>
.customEdit {
}
</style>

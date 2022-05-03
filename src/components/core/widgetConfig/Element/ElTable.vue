<template>
  <div class="ElTable">
    <h4>表格配置</h4>
    <el-form @submit.native.stop>
      <el-form-item label="模拟数据">
        <el-input v-model="mockData" type="textarea" rows="10" placeholder="placeholder"></el-input>
      </el-form-item>
      <el-form-item label="width">
        <el-input v-model="options.style.width" placeholder="placeholder"></el-input>
      </el-form-item>
      <el-form-item label="height">
        <el-input v-model="options.style.height" placeholder="placeholder"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="custom-label-switch">
          <div class="label-text">列</div>
          <el-button type="text">编辑</el-button>
        </div>
      </el-form-item>
    </el-form>
    <custom-edit v-model="options.columns" :visible.sync="isShowColumns"></custom-edit>
  </div>
</template>

<script>
/**
 * Created by zane on 2022/4/16 11:19
 * @description .
 */
import _ from 'lodash'
import customEdit from './customEdit'

export default {
  name: 'ElTable',
  components: {
    customEdit
  },
  props: ['options'],
  data () {
    return {
      mockData: '',
      isShowColumns: false
    }
  },
  created () {
    this.mockData = JSON.stringify(_.get(this.options, 'props.data', {}), undefined, 4)
  },
  methods: {
    handleAddColumns () {
      this.options.columns.push({
        name: '',
        prop: '',
        width: ''
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.ElTable {
  .custom-label-switch {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .label-text {
      pointer-events: none;
      flex: 1;
      font-size: 14px;
      font-weight: 600;
      color: #666666;
    }

    .el-switch {
      pointer-events: all;
    }
  }
}
</style>

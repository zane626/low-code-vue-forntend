<template>
  <div class="row">
    <div class="col-8">
      <h3>Nested draggable</h3>
      <nested-draggable :tasks="list"/>
    </div>
    <pre>list</pre>
  </div>
</template>

<script>
/**
 * Created by zane on 2022/1/9 11:59
 * @description .
 */
import nestedDraggable from 'components/test/nested'

export default {
  name: 'Test',
  display: 'Nested',
  order: 15,
  components: {
    nestedDraggable
  },
  data () {
    return {
      list: [
        {
          name: 'task 1',
          tasks: [
            {
              name: 'task 2',
              tasks: []
            }
          ]
        },
        {
          name: 'task 3',
          tasks: [
            {
              name: 'task 4',
              tasks: []
            }
          ]
        },
        {
          name: 'task 5',
          tasks: []
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>

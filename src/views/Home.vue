<template>
  <div class="Home">
    <container
      :props="props"
      @listener:click="listenerClick"
    />
  </div>
</template>

<script>
/**
 * Created by zane on 2022/1/8 15:48
 * @description .
 */
import Container from 'components/layout/Container'
export default {
  name: 'Home',
  components: {
    Container
  },
  data () {
    return {
      props: {
        layoutFields: ['Box']
      }
    }
  },
  methods: {
    listenerClick () {
      console.log(...arguments)
    }
  }
}
</script>

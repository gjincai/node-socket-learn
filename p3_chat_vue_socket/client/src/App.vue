<template>
  <div id="app">
    <Talk></Talk>
  </div>
</template>

<script>
import Talk from './components/index.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome'
    }
  },
  components: {
    Talk: Talk
  }
}
</script>

<style lang="scss">
#app{
  height:100%;
}
</style>

<template>
  <div>
    总app
    <input type="button" value="点击提示" @click="toasta">
    <hr>
    组件1
    <zhujian1></zhujian1>
    <hr>
    组件2
    <zhujian2></zhujian2>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import zhujian1 from './components/zhujian1.vue'
import zhujian2 from './components/zhujian2.vue'
export default {
  data () {
    return {

    }
  },
  methods: {
    toasta () {
      Toast('提示信息')
    }
  },
  components: {
    zhujian1,
    zhujian2
  }
}
</script>

<style lang="less" scoped>

</style>

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import { Toast } from 'mint-ui'
Vue.use(Vuex)
Vue.use(VueRouter)
// Vue.config.productionTip = false
Vue.component(Toast.name, Toast)
/* eslint-disable no-new */
// 导入mint-ui样式
import '../node_modules/mint-ui/lib/style.css'
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
// 现在，你可以通过 store.state 来获取状态对象，以及通过 store.commit 方法触发状态变更：

// store.commit('increment')

// console.log(store.state.count) // -> 1
import Vue from 'vue'
import router from './router/router'
import App from './App.vue'
import Vuex from 'vuex'
import store from './vuex/store'

//开启debug模式
Vue.config.debug = true;

Vue.use(Vuex)

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  store : store,
  render: h => h(App)
}).$mount('#app')

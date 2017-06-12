import Vue from 'vue'
import router from './router'
import App from './App.vue'

// import VueRouter from "vue-router";
import VueResource from 'vue-resource'

//开启debug模式
Vue.config.debug = true;

// Vue.use(VueRouter);
Vue.use(VueResource);

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

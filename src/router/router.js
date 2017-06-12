import Vue from 'vue'
import VueRouter from "vue-router";
import routes from "./routes"
Vue.use(VueRouter);
// 创建一个路由器实例
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})
export default router

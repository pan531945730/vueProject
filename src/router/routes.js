import siftFinance from '../views/Product/siftFinanceList.vue'
import steward from '../views/Product/stewardList.vue'
import AccountCenter from '../views/Member/AccountCenter.vue'

// 配置路由规则
const routes = [
  {
    path: '/',
    component: siftFinance
  },
  {
    path: '/steward',
    component: steward
  },
  {
    path: '/AccountCenter',
    component: AccountCenter
  }
]
export default routes

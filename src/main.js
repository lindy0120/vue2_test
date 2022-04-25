import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from '@/router/index.bat'

// 引入仓库
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库store,组件实例身上多了$store
  store,
}).$mount('#app')

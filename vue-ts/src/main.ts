import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入reset.css
import '@/assets/style/reset.css';
// 引入 iconfont
import '@/assets/style/iconfont.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import UI from '../packages/index'
// console.log(UI)
// 它会自动去找UI中的install
Vue.use(UI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';

// vue生产提示
Vue.config.productionTip = true

Vue.use(ElementUI)

Vue.directive('title', {
  inserted: function (el) {
    document.title = el.dataset.title
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

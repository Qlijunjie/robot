import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

import ElementUI from 'element-ui'
import JwChat from 'jwchat'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.prototype.$axios = axios

Vue.use(ElementUI)
Vue.use(JwChat)
new Vue({
  render: h => h(App),
}).$mount('#app')

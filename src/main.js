import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueForm from 'vue-form'
import store from './store'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.use(VueForm)

new Vue({
  axios,
  store,
  router,
  render: h => h(App)
}).$mount('#app')

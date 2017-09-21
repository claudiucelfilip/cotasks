// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import VueForm from 'vue-form'
import { isObservable, toJS } from 'mobx'
import VueMobx from 'vue-mobx'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@/scss/main.scss'
import '@/assets/icons/icomoon/style.css'

Vue.use(VueMobx, {
  toJS,
  isObservable
})

Vue.use(BootstrapVue)
Vue.use(VueForm)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

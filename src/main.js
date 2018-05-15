// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'

// 解决移动端点击300ms延迟  fastclick
import FastClick from 'fastclick'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

// remjs
import './util/rem'

// mint-ui
import 'mint-ui/lib/style.css';
import mintUI from 'mint-ui'
Vue.use(mintUI)


Vue.config.productionTip = false


import fetch from './util/fetch'
Vue.prototype.fetch = fetch


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCurrencyFilter from 'vue-currency-filter'
Vue.use(require('vue-moment'))
// moment("dddd, MMMM Do YYYY, h:mm:ss a")
Vue.use(VueCurrencyFilter)
// currency(configSymbol, configSeparator, configFractionCount,configFractionSeparator, configSymbolPosition, configSymbolSpacing)
Vue.config.productionTip = false
require('../node_modules/bootstrap/dist/css/bootstrap.css')
require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
// require('../node_modules/axios/dist/axios.js')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

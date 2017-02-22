// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//import './assets/css/bootstrap.min.css'

window.$ = window.jQuery = require('jquery');
require('bootstrap/js/modal');

import Vue from 'vue'
import App from './App.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//import './assets/css/bootstrap.min.css'

window.$ = window.jQuery = require('jquery');
require('bootstrap/js/modal');

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import RollHistory from './components/RollHistory.vue'
import Favorites from './components/Favorites.vue'

const routes = [
  { path: '/history', component: RollHistory },
  { path: '/favorites', component: Favorites }
]

const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
}).$mount('#app')

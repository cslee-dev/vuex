import Vue from 'vue';
import App from './App.vue';

// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css' // Vuesax
Vue.use(Vuesax)

import 'es6-promise/auto';

import store from './store/store';


new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

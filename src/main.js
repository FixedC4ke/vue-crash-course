import Vue from 'vue'
import App from './App.vue'
import Router from './router/index';
import router from './router'

Vue.config.productionTip = false

Vue.use(Router);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

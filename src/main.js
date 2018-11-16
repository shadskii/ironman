import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.filter('two_digits', function(value) {
  if (value.toString().length <= 1) {
    return '0'+value.toString();
  }
  return value.toString();
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');

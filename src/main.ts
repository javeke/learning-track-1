import '@/config/register-service-worker';
import router from '@/config/router';
import App from '@/pages/app/app.vue';
import store from '@/store';
import '@/theme/_all.scss';
import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

Vue.use(Buefy, {
  defaultIconComponent: 'font-awesome-icon',
  defaultIconPack: 'fas',
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

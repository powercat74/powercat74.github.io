/* Vue is loaded by /src/views/index.html
   This is done for speed of downloading, rendering and building
*/
import store from 'store';
import router from 'routes/index.js';

/* eslint-disable no-new */

new Vue({
  router,
  store
}).$mount('#app');

Vue.config.devtools = true;

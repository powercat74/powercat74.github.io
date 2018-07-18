import store from 'store';
import VueRouter from 'vue-router';

import Home from 'routes/home/index';
import Who from 'routes/who/index';
import What from 'routes/what/index';

Vue.use(VueRouter);

const routes = [
  Home,
  Who,
  What,
];
const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

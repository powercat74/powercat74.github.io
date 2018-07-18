import App from 'layouts/app/app.vue';
import Who from './who.vue';

export default {
  path: '/who',
  component: App,
  children: [
    {
      path: '',
      component: Who
    }
  ]
};

import App from 'layouts/app/app.vue';
import What from './what.vue';

export default {
  path: '/what',
  component: App,
  children: [
    {
      path: '',
      component: What
    }
  ]
};

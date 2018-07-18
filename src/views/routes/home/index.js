import App from 'layouts/app/app.vue';
import Home from './home.vue';

export default {
  path: '/',
  component: App,
  children: [
    {
      path: '',
      component: Home
    }
  ]
};

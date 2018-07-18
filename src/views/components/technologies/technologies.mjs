import './technologies.scss';
import technology from 'components/technology/technology.vue';

export default {
  components: {
    technology,
  },
  props: {
    technologies: Object,
  },
};

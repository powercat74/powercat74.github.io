import './projects.scss';
import project from 'components/project/project.vue';

export default {
  components: {
    project,
  },
  props: {
    projects: Object,
  },
};

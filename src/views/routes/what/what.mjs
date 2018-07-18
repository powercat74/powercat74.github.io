import './what.scss';
import technologies from 'components/technologies/technologies.vue';
import projects from 'components/projects/projects.vue';
import model from './data';

export default {
  components: {
    technologies,
    projects,
  },
  data() {
    return {
      technologies: model.technologies,
      projects: model.projects,
    };
  },
};

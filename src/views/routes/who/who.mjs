import './who.scss';
import card from 'components/card/card.vue';
import model from './data';

export default {
  components: {
    card,
  },
  data() {
    return {
      cards: model.nodes,
    };
  },
};

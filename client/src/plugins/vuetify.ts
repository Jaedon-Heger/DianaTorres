import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        primary: '#e6b9f4',
        secondary: '#788b92',
        accent: '#ed4c31',
        error: '#ff0000',
      },
    },
  },
});

import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    randomNumber: 1
  },
  mutations: {
    setRandomNumber (state, payload) {
      state.randomNumber = payload
    }
  },
  actions: {
    async getRandomNumber({commit}) {
      const {data} = await axios.get('https://www.random.org/integers/?num=1&min=1&max=100&base=10&col=1&format=plain&rnd=new');

      commit('setRandomNumber', data);
    }
  }
})

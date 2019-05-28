import Vue from 'vue';
import Vuex from 'vuex';

import axios from "axios";

Vue.use(Vuex);

const storeInstance = new Vuex.Store({
  state: {
    supleList: [],
    user: {
      id: 0,
      name: '',
      isKoksu: false
    },
    supleSettingsLoaded: false,
    supleSettings: {
      suplePower: [],
      supleEffectiveness: [],
    }
  },
  mutations: {
    hydrateSupleListMutation(state, payload) {
      state.supleList = payload;
    },
    updateSuplePriceMutation(state, payload) {
      const index = state.supleList.findIndex(element => element.id === payload.id);

      state.supleList[index].price = payload.price;
    },
    getUserMutation(state, payload) {
      state.loggedIn = true;
      state.user = {...payload};
    },
    updateUserDetailsMutation(state, payload) {
      state.user = Object.assign({}, payload);
    },
    hydrateSupleSettingsMutation(state, payload) {
      state.supleSettingsLoaded = true;
      state.supleSettings = payload;
    }
  },
  getters: {
    proteinSuple: (state) => {
      return state.supleList.filter(suple => suple.type === 'protein')
    },
    isKoksu(state) {
      return state.user.isKoksu;
    },
    suplePowerful: (state) => {
      return state.supleSettings.filter(power => power >= 5)
    }
  },
  actions: {
    hydrateSuple({commit}, params) {
      axios
        .get('/suple', {params})
        .then(response => {
          commit('hydrateSupleListMutation', response)
        });
    },
    updateSuplePrice({commit}, payload) {
      axios
        .patch(`/suple/${payload.id}`, {price: payload.price})
        .then(response => {
          commit('updateSuplePriceMutation', response)
        });
    },
    getUser({commit}) {
      axios
        .get(`/userinfo`)
        .then(response => commit('getUserMutation', response.data));
    },
    updateUserDetails({commit}, payload) {
      axios
        .patch(`/userinfo`, payload)
        .then(response => commit('updateUserDetailsMutation', response.data));
    },
    hydrateSupleSettings({commit, state}) {
      // prevent multiple requests if we have the data already
      if (state.supleSettingsLoaded) {
        return;
      }

      axios
        .get(`/suple-settings`)
        .then(response => commit('hydrateSupleSettingsMutation', response.data))
    }
  }
});

export default storeInstance;

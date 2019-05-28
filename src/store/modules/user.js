import axios from "axios";

export default {
  namespaced: true,
  state: {
    user: {
      id: 0,
      name: '',
      isKoksu: false
    }
  },
  mutations: {
    getUserMutation(state, payload) {
      state.loggedIn = true;
      state.user = {...payload};
    },
    updateUserDetailsMutation(state, payload) {
      state.user = Object.assign({}, payload);
    },
  },
  getters: {
    isKoksu(state) {
      return state.user.isKoksu;
    }
  },
  actions: {
    getUser({commit}) {
      axios.get(`/userinfo`)
        .then(response => commit('getUserMutation', response.data));
    },
    updateUserDetails({commit}, payload) {
      axios.patch(`/userinfo`, payload)
        .then(response => commit('updateUserDetailsMutation', response.data));
    }
  }
}

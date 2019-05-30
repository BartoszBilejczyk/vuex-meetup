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
      if (payload > 5) {
        state.user = Object.assign({}, state.user, {isKoksu: true});
      }
    },
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  actions: {
    getUser({commit}) {
      axios.get(`/userinfo`)
        .then(response => commit('getUserMutation', response.data));
    },
    updateUserDetails({commit}, payload) {
      commit('updateUserDetailsMutation', payload);
      alert(`You gave him suple with power ${payload}`)
    }
  }
}

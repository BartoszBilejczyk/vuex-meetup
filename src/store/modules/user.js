import repositoryFactory, { REPOSITORIES } from '@/common/repositories';

const userRepository = repositoryFactory(REPOSITORIES.USER);

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
    getUser({commit}, payload) {
      return userRepository.get(payload)
        .then(response => commit('getUserMutation', response));
    },
    updateUserDetails({commit}, payload) {
      commit('updateUserDetailsMutation', payload);
      alert(`You gave him suple with power ${payload}`)
    },
  }
}

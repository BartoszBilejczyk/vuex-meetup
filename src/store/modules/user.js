import repositoryFactory, { REPOSITORIES } from '@/common/repositories';

const userRepository = repositoryFactory(REPOSITORIES.USER);

export default {
  namespace: 'user',
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
    getUser({commit}, payload) {
      return userRepository.get(payload)
        .then(response => commit('getUserMutation', response));
    },
   updateUserDetails({commit}, payload) {
      return userRepository.update(payload)
        .then(response => commit('updateUserDetailsMutation', response));
    }
  }
}

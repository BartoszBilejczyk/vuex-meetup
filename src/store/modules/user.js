import repositoryFactory, { REPOSITORIES } from '@/common/repositories';

const userRepository = repositoryFactory(REPOSITORIES.USER);

export const userNamespace = {
  mutations: {
    getUserMutation: 'getUserMutation',
    updateUserDetailsMutation: 'updateUserDetailsMutation'
  },
  getters: {
    user: 'user'
  },
  actions: {
    getUser: 'getUser',
    updateUserDetails: 'updateUserDetails',
  }
};

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
    [userNamespace.mutations.getUserMutation](state, payload) {
      state.loggedIn = true;
      state.user = {...payload};
    },
    [userNamespace.mutations.updateUserDetailsMutation](state, payload) {
      if (payload > 5) {
        state.user = Object.assign({}, state.user, {isKoksu: true});
      }
    },
  },
  getters: {
    [userNamespace.getters.user](state) {
      return state.user;
    }
  },
  actions: {
    [userNamespace.actions.getUser]({commit}, payload) {
      return userRepository.get(payload)
        .then(response => commit(userNamespace.mutations.getUserMutation, response));
    },
    [userNamespace.actions.updateUserDetails]({commit}, payload) {
      commit('updateUserDetailsMutation', payload);
      alert(`You gave him suple with power ${payload}`)
    }
  }
}

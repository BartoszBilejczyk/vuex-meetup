import repositoryFactory, { REPOSITORIES } from '@/common/repositories';

const userRepository = repositoryFactory(REPOSITORIES.USER);

export const userNamespace = {
  module: 'user',
  mutations: {
    getUserMutation: 'getUserMutation',
    updateUserDetailsMutation: 'updateUserDetailsMutation'
  },
  getters: {
    isAdmin: 'isAdmin',
    isKoksu: 'isKoksu'
  },
  actions: {
    getUser: 'getUser',
    updateUserDetails: 'updateUserDetails',
  }
};

export default {
  state: {
    user: {
      id: 0,
      name: '',
      isAdmin: false,
      isKoksu: false
    }
  },
  mutations: {
    [userNamespace.mutations.getUserMutation](state, payload) {
      state.loggedIn = true;
      state.user = {...payload};
    },
    [userNamespace.mutations.updateUserDetailsMutation](state, payload) {
      state.user = Object.assign({}, payload);
    },
  },
  getters: {
    [userNamespace.getters.isAdmin](state) {
      return state.user.isAdmin;
    },
    [userNamespace.getters.isKoksu](state) {
      return state.user.isKoksu;
    }
  },
  actions: {
    async [userNamespace.actions.getUser]({commit}, payload) {
      return userRepository.get(payload)
        .then(response => commit(userNamespace.mutations.getUserMutation, response));
    },
    [userNamespace.actions.updateUserDetails]({commit}, payload) {
      return userRepository.update(payload)
        .then(response => commit(userNamespace.mutations.updateUserDetailsMutation, response));
    }
  }
}

import repositoryFactory, { REPOSITORIES } from '@/common/repositories';

const userRepository = repositoryFactory(REPOSITORIES.USER);

export const userNamespace = {
  mutations: {
    getUserMutation: 'getUserMutation',
    updateUserDetailsMutation: 'updateUserDetailsMutation'
  },
  getters: {
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
    [userNamespace.getters.isKoksu](state) {
      return state.user.isKoksu;
    }
  },
  actions: {
    [userNamespace.actions.getUser]({commit}, payload) {
      return userRepository.get(payload)
        .then(response => commit(userNamespace.mutations.getUserMutation, response));
    },
    [userNamespace.actions.updateUserDetails]({commit}, payload) {
      return userRepository.update(payload)
        .then(response => commit(userNamespace.mutations.updateUserDetailsMutation, response));
    }
  }
}

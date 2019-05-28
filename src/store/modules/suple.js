import repositoryFactory, { REPOSITORIES } from '@/common/repositories';

const supleRepository = repositoryFactory(REPOSITORIES.SUPLE);

export default {
  state: {
    supleList: [],
  },
  mutations: {
    hydrateSupleListMutation(state, payload) {
      state.supleList = payload;
    },
    updateSuplePriceMutation(state, payload) {
      const index = state.supleList.findIndex(element => element.id === payload.id);

      state.supleList[index].price = payload.price;
    }
  },
  getters: {
    proteinSuple: (state) => {
      return state.supleList.filter(suple => suple.type === 'protein')
    }
  },
  actions: {
    hydrateSuple({commit}, params) {
      return supleRepository.getSuple(params)
        .then(response => {
          commit('hydrateSupleListMutation', response)
        });
    },
    updateSuplePrice({commit}, payload) {
      return supleRepository.updateSuple(payload.id, {price: payload.price})
        .then(response => {
          commit('updateSuplePriceMutation', response)
        });
    }
  }
}

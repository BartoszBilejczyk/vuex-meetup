import repositoryFactory, { REPOSITORIES } from '@/common/repositories';

const supleRepository = repositoryFactory(REPOSITORIES.SUPLE);

export const supleNamespace = {
  mutations: {
    hydrateSupleListMutation: 'hydrateSupleListMutation',
    updateSuplePriceMutation: 'updateSuplePriceMutation'
  },
  getters: {
    proteinSuple: 'proteinSuple',
  },
  actions: {
    hydrateSuple: 'hydrateSuple',
    updateSuplePrice: 'updateSuplePrice'
  }
};

export default {
  state: {
    supleList: [],
  },
  mutations: {
    [supleNamespace.mutations.hydrateSupleListMutation](state, payload) {
      state.supleList = payload;
    },
    [supleNamespace.mutations.updateSuplePriceMutation](state, payload) {
      const index = state.supleList.findIndex(element => element.id === payload.id);

      state.supleList[index].price = payload.price;
    }
  },
  getters: {
    [supleNamespace.getters.proteinSuple]: (state) => {
      return state.supleList.filter(suple => suple.type === 'protein')
    }
  },
  actions: {
    [supleNamespace.actions.hydrateSuple]({commit}, params) {
      return supleRepository.getSuple(params)
        .then(response => {
          commit(supleNamespace.mutations.hydrateSupleListMutation, response)
        });
    },
    [supleNamespace.actions.updateSuplePrice]({commit}, payload) {
      return supleRepository.updateSuple(payload.id, {price: payload.price})
        .then(response => {
          commit(supleNamespace.mutations.updateSuplePriceMutation, response)
        });
    }
  }
}

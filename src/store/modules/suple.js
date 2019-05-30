import repositoryFactory, { REPOSITORIES } from '@/common/repositories';

const supleRepository = repositoryFactory(REPOSITORIES.SUPLE);

const supleList = [
  {
    id: 1,
    name: 'Bulk Up Mass',
    price: 1,
    power: 2,
    type: 'protein'
  },
  {
    id: 2,
    name: 'Cutting Edge Protein',
    price: 20,
    power: 4,
    type: 'protein'
  },
  {
    id: 3,
    name: 'Mutant Mass',
    price: 50,
    power: 10,
    type: 'protein'
  },
  {
    id: 4,
    name: 'Energizing Water',
    price: 20,
    type: 'other'
  },
];

export default {
  namespaced: true,
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
    hydrateSuple({commit}) {
      commit('hydrateSupleListMutation', supleList)
    },
    updateSuplePrice({commit}, payload) {
      return supleRepository.updateSuple(payload.id, {price: payload.price})
        .then(response => {
          commit('updateSuplePriceMutation', response)
        });
    }
  }
}

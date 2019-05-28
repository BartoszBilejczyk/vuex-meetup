import axios from "axios";

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
    hydrateSuple({commit}, params) {
      axios
        .get('/suple', {params})
        .then(response => {
          commit('hydrateSupleListMutation', response)
        });
    },
    updateSuplePrice({commit}, payload) {
      axios
        .patch(`/suple/${payload.id}`, {price: payload.price})
        .then(response => {
          commit('updateSuplePriceMutation', response)
        });
    }
  }
}

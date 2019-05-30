import axios from "axios";

export default {
  namespaced: true,
  state: {
    supleSettings: {
      suplePower: [1, 2, 5, 10, 20, 50, 150]
    }
  },
  mutations: {
    hydrateSupleSettingsMutation(state, payload) {
      state.supleSettingsLoaded = true;
      state.supleSettings = payload;
    }
  },
  getters: {
    suplePowerful: (state) => {
      return state.supleSettings.suplePower.filter(power => power >= 5)
    }
  },
  actions: {
    hydrateSupleSettings({commit}) {
      axios.get(`/suple-settings`)
        .then(response => commit('hydrateSupleSettingsMutation', response.data))
    }
  }
}

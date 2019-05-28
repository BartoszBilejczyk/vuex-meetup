import axios from "axios";

export default {
  namespaced: true,
  state: {
    supleSettingsLoaded: false,
    supleSettings: {
      suplePower: [],
      supleEffectiveness: [],
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
      return state.supleSettings.filter(power => power >= 5)
    }
  },
  actions: {
    hydrateSupleSettings({commit, state}) {
      // prevent multiple requests if we have the data already
      if (state.supleSettingsLoaded) {
        return;
      }

      axios
        .get(`/suple-settings`)
        .then(response => commit('hydrateSupleSettingsMutation', response.data))
    }
  }
}

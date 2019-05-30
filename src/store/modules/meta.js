import repositoryFactory, { REPOSITORIES } from '@/common/repositories';

const metaRepository = repositoryFactory(REPOSITORIES.META);

export default {
  namespace: 'meta',
  state: {
    supleSettingsLoaded: false,
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
    hydrateSupleSettings({commit, state}) {
      // prevent multiple requests if we have the data already
      if (state.supleSettingsLoaded) {
        return;
      }
      return metaRepository.getSupleSettings()
        .then(response => commit('hydrateSupleSettingsMutation', response))
    }
  }
}

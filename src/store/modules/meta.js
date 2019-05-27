import repositoryFactory, { REPOSITORIES } from '@/common/repositories';

const metaRepository = repositoryFactory(REPOSITORIES.META);

export const metaNamespace = {
  module: 'meta',
  mutations: {
    hydrateAppSettingsMutation: 'hydrateAppSettingsMutation'
  },
  getters: {
    suplePowerful: 'suplePowerful'
  },
  actions: {
    hydrateAppSettings: 'hydrateAppSettings',
  }
};

export default {
  state: {
    appSettingsLoaded: false,
    appSettings: {
      suplePower: [],
      supleEffectiveness: [],
    }
  },
  mutations: {
    [metaNamespace.mutations.hydrateAppSettingsMutation](state, payload) {
      state.appSettingsLoaded = true;
      state.appSettings = payload;
    }
  },
  getters: {
    [metaNamespace.getters.appSettings](state) {
      return state.appSettings;
    },
    [metaNamespace.getters.suplePowerful]: (state) => {
      return state.appSettings.filter(suple => suple.power === 'high')
    }
  },
  actions: {
    [metaNamespace.actions.hydrateAppSettings]({commit, state}) {
      // prevent multiple requests if we have the data already
      if (state.appSettingsLoaded) {
        return;
      }
      return metaRepository.getAppSettings()
        .then(response => commit(metaNamespace.mutations.hydrateAppSettingsMutation, response))
    }
  }
}

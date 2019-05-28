import repositoryFactory, { REPOSITORIES } from '@/common/repositories';

const metaRepository = repositoryFactory(REPOSITORIES.META);

export const metaNamespace = {
  mutations: {
    hydrateSupleSettingsMutation: 'hydrateSupleSettingsMutation'
  },
  getters: {
    suplePowerful: 'suplePowerful'
  },
  actions: {
    hydrateSupleSettings: 'hydrateSupleSettings',
  }
};

export default {
  state: {
    supleSettingsLoaded: false,
    supleSettings: {
      suplePower: [],
      supleEffectiveness: [],
    }
  },
  mutations: {
    [metaNamespace.mutations.hydrateSupleSettingsMutation](state, payload) {
      state.supleSettingsLoaded = true;
      state.supleSettings = payload;
    }
  },
  getters: {
    [metaNamespace.getters.suplePowerful]: (state) => {
      return state.supleSettings.filter(power => power >= 5)
    }
  },
  actions: {
    [metaNamespace.actions.hydrateSupleSettings]({commit, state}) {
      // prevent multiple requests if we have the data already
      if (state.supleSettingsLoaded) {
        return;
      }
      return metaRepository.getSupleSettings()
        .then(response => commit(metaNamespace.mutations.hydrateSupleSettingsMutation, response))
    }
  }
}

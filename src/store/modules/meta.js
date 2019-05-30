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
  namespaced: true,
  state: {
    supleSettings: {
      suplePower: [1, 2, 5, 10, 20, 50, 150],
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
      return state.supleSettings.suplePower.filter(power => power >= 5)
    }
  },
  actions: {
    [metaNamespace.actions.hydrateSupleSettings]({commit}) {
      return metaRepository.getSupleSettings()
        .then(response => commit(metaNamespace.mutations.hydrateSupleSettingsMutation, response))
    }
  }
}

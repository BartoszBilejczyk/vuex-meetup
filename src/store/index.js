import Vue from 'vue';
import Vuex from 'vuex';

import supleModule from './modules/suple';
import userModule from './modules/user';
import metaModule from './modules/meta';

Vue.use(Vuex);

const storeInstance = new Vuex.Store({
  modules: {
    suple: supleModule,
    user: userModule,
    meta: metaModule,
  }
});

export default storeInstance;

//
// const storeInstance = new Vuex.Store({
//   state: {
//     supleList: [],
//     user: {
//       id: 0,
//       name: '',
//       isKoksu: false
//     },
//     supleSettingsLoaded: false,
//     supleSettings: {
//       suplePower: [1, 2, 5, 10, 20, 50, 150],
//     }
//   },
//   mutations: {
//     hydrateSupleListMutation(state, payload) {
//       state.supleList = payload;
//     },
//     updateSuplePriceMutation(state, payload) {
//       const index = state.supleList.findIndex(element => element.id === payload.id);
//
//       state.supleList[index].price = payload.price;
//     },
//     getUserMutation(state, payload) {
//       state.loggedIn = true;
//       state.user = {...payload};
//     },
//     updateUserDetailsMutation(state, payload) {
//       if (payload > 5) {
//         state.user = Object.assign({}, state.user, {isKoksu: true});
//       }
//     },
//     hydrateSupleSettingsMutation(state, payload) {
//       state.supleSettingsLoaded = true;
//       state.supleSettings = payload;
//     }
//   },
//   getters: {
//     proteinSuple: (state) => {
//       return state.supleList.filter(suple => suple.type === 'protein')
//     },
//     user(state) {
//       return state.user;
//     },
//     suplePowerful: (state) => {
//       return state.supleSettings.suplePower.filter(power => power >= 5)
//     }
//   },
//   actions: {
//     hydrateSuple({commit}) {
//       commit('hydrateSupleListMutation', supleList)
//     },
//     updateSuplePrice({commit}, payload) {
//       axios
//         .patch(`/suple/${payload.id}`, {price: payload.price})
//         .then(response => {
//           commit('updateSuplePriceMutation', response)
//         });
//     },
//     getUser({commit}) {
//       axios
//         .get(`/userinfo`)
//         .then(response => commit('getUserMutation', response.data));
//     },
//     updateUserDetails({commit}, payload) {
//       commit('updateUserDetailsMutation', payload);
//       alert(`You gave him suple with power ${payload}`)
//     },
//     hydrateSupleSettings({commit, state}) {
//       // prevent multiple requests if we have the data already
//       if (state.supleSettingsLoaded) {
//         return;
//       }
//
//       axios
//         .get(`/suple-settings`)
//         .then(response => commit('hydrateSupleSettingsMutation', response.data))
//     }
//   }
// });
//
// export default storeInstance;

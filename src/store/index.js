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

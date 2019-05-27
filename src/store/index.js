import Vue from 'vue';
import Vuex, { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

import supleModule, { supleNamespace } from './modules/suple';
import userModule, { userNamespace } from './modules/user';
import metaModule, { metaNamespace } from './modules/meta';

import { aggregateEntities, namespaced, getVuex, aggregateEntitiesForState, wrapVuexFn } from '../common/helpers';

Vue.use(Vuex);

const storeInstance = new Vuex.Store({
  modules: namespaced({
    suple: supleModule,
    user: userModule,
    meta: metaModule,
  })
});

export const mapStoreGetters = wrapVuexFn(mapGetters, aggregateEntities);
export const mapStoreMutations = wrapVuexFn(mapMutations, aggregateEntities);
export const mapStoreActions = wrapVuexFn(mapActions, aggregateEntities);
export const mapStoreState = wrapVuexFn(mapState, aggregateEntitiesForState);

export const suple = getVuex(supleNamespace);
export const user = getVuex(userNamespace);
export const meta = getVuex(metaNamespace);

export default storeInstance;

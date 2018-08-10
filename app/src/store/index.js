import Vue
  from 'vue';

import Vuex
  from 'vuex';

import cart
  from './cart';

import global
  from './global';

import products
  from './products';

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      cart,
      global,
      products
    }
  });
  
  return Store;
}

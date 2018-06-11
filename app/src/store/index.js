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

const store = new Vuex.Store({
	modules: {
		cart,
		global,
		products
	}
});

export default store;

import {http} from '../http';

export const getProducts = (state) => {
	http.get('/products').then(response => {
		console.log('Get Products', response);
		if(Array.isArray(response.data)) {
			state.commit('addProducts', {products: response.data});
		}
	});
};

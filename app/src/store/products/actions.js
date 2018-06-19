import {http} from '../http';

export const getProducts = (state) => {
	http.get('/products').then(response => {
		console.log('Get Product', response);
		if(Array.isArray(response.data)) {
			state.commit('addProducts', {products: response.data});
		}
	});
};

export const create = (state, payload) => {
	http.post('/products/create', payload).then(response => {
		console.log('Create Product', response);
		state.commit('create', {product: response.data});
	});
};

export const update = (state, payload) => {
	http.post('/products/update', {product: payload.product}).then(response => {
		console.log('Update Product', response);
		state.commit('update', payload);
	});
};

export const remove = (state, payload) => {
	http.post('/products/delete', {product: payload.product}).then(response => {
		console.log('Delete Product', response);
		state.commit('remove', payload);
	});
};


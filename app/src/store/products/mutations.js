export const addProducts = (state, payload) => {
	payload.products.forEach(function (product) {
		state.products.push(product);
	});
};

export const set = (state, payload) => {
	state.product = Object.assign({}, payload.product);
};

export const create = (state, payload) => {
	state.products.push(payload.product);
	reset(state.product);
};

export const update = (state, payload) => {
	state.products.splice(index(state, payload), 1, payload.product);
};

export const remove = (state, payload) => {
	state.products.splice(index(state, payload), 1);
};

function index (state, payload) {
	return state.products.findIndex(function (product) {
		return product.id === payload.product.id;
	});
}

function reset (product) {
	for(let index in product) {
		if(index === 'image') {
			product[index] = 'http://localhost:8000/api/products/images';
		} else if(index === 'quantity') {
			product[index] = 1;
		} else {
			product[index] = null;
		}
	}
}

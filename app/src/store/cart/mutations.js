export const add = (state, payload) => {
	state.items.push(payload.products);
};

export const watch = (state, payload) => {
	if(state.watching.find(function (item) {
		return item.id === payload.product.id;
	}) === undefined) {
		state.watching.push(payload.product);
	}
};
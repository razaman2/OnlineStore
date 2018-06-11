export const addProducts = (state, payload) => {
	payload.products.forEach(function (product) {
		state.products.push(product);
	});
};

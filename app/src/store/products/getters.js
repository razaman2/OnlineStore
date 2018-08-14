export const getProduct = (state) => {
  return id => {
    return state.products.find(product => {
      return product.id === id;
    });
  };
};

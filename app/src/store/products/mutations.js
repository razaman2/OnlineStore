export const add = (state, product) => {
  state.products.push(product);
};

export const remove = (state, product) => {
  let index = find(state, product);
  if(itemExists(index)) {
    state.products.splice(index, 1);
  }
};

export const modify = (state, product) => {
  let index = find(state, product);
  if(itemExists(index)) {
    state.products.splice(index, 1, product);
  }
};

function itemExists (index) {
  return index > -1;
}

function find (state, product) {
  return state.products.findIndex(item => {
    return item.id === product.id;
  });
}

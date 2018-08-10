export const add = (state, product) => {
  state.products.push(product);
  reset(state.product);
};

export const remove = (state, product) => {
  let index = find(state, product);
  if(index > -1) {
    state.products.splice(index, 1);
  }
  reset(state.product);
};

export const modify = (state, product) => {
  let index = find(state, product);
  if(index > -1) {
    state.products.splice(index, 1, product);
  }
  reset(state.product);
};

function find (state, product) {
  return state.products.findIndex(item => {
    return item.id === product.id;
  });
}

export const update = (state, product) => {
  state.product = Object.assign({}, product);
};

function reset (product) {
  for(let index in product) {
    if(index === 'image') {
      product[index] = [];
    } else if(index === 'quantity') {
      product[index] = 1;
    } else {
      product[index] = null;
    }
  }
}

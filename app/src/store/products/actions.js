export const add = (state, action) => {
  action.vue.$firebase.firestore().collection('product').onSnapshot(collection => {
    collection.docChanges().forEach(snapshot => {
      if(snapshot.type === 'added') {
        state.commit('add', snapshot.doc.data());
      } else if(snapshot.type === 'modified') {
        state.commit('modify', snapshot.doc.data());
      } else if(snapshot.type === 'removed') {
        state.commit('remove', snapshot.doc.data());
      }
    });
  });
  // let products = collection.onSnapshot(collection => {
  //   collection.docs.forEach(snapshot => {
  //     snapshot.ref.onSnapshot(product => {
  //       state.commit('add', {...product.data(), id: product.id});
  //     })
  //   })
  // });
  
  
  // action.vue.$firebase.firestore().collection('product')
  // .get().then(collection => {
  //   collection.docs.forEach(snapshot => {
  //     snapshot.ref.onSnapshot(product => {
  //       state.commit('add', {...product.data(), id: product.id});
  //     })
  //   });
  // });
};

export const create = (state, action) => {
  // let collection = action.vue.$firebase.firestore().collection('product');
  // let product = collection.doc().set(action.product);
  // let success = product.then(success => {
  //   console.log("Product Was Created Successfully", success);
  // });
  // let error = product.catch(error => {
  //   console.log("Error Creating Product", error);
  // });
  // console.log("Creating Product", collection, product, success, error);
  action.vue.$firebase.firestore().collection('product').doc().add(action.product).catch(error => {
    console.log('Error Creating Product', error);
  });
};

export const update = (state, action) => {
  action.vue.$firebase.firestore().collection('product').doc(action.product.id).update(action.product).catch(error => {
    console.log('Error Updating Product', error);
  });
};

export const remove = (state, action) => {
  action.vue.$firebase.firestore().collection('product').doc(action.product.id).delete().catch(error => {
    console.log('Error Removing Product', error);
  });
};


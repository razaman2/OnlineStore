export const add = (state, action) => {
  action.vue.$firebase.firestore().collection('products').onSnapshot(collection => {
    collection.docChanges().forEach(snapshot => {
      if(itemWasAdded(snapshot)) {
        state.commit('add', build(snapshot));
      } else if(itemWasModified(snapshot)) {
        state.commit('modify', build(snapshot));
      } else if(itemWasRemoved(snapshot)) {
        state.commit('remove', build(snapshot));
      }
    });
  });
};

function build (snapshot) {
  console.log(snapshot);
  return {
    ...snapshot.doc.data(),
    id: snapshot.doc.id
  };
}

function itemWasAdded (snapshot) {
  return snapshot.type === 'added';
}

function itemWasRemoved (snapshot) {
  return snapshot.type === 'removed';
}

function itemWasModified (snapshot) {
  return snapshot.type === 'modified';
}

export const images = (state, action) => {
  return action.vue.$firebase.storage().ref().child(`ProductImages/${action.file.name}`).put(action.file).then(snapshot => {
    return snapshot.ref.getDownloadURL();
  }).catch(error => {
    console.log(error);
  });
};

export const create = (state, action) => {
  action.vue.$firebase.firestore().collection('products').add(action.product).catch(error => {
    console.log('Error Creating Product', error);
  });
};

export const update = (state, action) => {
  action.vue.$firebase.firestore().collection('products').doc(action.product.id).update(action.product).catch(error => {
    console.log('Error Updating Product', error);
  });
};

export const remove = (state, action) => {
  action.vue.$firebase.firestore().collection('products').doc(action.product.id).delete().catch(error => {
    console.log('Error Removing Product', error);
  });
};


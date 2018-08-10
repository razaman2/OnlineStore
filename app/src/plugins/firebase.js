import firebase
  from 'firebase';

const config = {
  apiKey: 'AIzaSyDcqbAGomjIAN7a7l9peVlX5v9JoiZW-lg',
  authDomain: 'online-store-80395.firebaseapp.com',
  databaseURL: 'https://online-store-80395.firebaseio.com',
  projectId: 'online-store-80395',
  storageBucket: 'online-store-80395.appspot.com',
  messagingSenderId: '463119817100'
};

firebase.initializeApp(config);

firebase.firestore().settings({
  timestampsInSnapshots: true
});

export default ({Vue}) => {
  Vue.prototype.$firebase = firebase;
}

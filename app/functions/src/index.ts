import * as functions
  from 'firebase-functions';

const admin = require('firebase-admin');

admin.initializeApp();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const functionSupreme = functions.https.onRequest((request, response) => {
  response.send(request.query);
});

export const getProducts = functions.https.onRequest((request, response) => {
  admin.firestore().collection("product").get().then(function (querySnapshot) {
    let results = [];
    querySnapshot.forEach(function (doc) {
      let record = doc.data();
      record.id = doc.id;
      results.push(record);
    });
    response.send(results);
  });
});

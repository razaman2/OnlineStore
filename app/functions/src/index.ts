import * as functions
  from 'firebase-functions';

import * as cors
  from 'cors';

import * as admin
  from "firebase-admin";

const corsHandler = cors({origin: true});

admin.initializeApp();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const functionSupreme = functions.https.onRequest((request, response) => {
  response.send(request.query);
});

// export const productImages = functions.storage.

export const fileUpload = functions.https.onRequest((request, response) => {
  corsHandler(request, response, () => {
    response.send(request)
  });
});

import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");

const config = {
  apiKey: 'AIzaSyDU5gAuyqfG9u5odECxhRiY3A7CNd5nDQk"',
  authDomain: "fir-d7fb6.firebaseapp.com",
  projectId: "fir-d7fb6",
  storageBucket: "fir-d7fb6.appspot.com",
  messagingSenderId: "760424095184",
  appId: "1:760424095184:web:03cf278be4357b84676dd5",
  measurementId: "G-HL5W8RFHMZ",
  databaseURL: "https://fir-d7fb6-default-rtdb.firebaseio.com",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;

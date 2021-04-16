import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyBowpYMQ1zBnrhYvRX0c208bjAcmJwjXos",
    authDomain: "queens-fashion-eb85e.firebaseapp.com",
    projectId: "queens-fashion-eb85e",
    storageBucket: "queens-fashion-eb85e.appspot.com",
    messagingSenderId: "687646121845",
    appId: "1:687646121845:web:6e98c7d3231032d814fd3c",
    measurementId: "G-52T6MBML72"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

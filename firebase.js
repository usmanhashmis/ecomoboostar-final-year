
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAErnERUlodRC4uK3ZB-cEOH6Tcmoomawo",
    authDomain: "ecomobooster.firebaseapp.com",
    projectId: "ecomobooster",
    storageBucket: "ecomobooster.appspot.com",
    messagingSenderId: "494037390083",
    appId: "1:494037390083:web:d5a0110dd6c30db04b0f36",
    measurementId: "G-FEN2RGLPCC"
  };
  
  export const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
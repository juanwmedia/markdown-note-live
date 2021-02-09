// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FB_API_KEY,
  authDomain: "markdowmnoteslive.firebaseapp.com",
  projectId: "markdowmnoteslive",
  storageBucket: "markdowmnoteslive.appspot.com",
  messagingSenderId: "1001515354210",
  appId: "1:1001515354210:web:c7fd9b746c1dbfc66ea93b"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { firebase, auth };

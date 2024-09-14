// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// import { AuthUI } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.esm.js';
// import * as firebaseui from 'firebaseui';
import 'firebase/compat/auth';
// var firebase = require('firebase/compat/app');
// var firebaseui = require('firebaseui');
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwwr4HlCgdrcNrqXgclaWXACYy3g3fP40",
  authDomain: "tuts-blog.firebaseapp.com",
  projectId: "tuts-blog",
  storageBucket: "tuts-blog.appspot.com",
  messagingSenderId: "1056704482603",
  appId: "1:1056704482603:web:4821511c9a4536ce4e096e",
  measurementId: "G-JTGSQ5SJBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

// apiKey: process.env.REACT_APP_FIREBASE_API,
// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_FIREBASE_APP_ID,
// measurementId: process.env.REACT_APP_MEASUREMENT_ID
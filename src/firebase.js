import firebase from 'firebase';
import "firebase/firestore";
require('firebase/auth');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgpwOjmdEA6fdFfxzQslt9Xp5sULb5fDg",
    authDomain: "linkedin-sun.firebaseapp.com",
    projectId: "linkedin-sun",
    storageBucket: "linkedin-sun.appspot.com",
    messagingSenderId: "897095160390",
    appId: "1:897095160390:web:ba8b33e1aa30e9d8003047",
    measurementId: "G-FR4SQ5V7HH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
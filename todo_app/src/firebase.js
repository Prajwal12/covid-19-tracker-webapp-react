import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBl_b5a-MLQqWpmShHsxWsD_mXYY5QngYM",
    authDomain: "todo-app-cp-b653a.firebaseapp.com",
    databaseURL: "https://todo-app-cp-b653a.firebaseio.com",
    projectId: "todo-app-cp-b653a",
    storageBucket: "todo-app-cp-b653a.appspot.com",
    messagingSenderId: "1001123788140",
    appId: "1:1001123788140:web:ee025d38c97eadf53fef49",
    measurementId: "G-C8K26EWEPZ"

});
const db = firebase.firestore();

export default db;
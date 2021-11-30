import firebase from "firebase";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDTpb69JsZFSdO9Jj9kUUFyB9dQe8KT_14",
    authDomain: "todo-app-cp-38984.firebaseapp.com",
    projectId: "todo-app-cp-38984",
    storageBucket: "todo-app-cp-38984.appspot.com",
    messagingSenderId: "102439997877",
    appId: "1:102439997877:web:85c55017a2cb3b8ac709fc",
    measurementId: "G-4P6327VLT0"
});

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = firebaseApp.firestore();

export default db ;
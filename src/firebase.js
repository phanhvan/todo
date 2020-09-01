import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyD6TjhNpeiEEFumSF444AQT-OmSeKBN7Tk",
    authDomain: "todo-86868.firebaseapp.com",
    databaseURL: "https://todo-86868.firebaseio.com",
    projectId: "todo-86868",
    storageBucket: "todo-86868.appspot.com",
    messagingSenderId: "249177283377",
    appId: "1:249177283377:web:978bddf12d701d11d1ae10",
    measurementId: "G-GLC6TDCMHV",
};

firebase.initializeApp(firebaseConfig);

export const data = firebase.database().ref('data');
    
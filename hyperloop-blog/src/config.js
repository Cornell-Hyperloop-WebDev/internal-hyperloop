import * as firebase from 'firebase/app';

var config = {
    apiKey: "AIzaSyDZN3mEHnZjw1lIfNJWxFEWLvXW2Szf9co",
    authDomain: "hyperloop-blog.firebaseapp.com",
    databaseURL: "https://hyperloop-blog.firebaseio.com",
    projectId: "hyperloop-blog",
    storageBucket: "hyperloop-blog.appspot.com",
    messagingSenderId: "899528582796",
    appId: "1:899528582796:web:ce8f9488d295f3908cfda9",
    measurementId: "G-1JMLG3PPNQ"
  };
const Firebase = firebase.initializeApp(config);
export default Firebase;
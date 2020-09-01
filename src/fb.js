import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbhpB27Ox9xMhf4mPX1tbgrxJkFx3fn64",
  authDomain: "paragliding-app-4d2d5.firebaseapp.com",
  databaseURL: "https://paragliding-app-4d2d5.firebaseio.com",
  projectId: "paragliding-app-4d2d5",
  storageBucket: "paragliding-app-4d2d5.appspot.com",
  messagingSenderId: "164238623431",
  appId: "1:164238623431:web:8127a37bb89a1ef9daf4e2",
  measurementId: "G-58KWHM4H6E",
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;

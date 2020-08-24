import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCwwvR1A-72qsZAM0ZecdIwfHnqEARj8Uo",
  authDomain: "please-f1ea3.firebaseapp.com",
  databaseURL: "https://please-f1ea3.firebaseio.com",
  projectId: "please-f1ea3",
  storageBucket: "please-f1ea3.appspot.com",
  messagingSenderId: "828572195907",
  appId: "1:828572195907:web:5b1ff4c8ae289796b0c8f6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorge = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorge, projectFireStore, timestamp };

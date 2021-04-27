import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC59LsaWyeVK7Dk3Peez7mbbnwAujBYSV0",
  authDomain: "crown-clothing-db-bd77b.firebaseapp.com",
  projectId: "crown-clothing-db-bd77b",
  storageBucket: "crown-clothing-db-bd77b.appspot.com",
  messagingSenderId: "204896265511",
  appId: "1:204896265511:web:4108d8c62922f37667f502",
  measurementId: "G-QLR7R6JQ8Z"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



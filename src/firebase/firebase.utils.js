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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log(`error creating user`, error.messsage)
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



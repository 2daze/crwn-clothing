import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCKe4TspRBbxEerjpQp-9-4BirKzPbXstk",
  authDomain: "crwn-backend-db.firebaseapp.com",
  projectId: "crwn-backend-db",
  storageBucket: "crwn-backend-db.appspot.com",
  messagingSenderId: "1087147920454",
  appId: "1:1087147920454:web:1941e165a7a2832ed28e47",
  measurementId: "G-RTQRGFVL4S"
};


export default !firebase.apps.length ? 
  firebase.initializeApp(config) : firebase.app();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } 
    catch (error) {
      console.log('error creating user', error.message);
    }
  }
    return userRef;
}


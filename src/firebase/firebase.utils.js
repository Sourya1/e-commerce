import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD2eptespf3oeK5UH5Rz0Prawj07lXC6Rs",
  authDomain: "e-commerce-fb937.firebaseapp.com",
  projectId: "e-commerce-fb937",
  storageBucket: "e-commerce-fb937.appspot.com",
  messagingSenderId: "349314584367",
  appId: "1:349314584367:web:dba1b188153e3384451bda"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

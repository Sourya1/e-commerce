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

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

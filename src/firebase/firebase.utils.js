import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyDCWiyhBs3wkvCtFKICy7hNFL0bMhnqnOk",
        authDomain: "printedthreads-db.firebaseapp.com",
        databaseURL: "https://printedthreads-db.firebaseio.com",
        projectId: "printedthreads-db",
        storageBucket: "",
        messagingSenderId: "592496806272",
        appId: "1:592496806272:web:b8ec07c44271dfa8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
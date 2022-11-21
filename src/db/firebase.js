// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9hdpIX3sVKjj_FsCoSIbtwcnEyo4-sNE",
  authDomain: "rashie-64d78.firebaseapp.com",
  projectId: "rashie-64d78",
  storageBucket: "rashie-64d78.appspot.com",
  messagingSenderId: "897586801746",
  appId: "1:897586801746:web:ca1aa49677ccab84c4038b",
  measurementId: "G-3M66SKXXL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const FirebaseDB = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQbJ7GCQxsdoDqu5YRk2ypvCw_jiwCpzs",
  authDomain: "react-cursos-59dc3.firebaseapp.com",
  projectId: "react-cursos-59dc3",
  storageBucket: "react-cursos-59dc3.appspot.com",
  messagingSenderId: "1054845872160",
  appId: "1:1054845872160:web:60777d44e98c8ac793f445"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
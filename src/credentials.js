import { initializeApp } from "firebase/app";
import { GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBtcwDvoWYMMbGrWpxPAGKqasOXJHTocs4",
  authDomain: "institutional-page.firebaseapp.com",
  projectId: "institutional-page",
  storageBucket: "institutional-page.appspot.com",
  messagingSenderId: "610748369584",
  appId: "1:610748369584:web:93db1474f24380623ac975",
  measurementId: "G-39JRLHQV6L"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(appFirebase)
export const googleProvider= new GoogleAuthProvider()
export default appFirebase;

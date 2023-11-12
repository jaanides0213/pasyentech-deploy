// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXynEpM2LMMHuQrzbqJqKsiY-B9bkwIXU",
  authDomain: "pasyentech-f9b59.firebaseapp.com",
  projectId: "pasyentech-f9b59",
  storageBucket: "pasyentech-f9b59.appspot.com",
  messagingSenderId: "157215624457",
  appId: "1:157215624457:web:e354166465d1262bf997d8",
  measurementId: "G-RZYB844XLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);  
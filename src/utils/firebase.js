// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5pd6TLHUv5a3wiZHm8XE7RAM4jQs0DyA",
  authDomain: "netflix-gpt-app-11894.firebaseapp.com",
  projectId: "netflix-gpt-app-11894",
  storageBucket: "netflix-gpt-app-11894.appspot.com",
  messagingSenderId: "136279309687",
  appId: "1:136279309687:web:272fbc7298d4a931c17572",
  measurementId: "G-LRL69C421V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
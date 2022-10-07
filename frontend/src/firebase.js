// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJmDbzweYqqFyUnlif90j8lrmpIp1ZNqw",
  authDomain: "only-qna.firebaseapp.com",
  projectId: "only-qna",
  storageBucket: "only-qna.appspot.com",
  messagingSenderId: "698127950924",
  appId: "1:698127950924:web:6c0e12b04da07c892dc0e9",
  measurementId: "G-CKPCT5CRFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
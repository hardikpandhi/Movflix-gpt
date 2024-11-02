// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe2OfyecZxAvhR12XBMjLb_P5RrJgAuJw",
  authDomain: "movflix-gpt.firebaseapp.com",
  projectId: "movflix-gpt",
  storageBucket: "movflix-gpt.appspot.com",
  messagingSenderId: "735376981705",
  appId: "1:735376981705:web:6f98a1c38970feb3311718",
  measurementId: "G-WDDF4K6JW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
import { getAuth, } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyB16lAsLE8gFURAv-tV56utdMIkX_rnK84",
  authDomain: "buidlathon-vote.firebaseapp.com",
  projectId: "buidlathon-vote",
  storageBucket: "buidlathon-vote.appspot.com",
  messagingSenderId: "114178232945",
  appId: "1:114178232945:web:96d5d4d91dc3e4f13581d0",
  measurementId: "G-RX39EH21XX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

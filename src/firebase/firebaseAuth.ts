// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkD06EFEtZC6XAZ_twbw0oqhD5Ec33p8s",
  authDomain: "bankaccount-82719.firebaseapp.com",
  projectId: "bankaccount-82719",
  storageBucket: "bankaccount-82719.appspot.com",
  messagingSenderId: "606707597021",
  appId: "1:606707597021:web:16d4809995c76bff852534",
  measurementId: "G-30YZ1PMPTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
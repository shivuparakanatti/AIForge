// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACA_FrdNQcFqvhMFaT1IJvWe-rcnYnSKQ",
  authDomain: "aiforge-86564.firebaseapp.com",
  projectId: "aiforge-86564",
  storageBucket: "aiforge-86564.appspot.com",
  messagingSenderId: "508867169011",
  appId: "1:508867169011:web:bf7867283d29c92ab94586"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

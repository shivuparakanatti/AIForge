// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


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
export const storage = getStorage(app);
export const db = getFirestore(app);
export const initFirebase = ()=>{
  return app;
}

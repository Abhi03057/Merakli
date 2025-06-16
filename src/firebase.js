// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpwrEbURUqbJiN9FXTGlnznm42kVZCQa4",
  authDomain: "merakli-459b7.firebaseapp.com",
  projectId: "merakli-459b7",
  storageBucket: "merakli-459b7.appspot.com", 
  messagingSenderId: "997930162288",
  appId: "1:997930162288:web:28c3756f5506ef21723cb5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

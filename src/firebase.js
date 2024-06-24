
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDCDa1wahIGKGNvFxzazg9pXGPP_aKgfc4",
  authDomain: "authentication-14fa3.firebaseapp.com",
  projectId: "authentication-14fa3",
  storageBucket: "authentication-14fa3.appspot.com",
  messagingSenderId: "685172405182",
  appId: "1:685172405182:web:67b7874fa37b98ac08bfef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
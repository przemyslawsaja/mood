import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtW7YTWfvysNf1g_jKqLFzMwu9HLi_mm0",
  authDomain: "desti-go.firebaseapp.com",
  projectId: "desti-go",
  storageBucket: "desti-go.appspot.com",
  messagingSenderId: "813641192081",
  appId: "1:813641192081:web:089a8521693a3e9c8da530",
  measurementId: "G-VC7P5E1ZMQ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

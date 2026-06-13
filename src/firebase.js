import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpbubpVjVyQJqU7Bt6nC6DI4Vz6x-tXls",
  authDomain: "react-auth-demo-84a39.firebaseapp.com",
  projectId: "react-auth-demo-84a39",
  storageBucket: "react-auth-demo-84a39.firebasestorage.app",
  messagingSenderId: "503502224408",
  appId: "1:503502224408:web:76e12567b475802d63576d",
  measurementId: "G-VHTS1DMRTV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
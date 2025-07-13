// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const key = import.meta.env.VITE_FIREBASE_KEY
const firebaseConfig = {
  apiKey: key,
  authDomain: "cunyconnect-46e63.firebaseapp.com",
  projectId: "cunyconnect-46e63",
  storageBucket: "cunyconnect-46e63.appspot.com", 
  databaseURL: "https://cunyconnect-46e63-default-rtdb.firebaseio.com",
  // storageBucket: "cunyconnect-46e63.firebasestorage.app",
  messagingSenderId: "116669400911",
  appId: "1:116669400911:web:7be37e90fe2b5ab513e73a",
  measurementId: "G-NC0HH1KW2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app) 
export { app, analytics, database, auth };

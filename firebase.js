import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgHRzDMhsrGPaZ60BM_TgcLVLkg9UdlEg",
  authDomain: "clone-45.firebaseapp.com",
  projectId: "clone-45",
  storageBucket: "clone-45.appspot.com",
  messagingSenderId: "924220146137",
  appId: "1:924220146137:web:295c7dd48bd91abc0ad9c8",
  measurementId: "G-1H8NYSRPY5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;

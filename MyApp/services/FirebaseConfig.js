import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@react-native-firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmtipr6XOOmzMU8lhAl3SX0B_HBXHEV5M",
  authDomain: "thronesapp-97928.firebaseapp.com",
  projectId: "thronesapp-97928",
  storageBucket: "thronesapp-97928.appspot.com",
  messagingSenderId: "391836012708",
  appId: "1:391836012708:web:0cfe14b8f7125b47151631",
  measurementId: "G-LD3GZ2L0ZL",
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(firebase_app);
export const analytics = getAnalytics(firebase_app);
export const firestore_db = getFirestore(firebase_app);

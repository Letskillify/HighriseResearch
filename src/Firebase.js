// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlqVQMarcZuItpCKxiXG2CuWxDzOBML5U",
  authDomain: "higrise-research.firebaseapp.com",
  projectId: "higrise-research",
  storageBucket: "higrise-research.firebasestorage.app",
  messagingSenderId: "1044660592723",
  appId: "1:1044660592723:web:c981fa78e42b07026366a6",
  measurementId: "G-1339S3MP5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export default app;
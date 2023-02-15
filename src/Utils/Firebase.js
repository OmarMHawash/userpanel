// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvaaBybNUe-NMKC_kGh7s7LfDJiGy7lFc",
  authDomain: "react-omh.firebaseapp.com",
  projectId: "react-omh",
  storageBucket: "react-omh.appspot.com",
  messagingSenderId: "264319388025",
  appId: "1:264319388025:web:da37a3bc31aca027f587a8",
  measurementId: "G-C6F0PMQS8G",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

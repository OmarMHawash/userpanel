// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "domain.firebaseapp.com",
  projectId: "project-id",
  storageBucket: "project-id",
  messagingSenderId: "123456789",
  appId: "1:45787686:web:abcd5d7bcd57d87a8",
  measurementId: "G-C6F1CMAS6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

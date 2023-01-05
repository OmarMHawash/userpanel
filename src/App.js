import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import "./App.scss";
import React, { useState, useEffect } from "react";

function App() {
  const [userData, setUserData] = useState(null);

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCvaaBybNUe-NMKC_kGh7s7LfDJiGy7lFc",
    authDomain: "react-omh.firebaseapp.com",
    projectId: "react-omh",
    storageBucket: "react-omh.appspot.com",
    messagingSenderId: "264319388025",
    appId: "1:264319388025:web:da37a3bc31aca027f587a8",
    measurementId: "G-C6F0PMQS8G",
  };

  useEffect(() => {
    console.log("userData ~ App.js", userData);
  }, [userData]);

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics();
  logEvent(analytics, "notification_received");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<SignIn userData={(userData) => setUserData(userData)} />}
          />
          <Route
            path="/sign-in"
            element={<SignIn userData={(userData) => setUserData(userData)} />}
          />
          <Route path="/dashboard" element={<Home userData={userData} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


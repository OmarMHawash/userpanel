import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { BrowserRouter } from "react-router-dom";
import firebaseConfig from "./Utils/firebase";
import App from "./App";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics();
logEvent(analytics, "notification_received");

root.render(
  //   <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  //   </React.StrictMode>
);


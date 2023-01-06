import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import SignIn from "./Pages/SignIn/SignIn";
import Home from "./Pages/Home/Home";

import "./App.scss";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <SignIn userDataIn={(_userData) => setUserData(_userData)} />
          }
        />
        <Route
          path="/sign-in"
          element={
            <SignIn userDataIn={(_userData) => setUserData(_userData)} />
          }
        />
        <Route path="/dashboard" element={<Home userDataOut={userData} />} />
      </Routes>
    </div>
  );
}

export default App;


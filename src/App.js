import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import SignIn from "./Pages/SignIn/SignIn";
import Home from "./Pages/Home/Home";
import LayoutHome from "./Components/LayoutHome/LayoutHome";
import LayoutPanel from "./Components/LayoutPanel/LayoutPanel";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

import "./App.scss";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <div className="App">
      <Routes>
        {/* Dashboard pages routing */}
        <Route
          path={"/dashboard"}
          element={<LayoutPanel />}
          errorElement={<PageNotFound />}>
          <Route path="" element={<Home userDataOut={userData} />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        {/* Landing Home pages routing */}
        <Route
          path={"/"}
          element={<LayoutHome />}
          errorElement={<PageNotFound />}>
          <Route
            path="/sign-up"
            element={
              <SignIn userDataIn={(_userData) => setUserData(_userData)} />
            }
          />
          <Route
            path="/"
            element={
              <SignIn userDataIn={(_userData) => setUserData(_userData)} />
            }
          />
          <Route path="/*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


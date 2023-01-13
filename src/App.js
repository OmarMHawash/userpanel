import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import Home from "./Pages/Home/Home";
import LayoutHome from "./Components/LayoutHome/LayoutHome";
import LayoutPanel from "./Components/LayoutPanel/LayoutPanel";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import LandingPage from "./Pages/LandingPage/LandingPage";
import "./App.scss";

import Layout from "./Components/Layout/Layout";
import LoggedAuth from "./Components/Auth/LoggedAuth";
import RequireAuth from "./Components/Auth/RequireAuth";
import Browse from "./Components/Browse/Browse";
import Course from "./Components/Course/Course";
import LearningBoard from "./Components/LearningBoard/LearningBoard";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <div className="App">
      <Routes>
        {/* Dashboard pages routing */}
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/course/:id" element={<Course />} />
          <Route
            path={"/dashboard"}
            element={
              <RequireAuth>
                <LayoutPanel />
              </RequireAuth>
            }
            errorElement={<PageNotFound />}>
            <Route path="" element={<Home userDataOut={userData} />} />
            <Route path="course/:id" element={<LearningBoard />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          {/* Landing Home pages routing */}
          <Route
            path={"/"}
            element={
              <LoggedAuth>
                <LayoutHome />
              </LoggedAuth>
            }
            errorElement={<PageNotFound />}>
            <Route
              path="/sign-up"
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
            <Route path="/*" element={<PageNotFound />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

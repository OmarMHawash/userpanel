import { Routes, Route } from "react-router-dom";

import SignIn from "./Pages/SignIn/SignIn";
import Home from "./Pages/Home/Home";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Course from "./Components/Course/Course";
import LearningBoard from "./Components/LearningBoard/LearningBoard";
import BrowseCourses from "./Pages/BrowseCourses/BrowseCourses";
import UserCourses from "./Pages/UserCourses/UserCourses";
import UserProfile from "./Pages/UserProfile/UserProfile";

import LayoutHome from "./Components/LayoutHome/LayoutHome";
import LayoutPanel from "./Components/LayoutPanel/LayoutPanel";
import Layout from "./Components/Layout/Layout";
import LoggedAuth from "./Components/Auth/LoggedAuth";
import RequireAuth from "./Components/Auth/RequireAuth";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Dashboard pages routing */}
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/browse" element={<BrowseCourses />} />
          <Route path="/course/:id" element={<Course />} />
          <Route
            path={"/dashboard"}
            element={
              <RequireAuth>
                <LayoutPanel />
              </RequireAuth>
            }
            errorElement={<PageNotFound />}>
            <Route path="" element={<Home />} />
            <Route path="course/:id" element={<LearningBoard />} />
            <Route path="courses" element={<UserCourses />} />
            <Route path="profile" element={<UserProfile />} />
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
            <Route path="/sign-up" element={<SignIn />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/*" element={<PageNotFound />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;


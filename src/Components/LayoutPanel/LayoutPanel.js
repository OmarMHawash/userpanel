import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet, useNavigate } from "react-router-dom";
import PanelHeader from "../PanelHeader/PanelHeader";
import { GlobalContext } from "../../Utils/Context";
import { useContext } from "react";

import "./LayoutPanel.scss";
const LayoutPanel = () => {
  const userContext = useContext(GlobalContext).user;
  const navigate = useNavigate();
  const logout = () => {
    userContext.removeUser();
    navigate("/");
  };
  return (
    <div id="dashboard">
      <div className="action-panel">
        <div className="upper-panel">
          <div className="action-header">
            <FontAwesomeIcon icon={solid("lines-leaning")} size="2xl" />
            <Link
              to="/"
              className="ml-2 toggleColour text-white no-underline hover:no-underline font-bold text-lg lg:text-2xl">
              LearnGrow{" "}
            </Link>
          </div>
          <div className="panel-list">
            <ul>
              <li>
                <Link className="p-item" to="/dashboard">
                  <FontAwesomeIcon icon={solid("home")} /> <h2>Home</h2>
                </Link>
              </li>
              <li>
                <Link className="p-item" to="/dashboard/profile">
                  <FontAwesomeIcon icon={solid("user")} /> <h2>My Profile</h2>
                </Link>
              </li>
              <li>
                <Link className="p-item" to="/dashboard/courses">
                  <FontAwesomeIcon icon={solid("book-bookmark")} />{" "}
                  <h2>My Courses</h2>
                </Link>
              </li>
              <li>
                <Link
                  className="p-item -ml-1 "
                  to="/dashboard/course/qwe1g3x1f3ve">
                  <FontAwesomeIcon icon={solid("chalkboard-user")} />{" "}
                  <h2>Continue</h2>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="panel-bottom">
          <FontAwesomeIcon
            icon={solid("right-from-bracket")}
            className="pr-2"
            size="xl"
          />
          <button onClick={logout}>Logout</button>
        </div>
      </div>
      <div className="main-content">
        <PanelHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutPanel;


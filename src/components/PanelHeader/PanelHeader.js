import "./PanelHeader.scss";
import React, { useState, useEffect, useContext } from "react";
import FirestoneDB from "../../Utils/FirestoneDB";
import { GlobalContext } from "../../Utils/Context";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
const PanelHeader = () => {
  const [userData, setUserData] = useState("");
  const [loaded, setLoaded] = useState(false);
  const userContext = useContext(GlobalContext).user;
  const navigate = useNavigate();
  useEffect(() => {
    loadUser();
    setLoaded(true);
  }, []);

  const loadUser = async () => {
    let _userData = await userContext.getUser();
    setUserData(_userData);
  };
  return (
    <div className="panel-header">
      <div className="text-content">
        <FontAwesomeIcon icon={solid("table-columns")} size="xl" />
        <h1>Dashboard</h1>
      </div>
      <div
        onClick={() => navigate("/dashboard/profile")}
        className="user-content">
        <img
          src={"/images/profile_pic/" + userData.profile_pic + ".png"}
          alt="profile-pic"
        />
        <h3>{userData?.name}</h3>
      </div>
    </div>
  );
};

export default PanelHeader;


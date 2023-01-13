import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Utils/Context";
import FirestoneDB from "../../Utils/FirestoneDB";

import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Home = (props) => {
  const [userData, setUserData] = useState("");
  const [loaded, setLoaded] = useState(false);
  const userContext = useContext(GlobalContext).user;
  useEffect(() => {
    addDoca();
    setLoaded(true);
  }, []);

  const addDoca = async () => {
    let _user = await FirestoneDB.getUserByEmail("pcrebate@gmail.com");
    _user = { ..._user, ...userContext.getUser() };
    console.log(_user);
    setUserData(_user);
  };

  return (
    <div>
      {loaded ? (
        <>
          <h1>
            <FontAwesomeIcon icon={solid("home")} size="xs" />
            Home
          </h1>
          <button onClick={addDoca}>update doc</button>
          <img
            src={"/images/profile_pic/" + userData.profile_pic + ".png"}
            alt="profile-pic"
            width={50}
          />
          <h3>Welcome {userData?.name}!</h3>
          <h5>email {userData?.email}!</h5>
          <Link
            className="link"
            to="/"
            onClick={() => {
              localStorage.removeItem("userData");
            }}>
            Sign Out
          </Link>
        </>
      ) : (
        <h1>Home</h1>
      )}
    </div>
  );
};

export default Home;


import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../Utils/Context";
import "./Home.scss";
const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [userData, setUserData] = useState({});
  const userContext = useContext(GlobalContext).user;
  useEffect(() => {
    getUserData();
    setLoaded(true);
  }, []);

  const getUserData = async () => {
    let _userData = await userContext.getUser();
    setUserData(_userData);
  };

  return (
    <div>
      {loaded ? (
        <div id="home">
          <div className="welcome">
            <h1>Welcome to the Course Catalog, {userData.name}!</h1>
            <p>Here is what's happening with your Courses Today</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Home;


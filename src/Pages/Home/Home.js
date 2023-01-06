import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [userData, setUserData] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setUserData(props.userDataOut);
    setLoaded(true);
  }, [props.userDataOut]);

  return (
    <div>
      {loaded ? (
        <>
          <h1>Home</h1>
          <h3>Welcome {userData?.email}!</h3>
          <Link className="link" to="/">
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


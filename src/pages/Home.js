import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = (props) => {
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setUserData(props.userData);
  }, []);

  console.log(userData);
  if (userData !== null) {
    navigate("/");
  } else {
    return (
      <div>
        <h1>Home</h1>
        <h3>Welcome {userData?.email}!</h3>
        <Link className="link" to="/sign-in">
          Sign Out
        </Link>
        {/* {logged} */}
      </div>
    );
  }
};

export default Home;


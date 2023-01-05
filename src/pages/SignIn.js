import SignInComp from "../components/SignIn/SignInComp";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SignIn = (props) => {
  const [userData, setUserData] = useState("");
  //   const logged = localStorage.getItem("logged");
  const navigate = useNavigate();

  useEffect(() => {
    setUserData(props.userData);
  }, [props.userData]);

  const handleUserData = (data) => {
    // setUserData(data);
    props.userData(data);
  };

  //   if (logged === true) {
  //     navigate("/dashboard");
  //   } else {
  return (
    <div id="sign-in-page">
      <SignInComp userData={handleUserData} />
    </div>
  );
  //   }
};

export default SignIn;


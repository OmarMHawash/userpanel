import SignInComp from "../../Components/SignIn/SignInComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

const SignIn = (props) => {
  const handleUserData = (data) => {
    props.userDataIn(data);
  };
  return (
    <div id="sign-in-page">
      {/* <FontAwesomeIcon icon={solid("user-secret")} size="4x" /> */}
      <SignInComp userData={handleUserData} />
    </div>
  );
};

export default SignIn;


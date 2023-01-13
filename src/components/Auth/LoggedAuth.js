import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GlobalContext } from "../../Utils/Context";
const LoggedAuth = (props) => {
  const user = useContext(GlobalContext).user.getUser();
  return user ? <Navigate to={"/dashboard"} /> : props.children;
};
export default LoggedAuth;

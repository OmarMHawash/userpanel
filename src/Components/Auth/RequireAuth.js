import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GlobalContext } from "../../Utils/Context";

const RequireAuth = (props) => {
  const user = useContext(GlobalContext).user.getUser();
  return user ? props.children : <Navigate to={"/sign-in"} />;
};

export default RequireAuth;


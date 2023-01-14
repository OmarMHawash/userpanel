import { Outlet } from "react-router-dom";
import { GlobalContext } from "../../Utils/Context";
import FirestoneDB from "../../Utils/FirestoneDB";
const Layout = () => {
  const user = {
    loadUser: (_userData) => {
      localStorage.setItem("userData", JSON.stringify(_userData));
    },
    getUser: async () => {
      if (localStorage.getItem("userData") !== null) {
        let userData = {};
        let user = JSON.parse(localStorage.getItem("userData"));
        let _user = await FirestoneDB.getUserByEmail(user.email);
        userData = { ..._user, ...user };
        console.log(userData);
        return userData;
      } else return 0;
    },
    removeUser: () => {
      localStorage.removeItem("userData");
    },
  };

  return (
    <GlobalContext.Provider value={{ user }}>
      <Outlet />
    </GlobalContext.Provider>
  );
};
export default Layout;


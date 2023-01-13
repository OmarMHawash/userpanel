import { Outlet } from "react-router-dom";
import { GlobalContext } from "../../Utils/Context";

const Layout = () => {
  //   const [userData, setUserData] = useState(null);

  const user = {
    loadUser: (_userData) => {
      //   setUserData(_userData);
      localStorage.setItem("userData", JSON.stringify(_userData));
    },
    getUser: () => {
      if (localStorage.getItem("userData") !== null)
        return JSON.parse(localStorage.getItem("userData"));
      else return 0;
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


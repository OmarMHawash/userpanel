import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalContext } from "../../Utils/Context";
import { Link } from "react-router-dom";
import { useContext } from "react";
const Navbar = () => {
  const user = useContext(GlobalContext).user.getUser();
  return (
    <nav
      id="header"
      className="fixed w-full z-30 top-0 text-white bg-[#144272]">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <FontAwesomeIcon icon={solid("lines-leaning")} size="2xl" />
          <Link
            to="/"
            className="ml-2 toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
            LearnGrow{" "}
          </Link>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link
                className="inline-block py-2 px-4 text-white font-bold no-underline"
                to="/browse">
                Browse Courses
              </Link>
            </li>
          </ul>

          <Link to={user ? "/dashboard" : "/sign-up"}>
            <button
              id="navAction"
              className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-3 px-4 opacity-100 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              {user ? "Dashboard" : "Sign Up"}
            </button>
          </Link>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
};

export default Navbar;


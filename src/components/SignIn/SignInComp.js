import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Utils/Context";
import axios from "axios";
import FirestoneDB from "../../Utils/FirestoneDB";
import "./SignInComp.scss";

const API_KEY = "AIzaSyCvaaBybNUe-NMKC_kGh7s7LfDJiGy7lFc";

const SignInComp = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    errors: [],
  });
  const [userData, setUserData] = useState({
    email: "",
    idToken: "",
    refreshToken: false,
  });
  const [loaded, setLoaded] = useState(false);
  const [passContent, setPassContent] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const userContext = useContext(GlobalContext).user;

  //? on pathname change getting the title to set properly
  useEffect(() => {
    let path = location.pathname;
    setFormData({
      email: "",
      password: "",
      errors: [],
      title: path === "/sign-up" ? "Sign Up" : "Sign In",
    });
    setLoaded(false);
    setPassContent("");
  }, [location.pathname]);
  useEffect(() => {
    userData.email && userContext.loadUser(userData);
  }, [userData]);

  //? using axios with firebase. url is different for sign up and sign in.
  //? action is only the path name to navigate to "without the slash"
  const axiosPost = async (url, action) => {
    axios
      .post(`${url + API_KEY}`, {
        email: formData.email,
        password: formData.password,
        returnSecureToken: true,
      })
      .then((res) => {
        props.userData(res.data);
        formData.title === "Sign In" && setUserData(res.data);
        setFormData({ ...formData, errors: [] });
        console.log(`navigating to ${action} page...`);
        (() => setLoaded(true))();
        setTimeout(() => {
          navigate("/" + action);
        }, 500);
        return true;
      })
      .catch((err) => {
        // console.log("err", err.response);
        setFormData({ ...formData, errors: [err.response.data.error.message] });
        return false;
      });
  };

  //? on submit, check if email and password are filled in
  //? if so, check if the title is sign up or sign in
  const loginHandler = (e) => {
    // console.log("loginHandler ~");
    e.preventDefault();
    if (formData.email === "" || formData.password === "") {
      setFormData({ ...formData, errors: ["Please fill in your credentials"] });
    } else {
      if (formData.title === "Sign Up") {
        let newUser = axiosPost(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=`,
          ""
        );

        if (newUser) {
          let user = {
            name: formData.email.split("@")[0],
            email: formData.email,
            profile_pic: null,
          };
          FirestoneDB.createUser(user);
        }
      } else if (formData.title === "Sign In") {
        axiosPost(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=",
          "dashboard"
        );
      }
    }
  };

  const handlePass = (e) => {
    let dots = "";
    let passValue = e.target.value;
    for (let i = 0; i < passValue.length; i++) {
      dots += "*";
    }
    setFormData({ ...formData, password: passValue });
    setPassContent(dots);
  };

  return (
    <div className="signin-comp">
      <h1>
        {formData.title} to <b>LearnGrow</b>
      </h1>
      <form onSubmit={loginHandler}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          name="email"
          id="email"
          placeholder="Enter your email address"
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          value={passContent}
          onChange={(e) => handlePass(e)}
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <div className="sign-btns">
          <button className="cont-btn" type="submit">
            Continue
          </button>
          <Link to={formData.title === "Sign Up" ? "/sign-in" : "/sign-up"}>
            <button>
              {formData.title === "Sign Up" ? "Sign In" : "Sign Up"} Instead
            </button>
          </Link>
        </div>
        <div className="user-agreement">
          <p>
            By {formData.title}, you agree to the{" "}
            <span className="underlined">Terms of Service</span> and{" "}
            <span className="underlined">Privacy Policy</span>
          </p>
        </div>
      </form>
      {formData.errors.length && (
        <div className="errors sign-result">
          {formData.errors.map((err, index) => {
            return <p key={index}>{err}</p>;
          })}
        </div>
      )}
      {loaded ? (
        <>
          <p>
            <div className="success sign-result">
              <p>
                Successfully {formData.title}! <i>redirecting...</i>
              </p>
            </div>
          </p>
        </>
      ) : null}
      <br />
    </div>
  );
};

export default SignInComp;

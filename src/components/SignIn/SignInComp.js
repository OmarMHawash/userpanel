import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import "./SignInComp.scss";

const API_KEY = "AIzaSyCvaaBybNUe-NMKC_kGh7s7LfDJiGy7lFc";

const SignInComp = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    errors: [],
  });

  const [loaded, setLoaded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  //? on pathname change getting the title to set properly
  useEffect(() => {
    let path = location.pathname;
    setFormData({
      email: "",
      password: "",
      errors: [],
      title: path === "/" ? "Sign Up" : "Sign In",
    });
  }, [location.pathname]);

  //? using axios with firebase. url is different for sign up and sign in.
  //? action is only the path name to navigate to "without the slash"
  const axiosPost = (url, action) => {
    axios
      .post(`${url + API_KEY}`, {
        email: formData.email,
        password: formData.password,
        returnSecureToken: true,
      })
      .then((res) => {
        props.userData(res.data);
        setFormData({ ...formData, errors: [] });
        setLoaded(true);
        console.log(`navigating to ${action} page...`);
        setTimeout(() => {
          navigate("/" + action);
        }, 600);
      })
      .catch((err) => {
        // console.log("err", err.response.data.error.message);
        setFormData({ ...formData, errors: [err.response.data.error.message] });
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
        axiosPost(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=`,
          "sign-in"
        );
      } else if (formData.title === "Sign In") {
        axiosPost(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=",
          "dashboard"
        );
      }
    }
  };

  return (
    <div className="signin-comp">
      <h1>Welcome! {formData.title}</h1>
      <br />
      <form onSubmit={loginHandler}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          name="email"
          id="email"
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          name="password"
          id="password"
        />
        <br />
        <br />
        <button type="submit">{formData.title}</button>
      </form>
      {formData.errors && (
        <div className="errors">
          {formData.errors.map((err, index) => {
            return <p key={index}>{err}</p>;
          })}
        </div>
      )}
      <br />
      {loaded ? (
        <>
          <p>
            <span className="success-label">
              successfully {formData.title}!
            </span>
            <i>redirecting...</i>
          </p>
        </>
      ) : (
        <>
          {formData.title === "Sign In" ? (
            <>
              <p>
                new user?{" "}
                <Link className="link" to="/">
                  Sign Up
                </Link>
                .
              </p>
            </>
          ) : (
            <>
              <p>
                already have an account?{" "}
                <Link className="link" to="/sign-in">
                  Sign in
                </Link>
                .
              </p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SignInComp;

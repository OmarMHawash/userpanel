import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignInComp.scss";

const API_KEY = "AIzaSyCvaaBybNUe-NMKC_kGh7s7LfDJiGy7lFc";

const SignInComp = (props) => {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    let path = location.pathname;
    setTitle(path === "/" ? "Sign Up" : "Sign In");
    setLoaded(false);
  }, [location.pathname]);

  const loginHandler = (e) => {
    console.log("loginHandler ~");
    e.preventDefault();
    if (email === "" || password === "") {
      setErrors(["Please fill in your credentials"]);
    } else {
      axios
        .post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
          {
            email: email,
            password: password,
            returnSecureToken: true,
          }
        )
        .then((res) => {
          props.userData(res.data);
          //   localStorage.setItem("userData", JSON.stringify(res.data));
          //   localStorage.setItem("logged", 1);
          setErrors([]);
          setLoaded(true);
          setTimeout(() => {
            navigate("/dashboard");
          }, 600);
        })
        .catch((err) => {
          console.log("err", err.response.data.error.message);
          setErrors([err.response.data.error.message]);
        });
    }
  };

  return (
    <div className="signin-comp">
      <h1>Welcome! {title}</h1>
      <br />
      <form onSubmit={loginHandler}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          id="email"
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          id="password"
        />
        <br />
        <br />
        <button type="submit">{title}</button>
      </form>
      {errors && (
        <div className="errors">
          {errors.map((err, index) => {
            return <p key={index}>{err}</p>;
          })}
        </div>
      )}
      <br />
      {loaded ? (
        <>
          <p>
            <span className="success-label">successfully {title}!</span>{" "}
            <i>redirecting...</i>
          </p>
        </>
      ) : (
        <>
          {title === "Sign In" ? (
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

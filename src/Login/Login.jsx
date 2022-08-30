import React from "react";
import { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

function Login() {
  const [formdata, setFormData] = useState();
  const [isVerified, setIsVerified] = useState();
  const [tokenVerify, setIsTokenVerified] = useState(true);
  const [authToken, setAuthToken] = useState(Cookies.get("newtoken"));
  console.log(authToken, "auth token login");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    if (data.username === "test" && data.email === "test@gmail.com") {
      // console.log("verified");
      setIsVerified(true);
    } else {
      // console.log("failure");
      setIsVerified(false);
    }
    setFormData(data);
  };
  useEffect(() => {
    if (authToken.length > 8) {
      // console.log("the lenght is verifed");
      setIsTokenVerified(true);
    } else {
      // console.log("token length is not verifide");
      setIsTokenVerified(true);
    }
  });

  if (isVerified && tokenVerify) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="container">
      <form className="login" onSubmit={handleSubmit(onSubmit)}>
        <div className="heading">
          <h1>Pls Login here</h1>
        </div>
        <div className="inputContainer">
          <input {...register("username", { required: true })} />
          {errors.username && (
            <p style={{ color: "red" }}>Username is required</p>
          )}
          <input
            {...register(
              "email",
              {
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              },

              { required: true }
            )}
          />

          {errors.email && <p style={{ color: "red" }}>email is required</p>}
        </div>
        <div className="buttonContainer">
          <button className="loginButton" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

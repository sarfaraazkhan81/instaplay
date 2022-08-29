import React from "react";
import { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [formdata, setFormData] = useState();
  const [isVerified, setIsVerified] = useState();

  const [token, setToken] = useState(localStorage.getItem("newtoken")); // token got it
  const [isTokenVerified, setIsTokenVerified] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data.username === "test" && data.email === "test@gmail.com") {
      console.log("verified");
      setIsVerified(true);
    } else {
      console.log("failure");
      setIsVerified(false);
    }
    setFormData(data);
  };

  if (isVerified) {
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

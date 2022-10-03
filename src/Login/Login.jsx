import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
import axios from "axios";
import { LoginTokenAct } from "../redux/constants/action-types";

function Login() {
  const dispatch = useDispatch();
  const tokenFromRedux = useSelector((state) => state.LoginTokenReducer);
  // console.log(tokenFromRedux, "this is a login token");
  const [formdata, setFormData] = useState();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getTheToken = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/authentication/token/new?api_key=67011cf113627fe3311316af752fbcc5"
    );
    const gettoken = response.data.request_token;
    Cookies.set("newtoken", gettoken);
    console.log(gettoken, "token hasbeen set");
    dispatch(LoginTokenAct(gettoken));
  };

  const onSubmit = (data) => {
    // console.log(data);
    // if (data.username === "test" && data.email === "test@gmail.com") {
    //   // console.log("verified");
    //   setIsVerified(true);
    // } else {
    //   // console.log("failure");
    //   setIsVerified(false);
    // }
    setFormData(data);
  };

  useEffect(() => {
    var token = Cookies.get("newtoken");
    console.log(token, "got the token");
    console.log(tokenFromRedux, "actttttttttt");
    if (token !== undefined) {
      navigate("/home");
    }
  });

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
          <button className="loginButton" type="submit" onClick={getTheToken}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

function AuthToken() {
  const [authToken, setAuthToken] = useState(false);

  const getTheToken = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/authentication/token/new?api_key=67011cf113627fe3311316af752fbcc5"
    );
    const gettoken = response.data.request_token;
    Cookies.set("newtoken", gettoken);
  };
  useEffect(() => {
    getTheToken();
  }, []);

  console.log(Cookies.get("newtoken"), "this is from cookie");

  return <div>AuthToken</div>;
}

export default AuthToken;

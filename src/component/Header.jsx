import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

function Header() {
  const [islogin, setIsLogin] = useState(false);

  const loginHandler = () => {
    setIsLogin(true);
  };

  return (
    <div>
      <h1>this is the headers</h1>
      <ul>
        <Link to="/footer">
          <li>Footer</li>
        </Link>
        <Link to="/homepage">
          <li>Homepage</li>
        </Link>
        <Link to="/">
          <li>Login</li>
        </Link>

        <Link to="/">
          <li>Back</li>
        </Link>
        <button className="btn btn-success" onClick={loginHandler}>
          Login
        </button>
      </ul>
    </div>
  );
}

export default Header;

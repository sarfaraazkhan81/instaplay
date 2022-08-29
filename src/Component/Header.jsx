import React from "react";
// import "./Header.css";
import "../Sass/main.css";
import logo from "../assets/images/logo.png";
import { Circles } from "react-loader-spinner";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
function Header(props) {
  console.log(localStorage.getItem("newtoken"), "pencil");
  const logout = () => {
    // alert("logout");
    window.localStorage.clear();
  };

  console.log(localStorage.getItem("newtoken"), "pencil");

  console.log(localStorage.getItem("newtoken"), "pencil");
  return (
    <div className="headerContainer">
      <div className="content">
        <div className="logoContainer">
          <img src={logo} />
        </div>
        <div className="searcBarContainer">
          <input
            type="text"
            placeholder="search any movie"
            onChange={props.queryTextHandler}
          />
          {/* <button onClick={props.getsSearchData()}>Search</button> */}
          {/* <button onClick={props.searchMovie}>search</button> */}
          <div className="spinner">
            <Circles
              height="35"
              width="35"
              radius="9"
              color="orange"
              ariaLabel="three-dots-loading"
            />
          </div>
          <div className="logOut" onClick={logout}>
            <PowerSettingsNewIcon
              style={{ fontSize: "2rem", fontWeight: "600" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

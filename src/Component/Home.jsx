import React, { useState } from "react";
import cover from "../assets/images/cover.png";
import Trending from "./Trending";
import "../Sass/main.css";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="home">
      <div className="coverContainer">
        <Link to={"/getthevideo"}>
          <img src={cover} />
        </Link>
      </div>
    </div>
  );
}

export default Home;

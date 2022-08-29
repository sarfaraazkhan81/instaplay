import React from "react";
import Trending from "../Component/Trending";
import IndMoviePage from "../Component/IndMoviePage";
import Login from "../Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./Protect.js";

function AllRoutes(props) {
  console.log(props.token, "all routes");
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login token={props.token} />} />

          <Route element={<ProtectedRoutes />}>
            <Route element={<Trending token={props.token} />} path="/home" />
            <Route
              exact
              path="indmoviepage/:id"
              element={<IndMoviePage token={props.token} />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default AllRoutes;

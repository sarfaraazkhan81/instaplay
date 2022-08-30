import React from "react";
import Trending from "../Component/Trending";
import IndMoviePage from "../Component/IndMoviePage";
import Login from "../Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./Protect.js";

function AllRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route element={<Trending />} path="/home" />
            <Route exact path="indmoviepage/:id" element={<IndMoviePage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default AllRoutes;

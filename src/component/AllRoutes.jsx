import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./HomePage";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import ProtectedRoutes from "./ProtectedRoutes";

function AllRoutes() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route element={<Login />} exact path="/" />
          {/* <Route element={<Header />} exact path="/" /> */}

          <Route element={<ProtectedRoutes />}>
            <Route element={<HomePage />} exact path="/homepage" />
            <Route element={<Footer />} exact path="/footer" />
          </Route>

          <Route
            element={
              <div>
                <h1>404 Page not found</h1>
              </div>
            }
            exact
            path="*"
          />
        </Routes>
      </Router>
    </div>
  );
}

export default AllRoutes;

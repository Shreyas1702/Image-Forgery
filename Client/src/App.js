import React, { useEffect } from "react";
import "./index.css";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./component/Login";
import Home from "./component/Home";
import SignIn from "./component/SignIn";
import Footer from "./component/Footer";
import LandingPage from "./component/LandingPage";
import { GiHamburgerMenu } from "react-icons/gi";
function App() {
  const [showMediaIcons, setShowMediaIcons] = React.useState(false);
  return (
    <div className="App">
      <BrowserRouter className="nav">
        <div className="navbar">
          <div className="heading">
            <h2>Home Page</h2>
          </div>
          <div className={showMediaIcons ? "mobile-menu-link" : "links"}>
            <ul>
              <li>
                <Link
                  onClick={() => {
                    if (window.location.href.match("http://localhost:3000")) {
                      window.scroll({
                        top: 800,
                        behavior: "smooth",
                      });
                    } else {
                      console.log(window.location.href);
                      // window.location.replace("http://localhost:3000");
                      setTimeout(() => {
                        window.scroll({
                          top: 800,
                          behavior: "smooth",
                        });
                      }, 10000);
                    }
                  }}
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <hr className="horizontal" />
              <li>
                <Link to="/login">Login</Link>
              </li>
              <hr className="horizontal" />
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
            </ul>
          </div>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>

        <Routes>
          <Route path="/" exact element={<LandingPage />}></Route>
          <Route path="/home" exact element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

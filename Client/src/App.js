import React, { createContext, useEffect } from "react";
import "./index.css";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./component/Login";
import Home from "./component/Home";
import SignIn from "./component/SignIn";
import Footer from "./component/Footer";
import LandingPage from "./component/LandingPage";
import { GiHamburgerMenu } from "react-icons/gi";

import { initialState, reducer } from "../src/reducer/UseResducer";

export const UserContext = createContext();

function App() {
  const getWidth = () => window.innerWidth;
  const [showMediaIcons, setShowMediaIcons] = React.useState(false);
  const [state, dispatch] = React.useReducer(reducer, initialState);
  let [width, setWidth] = React.useState(getWidth());
  React.useEffect(() => {
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };
    window.addEventListener("resize", resizeListener);

    if (width > 1000) {
      console.log(width);
      setShowMediaIcons(false);
    }
  });
  const RenderMenu = () => {
    if (state) {
      return (
        <div className="App">
          <BrowserRouter className="nav">
            <div className="navbar">
              <img src={process.env.PUBLIC_URL + "icon.png"}></img>

              <div
                className={showMediaIcons ? "mobile-menu-link" : "links"}
                style={{ height: "25rem" }}
              >
                <ul>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <hr className="horizontal" />
                  <li>
                    <Link
                      onClick={() => {
                        if (
                          window.location.href.match("http://localhost:3000")
                        ) {
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
                  <hr className="horizontal" />
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
            </Routes>
          </BrowserRouter>
        </div>
      );
    } else {
      return (
        <div className="App">
          <BrowserRouter className="nav">
            <div className="navbar">
              <img src="/img/icon.png"></img>

              <div
                className={showMediaIcons ? "mobile-menu-link" : "links"}
                style={{ height: "34rem" }}
              >
                <ul>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <hr className="horizontal" />
                  <li>
                    <Link
                      onClick={() => {
                        if (
                          window.location.href.match("http://localhost:3000")
                        ) {
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
                  <hr className="horizontal" />
                </ul>
              </div>
              <div className="hamburger-menu">
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                  <GiHamburgerMenu />
                </a>
              </div>
            </div>

            <Routes>
              <Route path="/home" exact element={<Home />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      );
    }
  };

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <BrowserRouter className="nav">
          <div className="navbar">
            <img src={process.env.PUBLIC_URL + "/img/icon.png"}></img>

            <div
              className={showMediaIcons ? "mobile-menu-link" : "links"}
              style={{ height: "25rem" }}
            >
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <hr className="horizontal" />
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
                <hr className="horizontal" />
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
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;

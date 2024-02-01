import React from "react";
import styles from "./index.module.css";
export default function Header() {
  return (
    <div className={styles.header}>
      <div className="header-top-bar">
        <div className="container">
          <div className="header-login">
            <a href="#" className="">
              <i className="fa fa-power-off"></i> Login
            </a>

            <div>
              <form action="#">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                <input
                  type="submit"
                  className="btn btn-default"
                  value="Login"
                />
                <a href="#" className="btn btn-link">
                  Forgot Password?
                </a>
              </form>
            </div>
          </div>

          <div className="header-register">
            <a href="#" className="">
              <i className="fa fa-plus-square"></i> Register
            </a>

            <div>
              <form action="#">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                <input
                  type="submit"
                  className="btn btn-default"
                  value="Register"
                />
              </form>
            </div>
          </div>
          <div className="header-logo text-center">
            <h2>
              <a href="index.html">
                GL<i className="fa fa-globe"></i>BO
              </a>
            </h2>
          </div>

          <div className="header-social">
            <a href="#">
              <span>
                <i className="fa fa-share-alt"></i>
              </span>
              <i className="fa fa-chevron-down social-arrow"></i>
            </a>

            <ul className="list-inline">
              <li className="active">
                <a href="#">
                  <i className="fa fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin-square"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="header-language">
            <a href="#">
              <span>EN</span>
              <i className="fa fa-chevron-down"></i>
            </a>
          </div>

          <div className="header-call-to-action">
            <a href="#" className="btn btn-default">
              <i className="fa fa-plus"></i> Add Listing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

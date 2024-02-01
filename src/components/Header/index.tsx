import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPowerOff,
  faEarthAfrica,
  faSquarePlus,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="{styles.header}">
      <div className="{styles.headerTopBar}">
        <div className="container">
          <div className="header-login">
            <Link to="/login">
              <FontAwesomeIcon icon={faPowerOff} /> Login
            </Link>
          </div>

          <div className="header-register">
            <Link to="/register">
              <FontAwesomeIcon icon={faSquarePlus} /> Register
            </Link>
          </div>
          <div className="header-logo text-center">
            <h2>
              <Link to="/">
                GL
                <FontAwesomeIcon icon={faEarthAfrica} />
                BO
              </Link>
            </h2>
          </div>
          <div className="header-call-to-action">
            <a href="#" className="btn btn-default">
              <FontAwesomeIcon icon={faPlus} /> Add Listing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

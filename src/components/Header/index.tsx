import React from "react";
import styles from "./index.module.scss";
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
    <div className={styles.headerTopBar}>
      <div className={styles.container}>
        <div className={styles.login}>
          <Link to="/login">
            <FontAwesomeIcon icon={faPowerOff} /> Login
          </Link>
        </div>
        <Link to="/register">
          <FontAwesomeIcon icon={faSquarePlus} /> Register
        </Link>
      </div>
      <div className={styles.logo}>
        <h2>
          <Link to="/">
            GL
            <FontAwesomeIcon icon={faEarthAfrica} />
            BO
          </Link>
        </h2>
      </div>
      <div className={styles.addListing}>
        <Link to="#">
          <FontAwesomeIcon icon={faPlus} /> Add Listing
        </Link>
      </div>
    </div>
  );
}

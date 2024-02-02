import React from "react";
import styles from "./index.module.scss";
import SearchBox from "../searchBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <SearchBox placeholder="search by Category" />
      <SearchBox placeholder="search by Location" />
      <button className={styles.btn}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

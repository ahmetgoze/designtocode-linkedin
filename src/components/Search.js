import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  const searchIcon = (
    <svg
      className="search_icon"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
        stroke="#0275B1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 19L14.65 14.65"
        stroke="#0275B1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div className={styles["search_container"]}>
      {searchIcon}
      <input type="text" name="search" id="search" placeholder="Search" />
    </div>
  );
};

export default Search;

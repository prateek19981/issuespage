import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.search__container}>
      <button>Filter</button>
      <input type="search" />
    </div>
  );
};

export default Search;

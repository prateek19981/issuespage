import React from "react";
import styles from "./Filter.module.css";
import Search from "../search/Search";

const Filter = () => {
  return (
    <div className={styles.filter__container}>
      <Search />
      <button>Labels</button>
      <button>Milestones</button>
      <button className={styles.success}>New Issue</button>
    </div>
  );
};

export default Filter;

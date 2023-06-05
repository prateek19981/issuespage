import React from "react";
import styles from "./ListHeader.module.css";

const ListHeader = () => {
  return (
    <div className={styles.listHeader__container}>
      <div className={styles.listHeader__container__left}>
        <span>
          <svg
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true">
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
          </svg>{" "}
          Open
        </span>
        <span className={styles.listHeader__container__left_closed}>
          {" "}
          ✔️ 977 closed{" "}
        </span>
      </div>
      <div className={styles.listHeader__container__right}>
        <ul>
          <li>
            <p>Author ▾</p>
          </li>
          <li>
            <p>Label ▾</p>
          </li>
          <li>
            <p>Projects ▾</p>
          </li>
          <li>
            <p>Milestone ▾</p>
          </li>
          <li>
            <p>Assignee ▾</p>
          </li>
          <li>
            <p>Sort ▾</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListHeader;

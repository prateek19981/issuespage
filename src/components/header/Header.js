import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header__container}>
      <div className={styles.header__container_top}>
        <div className={styles.header__container_left}>
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="octicon octicon-repo color-fg-muted mr-2">
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
          </svg>
          <p>facebook/react</p>
        </div>
        <div className={styles.header__container_right}>
          <button className={styles.chip}>Pin</button>
          <button className={styles.chip}>Unwatch</button>
          <button className={styles.chip}>Fork</button>
          <button className={styles.chip}>Star</button>
        </div>
      </div>
      <div className={styles.header__container_bottom}>
        <ul>
          <li>
            <h4>code</h4>
          </li>
          <li className={styles.header__container_bottom_selected}>
            <h4>Issues</h4>
          </li>
          <li>
            <h4>Pull Requests</h4>
          </li>
          <li>
            <h4>Actions</h4>
          </li>
          <li>
            <h4>Projects</h4>
          </li>
          <li>
            <hh4>Wiki</hh4>
          </li>
          <li>
            <h4>Security</h4>
          </li>
          <li>
            <h4>Insights</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

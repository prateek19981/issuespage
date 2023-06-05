import React from "react";
import styles from "./IssueItem.module.css";
import Label from "../label/Label";
import { forwardRef } from "react";
import { getDays } from "../../utils/getDays";

const IssueItem = ({ details }, ref) => {
  let day = new Date(details.updated_at).getTime();
  return (
    <div className={styles.issueItem__container} ref={ref}>
      <div className={styles.issueItem__container__head}>
        <span className={styles.issueItem__container__headIcon}>
          <svg
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true">
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
          </svg>
        </span>
        <p> {details.title}</p>
        {details.labels.map((item) => {
          return <Label details={item} />;
        })}
      </div>
      <span>
        #{details.id} opened {getDays(new Date(Date.now() - day))} ago by{" "}
        {details.user.login}
      </span>
    </div>
  );
};

export default forwardRef(IssueItem);

import React from "react";
import styles from "./Label.module.css";

const Label = ({ details }) => {
  return (
    <div
      style={{
        backgroundColor: `#${details.color}`,
        padding: "4px 14px",
        borderRadius: "8px",
        height: "fit-content",
      }}>
      {details.name}
    </div>
  );
};

export default Label;

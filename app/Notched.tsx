import React from "react";
import styles from "./NotchedInput.module.css";

const NotchedInput: React.FC = () => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel}>Subject</label>
      <input
        type="text"
        className={styles.notchedInput}
        placeholder="Provide a subject for your reference"
      />
    </div>
  );
};

export default NotchedInput;

/* eslint-disable react/prop-types */

// import { useState } from "react";
import styles from "./TaskCards.module.css";
import { Trash } from "@phosphor-icons/react";

function TaskCards({ content, handleclicks, deleteTask }) {

  function handleClick() {
    handleclicks();
  }
  return (
    <article className={styles.taskCards}>
      <label onClick={handleClick} className={styles.checked}>
        <input
          type="checkbox"
          checked={content.checked}
          onChange={() => {}}
          name=""
          id="c1-13"
        />
      </label>
      <div className={content.checked ? styles.contentChecked : styles.content}>
        <p>{content.text}</p>
      </div>
      <div onClick={deleteTask} className={styles.trash}>
        <Trash size={24} />
      </div>
    </article>
  );
}

export default TaskCards;

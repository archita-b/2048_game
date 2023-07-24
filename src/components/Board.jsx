import { useState } from "react";
import styles from "./Board.module.css";

export function Board() {
  const [array, setArray] = useState(new Array(16).fill(0));
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {array.map((element) => {
          return <div className={styles.square}>{element}</div>;
        })}
      </div>
    </div>
  );
}

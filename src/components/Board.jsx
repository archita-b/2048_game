import { useState } from "react";
import styles from "./Board.module.css";

function Square({ value }) {
  // const [value, setValue] = useState(null);

  // function handleKeydown(e) {
  //   if (e.key == "ArrowDown") {
  //     e.preventDefault();
  //     setValue("2");
  //   }
  // }

  return <div className={styles.square}>{value}</div>;
}

// function Row() {
//   return (
//     <div className={styles.row}>
//       <Square />
//       <Square />
//       <Square />
//       <Square />
//     </div>
//   );
// }

export function Board() {
  return (
    <div className={styles.board}>
      <div className={styles.row}>
        <Square value="2" />
        <Square />
        <Square />
        <Square value="2" />
      </div>
      <div className={styles.row}>
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
      <div className={styles.row}>
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
      <div className={styles.row}>
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

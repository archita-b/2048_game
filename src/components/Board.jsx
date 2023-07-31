import styles from "./Board.module.css";

export function Board({ board }) {
  return (
    <div className={styles.board}>
      {board.map((row, rowId) => {
        return (
          <div key={rowId} className={styles.row}>
            {row.map((square, colId) => (
              <div key={colId} className={styles.square}>
                {square}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

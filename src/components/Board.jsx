import { useEffect, useState } from "react";
import styles from "./Board.module.css";
import {
  getEmptyBoard,
  handleArrowDown,
  handleArrowLeft,
  handleArrowRight,
  handleArrowUp,
  handleKeyDown,
  init,
} from "../game.js";

export function Board() {
  const [board, setBoard] = useState(() => getEmptyBoard());

  useEffect(() => {
    const newBoard = [...board];
    init(newBoard);
    setBoard(newBoard);
    document.addEventListener("keydown", (event) => {
      handleKeyDown(event, board, setBoard);
    });
  }, []);

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

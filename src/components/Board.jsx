import { useEffect, useState } from "react";
import styles from "./Board.module.css";
import { getInitialBoard, handleArrowKey, isGameOver } from "../game.js";

export function Board() {
  const [board, setBoard] = useState(() => {
    const storedBoard = localStorage.getItem("Board");
    return storedBoard === null ? getInitialBoard() : JSON.parse(storedBoard);
  });

  useEffect(() => {
    localStorage.setItem("Board", JSON.stringify(board));
    if (isGameOver(board)) {
      alert("Game over!!!");
    }
  }, [board]);

  useEffect(() => {
    const newBoard = [...board];
    setBoard(newBoard);
    document.addEventListener("keydown", (event) => {
      handleArrowKey(event, board, setBoard);
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

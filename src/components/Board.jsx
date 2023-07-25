import { useEffect, useState } from "react";
import styles from "./Board.module.css";

export function Board() {
  const [board, setBoard] = useState([
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ]);

  useEffect(() => {
    init();
    document.addEventListener("keydown", handleKeyDown);
  }, []);

  function init() {
    const newBoard = [...board];
    addNumber(newBoard);
    addNumber(newBoard);
    setBoard(newBoard);
  }

  function addNumber(newArray) {
    let populateSquare = false;
    let populateBoard = false;

    while (!populateSquare) {
      if (populateBoard) break;

      let random1 = Math.floor(Math.random() * 4);
      let random2 = Math.floor(Math.random() * 4);

      if (newArray[random1][random2] === null) {
        newArray[random1][random2] = Math.random() < 0.9 ? 2 : 4;
        populateSquare = true;
      }
    }
  }

  function handleKeyDown(event) {
    event.preventDefault();
    const newBoard = [...board];
    let moved = false;

    switch (event.key) {
      case "ArrowDown":
        handleArrowDown();
        break;
      case "ArrowUp":
        handleArrowUp();
        break;
      case "ArrowLeft":
        handleArrowLeft();
        break;
      case "ArrowRight":
        handleArrowRight();
        break;
    }

    if (moved) addNumber(newBoard);
    setBoard(newBoard);

    function handleArrowDown() {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (newBoard[i][j + 1] === null) {
            newBoard[i][j + 1] = newBoard[i][j];
            newBoard[i][j] = null;
            moved = true;
          } else if (newBoard[i][j + 1] === newBoard[i][j]) {
            newBoard[i][j + 1] = newBoard[i][j] * 2;
            moved = true;
          }
        }
      }
    }

    function handleArrowUp() {
      for (let i = 0; i < 4; i++) {
        for (let j = 3; j >= 0; j--) {
          if (newBoard[i][j - 1] === null) {
            newBoard[i][j - 1] = newBoard[i][j];
            newBoard[i][j] = null;
            moved = true;
          } else if (newBoard[i][j - 1] === newBoard[i][j]) {
            newBoard[i][j - 1] = newBoard[i][j] * 2;
            moved = true;
          }
        }
      }
    }

    function handleArrowLeft() {
      for (let i = 3; i > 0; i--) {
        for (let j = 0; j < 4; j++) {
          if (newBoard[i - 1][j] === null) {
            newBoard[i - 1][j] = newBoard[i][j];
            newBoard[i][j] = null;
            moved = true;
          } else if (newBoard[i - 1][j] === newBoard[i][j]) {
            newBoard[i - 1][j] = newBoard[i][j] * 2;
            moved = true;
          }
        }
      }
    }

    function handleArrowRight() {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
          if (newBoard[i + 1][j] === null) {
            newBoard[i + 1][j] = newBoard[i][j];
            newBoard[i][j] = null;
            moved = true;
          } else if (newBoard[i + 1][j] === newBoard[i][j]) {
            newBoard[i + 1][j] = newBoard[i][j] * 2;
            moved = true;
          }
        }
      }
    }
  }

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

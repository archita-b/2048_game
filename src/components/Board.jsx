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

    let random1 = Math.floor(Math.random() * 4);
    let random2 = Math.floor(Math.random() * 4);

    if (newArray[random1][random2] === null) {
      newArray[random1][random2] = Math.random() < 0.9 ? 2 : 4;
      populateSquare = true;
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
      default:
        break;
    }

    // if (moved) {
    addNumber(newBoard);
    setBoard(newBoard);
    // }

    function handleArrowDown() {
      for (let col = 0; col < 4; col++) {
        for (let row = 2; row >= 0; row--) {
          let currentRow = row;
          while (currentRow < 3 && newBoard[col][currentRow] !== null) {
            if (newBoard[col][currentRow + 1] === null) {
              newBoard[col][currentRow + 1] = newBoard[col][currentRow];
              newBoard[col][currentRow] = null;
              currentRow++;
              moved = true;
            } else if (
              newBoard[col][currentRow + 1] === newBoard[col][currentRow]
            ) {
              newBoard[col][currentRow + 1] *= 2;
              newBoard[col][currentRow] = null;
              moved = true;
            } else break;
          }
        }
      }
    }

    function handleArrowUp() {
      for (let col = 0; col < 4; col++) {
        for (let row = 1; row < 4; row++) {
          let currentRow = row;
          while (currentRow > 0 && newBoard[col][currentRow] !== null) {
            if (newBoard[col][currentRow - 1] === null) {
              newBoard[col][currentRow - 1] = newBoard[col][currentRow];
              newBoard[col][currentRow] = null;
              currentRow--;
              moved = true;
            } else if (
              newBoard[col][currentRow - 1] === newBoard[col][currentRow]
            ) {
              newBoard[col][currentRow - 1] *= 2;
              newBoard[col][currentRow] = null;
              moved = true;
            } else break;
          }
        }
      }
    }

    function handleArrowLeft() {
      for (let col = 1; col < 4; col++) {
        for (let row = 0; row < 4; row++) {
          let currentCol = col;
          while (currentCol > 0 && newBoard[currentCol][row] !== null) {
            if (newBoard[currentCol - 1][row] === null) {
              newBoard[currentCol - 1][row] = newBoard[currentCol][row];
              newBoard[currentCol][row] = null;
              currentCol--;
              moved = true;
            } else if (
              newBoard[currentCol - 1][row] === newBoard[currentCol][row]
            ) {
              newBoard[currentCol - 1][row] *= 2;
              newBoard[currentCol][row] = null;
              moved = true;
            } else break;
          }
        }
      }
    }

    function handleArrowRight() {
      for (let col = 2; col >= 0; col--) {
        for (let row = 0; row < 4; row++) {
          let currentCol = col;
          while (currentCol < 3 && newBoard[currentCol][row] !== null) {
            if (newBoard[currentCol + 1][row] === null) {
              newBoard[currentCol + 1][row] = newBoard[currentCol][row];
              newBoard[currentCol][row] = null;
              currentCol++;
              moved = true;
            } else if (
              newBoard[currentCol + 1][row] === newBoard[currentCol][row]
            ) {
              newBoard[currentCol + 1][row] *= 2;
              newBoard[currentCol][row] = null;
              moved = true;
            } else break;
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

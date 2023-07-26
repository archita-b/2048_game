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
    // let populateBoard = false;

    // while (!populateSquare) {
    //   if (populateBoard) break;

    let random1 = Math.floor(Math.random() * 4);
    let random2 = Math.floor(Math.random() * 4);

    if (newArray[random1][random2] === null) {
      newArray[random1][random2] = Math.random() < 0.9 ? 2 : 4;
      populateSquare = true;
    }
    // }
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

    if (moved) addNumber(newBoard);
    setBoard(newBoard);

    function handleArrowDown() {
      for (let col = 0; col < 4; col++) {
        for (let row = 2; row >= 0; row--) {
          if (newBoard[col][row] !== null) {
            if (newBoard[col][row + 1] === null) {
              newBoard[col][row + 1] = newBoard[col][row];
              newBoard[col][row] = null;
              moved = true;
            } else if (newBoard[col][row + 1] === newBoard[col][row]) {
              newBoard[col][row + 1] *= 2;
              newBoard[col][row] = null;
              moved = true;
            }
          }
        }
      }
    }

    function handleArrowUp() {
      for (let col = 0; col < 4; col++) {
        for (let row = 1; row < 4; row++) {
          if (newBoard[col][row] !== null) {
            if (newBoard[col][row - 1] === null) {
              newBoard[col][row - 1] = newBoard[col][row];
              newBoard[col][row] = null;
              moved = true;
            } else if (newBoard[col][row - 1] === newBoard[col][row]) {
              newBoard[col][row - 1] *= 2;
              newBoard[col][row] = null;
              moved = true;
            }
          }
        }
      }
    }

    function handleArrowLeft() {
      for (let col = 1; col < 4; col++) {
        for (let row = 0; row < 4; row++) {
          if (newBoard[col][row] !== null) {
            if (newBoard[col - 1][row] === null) {
              newBoard[col - 1][row] = newBoard[col][row];
              newBoard[col][row] = null;
              moved = true;
            } else if (newBoard[col - 1][row] === newBoard[col][row]) {
              newBoard[col - 1][row] *= 2;
              newBoard[col][row] = null;
              moved = true;
            }
          }
        }
      }
    }

    function handleArrowRight() {
      for (let col = 2; col >= 0; col--) {
        for (let row = 0; row < 4; row++) {
          if (newBoard[col][row] !== null) {
            if (newBoard[col + 1][row] === null) {
              newBoard[col + 1][row] = newBoard[col][row];
              newBoard[col][row] = null;
              moved = true;
            } else if (newBoard[col + 1][row] === newBoard[col][row]) {
              newBoard[col + 1][row] *= 2;
              newBoard[col][row] = null;
              moved = true;
            }
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

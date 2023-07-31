import { useState, useEffect } from "react";
import { Board } from "./components/Board";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NewGameBox } from "./components/NewGameBox";
import { getInitialBoard, handleArrowKey, isGameOver } from "./game.js";

export default function App() {
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

  function resetBoard() {
    setBoard(getInitialBoard());
  }

  return (
    <div className="gameContainer">
      <Header />
      <NewGameBox resetBoard={resetBoard} />
      <Board board={board} />
      <Footer />
    </div>
  );
}

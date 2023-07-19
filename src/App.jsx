import { Board } from "./components/Board";
import { Header } from "./components/Header";
import { NewGameBox } from "./components/NewGameBox";

export default function App() {
  return (
    <div className="gameContainer">
      <Header />
      <NewGameBox />
      <Board />
    </div>
  );
}

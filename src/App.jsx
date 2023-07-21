import { Board } from "./components/Board";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NewGameBox } from "./components/NewGameBox";

export default function App() {
  return (
    <div className="gameContainer">
      <Header />
      <NewGameBox />
      <Board />
      <Footer />
    </div>
  );
}

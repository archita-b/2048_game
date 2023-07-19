import styles from "./NewGameBox.module.css";

export function NewGameBox() {
  return (
    <div className={styles.newGameBox}>
      <p>
        Join the tiles, get to <strong>2048!</strong>
        <br />
        <a href="" className={styles.howToPlayLink}>
          How to play {"\u2192"}
        </a>
      </p>
      <button className={styles.newGameButton}>New Game</button>
    </div>
  );
}

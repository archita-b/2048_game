import styles from "./NewGameBox.module.css";

export function NewGameBox() {
  console.log("styles=", styles);
  return (
    <div className={styles.newGameBox}>
      <p>
        Join the tiles, get to <strong>2048!</strong>
        <br />
        <a href="#how-to-play" className={styles.howToPlayLink}>
          <strong>How to play {"\u2192"}</strong>
        </a>
      </p>
      <button className={styles.newGameButton}>New Game</button>
    </div>
  );
}

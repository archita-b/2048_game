import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.howToPlay} id="how-to-play">
      <strong>HOW TO PLAY:</strong> Use your <strong>arrow keys</strong> to move
      the tiles. Tiles with same number <strong>merge into one</strong>
      when they touch. Add them up to reach <strong>2048!</strong>
      <br />
      <a href="" className={styles.startPlayingLink}>
        <strong>Start playing{"\u2192"}</strong>
      </a>
    </div>
  );
}

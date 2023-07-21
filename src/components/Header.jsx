import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.heading}>
      <h1>2048</h1>
      <div className={styles.scorebox}>
        <div className={styles.currentscore}>
          <p>SCORE</p>
          <p>0</p>
        </div>
        <div className={styles.bestscore}>
          <p>BEST</p>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}

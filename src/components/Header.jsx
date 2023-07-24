import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.heading}>
      <h1>2048</h1>
      <div className={styles.scorebox}>
        <div className={styles.currentscore}>
          <span>SCORE</span>
          <span>0</span>
        </div>
        <div className={styles.bestscore}>
          <span>BEST</span>
          <span>0</span>
        </div>
      </div>
    </div>
  );
}

import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.heading}>
      <h1>2048</h1>
      <div className={styles.scorebox}>
        <div className={styles.currentscore}>
          <p>score</p>
          <p>0</p>
        </div>
        <div className={styles.bestscore}>
          <p>score</p>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}

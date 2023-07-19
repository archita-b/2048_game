import styles from "./Board.module.css";

function Square() {
  return <div className={styles.square}>X</div>;
}

function Row() {
  return (
    <div className={styles.row}>
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}

export function Board() {
  return (
    <div className={styles.board}>
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  );
}

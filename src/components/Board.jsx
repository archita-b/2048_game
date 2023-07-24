import { useEffect, useState } from "react";
import styles from "./Board.module.css";

export function Board() {
  const [array, setArray] = useState(new Array(16).fill(null));
  // console.log("arr=", array);

  useEffect(() => {
    init();
  }, []);

  function init() {
    let newArray = [...array];
    // console.log(newArray);
    addNumber(newArray);
    addNumber(newArray);
    setArray(newArray);
  }

  function addNumber(newArray) {
    // console.log("hi");
    // let added = false;
    // let arrayFull = false;
    // while (!added) {
    //   if (arrayFull) break;
    // }
    let random = Math.floor(Math.random() * 16);
    // console.log("rand=", random);
    if (newArray[random] === null) {
      newArray[random] = 2;
      // added = true;
    }
  }

  return (
    <div className={styles.board}>
      {array.map((element) => {
        return <div className={styles.square}>{element}</div>;
      })}
    </div>
  );
}

export function getEmptyBoard() {
  return [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ];
}

export function init(board) {
  addNumber(board);
  addNumber(board);
  return board;
}

function addNumber(board) {
  let added = false;
  let boardFull = false;

  while (!added) {
    if (boardFull) break;

    let random1 = Math.round(Math.random() * 3);
    let random2 = Math.round(Math.random() * 3);

    if (board[random1][random2] === null) {
      board[random1][random2] = Math.random() < 0.9 ? 2 : 4;
      added = true;
    }
  }
}

export function handleKeyDown(event, board, setBoard) {
  event.preventDefault();

  const newBoard = [...board];

  switch (event.key) {
    case "ArrowDown":
      moveDown(newBoard);
      break;
    case "ArrowUp":
      moveUp(newBoard);
      break;
    case "ArrowLeft":
      moveLeft(newBoard);
      break;
    case "ArrowRight":
      moveRight(newBoard);
      break;
  }
  setBoard(newBoard);
  // if (isGameOver(newBoard)) {
  //   alert("Game over!!!");
  // }
}

function moveDown(board) {
  const oldBoard = JSON.parse(JSON.stringify(board));

  for (let col = 0; col < 4; col++) {
    for (let row = 2; row >= 0; row--) {
      let currentRow = row;
      while (currentRow < 3 && board[col][currentRow] !== null) {
        if (board[col][currentRow + 1] === null) {
          board[col][currentRow + 1] = board[col][currentRow];
          board[col][currentRow] = null;
          currentRow++;
        } else if (board[col][currentRow + 1] === board[col][currentRow]) {
          board[col][currentRow + 1] *= 2;
          board[col][currentRow] = null;
        } else break;
      }
    }
  }
  if (JSON.stringify(oldBoard) !== JSON.stringify(board)) {
    addNumber(board);
  }
  return board;
}

function moveUp(board) {
  const oldBoard = JSON.parse(JSON.stringify(board));

  for (let col = 0; col < 4; col++) {
    for (let row = 1; row < 4; row++) {
      let currentRow = row;
      while (currentRow > 0 && board[col][currentRow] !== null) {
        if (board[col][currentRow - 1] === null) {
          board[col][currentRow - 1] = board[col][currentRow];
          board[col][currentRow] = null;
          currentRow--;
        } else if (board[col][currentRow - 1] === board[col][currentRow]) {
          board[col][currentRow - 1] *= 2;
          board[col][currentRow] = null;
        } else break;
      }
    }
  }
  if (JSON.stringify(oldBoard) !== JSON.stringify(board)) {
    addNumber(board);
  }
  return board;
}

function moveLeft(board) {
  const oldBoard = JSON.parse(JSON.stringify(board));

  for (let col = 1; col < 4; col++) {
    for (let row = 0; row < 4; row++) {
      let currentCol = col;
      while (currentCol > 0 && board[currentCol][row] !== null) {
        if (board[currentCol - 1][row] === null) {
          board[currentCol - 1][row] = board[currentCol][row];
          board[currentCol][row] = null;
          currentCol--;
        } else if (board[currentCol - 1][row] === board[currentCol][row]) {
          board[currentCol - 1][row] *= 2;
          board[currentCol][row] = null;
        } else break;
      }
    }
  }
  if (JSON.stringify(oldBoard) !== JSON.stringify(board)) {
    addNumber(board);
  }
  return board;
}

function moveRight(board) {
  const oldBoard = JSON.parse(JSON.stringify(board));

  for (let col = 2; col >= 0; col--) {
    for (let row = 0; row < 4; row++) {
      let currentCol = col;
      while (currentCol < 3 && board[currentCol][row] !== null) {
        if (board[currentCol + 1][row] === null) {
          board[currentCol + 1][row] = board[currentCol][row];
          board[currentCol][row] = null;
          currentCol++;
        } else if (board[currentCol + 1][row] === board[currentCol][row]) {
          board[currentCol + 1][row] *= 2;
          board[currentCol][row] = null;
        } else break;
      }
    }
  }
  if (JSON.stringify(oldBoard) !== JSON.stringify(board)) {
    addNumber(board);
  }
  return board;
}

function isGameOver(board) {
  if (JSON.stringify(board) !== JSON.stringify(moveDown(board))) {
    return false;
  }
  if (JSON.stringify(board) !== JSON.stringify(moveUp(board))) {
    return false;
  }
  if (JSON.stringify(board) !== JSON.stringify(moveLeft(board))) {
    return false;
  }
  if (JSON.stringify(board) !== JSON.stringify(moveRight(board))) {
    return false;
  }
  return true;
}

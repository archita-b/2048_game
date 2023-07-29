export function getInitialBoard() {
  const initialBoard = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ];
  addNumber(initialBoard);
  addNumber(initialBoard);
  return initialBoard;
}

function addNumber(board) {
  let added = false;
  let gameOver = isGameOver(board);

  while (!added) {
    if (gameOver) break;

    let random1 = Math.round(Math.random() * 3);
    let random2 = Math.round(Math.random() * 3);

    if (board[random1][random2] === null) {
      board[random1][random2] = Math.random() < 0.9 ? 2 : 4;
      added = true;
    }
  }
}

export function handleArrowKey(event, board, setBoard) {
  event.preventDefault();

  const newBoard = [...board];

  switch (event.key) {
    case "ArrowDown":
      moveDown(newBoard, true);
      break;
    case "ArrowUp":
      moveUp(newBoard, true);
      break;
    case "ArrowLeft":
      moveLeft(newBoard, true);
      break;
    case "ArrowRight":
      moveRight(newBoard, true);
      break;
  }
  setBoard(newBoard);
}

function moveDown(board, moved) {
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

  if (moved) {
    addNumber(board);
    // return board;
  }
  return board;
}

function moveUp(board, moved) {
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

  if (moved) {
    addNumber(board);
    // return board;
  }
  return board;
}

function moveLeft(board, moved) {
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

  if (moved) {
    addNumber(board);
    // return board;
  }
  return board;
}

function moveRight(board, moved) {
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

  if (moved) {
    addNumber(board);
    // return board;
  }
  return board;
}

export function isGameOver(board) {
  for (let col = 0; col < 4; col++) {
    for (let row = 0; row < 4; row++) {
      if (board[col][row] === null) {
        return false;
      }
    }
  }

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

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
}

function moveDown(board) {
  let moved = false;
  for (let col = 0; col < 4; col++) {
    for (let row = 2; row >= 0; row--) {
      let currentRow = row;
      while (currentRow < 3 && board[col][currentRow] !== null) {
        if (board[col][currentRow + 1] === null) {
          board[col][currentRow + 1] = board[col][currentRow];
          board[col][currentRow] = null;
          currentRow++;
          moved = true;
        } else if (board[col][currentRow + 1] === board[col][currentRow]) {
          board[col][currentRow + 1] *= 2;
          board[col][currentRow] = null;
          moved = true;
        } else break;
      }
    }
  }

  if (moved) {
    addNumber(board);
  }
  return moved;
}

function moveUp(board) {
  let moved = false;

  for (let col = 0; col < 4; col++) {
    for (let row = 1; row < 4; row++) {
      let currentRow = row;
      while (currentRow > 0 && board[col][currentRow] !== null) {
        if (board[col][currentRow - 1] === null) {
          board[col][currentRow - 1] = board[col][currentRow];
          board[col][currentRow] = null;
          currentRow--;
          moved = true;
        } else if (board[col][currentRow - 1] === board[col][currentRow]) {
          board[col][currentRow - 1] *= 2;
          board[col][currentRow] = null;
          moved = true;
        } else break;
      }
    }
  }

  if (moved) {
    addNumber(board);
  }
  return moved;
}

function moveLeft(board) {
  let moved = false;

  for (let col = 1; col < 4; col++) {
    for (let row = 0; row < 4; row++) {
      let currentCol = col;
      while (currentCol > 0 && board[currentCol][row] !== null) {
        if (board[currentCol - 1][row] === null) {
          board[currentCol - 1][row] = board[currentCol][row];
          board[currentCol][row] = null;
          currentCol--;
          moved = true;
        } else if (board[currentCol - 1][row] === board[currentCol][row]) {
          board[currentCol - 1][row] *= 2;
          board[currentCol][row] = null;
          moved = true;
        } else break;
      }
    }
  }

  if (moved) {
    addNumber(board);
  }
  return moved;
}

function moveRight(board) {
  let moved = false;

  for (let col = 2; col >= 0; col--) {
    for (let row = 0; row < 4; row++) {
      let currentCol = col;
      while (currentCol < 3 && board[currentCol][row] !== null) {
        if (board[currentCol + 1][row] === null) {
          board[currentCol + 1][row] = board[currentCol][row];
          board[currentCol][row] = null;
          currentCol++;
          moved = true;
        } else if (board[currentCol + 1][row] === board[currentCol][row]) {
          board[currentCol + 1][row] *= 2;
          board[currentCol][row] = null;
          moved = true;
        } else break;
      }
    }
  }

  if (moved) {
    addNumber(board);
  }
  return moved;
}

export function isGameOver(board) {
  for (let col = 0; col < 4; col++) {
    for (let row = 0; row < 4; row++) {
      if (board[col][row] === null) {
        return false;
      }
    }
  }

  if (moveDown(board) === true) return false;
  if (moveUp(board) === true) return false;
  if (moveLeft(board) === true) return false;
  if (moveRight(board) === true) return false;

  return true;
}

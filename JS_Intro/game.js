const board = [
  ["br", "bh", "bb", "bq", "bk", "bb", "bh", "br"],
  ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
  ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
  ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
  ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
  ["ee", "ee", "ee", "ee", "ee", "ee", "ee", "ee"],
  ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
  ["wr", "wh", "wb", "wq", "wk", "wb", "wh", "wr"],
];

const pieces = {
  r: "♜",
  h: "♞",
  b: "♝",
  q: "♛",
  k: "♚",
  p: "♟",
  e: "",
};
const colors = {
  b: "black",
  w: "white",
  e: "empty",
};

function renderBoard() {
  const boardElement = $("#board");
  const boardHTML = board
    .map((row) => {
      return `<div class="row">${row
        .map((piece) => {
          const char = piece[1];
          const color = piece[0]; // e, b, w
          return `<div class="cell ${colors[color]}">${pieces[char]}</div>`;
        })
        .join("")}</div>`;
    })
    .join("");

  boardElement.html(boardHTML);
}
renderBoard()
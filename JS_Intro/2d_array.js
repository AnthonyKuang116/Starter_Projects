//chess board
const board = [
    ['br','bh','bb','bq', 'bk','bb','bh','br'],//black pieces
    ['bp','bp','bp','bp','bp','bp','bp','bp',],//black pawn
    ['ee','ee','ee','ee','ee','ee','ee','ee'],//empty
    ['ee','ee','ee','ee','ee','ee','ee','ee'],//empty
    ['ee','ee','ee','ee','ee','ee','ee','ee'],//empty
    ['ee','ee','ee','ee','ee','ee','ee','ee'],//empty
    ['wp','wp','wp','wp','wp','wp','wp','wp',],//white pawn
    ['wr', 'wh', 'wb','wq','wk','wb','wh','wr']//white pieces
];

// const black_queen = board[0][3]
// console.log(black_queen)//bq

const pieces = {
    r: '♜',
    h: '♞',
    b: '♝',
    q: '♛',
    k: '♚',
    p: '♙',
    e: 'e'
}

const colors = {
    b: 'black',
    w: 'white',
    e: 'empty'
}

function renderBoard(){
    const boardElement = $('#board');
    const boardHTML = board.map(row => {//element, index, arr
        //arr === board //true
        return `<div class="row">${
            row.map(piece => {
                const char = piece[1];
                const color = piece[0] //e,b,w
                return `<div class="cell ${colors[color]}>${pieces[char]}</div>`
            })
        .join("")}
        </div>`
       
    })
    .join("");
    boardElement.html(boardHTML)
}
renderBoard()
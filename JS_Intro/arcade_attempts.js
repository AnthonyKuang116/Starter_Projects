//Creates an empty board
// const board = [
//     ['e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e'],
//     ['e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e'],
//     ['e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e'],
//     ['e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e'],
//     ['e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e'],
//     ['e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e'],
//     ['e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e'],
//     ['e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e'],
//     ['e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e'],
//     ['e', 'e', 'e', 'e', 'e','e', 'e', 's', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e'],
//     ['e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e'],
//     ['e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e'],
//     ['e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e'],
//     ['e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e'],
//     ['e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e'],
//     ['e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e'],
//     ['e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e'],
//     ['e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e'],
//     ['e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e'],
//     ['e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e','e', 'e', 'e', 'e', 'e'],
// ]

// const e = "e", s = "s"
// const board = Array.from({length: 20}).map(_ => e.repeat(20).split(""))




// const outerArray = Array.from({length: 20}).map((_, idx) => idx + 1);
// const twoDArray = outerArray.map((outerN) => [...outerArray].map((innerN) => `${outerN}, ${innerN}`))
// snakeBody = [{}]
// function renderSnake(){
//     snakeBody.forEach(body =>{
//         let snakeElement = document.createElement("div")
//         snakeElement.style.gridRowStart = body.y
//         snakeElement.style.gridColumnStart = body.x
//         snakeElement.classList.add("snake")
//         $('#board').append(snakeElement)
//     })
    
// }




// // creating snake
// board[9][7] = s //tail
// board[9][8] = s //body
// board[9][9] = s //head

// // the area will either be empty or a snake
// const area = {
//     e: "",
//     s: "",
// }
// const colors = {
//     e: "green",
//     s: "blue",
// }

// function renderBoard(){
//     const boardElement = $('#board');
//     const boardHTML = board
//         .map(row => {
//             return `<div class="row">${row
//                 .map((cell) => {
//                     const body = cell[0];
//                     const color = cell[0]
//                     return `<div class="cell ${colors[color]}">${area[body]}</div>`
//                 })
//             .join("")}</div>`
//         })
//         .join("");
//     boardElement.html(boardHTML);
// }
// renderBoard()


// setInterval(() =>{
//     renderBoard()
//     snakeMovement()
// }, 500)



// //reads keyboard direciton
// let dir = 'right'//default direction
// $(document).keydown(function(event){
//     if(event.which == 40){
//         dir = 'top';
//     }
//     else if(event.which == 39){
//         dir = 'left';
//     }
//     else if(event.which == 38){
//         dir = 'bottom';
//     }
//     else if(event.which == 37){
//         dir = 'right';
//     }
// })
// //snake movement 
// setInterval(() => {
//     // snake = $('.snake');
//     // let food = $('.food');
//     if(dir == 'top'){
//         snakeBody.css({"top": $(".snake").position().top + 35 + "px"});
//     }
//     else if(dir == 'left'){
//         snakeBody.css({"left": $(".snake").posistion().left + 35 + "px"});
//     }
//     else if(dir == 'bottom'){
//         snakeBody.css({"top": $(".snake").position().top - 35 + "px"});
//     }
//     else if(dir == "right"){
//         snakeBody.css({"left": $(".snake.").position().left - 35 + "px"});
//     }
//     renderBoard();
// }, 500);


//create color palette
function makePalette(){
    //creating color palette
    const PALETTE = [
        'red',
        'blue',
        'green',
        'orange',
        'yellow',
        'pink',
        'white',
        'black',
        'gray',
        'purple'
    ]
    //Applying color to buttons
    for(let  index = 0; index < PALETTE.length; index = index + 1){
        //grabbing color index
        const nextColor = PALETTE[index]
        
        //applying color from index to background
        const color_button = $('<button></button>')
        color_button.css('background-color', nextColor)

        //appending button to palette
        $('.palette').append(color_button)
    }
    $('.palette button').first().addClass('active');
}
//calling makePalette function that makes the first button active
makePalette()

//creating the grid
function makeGrid(){
    //Creating Cells
    for(let cells = 0; cells < 64; cells = cells + 1){
        const new_cell = $('<div></div>', {
            class: 'cell'
        })
        $('.grid').append(new_cell)
    }
}
makeGrid()

//Changes the active color upon click
function onPaletteClick(){
    $('.palette button').removeClass('active')
    $(this).addClass('active')
}
$('.palette button').click(onPaletteClick)

//Upon clicking a cell, background color changes depending on the active color button
function onGridClick(){
    let color = $('.active').css('background-color')
    if (color === $(this).css('background-color')){
        $(this).css('background-color', "")
    }
    else{
        $(this).css('background-color', color)
    }
}
$('.grid .cell').click(onGridClick)
function onGridClick2(){
    let color = $('.active').css('background-color')
    $(this).css('background-color', color)
}


//Clears all colors from cells
function onClearClick(){
    $('.cell').css('background-color', '')
}
$('.controls .clear').click(onClearClick)

//colors the entire grid the active color when clicked
function onFillAllClick(){
    let color = $('.active').css('background-color')
    $('.cell').css('background-color', color)
}
$('.controls .fill-all').click(onFillAllClick)

//changes background color of all empty cells to the active color
function onFillEmptyClick(){
    const elements = $('.cell')
    for (let index = 0; index < elements.length; index = index + 1) {
      let nextElement = $( elements[index] )
      let color = $('.active').css('background-color')
      if (nextElement.css('background-color') === 'rgba(0, 0, 0, 0)') {
            nextElement.css('background-color', color)
      }
      else{
          continue
      }
    }
}
$('.controls .fill-empty').click(onFillEmptyClick)


//Making custom color and size selection div
const custom = $('<div>Custom Settings:</div>')
custom.css({
    fontSize: '40px',
    color: 'black',
    'margin-top': '20px'
})
$('.controls').append(custom)
const colorDesc = $('<p>Please enter the custom color below: </p>')
colorDesc.css({
    fontSize: '20px',
    'margin-top': '10px'
})
$(custom).append(colorDesc)

//creating a color div to flex color input and button
const colorDiv = $('<div></div>', {
    display: 'flex'
})
$(custom).append(colorDiv)


//creating input field for color
let newColor = document.createElement("input")
newColor.setAttribute("type", "text")
newColor.setAttribute("value", '')
$(colorDiv).append(newColor)

//button for custom color
const colorButton = $('<button>Create Color</button>')
colorButton.css({
    'width': '100px',
    'margin': '5px'
})
$(colorDiv).append(colorButton)

//grabbing input text as color
function customColorClick(){
    let customColor = newColor.value;
    //adding custom color onto PALETTE
    let newButton = $('<button></button>')
    newButton.css('background-color', customColor)
    newButton.click(onPaletteClick)
    //limits the amount of buttons on page
    if($('.palette button').length >= 11){
        $('.palette button')[0].remove()
        $('.palette').prepend(newButton)
        $('.palette button').removeClass('active')
        newButton.addClass('active')
    }
    else{
        $('.palette').prepend(newButton)
        $('.palette button').removeClass('active')
        newButton.addClass('active')
    }
}
$(colorButton).click(customColorClick)

//Hovering over cells will color them if mouse button is held down
function overGrid(){
    let mouseIsDown = false
    $('.cell').mousedown(function(){
        mouseIsDown = true
    })
    $('.cell').mouseenter(function(){
        if(mouseIsDown == true){
            let color = $('.active').css('background-color')
            $(this).css('background-color', color)
        }
    })
    $('body').mouseup(function(){
        mouseIsDown = false
    })
}
overGrid()


//CUSTOM GRID SETTINGS

//solid line break between custom settings
const customDivider = $('<hr>')
customDivider.css({
    border: '1px solid black',
    'margin-top': '20px'
})
$(custom).append(customDivider)

//creating a div for the custom grid settings
const gridDiv = $('<div></div>')
$(custom).append(gridDiv)

//Custom column description
let customColumnDesc = $('<p>Enter custom column size (max 20):</p>')
customColumnDesc.css({
    fontSize: '20px'
})
$(gridDiv).append(customColumnDesc)
customColumnDesc.css({
    'margin-top': '15px'
})
//custom column input field
let newColumn = document.createElement("input")
newColumn.setAttribute("type", "number")
newColumn.setAttribute("value", '')
$(gridDiv).append(newColumn)

//custom row description
let customRowDesc = $("<p>Enter custom row size (max 20):</p>")
$(gridDiv).append(customRowDesc)
customRowDesc.css({
    fontSize: '20px'
})
//custom row input field
let newRow = document.createElement("input")
newRow.setAttribute("type", "number")
newRow.setAttribute("value", '')
$(gridDiv).append(newRow)
//custom grid button
const newGridButton = $('<button>Generate new grid</button>')
newGridButton.css({
    'width': '100px',
    'margin': '5px'
})
$(custom).append(newGridButton)

//createing new custom grid defined by the column and row input fields
$('.customGrid').css({
    'margin': '0px',
    'display': 'flex',
    'flex-direction': 'row',
    'flex-wrap': 'wrap',
    'background': '#ccc'
})

let sizeError = false

function customGridSize(){
    //giving custom grid a margin now.  If it was given one before it while collide with the original grid margin
    $('.grid').remove();
    $('.customGrid').html("");

    //storing input values into variables
    let columnSize = newColumn.valueAsNumber;
    let rowSize = newRow.valueAsNumber;

    //checks if inputed fields are smaller than 21
    if(columnSize <= 20 && rowSize <= 20){
        $('.customGrid').css({
            'margin': '48px'
        })
        //creates new div for cells placement
        const newGrids = $('<div></div>')
        newGrids.css({
            'display': 'grid',
            'grid-template-rows': 'repeat('+ rowSize +', 64px)',
            'grid-template-columns': 'repeat(' + columnSize +', 64px)',
            'border': '1px solid black'
        })
        $('.customGrid').append(newGrids)

        let numberOfCells = columnSize * rowSize;
        
        //cells are applied to grid
        for(let cells = 0; cells < numberOfCells; cells = cells + 1){
            const new_cell = $('<div></div>', {
                class: 'cell'
            })
            $(newGrids).append(new_cell)
        }
        $('.cell').click(onGridClick)
        overGrid()

        if(sizeError == true){
            $(".error").remove()
            sizeError = false
        }
    }
    //If number entered in input fields exceeds 20, it outputs error messages
    else if(sizeError == false){
        sizeError = true
        let errorText = $('<p>Error. Size does not comply with parameters.</p>')
        errorText.css({
            fontSize: '20px',
            color: 'red'
        })
        errorText.addClass("error")
        let errorInstruction = $('<p>Please input reasonable parameters.</p>')
        errorInstruction.css({
            fontSize: '20px',
            color: 'red'
        })
        errorInstruction.addClass("error")
        $(custom).append(errorText)
        $(custom).append(errorInstruction)
    }
}
$(newGridButton).click(customGridSize)



//global variables for display
let heldValue = null;
let heldOperation = null;
let nextValue = null;

//click functions for buttons that display numbers and clears display
$('.digits button').click(function(){
    //stores the click number into nextValue and turns the value into text for .next-value class
    if (nextValue == null)
    {
        nextValue = "0";
    }
    nextValue = nextValue + $(this).text();
    updateDisplay();
})
//Used in updating display.  Checks to see if display location is null and outputs number value as text
function showValue(location, value){
    if (value == null){
        $(location).text("");
    }
    else{
        $(location).text(Number(value));
    }
}
//updates the display for nextValue and heldValue
function updateDisplay(){
    showValue('.next-value', nextValue);
    showValue('.held-value', heldValue);
}
updateDisplay();

//functions and click functions for clearing entries
function clearAll(){
    heldValue = null;
    heldOperation = null;
    nextValue = null;
    $('.next-operation').text("");
    updateDisplay();
}
function clearEntry(){
    nextValue = null;
    updateDisplay();
}
$('.clear-all').click(function(){
    clearAll();

})
$('.clear-entry').click(function(){
    clearEntry();
})

//functions for operations
function add(x, y){
    return (Number(x) + Number(y));
}
function subtract(x, y){
    return (Number(x) - Number(y));
}
function multiply(x, y){
    return (Number(x) * Number(y));
}
function divide(x, y){
    return (Number(x) / Number(y));
}

//helper function for when an operation is clicked
function setHeldOperation(operation){
    if(heldOperation !== null){
        heldValue = heldOperation(heldValue, nextValue);
    }
    else if(nextValue !== null && heldOperation == null){
        heldValue = nextValue;
    }
    nextValue = null;
    heldOperation = operation;
}

//click functions for operations
$('.add').click(function(){
    setHeldOperation(add);
    $('.next-operation').text("+");
    updateDisplay();
})
$('.subtract').click(function(){
    setHeldOperation(subtract);
    $('.next-operation').text("−");
    updateDisplay();
})
$('.multiply').click(function(){
    setHeldOperation(multiply);
    $('.next-operation').text("×");
    updateDisplay();
})
$('.divide').click(function(){
    setHeldOperation(divide);
    $('.next-operation').text("/");
    updateDisplay();
})
$('.equals').click(function(){
    setHeldOperation(null);
    $('.next-operation').text("");
    updateDisplay();
})












function reverse(text) {
    return text.split('').reverse().join('');
}
  
function scream(text) {
    return text.toUpperCase() + "!!!";
}

function drawOut(text) {
    return text.split('').join("...");
}

let textFunction = reverse; // default value


function updateText(){
    let result = textFunction($('#user-input').val());
    $('#transformed').text(result);
}

$('input[type=radio]').click(function (){
    
    if ($(this).val() == 'reverse'){
        textFunction = reverse;
    }
    else if($(this).val() == 'scream'){
        textFunction = scream;
    }
    else if($(this).val() == 'draw-out'){
        textFunction = drawOut;
    }
    updateText();
})
$('#user-input').on('input', updateText);


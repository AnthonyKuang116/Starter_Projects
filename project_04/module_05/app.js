let red;
let green;
let blue;


function updateValues(){
    red = document.getElementById('red').value;
    green = document.getElementById('green').value;
    blue = document.getElementById('blue').value;    
}


function updatePage(){
    $('.red-value').html(red);
    $('.green-value').html(green);
    $('.blue-value').html(blue);

    let rgb_text = "rgb("+red+","+green+","+blue+")"
    $('.preview').css('background-color', rgb_text)

    console.log(red, green, blue);
}

function updateAll(){
    updateValues();
    updatePage();
}
updateAll();
$('.controls input').on('input', updateAll);




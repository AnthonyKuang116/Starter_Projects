const cssOptions = {
    width: "360px",
    height: "360px",
    border: "1px solid black"
};

$('#backgroundColor input').on('input', function () {
    let color = $(this).val();
    cssOptions.backgroundColor = color;
    updatePreview()
});

$('#height input').on('input', function () {
    let height = $(this).val();
    cssOptions.height = height + "px"
    updatePreview()
});

$('#borderRadius input').on('input', function () {
    let radius = $(this).val();
    cssOptions.borderRadius = radius + "%";
    updatePreview()
});

$('#fontFamily input').on('input', function (event) {
    let font = $('#fontFamily input').val();
    cssOptions.fontFamily = font;
    updatePreview()
});

$('#lift input').on('input', function () { 
    let shadow = $(this).val();
    console.log(shadow)
    if (shadow == 0){
        cssOptions.boxShadow = null;
    }
    else{
        cssOptions.boxShadow = `0 ${ Math.floor(shadow/ 2) }px ${shadow }px black`;
    }
    updatePreview();
});

function updatePreview() {
    $("#preview").css(cssOptions);
};

updatePreview();
// slo-mo code
const new_h3 = $('<h3>')
const new_p = $('<p>')
const new_img = $('<img>')

new_h3.html("<h3>Hello, World</h3>")
new_p.html("<p><b>This</b> is my text</p>")
new_img.attr("src", "http://placeimg.com/640/480/nature?1")

$('.slo-mo').append(new_h3)
$('.slo-mo').append(new_p)
$('.slo-mo').append(new_img)


// normal speed code
//$('.normal-speed').append($('<h3>')).text("Hello, World") // We can use this for singular changes or for multiple changes we can use this...
$('.normal-speed').append(
    $('<h3>').html("Hello, World"),
    $('<p></p>').html("<b>This</b> is my text"),
    $('<img>').attr("src", "http://placeimg.com/640/480/nature?1")
)

//rewind code
$('.rewind')
    .prepend($('<img>').attr("src", "http://placeimg.com/640/480/nature?1"))
    .prepend($('<p></p>').html("<b>This</b> is my text"))
    .prepend($('<h3></h3>').html("Hello, World"))


//turbo code
$('.turbo').html(`
    <h3>Hello, World</h3>
    <p><b>This</b> is my text</p>
    <img src = "http://placeimg.com/640/480/nature?1">
`)


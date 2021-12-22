$('.one button').click(function () {
    $('.one span').text("Good Job!")
});

$('.two button').click(function(){
    $('.two').slideUp()
})

$('.three button').click(function(){
    const newText = $('<div>Here is some new text!</div>')
    $('.three').append(newText)
})

$('.four button').click(function(){
    const newTemplate = $('template')
    $('.template-target').append(newTemplate.html())
})

$('.five button').click(function(){
    const newClone = $(".five").clone()
    $('.prepend-target').prepend(newClone)
})

$('.six button').click(function(){
    $('.six').css('transform', 'rotate(180deg)')
})

$('.seven button').click(function(){
    let newButton = $('<button>CLICK TO DISAPPEAR!</button>')
    newButton.css('padding', '5px')
    $('.seven').append(newButton)

    newButton.click(function(){
        let currentElement = $(this)
        currentElement.fadeOut()
    })
})


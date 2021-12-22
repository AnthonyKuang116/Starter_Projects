//Add items to task list
$('.task-input button').click(function(){
    let inputValue = $('input:text').val()
    if(inputValue.length > 0)
    {
        console.log(inputValue.length)
        let newLi = $('<li>' + inputValue + '</li>')
        $('.task-list').append(newLi)
        $('input:text').val('')
    }
})

//toggles classes when clicked
$('.decider button').click(function(){
    if($('.status').hasClass("active")){
        $('.decider button').html("Turn On")
    }
    else{
        $('.decider button').html("Turn Off")
    }
    $('.status').toggle("active")
})

$('.cool-kids button').click(function(){
    let newColor = $(this).css('background-color')
    $('main').css({'background-color': newColor})
})
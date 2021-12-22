const VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let status = "all"
function draw(valueList) {
    $('.card-list').empty();
    valueList.forEach(function(value){
        return $('.card-list').append($('<div class=card></div>').text(value));
    })
    //return valueList;
}
draw(VALUES)

//click handlers for buttons
$('.even').click(function(){
    evenNums = VALUES.filter(nums => ((nums % 2) === 0))
    draw(evenNums);
    status = "even"
})
$('.odd').click(function(){
    let oddNums = VALUES.filter(nums => ((nums % 2) != 0))
    draw(oddNums)
    status = "odd"
})
$('.all').click(function(){
    draw(VALUES);
    status = "all"
})

//points to active class
$('.controls button').click(function () {
    $('.controls .selected').removeClass('selected');
    $(this).addClass('selected');
});

//removing cards
$('.card-list').on('click', '.card', function () {
    let card = Number($(this).text());
    let cardIndex = VALUES.indexOf(card);
    VALUES.splice(cardIndex, 1);
    
    let oddNums = VALUES.filter(nums => ((nums % 2) != 0))
    let evenNums = VALUES.filter(nums => ((nums % 2) === 0))
    if(status == "all"){
        draw(VALUES)
    }
    else if (status == "even")
    {
        draw(evenNums)
    }
    else{
        draw(oddNums)
    }
});

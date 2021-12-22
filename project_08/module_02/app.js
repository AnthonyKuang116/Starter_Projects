const CARD_URL = `https://api.magicthegathering.io/v1/cards?pageSize=20`

function renderCard(card) {
    cardElement = $(`<div class="card">
                <h3>${card.name} - ${card.manaCost}</h3>
                <h4>${card.type}</h4>
                <h5 class="set-name">${card.setName}</h5>
                <pre>${card.text}</pre>
                <img src="${card.imageUrl ? card.imageUrl : ""}">
            </div>`)
    cardElement.find('.set-name').data("set", card.set)
    return cardElement
}

function renderCardList(cardList) {
    $("#results").empty()
    cardList.forEach(function (card){
        $("#results").append(renderCard(card))
    })
}

function fetchCardList(url) {
    $('.searching').addClass("active")
    fetch(url)
        .then(function (result){
            return result.json();
        })
        .then(function (data){
            console.log(data.cards)
            $('.searching').removeClass("active")
            renderCardList(data.cards)
        })
        .catch(function (error){
            console.log(error)
        })
}

$('#card-search').on('submit', function (event) {
    // prevent the form from actually submitting
    event.preventDefault()
    // read the `cardName` and `cardText` from #cname and #ctext
    let nameValue = $("#cname").val();
    let textValue = $("#ctext").val();
     // clear the values for the two elements
    $("cname").val("")
    $("#ctext").val("")
     // build the URL for fetchCardList
    let newUrl = CARD_URL + "&name=" + nameValue + "&text=" + textValue 
     // call fetchCardList
    fetchCardList(newUrl)
});

$('#results').on('click', '.card .set-name', function () {
    let setName = $(this).data('set')
    let resultQuery = CARD_URL + "&set=" + setName
    fetchCardList(resultQuery)
});

fetchCardList(CARD_URL)
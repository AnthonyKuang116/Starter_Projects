//Our current guest list
const GUEST_LIST = [
    { name: 'Leonard', count: 6 },
    { name: 'Sharon', count: 4 }
];

//Builds the guest card
function buildGuestCard(guest) {
    let newCard = $(`<div class="guest-card"><span>${guest.name}, party of ${guest.count}</span></div>`);
    return newCard;
}

//reads the guest list and uses the helper function to make card from the name and party size and appends to page
function renderGuestList() {
   $('.guest-list').empty();
    GUEST_LIST.forEach(function(guest){
        let newGuest = buildGuestCard(guest);
        $('.guest-list').append(newGuest)
    })
}
renderGuestList();

//adds new guest
function addGuestToList(event) {
    event.preventDefault();

    let newGuest = {}
    newGuest.name = $("#guest-name").val();
    newGuest.count = $("#guest-count").val()
    GUEST_LIST.push(newGuest)

    renderGuestList();
    $(this).trigger("reset");
}
$('.guest-form').submit(addGuestToList);

//removes first guest in line
function serveNextGuest() {
    GUEST_LIST.shift()
    renderGuestList();
}
$('#serve').click(serveNextGuest);
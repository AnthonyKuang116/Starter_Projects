const BASE_GROCERIES = [
  { name: "banana", price: 49 },
  { name: "tomato", price: 129 },
  { name: "orange", price: 99 },
  { name: "pepper", price: 139 },
  { name: "milk", price: 449 },
];

function populateBase() {
  BASE_GROCERIES.forEach((grocery) => 
    $(".grocery-list").append(buildGroceryElement(grocery))
  );
}


function buildGroceryElement(grocery) {
    return $('<div class="grocery-item"></div>').text(`${grocery.name}:$${grocery.price / 100}`)
}

$("#new-grocery").submit(function (event){
  event.preventDefault();
  let groceryElement = buildGroceryElement({
    name: $("#grocery-name").val(),
    price: parseInt($("#grocery-price").val())
  })
  $(".grocery-list").append(groceryElement)
  $(this).trigger("reset")
})

populateBase();

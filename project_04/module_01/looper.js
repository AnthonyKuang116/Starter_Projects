for (let index = 0; index < 10; index = index + 1) {
   const new_Img = $('<img>')
   new_Img.attr("src", "http://placeimg.com/640/480/nature" + index)
   $('body').append(new_Img)
  }
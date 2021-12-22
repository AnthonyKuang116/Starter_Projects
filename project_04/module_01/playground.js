//replace red header with Abacus Central
$('.red h3').text("Abacus Central");

//replace blue header with Grenadine Dreams
$('.blue h3').text("Grenadine Dreams");

//replce white header
$('.white h3').html("<code>CODE</code> Central");
$('.white h3 code').css("font-size", "30px");

//Fixing Headers
$('header h1').text("Hello World!");

//styling by body by changing css
$('body').css("font-family", "sans-serif");
$('body').css({"background-color": "#777"});
//Apply flex to section display
$('section').css("display", "flex");

//styling the cards
$('.red').css({
    "background-color": "red", 
    "padding": "10px",
    "margin": "5px",
    "color": "white",
    "border": "1px solid black",
    "flex": "1"
});
$('.blue').css({
    "background-color": "blue", 
    "padding": "10px",
    "margin": "5px",
    "color": "white",
    "border": "1px solid black",
    "flex": "1"
});
$('.white').css({
    "background-color": "white",
    "padding": "10px",
    "margin": "5px",
    "border": "1px solid black",
    "flex": "1"
});

//changing the font size of all code "elements"
$("body").css("font-size", "1.7em");

//changing font-family of all lead-cards
$(".lead-cards p").css("font-family", "cursive");

//transforming second section
$("section:nth-child(2)").css({"transform": "rotate(360deg) scale(.5)"});
$("section:nth-child(2)").css("transition", "transform 3s ease");

//removing unwanted cards
$(".deprecated").remove();



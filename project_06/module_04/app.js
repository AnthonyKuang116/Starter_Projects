const DEFAULT_PREFERENCES = {
    darkMode: false,
    largeFont: false,
    expertMode: false,
}

let userPreferences;

function setPreferences() {
    localStorage.setItem("userPreferences", JSON.stringify(userPreferences))
    
}

function getPreferences() {
    return userPreferences = localStorage.getItem("userPreferences") ? JSON.parse(localStorage.getItem("userPreferences")) : DEFAULT_PREFERENCES
    
}

function updateInterface() {
    setColorMode();
    setBaseFontSize();
    drawAside()
}

function setColorMode() {
    $('#app').attr('class', userPreferences.darkMode === true ? "dark" : "light") 
}

function setBaseFontSize() {
    $('#app').css("font-size", userPreferences.largeFont === true ? '24px' : '16px') 
}

function drawAside() {
    $('aside').html(
        `
        <button>ALL USERS</button>
        <button>ALL USERS</button>
        <button>ALL USERS</button>
        ${userPreferences.expertMode === true ? "<button>EXPERT USER</button>": ""}
        ${userPreferences.expertMode === true ? "<button>EXPERT USER</button>": ""}
        `
    )
}

function populateCustomControls() {
    $('#dark-mode').attr('checked', userPreferences.darkMode)
    userPreferences.largeFont === true ? $('large-font').attr('checked', true) : $('large-font').attr('checked', false)
    userPreferences.expertMode === true ? $('expert-mode').attr('checked', true) : $('expert-mode').attr('checked', false)
}

$('.trigger').click(function () {
    $('.custom-controls').toggleClass('open');
});

$('.custom-controls').on('input', 'input', function () {
    const name = $(this).attr("name")
    const isChecked = $(this).is(":checked")
    userPreferences[name] = isChecked

    setPreferences()
    updateInterface()
});

getPreferences();
populateCustomControls();
updateInterface();
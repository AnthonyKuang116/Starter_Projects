
// //vanilla JS
// const container = document.querySelector('#container');

// //see if the browser already knows your name
// function showForm(){
//     container.innerHTML = `
//         <form id="name_form">
//             <label>Name:</label>
//             <input type="text" />
//             <button>submit</button>
//         </form>
//     `
//     const form = document.querySelector('#name_form');
//     form.addEventListener("submit", submitFormHandler)
// }

// function submitFormHandler(event){
//     event.preventDefault()
//     console.log("form submitted!")
// }
// showForm()



const container = document.querySelector('#container');

function submitFormHandler(event){
    event.preventDefault()
    const name = event.target[0].value
    console.log("form submitted!")
    localStorage.setItem('name', myName)
}

function showForm(){
    container.innerHTML = `
        <form id="name_form">
            <label>Name:</label>
            <input type="text" />
            <button>submit</button>
        </form>
    `
    const form = document.querySelector('#name_form');
    form.addEventListener("submit", submitFormHandler)
}

function showGreeting(name){
    container.innerHTML = `
        <h1>hello ${name}!</h1>
    `
}


let localStorageName = localStorage.getItem('name')
if(localStorageName !== null){
    showGreeting(localStorageName)
}
else{
    showForm()
}
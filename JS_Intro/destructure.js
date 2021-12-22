const anna = {
    name: 'Anna',
    hobbies: ['tacos', 'puppies', 'netflix'],
    specialty: 'desserts'
}
const koby = {
    name: 'Koby',
    hobbies: ['basketball', 'hulu', 'rock-climbing'],
    specialty: 'reading'
}
//returns basketball, hulu, rock-climbing
const formatHobbies = hobbies =>{
    const init = hobbies.slice(0, hobbies.length - 1).join(', ');
    const last = hobbies[hobbies.length - 1]
    return `${init}, and ${last}`
}
function introduceStudent(student){
    console.log(`
    My name is ${student.name}. 
    My favorite hobbies include ${formatHobbies(student.hobbies)}.
    My specialty is ${student.specialty}
    `)
}
[anna, koby].forEach(introduceStudent)




//to destructure we do this...
const anna = {
    name: 'Anna',
    hobbies: ['tacos', 'puppies', 'netflix'],
    specialty: 'desserts'
}
const koby = {
    name: 'Koby',
    hobbies: ['basketball', 'hulu', 'rock-climbing'],
    specialty: 'reading'
}
const formatHobbies = ([first, second, third]) =>{
    return `${first}, ${second}, and ${third}`;
}
//we change this
function introduceStudent(student){
    const {name, hobbies, specialty} = student
    console.log(`
    My name is ${name}. 
    My favorite hobbies include ${formatHobbies(hobbies)}.
    My specialty is ${specialty}
    `)
}
[anna, koby].forEach(introduceStudent)
const students = {
    name: "Kasey",
    github: "kaseycambell",
    specialty: 'CSS3' ,
    hometown: 'Lebanon, VA'


}

function renderStudent(student){
    console.log(`student: ${student.name}, github: ${student.github}, specialty: ${student.specialty}, hometown: ${student.hometown}`)
}

students.forEach(function(student){
    renderStudent(student)
})
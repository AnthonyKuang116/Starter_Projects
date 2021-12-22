const fetchResult = fetch('https://jsonplaceholder.typicode.com/todos/1').then(
    function (result){
        console.log("promoise fulfilled")
        console.log(result)
        return result.JSON();
    }
    .then((json) => {
        console.log(json)
    })

    .catch(error =>{
        console.log("something went wrong!")
        console.log(error)
    })
)
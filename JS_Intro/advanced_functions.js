//Syntatic Sugar- syntax designed to make things easier to read/express 

//Higher Order Function- a function that either accepts another function as an argument or returns a function as an output

//Function Signature- the inputs the function accepts, the output it returns the types/shapes of those outputs and inputs

//Callback- a function that runs at a later time


const nums = [1,2,3,4,5]
arr.forEach(function(element, index, array){
    //the output is void. Doens't return anything
})


const doubleNums = []
for(let i = 0; i<nums.length; i++){
    doubleNums.push(nums[i] * 2)
}
console.log(doubleNums)//[2,5,6,8,10]

//or we can use this
const doubleNums = nums.map(function(num, index, array){
    //the output of this is the transformed value of the final array
    return num * 2
})
//we can also use an arrow function
const doubleNums = nums.map((num) =>  num * 2)



const nums = [1,2,3,4,5]
//arr.find
const answer = nums.find((element, index, array) => {
    const isDivisbleByThree = (num % 3) === 0//returns true if divisble by 3...returns false if not divisble by 3
    return isDivisbleByThree;//returns the first value divisble by 3 
})
console.log(answer)

//indexOf
nums.indexOf(4)//returns 3...passes in an element and it returns the index



const nums = [1,2,3,4,5,6,7,8,9,10]
const evenNums = []
for (let i = 0; i < nums.length; i++){
    const isEven = nums[i] % 2
    const curr = nums[i]
    if(isEven === 0){
        evenNums.push(curr)
    }
}

//or we can use filter
const evenNums = nums.filter((num) => {
    const isEven = num % 2 === 0;
    return isEven //returns the entire array, does not stop at the first even value
})



//splice
const nums = [1,2,3,4,5,6,7,8,9,10]
nums.splice(2,2)//deletes 3 and 4 from the array
const array = [1, 2, 3, 4, 5];
//pop
const el = array.pop()
console.log(el)// 5 since we popped the last element out and that element was stored in a variable
console.log(array)// [1, 2, 3, 4] Since we popped the last element out already



const array2 = ['a', 'b', 'c', 'd'];
//push
const a = array2.push('e')
console.log(a)//5 outputs the length of the new array
console.log(array2)// ['a', 'b', 'c', 'd', 'e'] outputs the new array



const arr = ['a', 'b', 'c', 'd'];
//shift
const a = arr.shift()
console.log(a)//a (the value shifted out of the array)
console.log(arr)//['b', 'c', 'd']



const arr = ['a', 'b', 'c', 'd'];
//unshift
const a = arr.unshift(1)
console.log(a)//5 (gives the length of the array)
console.log(arr)//[1, 'a', 'b', 'c', 'd']



const arr = [1, 2, 3, 4, 5]
const arrDoubled = []
for (let i = 0; i < arr.length; i++){
    const currentElement = arr[i];
    arrDoubled.push(currentElement * 2)
}
console.log(arrDoubled)//[2, 4, 6, 8, 10]



const arr = [1, 2, 3, 4, 5]
const arrDoubled = []
const arrDoubled = arr.map(function(el, idx, a){//can return element, index, and the original array
    return el *2
})
console.log(arrDoubled)//[2, 4, 6, 8, 10]




//JSON JavaScript Object Notation
const obj = {
    name: "anthony",
    job: "developer",
    score: '100',
    address: {
        street: '111 main street',
        city: 'blacksburg',
        state: 'va'
    }
}
const str = JSON.stringify(obj)

console.log(obj)//returns obj object
console.log(str)//returns the object as a string
console.log(JSON.parse(str))//returns it back to an object

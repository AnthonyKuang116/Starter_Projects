//anthony is an object
const anthony = {
    first_name: "Anthony",
    last_name: "Kuang",
    hobbies: ["tennis", "games", "movies"]

}

//Can add key value pairs this way into the anthony object
anthony.profession = "Developer";

//can also add import key names by using brackets and quotes
anthony["middle-name"] = "blank";

//we can also add more to the values by doing this
anthony.hobbies.push("coding");

//remove and entire key from an object
delete anthony["middle-name"];




//for each array method
const arr = ['a', 'b', 'c', 'd', 'e'];
//want to count the number of vowels
let numOfVowels = 0;
for (let i = 0; i < arr.length; i++) {
    const currentLetter = arr[i];
    //if currentLetter is a voewl, increment numOfVowels
    if (isVowel(currentLetter)){
        numOfVowels++;
    }
}
function isVowel(char){
    //if character is a vowel, return true
    const lowerCase = char.toLowerCase()
    if (lowerCase == "a" || lowerCase == "e" || lowerCase == "i" || lowerCase == "o" || lowerCase == "u"){
        return true;
    }
    else{
        return false;
    }
}

//or instead of using a for loop, we can use a for each
const callback = function(element, idx, originalArray){//element, index, original array
    if (isVowel(element)){
        numofVowels++;
    }
}
arr.forEach(callback)


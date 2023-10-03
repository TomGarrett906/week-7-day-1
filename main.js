//================================================================
// Question 1
const dogs = ["Max", "Fido", "Gizmo", "Nala"]
const String1 = "Come here Fido and Nala come here"

function dogs_and_strings(String1, dogs) {
    return dogs.filter(function (dog) {
            return String1.includes(dog)
    });
}
const result = dogs_and_strings(String1, dogs)
console.log(result.join(", "))


//================================================================
// Question 2
const heightsInInches = [66, 64, 60, 52, 72, 80, 51]

for (h in heightsInInches) {
    heightsInInches[h] = heightsInInches[h] / 12
 }
const heightInFeet = heightsInInches.join("ft, ")
console.log(heightInFeet)


//================================================================
// Question 3
const tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"];

for (let i = 0; i < tmnt.length; i++) {
    const turtle = tmnt[i];
    
    if (turtle.endsWith("o")) {
        console.log(turtle + " is eating pizza");
    } else {
        console.log(turtle + " is being rude");
    }
}


//================================================================
// Question 4
const numbers = [123,5436,45784,1234,34,65,234125,645,3452,13216,49]
let max = numbers[0]

numbers.forEach((num) => {
    if (num > max) {max = num};
});

console.log(max)


//================================================================
// Question 5 --- 3 CodeWars Problems

//1)  8 kyu - Multiple
var a = 3
var b = 5
function multiply(a,b) {
    return a * b
}
console.log(multiply(3,5))

//2)8 kyu - Convert boolean values to strings 'Yes' or 'No'.
function boolToWord(boolean){
    if (boolean == true){
        return "Yes";
    } else {
        return "No";
    }
}
 console.log(boolToWord(true===true))
 console.log(boolToWord(true===false))

 //2)7 kyu - Area of a Circle


function circleArea(r) {
    const area = 3.14 * (r**2)
    if (r <= 0) {
        throw new Error("Invalid radius. Radius must be a positive value.")
    }
    return area
}

console.log(circleArea(2))
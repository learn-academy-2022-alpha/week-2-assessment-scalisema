// ASSESSMENT 2: Coding Practical Questions with Jest

const { indexOf } = require("lodash")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"

// We're done this before, know that we're going to use % to check the divsability of the values
//Need to create a fuction that will return one text interperlation if evenly disible by 3 and a different one if the number isnt (everything else)

const divis = (num78) => {
    if (num1 % 3 === 0) {
        return `${num78} is divisible by three`
    } else {
        return `${num78} is not divisible by three`
    }
}
console.log(divis(num1))
console.log(divis(num2))
console.log(divis(num3))


// b) Create the function that makes the test pass.



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// I want to create a fuction that will take each array item at the 0 index and replace that value with a capital letter
// the array items are all string value types 

const capitalize = (randomNouns3 = [], ind = 0) => {
    const helper = (str = '') => {
        return str[0].toUpperCase() + str.slice(1).toLowerCase()
    }
    if (ind < randomNouns3.length) {
        randomNouns3[ind] = helper(randomNouns3[ind])
        return capitalize(randomNouns3, ind + 1)
    }
    return
}

console.log(helper(randomNouns1))




// b) Create the function that makes the test pass.

//it("Create a function that takes in an array of words and returns an array with all the words capitalized.", () =>)
//expect(randomNouns3(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


// I need to convert each string into an array, itentify the index locations of all the vowels and return the location with the lowest value
//I need to only return the lowest index value thats greater than or equal to 0 because vowwla that are missing will bring back a -1

const string1 = vowelTester3.split("")
console.log(string1)


var FindA = (string1.indexOf("a"))
var FindE = (string1.indexOf("e"))
var FindI = (string1.indexOf("i"))
var FindO = (string1.indexOf("o"))
var FindU = (string1.indexOf("u"))

var vowelArray = [FindA, FindE, FindI, FindO, FindU]

var lowest = vowelArray[0]
for (let i = 1; i < vowelArray.length; i++) {
    if (vowelArray[i] > -1 && vowelArray[i] < lowest) {
        lowest = vowelArray[i]
    }
}
console.log(lowest(vowelTester1))
console.log(lowest(vowelTester2))
console.log(lowest(vowelTester3))

// b) Create the function that makes the test pass.

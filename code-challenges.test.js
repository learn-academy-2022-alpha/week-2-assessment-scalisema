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

describe('divis', () => {
    it('takes a number as an argument and decides if the number is evenly divisble by three or not', () => {
        const num1 = 15
        const num2 = 0
        const num3 = -7
        expect(divis(num1)).toEqual(["15 is divisible by three"])
        expect(divis(num2)).toEqual(["0 is divisible by three"])
        expect(divis(num3)).toEqual(["-7 is not divisible by three"])
    })
})

// We're done this before, know that we're going to use % to check the divsability of the values
//Need to create a fuction that will return one text interperlation if evenly disible by 3 and a different one if the number isnt (everything else)
//For this fuction I should be able to get by with using simple conditional statements

// b) Create the function that makes the test pass.
const divis = (num78) => {
    if (num1 % 3 === 0) {
        return `${num78} is divisible by three`
    } else {
        return `${num78} is not divisible by three`
    }
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe('capitalize', () => {
    it('take in an array of words and returns an array with all the words capitalized', () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
        expect(capitalize(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitalize(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

// b) Create the function that makes the test pass.


// PSEUDO CODE:
// create a function named "capitalize" which will take in an array of strings named array
// using .map the fuction will loop over the array
// using the .charAt will identify the  first letter in the string and the fuction will use .toUpperCase to change the first letter to uppercase
// .slice will allow the fuction to return the rest of the letters in each array value

const capitalize = array => array.map(value => value.charAt(0).toUpperCase() + value.slice(1))


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("vowelFinder", () => {
    const vowelTester1 = "learn"
    const vowelTester2 = "academy"
    const vowelTester3 = "challenges"
    it("logs the index of the first vowel.", () => {
        epect(vowelFinder(vowelTester1)).toEqual(1)
        expect(vowelFinder(vowelTester2)).toEqual(0)
        expect(vowelFinder(vowelTester3)).toEqual(2)
    })
})

// b) Create the function that makes the test pass.

// create a fuction to return the index location of the first A E I O or U,
// all letters are lowercase
// use a for loop to interate through the variiablr "vowelString" which we create for the loop <vowelString.length
// create a return for the index location if the value strickly equall too (===) a or e or i or i or u

const vowelFinder = (string) => {
    let vowelIndex = string.split("")
    for (let i = 0; i < vowelIndex.length; i++) {
        if (vowelIndex[i] === "a" || vowelIndex[i] === "e" || vowelIndex[i] === "i" || vowelIndex[i] === "o" || vowelIndex[i] === "u") {
            return i
        }
    }
}


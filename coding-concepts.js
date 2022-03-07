// ASSESSMENT 2: Coding Conceptual Questions


// --------------------1) What will this log?

var cohort = "Alpha 2022"
// console.log(cohort.split(""))

// a) Your answer:An array of the Alpha 2022 with the charaters broken out

// b) Verify and explain: the .split built-in coverts a string of text into an array. The parameter ("") means that each charater in the string will be returned as a value in seperate indexes.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined

// b) Verify and explain: this fiuction is loging undefined because it is missing a "return" 


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: [ 8, 10, 12, 14, 16 ]

// b) Verify and explain: The ".map9value => value *2" fuction is multipling the value of each array index by two. 


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [ 11, 13, 15 ]

// b) Verify and explain: The "filter(value => value % 2 !== 0)" fuction is filtering out values in the array that have a remander when devided by two so the only values that are returned are the odd values


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript

// b) Verify and explain:The console log returns "JavaScripot" because it is the value of the 0 index for the object "languages"


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
      this.cohort = "Alpha",
      this.year = 2022
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: Learn { student: name, cohort: 'Alpha', year: 2022 }

// b) Verify and explain: I wasnt sure if this would pull George for the name of the student (which it does) rather than my guess which was "name" I'm guessing that the use of "constructor" allows the spesified name in the variable learnStudent to be passed as a peramiter into the class Learn 


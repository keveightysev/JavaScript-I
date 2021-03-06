// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:
let interns = {
  id: [],
  name: [],
  email: [],
  gender: []
};

interns.id.push(1, 2, 3, 4, 5);
interns.name.push("Mitzi", "Kennan", "Keven", "Gannie", "Antonietta");
interns.email.push("mmelloy0@psu.edu", "kdiben1@tinypic.com", "kmummery2@wikimedia.org", "gmartinson3@illinois.edu", "adaine5@samsung.com");
interns.gender.push("F", "M", "M", "M", "F");


// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(interns.name[0] + "'s name is " + interns.name[0]);

// Kennan's ID
console.log(interns.name[1] + "'s ID is " + interns.id[1]);

// Keven's email
console.log(interns.name[2] + "'s email address is " + interns.email[2]);

// Gannie's name
console.log(interns.name[3] + "'s name is " + interns.name[3]);

// Antonietta's Gender
console.log(interns.name[4] + "'s gender is " + interns.gender[4])

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.

let kennan = {
  name: interns.name[1],
  speak: function () {
    return "Hello, my name is " + this.name + "!";
  }
}

console.log(kennan.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.

let antonietta = {
  name: interns.name[4],
  multiplyNums: function(x, y) {
    return x * y;
  }
}

console.log(antonietta.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  name: "Susan",
  age: 70,
  child: {
    name: "George",
    age: 50,
    grandchild: {
      name: "Sam",
      age: 30,
      speak: function() {
        console.log("My name is " + this.name);
      }
    },
    speak: function() {
      console.log("My name is " + this.name);
    }
  },
  speak: function() {
    console.log("My name is " + this.name);
  }
}

// Log the parent object's name
console.log(parent.name);
// Log the child's age
console.log(parent.child.age);
// Log the name and age of the grandchild
console.log(parent.child.grandchild.name + ", " + parent.child.grandchild.age);
// Have the parent speak
parent.speak();
// Have the child speak
parent.child.speak();
// Have the grandchild speak
parent.child.grandchild.speak();
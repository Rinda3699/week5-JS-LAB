// Week 5 JavaScript Lab - script.js

// Step: Welcome message in the console
console.log("Welcome to Week 5 JavaScript Lab!");

// Step: Change HTML content when the button is clicked (function version)
function changeText() {
  document.getElementById("demo").innerHTML = "Hello from JavaScript!";
}

// Attach to button using event listener (preferred to inline onclick)
document.getElementById("changeBtn").addEventListener("click", changeText);

// Variables and data types
let name = "Jordan";
const age = 25;
var isStudent = true;
console.log(typeof name);     // "string"
console.log(typeof age);      // "number"
console.log(typeof isStudent);// "boolean"

// Arithmetic and string operations
let a = 10;
let b = 5;
let sum = a + b;
console.log("Sum: " + sum);
let greeting = "Hello " + name + ", welcome to JavaScript!";
console.log(greeting);

// Conditional statements
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 70) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

// For loop
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}

// While loop
let j = 0;
while (j < 3) {
  console.log("While Loop iteration: " + j);
  j++;
}

// Functions and returning values
function greetUser(username) {
  return "Hello, " + username + "!";
}
let message = greetUser("Alice");
console.log(message);

// Arrays and objects
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]);
fruits.push("Orange");
console.log(fruits);

let student = {
  name: "John",
  age: 22,
  course: "DIT"
};
console.log(student.name + " is studying " + student.course);

// DOM Manipulation: changeColor function
function changeColor() {
  let text = document.getElementById("colorText");
  text.style.color = "blue";
  text.style.fontWeight = "bold";
}
document.getElementById("colorBtn").addEventListener("click", changeColor);

// Mini Challenge: prompt two numbers and show sum using alert
function miniSumChallenge() {
  let num1 = Number(prompt("Enter first number:"));
  let num2 = Number(prompt("Enter second number:"));
  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
    return;
  }
  let total = num1 + num2;
  alert("The sum is: " + total);
}
document.getElementById("sumBtn").addEventListener("click", miniSumChallenge);

// Bonus: read from input and set greeting
function sayHello() {
  let name = document.getElementById("userInput").value;
  if (name.trim() === "") {
    document.getElementById("greetingMsg").innerHTML = "Please enter your name.";
  } else {
    document.getElementById("greetingMsg").innerHTML = "Hello, " + name + "!";
  }
}
document.getElementById("helloBtn").addEventListener("click", sayHello);

// JavaScript Cheatsheet for Beginners

// // Printing on console
// console.log('Hello, World!'); // String
// console.log(2022.87587686); // Number
// console.log(true); // Boolean

// // Variables
// let firstName = 'Chirag';
// let lastName = 'Chakraborty';

// // Constant Variable
// const age = 22;

// // Concatenation
// console.log(firstName + " " + lastName + " is " + age + " years old.");

// // Template String
// console.log(`The age of ${firstName} ${lastName} is ${age}.`);

// // Functions
// // Declaring the function
// function greet(firstName, lastName) {
//     // Alert
//     alert(`Good Afternoon, ${firstName} ${lastName}!`);
// }
// // Calling the function
// greet('Chirag', 'Chakraborty');

// // Taking User Input
// function yourName() {
//     let name = prompt('Enter your name:'); // Prompt
//     if (name == '' || name == null || name.value == false) {
//         console.log("You don't have a name!")
//     } else {
//         console.log(`Your name is ${name}.`);
//     }
// }
// yourName();

// // If-Else Conditions
// let Age = 27;
// if (Age > 0 && Age <= 5) {
//     console.log('You are a child!')
// } else if (Age > 5 && Age <= 18) {
//     console.log('You are a kid!');
// } else if (Age > 18 && Age <= 45) {
//     console.log('You are a man!');
// } else {
//     console.log('You are old!')
// }

// // Switch Case
// let grade = 'C';
// switch (grade) {
//     case 'A':
//         console.log('Excellent!');
//         break; // Break statement to break the loop
//     case 'B':
//         console.log('Very Good!');
//         break;
//     case 'C':
//         console.log('Good!');
//         break;
//     case 'D':
//         console.log('Do Better!');
//         break;
//     case 'E':
//         console.log('Bad');
//         break;
//     case 'F':
//         console.log('Very Bad!');
//         break;
// }

// // Storing HTML element inside JS Variable
// const link = document.getElementById('link');

// // Event Listener
// link.addEventListener('click', function(event) {
//     let confirmation = confirm('Are your sure?'); // Confirm
//     if (!confirmation) {
//         event.preventDefault(); // To prevent default action
//     }
// });

// // For Loop
// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }

// // Array
// let cricketers = ['Sachin tendulkar', 'Sourav Ganguly', 'Rahul Dravid', 'Mahendra Singh Dhoni', 'Sunil Gavaskar', 'Virat Kohli', 'Virendra Sehwag', 'Harbhajan Singh', 'VVS Laxman', 'Rohit Sharma', 'Zaheer Khan'];
// // console.log(cricketers[7]);
// for (let i = 0; i < cricketers.length; i++) {
//     console.log(cricketers[i]);
// }
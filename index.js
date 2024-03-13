//Arrow functions with no params
//Arrow function that generates random numbers between 1 to 10;

const getRandomNumber = () => Math.floor(Math.random() * 10);
console.log(getRandomNumber());

//Arrow function that returns current date

const getCurrentDate = () => new Date().toLocaleDateString();
console.log(getCurrentDate());

//Arrow function that returns a greeting.

const getGreeting = () => "Hello, Welcome to neoG Camp!";
console.log(getGreeting());

//Arrow functions with one param
//arrow function to get the square of num

const getSquareValue = (num) => num ** 2;
console.log(getSquareValue(2));

//Arrow function to check if a num is positive

const isPositive = num => num > 0;
console.log(isPositive(2));

//If a num is even or not

const isEven = num => num % 2 === 0;
console.log(isEven(7));
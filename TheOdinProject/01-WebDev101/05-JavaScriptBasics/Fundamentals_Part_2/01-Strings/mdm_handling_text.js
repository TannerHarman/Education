// Delcaring a Variable as a string then calling it
var string = 'The revolution will not be televixed.';
console.log(string)

// Double or Single quotes will both work for declaring a string
var sgl = 'Single quotes';
var dbl = "Double quotes";

console.log(sgl)
console.log(dbl)

// Using an Escape to use an apostrophie inside of a string
var bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth)

// Use the + symbol to concatenate (Combine) Strings
var one = 'Hello, ';
var two = 'how are you?';

var joined = one + two;
console.log(joined)

var multiple = one + one + one + one + two;
console.log(multiple)

var response = one + 'I am fine — ' + two;
console.log(response)

// You can also concatenate a string & number together
var string = 'Front'
var number = 242
console.log(string + number)

// Combinging two numbers that are wrapped as strings will also be concatenate like Strings
var myDate= '19' + '67'
console.log(myDate)
console.log("The date in question is a: " + typeof(myDate))

// Converting a string into a number
var myString = '123'
var myNum = Number(myString);
console.log(typeof myNum)

// Converting a number into a string
var myNewNum = 123
var myNewString= myNewNum.toString();
console.log(typeof myNewString)
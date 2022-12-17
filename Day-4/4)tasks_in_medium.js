// Task 1: Simple Programs todo for variables

// 1 Declare four variables without assigning values and print them in console
var a, b, c, d;
console.log(a,b,c,d)

// 2 How to get value of the variable myvar as output
// var myvar= 1;
// console.log("myvar");
var myvar= 1;
console.log(myvar);

// 3 Declare variables to store your first name, last name, marital status, country and age in multiple lines
var firstName = "Neslyn";
var lastName = "P";
var maritalStatus = "single";
var country = "India";
var age = 24;

// 4 Declare variables to store your first name, last name, marital status, country and age in a single line
var firstName = "Neslyn", lastName = "P", maritalStatus = "single", country = "India", age = 24;

// 5. Declare variables and assign string, boolean, undefined and null data types
var stringValue = "string";
var booleanValue = true;
var undefinedValue = undefined;
var nullValue = null;

// 6. Convert the string to integer
// parseInt()
// Number()
// Plus sign(+)
let num = parseInt("10");
num = Number("20")
num = +"30"

// 7. Write 6 statement which provide truthy & falsey values.
console.log(2 == "2");
console.log(3 === 3);
console.log(1 === 2);
console.log("test" === "test");
console.log("test" === "check");
console.log(!true);

// --------------------------------------------------------------------------------------------

// Task 2: Simple Programs todo for Operators

// 1 Square of a number
let num = 5;
console.log(num ** 2);

// 2 Swapping 2 numbers
let a = 10;
let b = 20;
let temp = a;
a = b;
b = temp;
console.log("a:", a, "b:", b);

// 3 Addition of 3 numbers
let a = 10, b = 20, c = 30;
console.log(a+b+c);

// 4 Celsius to Fahrenheit conversion
const temp = 12
let out = (temp * 9/5) + 32
console.log(out.toFixed(2))

// 5 Meter to miles
let meter = 1000
let miles = meter / 1609.344
console.log(miles)

// 6 Pounds to kg
let lb = 100;
let kg = lb*0.4535;
console.log(kg.toFixed(2))

// 7 Calculate Batting Average
let battingScores = [10, 10, 20, 20, 10, 20, 30, 10, 5, 5]
let total = 0
battingScores.forEach(score => {
    total += score
});
console.log(total / battingScores.length)

// 8 Calculate five test scores and print their average
let testScores = [10, 10, 20, 20, 10]
let total = 0
testScores.forEach(score => {
    total += score
});
console.log(total / 5)

// 9 Power of any number x ^ y.
let x = 2;
let y = 3;
console.log(x ** y);

// 10 Calculate Simple Interest
let p = 100, t = 2; r = 6;
let si = (p*t*r) / 100;
console.log(si)

// 11 Calculate area of an equilateral triangle
let side = 6;
let area = (Math.sqrt(3) / 4) * (side ** 2);
console.log(area.toFixed(2));

// 12 Area Of Isosceles Triangle
let base = 20;
let height = 10;
let area = (base * height) / 2;
console.log(area.toFixed(2));

// 13 Volume Of Sphere
let r = 10;
let volume = (4 * Math.PI * (r**3)) / 3;
console.log(volume.toFixed(2));

// 14 Volume Of Prism
let h = 8;
let b = 10;
let baseArea = (h * b) / 2;
let height = 20;
let volume = baseArea * height;
console.log(volume);

// 15 Find area of a triangle.
let h = 8;
let b = 10;
let area = (h * b) / 2;
console.log(area);

// 16 Give the Actual cost and Sold cost, Calculate Discount Of Product
let actualCost = 100;
let soldCost = 80;
let discount = actualCost - soldCost;
console.log(discount);

// 17 Given their radius of a circle and find its diameter, circumference and area.
let r = 5;
let diameter = 2 * r;
let circumference = 2 * Math.PI * r;
let area = Math.PI * r * r;
console.log(diameter.toFixed(2), circumference.toFixed(2), area.toFixed(2));

// 18 Given two numbers and perform all arithmetic operations.
let a = 10, b = 5;
console.log("Add", a+b);
console.log("Subtraction", a-b);
console.log("Multiplication", a*b);
console.log("Division", a/b);
console.log("Modulo operation", a%b);

// 19 Display the asterisk pattern as shown below(No loop needed):
// *****
// *****
// *****
// *****
// *****
console.log(`*****
*****
*****
*****
*****`);

// 20 Calculate electricity bill?
// For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?
let unitsConsumedPerHour = 100;
let perUnitRate = 10;
let numOfDays = 30;
console.log(unitsConsumedPerHour * perUnitRate * numOfDays * 24);

// 21 Program To Calculate CGPA
let credits = [9,8,8,9,7];
total = 0;
credits.forEach(credit => {
    total += credit;
});
console.log("CGPA", total/credits.length);


// Task 3: Simple Programs todo for Condition , Looping and Arrays

// 1 Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

let str = "#"
for (i = 1; i <= 7; i++) {
    console.log(str);
    str += "#";
}

// 2. Iterate through the string array and print it contents

var strArray= ["<option>Jazz</option>",
      ,"<option>Blues</option>",
      ,"<option>New Age</option>",
      ,"<option>Classical</option>",
      ,"<option>Opera</option>"];
strArray.forEach(str => {
    console.log(str);
});

// Arrays:
// var myarray=[11,22,33,44,55]
// write a code to count the elements in the array . Don’t use length property

var myarray=[11,22,33,44,55];
var count = 0;
myarray.forEach(ele => {
    count += 1;
});
console.log(count);

// Declare an empty array
let arr = [];

// Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
// — — — — — — — — — — — — — — — -

let foods=["ice-cream", "pizza", "burger", "coke", "noodles", "fried rice", "fried chicken", "naan", "garlic bread", "hot chocolate", "coffee", "sandwich", "salad", "french fries", "chips", "cold coffee", "milkshake", "chocolate", "cake", "biryani"];

// — — — — — — — — — — — — — — — -
// Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
console.log(foods[4]);

// Find the length of your foods array
console.log(foods.length);

// — — — — — — — — — — — — — — — -
// Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.

let friends = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];

function dataHandling(input){
for (var i = 0; i < input.length; i++) {
    if(friends[i] == "Mari") {
        friends[i] = "Munnabai";
        console.log(friends);
        return;
    }
}
}

dataHandling(friends);

// — — — — — — — — — — — — — — — -
// Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

const friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];

function dataHandling(input){
for (var i = 0; i < input.length; i++) {
    if (friends[i] == "CaptianAmerica") {
        return;
    }
    console.log(friends[i])
}
}

dataHandling(friends);

// — — — — — — — — — — — — — — — -
// Find the person is ur friend or not.

const friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];

function dataHandling(input, name){
    for (var i = 0; i < input.length; i++) {
        if(input[i] == name) {
            console.log("found");
            return;
        }
    }
    console.log("not found")
}

let found = dataHandling(friends,"Jeff");

// — — — — — — — — — — — — — — — -
// We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.

let friends = [];
var friends1 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];

var friends2 = [
    "Gabbar",
    "Rajinikanth",
    "Mass",
    "Spiderman",
    "Jeff",
    "ET"
];

function dataHandling(input){
    input = [...friends1, ...friends2].sort();
    console.log(input);
}

dataHandling(friends);

// — — — — — — — — — — — — — — — -
// 1 Get the first item, the middle item and the last item of the array

let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];
console.log(` 
first: ${friends[0]}
middle: ${friends[Math.floor((friends.length-1)/2)]}
last: ${friends[friends.length-1]}
`);

// 2. Add your name to the end of the friends array, and add another name to beginning.

let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];
friends.push("Neslyn");
friends.unshift("John");
console.log(friends);

// 3. Add Mr or Ms to the names in the friends array.

let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];
friends.forEach((ele, idx) => {
    friends[idx] = "Mr " + ele;
});
console.log(friends);

// 4. Concat all the names the friends array and return as comma “,” seperated string.

let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];
console.log(friends.join(","));

// 5. Find the friends names who has letter ‘a’ and return the list.
let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];
let out = friends.filter((name) => name.includes("a"));
console.log(out);

// 6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.
let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];
let count = 0;
friends.forEach((ele) => {
    count += ele.length;
});
console.log(count / friends.length);

// 7. Find the names and return the list starting with letter M.
let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];
let out = friends.filter((name) => name[0] == "M");
console.log(out);

// 8.. Find the name with max characters and return the name.

let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];
let count = friends[0].length;
let out = friends[0]
friends.forEach((ele) => {
    if (count < ele.length) {
        count = ele.length;
        out = ele;
    }
});
console.log(out);


// 9. Find the name with min characters and return the name.
let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];
let count = friends[0].length;
let out = friends[0]
friends.forEach((ele) => {
    if (count > ele.length) {
        count = ele.length;
        out = ele;
    }
});
console.log(out);


// — — — — — — — — — — — — — — — -

// Find the average in the array below.
// Make sure you add only the numbers and do avg.

const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];
let count = 0;
let total = 0;

friendsInfo.forEach(ele => {
    if (typeof ele == "number") {
        count += 1;
        total += ele;
    }
});
console.log(total / count);

// — — — — — — — — — — — — — — — -
// Print the contents of the input variable

var input = [
['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun']
]

function dataHandling(input){
for (var i = 0; i < input.length; i++) {
//Your code goes here
    console.log(...input[i])
}
}

dataHandling(input);

// — — — — — — — — — — — — — — — -

// Objects:

// What the output

myobject = {1:one,"11":1,"name":"arun"}
console.log(myobject.11); // 1
console.log(myobject.name); // arun

// Add a new key value pair to myobject
// key : ten
// value : ten

myobject = {1:one,"11":1,"name":"arun"}
//your code goes here
myobject.ten = "ten";
console.log(myobject);
// {"1":"one","11":1,"name":"arun","ten":"ten"} // Quotes might not get displayed that fine.

// Write out an object literal to represent the data below.
// Guvi, Geek, 6, IIT-M RP,Chennai.
let obj = {
    firstName: "Guvi",
    secondName: "Geek",
    doorNumber: 6,
    address: "IIT-M RP",
    city: "Chennai"
}

// — — — — — — — — — — — — — — — -

// How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)

// Guvi, Geek, 6, IIT-M RP,Chennai.
// Amazon, Inc, 31, SP Infocity, Chennai.
// Google, Alphabet, 34 Amphitheater Parkway, MountainView.
// Tesla, Inc , 32, 333 Santana Row,San Jose.

we can have an array of object literals representing the data.
eg: 
[
    {
        firstName: "Guvi",
        secondName: "Geek",
        doorNumber: 6,
        address: "IIT-M RP",
        city: "Chennai"
    },
    ......,
    {
        firstName: "Tesla",
        secondName: "Inc",
        doorNumber: 32,
        address: "333 Santana Row",
        city: "San Jose"
    }
]

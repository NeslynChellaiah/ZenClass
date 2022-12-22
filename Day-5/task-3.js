// Do the below programs in arrow functions.

// a Print odd numbers in an array

// var numArray = [1,2,3,4,5];
// var oddNums = (arr) => {
//     arr.forEach(num => {
//         if (num % 2 !==0) console.log(num);
//     })
// }
// oddNums(numArray);

// b Convert all the strings to title caps in a string array

// var strArray = ["this", "is", "a", "string", "array"];
// let titleCaps = (arr) => {
//     let newArr = arr.map(str => str[0].toUpperCase() + str.slice(1))
//     console.log(newArr);
// }
// titleCaps(strArray);

// c Sum of all numbers in an array

// var numArray = [1,2,3,4,5];
// var sum = (arr) => {
//     let out = 0;
//     arr.forEach(num => {
//         out += num;
//     });
//     console.log(out);
// }
// sum(numArray);


// d Return all the prime numbers in an array

// var numArray = [2, 4, 53, 79, 5, 10, 127];
// var primeNums = (arr) => {
//     function isPrime(n) {
//         for (let i = 2; i<= Math.floor(n/2); i++) {
//             if(n%i == 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     let out = []
//     arr.forEach(num => {
//         if(isPrime(num)) {
//             out.push(num);
//         }
//     });
//     console.log(out);
//     return out;
// }
// primeNums(numArray)

// e Return all the palindromes in an array

// var strArr = ["car", "racecar", "bike", "mam"];
// var palindromes = (arr) => {
//     function isPalindrome(s) {
//         l = 0;
//         r = s.length - 1;
//         while(l<=r) {
//             if(s[l] != s[r]) {
//                 return false;
//             }
//             l += 1;
//             r -= 1;
//         }
//         return true
//     }
//     let out = []
//     arr.forEach(str => {
//         if(isPalindrome(str)) {
//             out.push(str);
//         }
//     });
//     console.log(out);
//     return out;
// }
// palindromes(strArr);

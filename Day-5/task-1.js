// 1 Do the below programs in anonymous function & IIFE

// a Print odd numbers in an array
// var numArray = [1,2,3,4,5];
// (function (arr) {
//     arr.forEach(num => {
//         if (num % 2 !==0) console.log(num);
//     })
// })(numArray);

// b Convert all the strings to title caps in a string array
// var strArray = ["this", "is", "a", "string", "array"];
// (function (arr) {
//     let newArr = arr.map(str => str[0].toUpperCase() + str.slice(1))
//     console.log(newArr);
// })(strArray);

// c Sum of all numbers in an array
// var numArray = [1,2,3,4,5];
// (function (arr) {
//     let out = 0;
//     arr.forEach(num => {
//         out += num;
//     });
//     console.log(out);
// })(numArray);

// d Return all the prime numbers in an array
// var numArray = [2, 4, 53, 79, 5, 10, 127];
// (function(arr) {
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
// })(numArray)

// e Return all the palindromes in an array
// var strArr = ["car", "racecar", "bike", "mam"];
// (function(arr) {
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
// })(strArr)

// f Return median of two sorted arrays of the same size.
// (function median() {
//     var arr1 = [1,4,5];
//     var arr2 = [2,3,6];
//     var arr3 = [];
//     var i = 0;
//     var j = 0;
//     var n = arr1.length;
//     while(i < n && j < n) {
//         if(arr1[i] < arr2[j]) {
//             arr3.push(arr1[i]);
//             i += 1;
//         } else {
//             arr3.push(arr2[j]);
//             j += 1;
//         }
//     }
//     while (i < n){
//         arr3.push(arr1[i]);
//         i += 1;
//     }
//     while (j < n){
//         arr3.push(arr2[j]);
//         j += 1;
//     }
//     if(arr3.length >= 2) {
//         let num1 = Math.floor((arr3.length-1)/2);
//         let num2 = Math.ceil((arr3.length-1)/2);
//         let out = ((arr3[num1] + arr3[num2])/2);
//         console.log(out);
//         return out;
//     }
// })()

// g Remove duplicates from an array
// var arr = ["a", "b", "c", "a" , "b"];
// (function (strArr) {
//     let obj = {};
//     for (let str of strArr) {
//         obj[str] = 1;
//     }
//     console.log(Object.keys(obj));
// })(arr)

// h Rotate an array by k times
// var numArr = [1,2,3,4,5];
// var n = 3;
// (function (arr, num) {
//     let a = arr.splice(0, 3);
//     console.log([...arr, ...a]);
// })(numArr, n);
// Table Print Question Number_01

// function table(num) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i * num);
//   }
// }
// table(5);

//  factorial Question Number_02

// Use a loop to calculate factorial
// let factorials = 6;
// let index = 1;
// for (let i = 1; i <= factorials; i++) {
//   console.log((index = index * i));
// }

// Question Number_03

// Iterate Through Array
// let array = ["apple", "mango", "banana", "greps"];
// function ThroughArray(newArray) {
//   for (let i = 0; i < newArray.length; i++) {
//     console.log(`index:${i} = ${array[i]}`);
//   }
// }
// ThroughArray(array);

//Question Number_05

// Check Even or Odd
// function numbers(num) {
//   if (num % 2 == 0) {
//     console.log("Even number");
//   } else if (num % 2 != 0) {
//     console.log("odd number");
//   }
// }
// numbers(15);

// Question Number_06

//  Count Even Numbers in Array
// let evenArray = [2, 3, 4, 1, 5, 12, 13, 25, 26, 18];
// let newArray = [];
// let oddArray = [];
// function filterArray(evenArray) {
//   for (let i = 0; i < evenArray.length; i++) {
//     if (i % 2 == 0) {
//       newArray.push(i);
//     } else if (i % 2 != 0) {
//       oddArray.push(i);
//     }
//   }
//   console.log([`oddNumber:-${oddArray}`]);
//   console.log([`evenNumber:-${evenArray}`]);
// }
// filterArray([2, 13, 14, 15, 16, 13, 1, 2]);

// Question Number_07

//  Sum of Array Elements
// let num = [2, 3, 4, 5];
// let total = 0;
// for (let i = 0; i < num.length; i++) {
//   total += num[i];
// }
// console.log(total);

//Question Number_08

//  Reverse a String
// function newStr(str) {
//   for (let i = str.length; i >= 0; i--) {
//     let newStr = str[i];
//     console.log(newStr);
//   }
// }
// newStr("kumar");

//Question Number_09

// Check for Prime Number

function printPrimeNumber(num) {
  if (num % 2 == 1) {
    console.log("prime Number");
  } else if (num % 2 == 0) {
    console.log("not prime Number");
  }
}
printPrimeNumber(25);

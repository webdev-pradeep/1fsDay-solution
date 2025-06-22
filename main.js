// let num = 10;
// for (let i = 1; i <= 10; i++) {
//   console.log(i * 3);
// }

// let box1 = document.querySelector("#box1");
// let box2 = document.querySelector("#box2");
// let box3 = document.querySelector("#box3");
// let body = document.getElementsByTagName("body");

// box1.addEventListener("click", () => {
//   document.body.style.background = "red";
// });

// box2.addEventListener("click", () => {
//   document.body.style.background = "black";
// });

// box3.addEventListener("click", () => {
//   document.body.style.background = "blue";
// });

// let num = 10;
// let table = 4;
// for (let i = 1; i <= num; i++) {
//   console.log(i * table);
// }

// 1// https://windows10spotlight.com/wp-content/uploads/2023/01/81a6e74c8adbf7f55406e8c4b80669d5.jpg
// 2// https://th.bing.com/th/id/OIP.aqSVE7TUcbsLCQdF_FPfRgHaEK?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3

// const myImg = document.querySelector("#myImg");
// const myImgNew = document.querySelector("#myImgNew");

// myImgNew.addEventListener("click", () => {
//   const mySrc = myImgNew.getAttribute("src");
//   if (
//     mySrc ===
//     "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
//   ) {
//     myImgNew.setAttribute(
//       "src",
//       "https://windows10spotlight.com/wp-content/uploads/2023/01/81a6e74c8adbf7f55406e8c4b80669d5.jpg"
//     );
//   } else
//     myImgNew.setAttribute(
//       "src",
//       "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
//     );
// });

// const button = document.querySelector("#presBtn");
// const greeting = document.querySelector("#greeting");

// button.addEventListener("click", () => {
//   const Name = prompt("inter your name");
//   greeting.innerHTML = Name;
// });

// let Name = "pradeep";
// let lastName = "kumar";

// console.log(`${Name} ${lastName}`);

// let examVale = 360;
// let totalValue = 500;

// console.log(`${(examVale / totalValue) * 100} %`);

// const str = new String("pradeep");
// const nweStr = String("pradee");

// console.log(str instanceof String);
// console.log(nweStr instanceof String);

// console.log(typeof str);
// console.log(typeof nweStr);

// let Name = "onsisting of the single UTF-16 code unit located at ";
// console.log(Name.at(-3));
// console.log(Name.charAt(1));
// console.log(Name.charAt(20));

// let N = "😴";
// console.log(N.codePointAt(1));

// let userName = "peadeep";
// let idNum = "@";

// console.log(userName.concat(idNum));

// endsWith(searchString)
// endsWith(searchString, endPosition)

// const str = "To be, or not to be, that is the question.";
// console.log(str.endsWith("question.")); // true
// console.log(str.endsWith("to be")); // false
// console.log(str.endsWith("to be", 19)); // true

// includes(searchString)
// includes(searchString, position)

// let str = "Get a A writing assistant pradeep wherever you go";
// console.log(str.includes("A", 3));

// console.log("hello".indexOf("l"));
// "Blue Whale".indexOf("Blue"); // returns  0
// "Blue Whale".indexOf("Wale"); // returns -1
// "Blue Whale".indexOf("Whale", 0); // returns  5
// "Blue Whale".indexOf("Whale", 5); // returns  5
// "Blue Whale".indexOf("Whale", 7); // returns -1
// "Blue Whale".indexOf(""); // returns  0

const colors = ["red", "yellow", "black"];
// colors[5] = "blue";
// const iterator = colors.keys();

// for (const key of iterator) {
//   console.log(`${key}: ${colors[key]}`);
// }

// colors.forEach((colors, index) => {
//   console.log(`${index}:${colors}`);
// });

// console.log(colors.join());//red,yellow,black
// console.log(colors.join("")); //redyellowblack
// console.log(colors.join("_")); //red_yellow_black

// const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
// console.log(animals.lastIndexOf("Dodo"));
// console.log(animals.lastIndexOf("Tiger"));

// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(array.map((x) => x * 2));

// const result = numbers.map((element, index, array) => {
//   //   console.log(`element:${element}`);
//   //   console.log(`index:${index}`);
//   //   console.log(`array:${array}`);

//   return element + index;
// });
// console.log(result);

// const num = [4, 25, 9, 100];
// let root = num.map((element) => Math.sqrt(element));
// console.log(root);

// const kvArray = [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 },
// ];

// let newArray = kvArray.map(({ key, value }) => ({ [key]: value }));
// console.log(newArray);

// let stringArray = ["1", "2", "3", "4"];
// const numberArray = stringArray.map((num) => parseInt(num));
// console.log(numberArray);

// ------------https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#index

// let plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
// console.log(plants.pop());
// console.log(plants);

// const animals = ["pigs", "goats", "sheep"];
// console.log(animals.push("cows"));
// console.log(animals);

// const vegetables = ["parsnip", "potato"];
// const moreVegs = ["celery", "beetroot"];
// vegetables.push(...moreVegs);
// console.log(vegetables);

// const array = [1, 2, 3, 4, 7];
// let initialValue = 0;
// let num = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );
// console.log(num);

let array = [1, 2, 3, 4, 5, 6, 7, 8];
const numValue = array.map((element, indexed, array) => element + indexed);
console.log(numValue);

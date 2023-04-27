//Math

const pi = Math.PI;
const numbers = [2, 4, 5, 6, 8, 0];

// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));
const a = 4.55;
// console.log(Math.floor(a));

// console.log(~~4.5);
// console.log(Math.ceil(a));
// console.log(pi);

//Date and time

// console.log("Date and Times");

const date = new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(" Time: " + date.getTime());
// console.log("Hours: " + date.getHours());

// for (let i = 0; i < newNumbers.length; i++) {
//   //   console.log(newNumbers[i] + 5);
//   result.push(newNumbers[i] + 5);
// }
// console.log("Result " + result);
// console.log(newNumbers);
// const result = newNumbers

// const displayName = ()=> {
//   console.log("arrow function");
// };

//Callback or Higher order Function:
// function printName(printAge) {
//   console.log("success");
//   //called printAge
//   printAge();

//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
// }
// function printAge() {
//   console.log("Age:" + 12);
// }
// printName(printAge);

// map
const newNumbers = [2, 3, 4, 5, 1, 20];
// const result = newNumbers.map((number, index) => {
//   return number + index;
// });

// const result = newNumbers.map((num, index) => num + index + 1);
// console.log(result);

// filter
const result = newNumbers.filter((number) => {
  return number > 3;
});
// const result = newNumbers.filter((num) => num > 5);
console.log(result);

//sort
// const result = newNumbers.sort((a, b) => b - a);

// reverse array
// const result = newNumbers.reverse();
// const newNumbers = [2, 3, 4, 5, 1, 20];

// const sum = newNumbers.reduce((acc, value) => {
//   return acc + value;
// }, 100);
// console.log(sum);

// for (let i = 0; i < newNumbers.length; i++) {
//   //   console.log(newNumbers[i] + 5);
//   result.push(newNumbers[i] + 5);
// }

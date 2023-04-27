// alert(" hello in day 4");
// console.log(" hello in console");

//  1:  string in js

var word = 'hello everyone welcome to js bootcamp day 4.';
var Name = "    Manish";
var surname = " parsad   Oli";



//# 1.1: String Methods

//# 1.1.1: toUpperCase()   used  for  convert  string to "UPPER CASE"
// ; var fullname = Name + surname.trim();
// console.log(fullname.toUpperCase());

//#  1.1.2  toLowerCase()  used for convert  string to "lower case"
// console.log(word.toLowerCase());


//  1.1.3  split()  use for split string :>>  here string is split by   (" "  whitespace) and count the word
// console.log(word.length);
// console.log(word.split(" ").length);

// const splitword = word.split("e");
// for (i = 0; i <= splitword.length; i++) {
//     console.log(splitword[i]);
// }
// // word = " sita";
// // console.log(word); 





// 2: array in js

const Namearray = ["hari", "sita", "gita"];

// print first array index on console
// console.log(Namearray[0]);

//  print arry in js  using for loop
for (i = 0; i < Namearray.length; i++) {
    console.log(i + 1 + " " + Namearray[i]);
}


// 2.1  map() method 
// print  array  useing  map() method
Namearray.map((i) => { return console.log(i) });

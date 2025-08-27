// // function Greet a user

// function greetUser(name) {
//   let username = "Hello " + name + "!";
//   console.log(username);
// }

// greetUser("akash");

// // squarenumber function
// const squareNumber = (num) => {
//   let ans = num * num;
//   return ans;
// };

// let square = squareNumber(10);
// console.log(square);

// // ckeck even or odd

// function ckeckNumber(num) {
//   if (num % 2 === 0) {
//     console.log(`${num} is Even!`);
//   } else {
//     console.log(`${num} is Odd`);
//   }
// }

// ckeckNumber(10);

// function findFacto(n) {
//   num = 1;
//   for (let i = 2; i <= n; i++) {
//     num *= i; //5*4*3*2*1
//   }
//   return num;
// }

// let a = findFacto(5);
// console.log(a);

// //sum of two number
// function sumNum(a, b) {
//   return a + b;
// }

// let sum = sumNum(5, 5);
// console.log(sum);

// //count vowel
// function countVowel(str) {
//   num = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       num++;
//     }
//   }
//   console.log(num);
// }

// countVowel(" onion");

// // // reverse string using built in method
// // function reverstr(str){
// //    return str
// //     .split('')     // Turn string into array of characters
// //     .reverse()     // Reverse the array in place
// //     .join('');     // Reassemble into a string
// // }

// // let strs = reverstr("akash mishra");
// // console.log(strs);

// // function reverseUnicode(str) {
// //   return [...str].reverse().join('');
// // }
// // console.log(sum = reverseUnicode("man"))

// function restr(str){
  
//   return str.split("").reverse().join("");
  
// }

// console.log(restr("code with harry"));


// //
// const heading = document.createElement("h1")
// const inputbox = document.createElement("input");
// const inputbox2 = document.createElement("input");
// const inputbox3 = document.createElement("input");
// const resetButtom = document.createElement("button");
// const body = document.querySelector('body')

// inputbox.setAttribute("placeholder","Password");
// inputbox2.setAttribute("placeholder","E-mail");
// inputbox3.setAttribute("type","submit")
// body.prepend(inputbox3);
// body.prepend(resetButtom);
// body.prepend(inputbox);
// body.prepend(inputbox2);
// body.prepend(heading)

// heading.textContent = "This is a form page";
// resetButtom.textContent= "Reset";



// resetButtom.addEventListener("click", ()=>{
//  inputbox.remove 
// })

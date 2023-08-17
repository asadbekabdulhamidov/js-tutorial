"use strict";

// factory function

// const book1 = {
//   name: "O`tkan kunlar",
//   author: "Abdulla Qodiriy",
//   published: 1925,
//   genre: "Fiction",
// };

// function createBook(name, author, published, genre) {
//   return {
//     name: name,
//     author: author,
//     published: published,
//     genre: genre,
//     about: function () {
//       console.log(
//         `Ushbu kitob haqida. nomi: ${this.name}, kim yozgan: ${this.author}, qachon yozilgan: ${this.published}, kitob janiri: ${this.genre}`
//       );
//     },
//   };
// }

// const book1 = createBook("O`tkan kunlar", "Abdulla Qodiriy", 1925, "Fiction");
// console.log(book1.about());

//============================

// function myCar(nomi, yili, rangi, xolati, yurgani) {
//   return {
//     nomi,
//     yili,
//     rangi,
//     xolati,
//     yurgani,
//     about: function () {
//       alert(
//         `Mashina:\n nomi: ${this.nomi} \n yili:${this.yili} \n rangi: ${this.rangi} \n xolati: ${this.xolati} \n yurgani: ${this.yurgani} `
//       );
//     },
//   };
// }

// const car1 = myCar("Kaptiva4", "2020", "Qora", "yaxshi", 50000);
// console.log(car1.about());

//=========================================

// const nomi = prompt("Mashina nomini kiriting");
// const rangi = prompt("Mashina rangi kiriting");
// const xolati = prompt("Mashina xolati kiriting");
// const yurgani = prompt("Mashina yurgan kilometri kiriting");
// const yili = prompt("Mashinaning chiqqan yili kiriting");

// function myCar(nomi, rangi, xolati, yurgani, yili) {
//   return {
//     nomi,
//     rangi,
//     yurgani,
//     xolati,
//     yili,
//     about: function () {
//       console.log(
//         `Mashina: \n nomi: ${this.nomi} \n rangi: ${this.rangi} \n xolat: ${this.yili} \n yurgani: ${this.yurgani} \n xolati: ${this.xolati}`
//       );
//     },
//   };
// }

// const car2 = myCar(nomi, rangi, xolati, yurgani, yili);
// console.log(car2.about());

//=========================================

// CONSTRUCTOR FUNCTION

// function MyBook(nomi, author, published, genre) {
//   (this.nomi = nomi),
//     (this.author = author),
//     (this.published = published),
//     (this.genre = genre),
//     (this.about = function () {
//       return `kitob: \n nomi: ${this.nomi} \n author: ${this.author} \n published: ${published} \n genre: ${this.genre}`;
//     });
// }

// const book1 = new MyBook(
//   "Mukammal dasturlash",
//   "Javlon Abdulloh",
//   2018,
//   "Ilmiy"
// );
// console.log(book1.about());

//===================

// function Mycar(nomi, yili, rangi, yurgani, xolati) {
//   (this.nomi = nomi),
//     (this.yili = yili),
//     (this.rangi = rangi),
//     (this.yurgani = yurgani),
//     (this.xolati = xolati),
//     (this.about = function () {
//       console.log(
//         `Mashina: \n nomi:${this.nomi} \n yili:${this.yili} \n rangi:${this.rangi} \n yurgani:${this.yurgani} \n xolati: ${this.xolati}`
//       );
//     });
// }

// const mashina = new Mycar("BMW X5", 2015, "QORA", 60000, "IDEAL");
// console.log(mashina.about());

//===============

// UY VAZIFALAR

// Array1. n natural soni berilgan. Dastlabki n ta toq sondan tashkil topgan massiv qaytaruvchi getInitialOdds(n) nomli funksiya tuzing.
// Input: getInitialOdds(5)
// Output: [1, 3, 5, 7, 9]

// function getInitialOdds(n) {
//   let odds = [];

//   for (let i = 1; i <= n * 2; i++) {
//     if (i % 2 === 1) {
//       odds.push(i);
//     }
//   }
//   return odds;
// }

// getInitialOdds(10);

//============================

// Array2. arr nomli massiv berilgan. Massiv elementlari orasidan juftlarini indekslari kamayish tartibidan hosil bo’lgan massivni qaytaruvchi getEvenReverse(arr) programma tuzilsin.
// Input: [4, 5, 7, 8, 6, 9]
// Output: [6, 8, 4]

// function getEvenReverse(arr) {
//   let evenIndexes = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 2 == 0) {
//       evenIndexes.push(arr[i]);
//     }
//   }

//   return evenIndexes;
// }

// let arr = [4, 5, 7, 8, 6, 9];
// let result = getEvenReverse(arr);

// console.log(result);

//=======================

// Array1. n natural soni berilgan. 2 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel2(n) nomli funksiya tuzing.
// Input: 5

// function getLevel(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(2 ** i);
//   }
//   return arr;
// }

// let result = getLevel(5);
// console.log(result);

//=====================================
// Array2. n natural soni va A, B butun sonlari berilgan (n > 2). a[0] = A; a[1] = B; boshqa elementlari o'zidan oldingi barcha elementlari yig'indisiga teng bo'lgan massivni hosil qiling va elementlarini chiqaring.
// Input: n = 5, A = 2, B = 3
// Output: [2, 3, 5, 10, 20]

//===========================

//======================================

// Array4. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan toqlarini indekslari o'sish tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 5 7 9 toqlar soni = 3 //let i = arr.length - 1; i >= 0; i--

// function getOddReverse(arr) {
//   let oddIndexes = [];

//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] % 2 == 1) {
//       oddIndexes.push(arr[i]);
//     }
//   }

//   return `natija ${oddIndexes} toqlar soni: ${oddIndexes.length}`;
// }

// let arr = [4, 5, 7, 8, 6, 9];
// let result = getOddReverse(arr);

// console.log(result);

// Array5. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juftlarini indekslari o'sish tartibida chiqaruvchi, keyin massiv elementlari orasidan toqlarini indekslari kamayish tartibida chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 4 8 6 9 7 5

// function getOddReverse(arr) {
//   let oddIndexes = [];
//   let evenIndexes = [];

//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] % 2 == 0) {
//       evenIndexes.push(arr[i]);
//     } else oddIndexes.push(arr[i]);
//   }

//   return evenIndexes.concat(oddIndexes.reverse());
// }

// let arr = [4, 5, 7, 8, 6, 9];
// let result = getOddReverse(arr);

// console.log(result);

//================================================
// Array6. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[0], A[2], A[4], ... Shart operatori ishlatilmasin.

// function evenIndex(arr) {
//   let total = [];
//   for (let i = 0; i <= arr.length - 1; i += 2) {
//     total.push(arr[i]);
//   }
//   return total;
// }

// const arr = [45, 5, 6, 7, 8, 12, 14];
// let result = evenIndex(arr);
// console.log(result);

//=========================================
// Array7. n ta elementdan tashkil topgan massiv berilgan (n toq son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[n-1], A[n-3], ... A[1]. Shart operatori ishlatilmasin.

// function oddIndex(arr) {
//   let total = [];
//   for (let i = 1; i <= arr.length - 1; i += 2) {
//     total.push(arr[i]);
//   }
//   return total;
// }

// const arr = [45, 5, 6, 7, 8, 12, 14];
// let result = oddIndex(arr);
// console.log(result);

//============================================
// Array8. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juft indekslilarini keyin toq indekslilarini chiqaruvchi programma tuzilsin.
// A[0], A[2], A[4], ... A[1], A[3], A[5],.... Shart operatori ishlatilmasin.

// function oddEvenIndex(arr) {
//   let even = [];
//   let odd = [];
//   for (let i = 0; i <= arr.length - 1; i += 2) {
//     even.push(arr[i]);
//   }
//   for (let i = 1; i <= arr.length - 1; i += 2) {
//     odd.push(arr[i]);
//   }

//   return [even, odd];
// }

// const arr = [45, 5, 6, 7, 8, 12, 14];
// let result = oddEvenIndex(arr);
// console.log(result);

//======================================

//Array11. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlaridan tashqari elementlari yig'indisini qaytaruvchi rangeOutSum(arr) nomli funksiya tuzilsin.

// function rangeOutSum(arr, K, L) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (i != K && i != L) {
//       sum += arr[i];
//     }
//   }

//   return sum;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let K = 2;
// let L = 7;
// let result = rangeOutSum(arr, K, L);
// console.log(result);

//===========================================================

// Array12. Massivga kiritilgan qiymatlardan truthy va falsy elementlaridan iborat alohida 2 ta massiv hosil qiling.
// Input: [10, false, “”, “Abdulaziz”, null]
// Output:
// Truthy: [10, “Abdulaziz”]
// Falsy: [false, “”, null]

// function bool(arr) {
//   let truthy = [];
//   let falsy = [];
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i]) {
//       truthy.push(arr[i]);
//     } else {
//       falsy.push(arr[i]);
//     }
//   }
//   return `truthy: ${truthy}  falsy: ${falsy}`;
// }
// const arr = [10, false, " ", "Abdulaziz", null];
// let result = bool(arr);
// console.log(result);

//============================================
function getOddMin(arr) {
  let minOdd = Infinity;

  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] < minOdd) {
      minOdd = arr[i];
    }
  }

  return minOdd;
}

let arr = [5, 2, 8, 3, 12, 9, 4, 6];
let result = getOddMin(arr);
console.log(result);

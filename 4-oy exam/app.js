"use strict";

// 100.Quyidagi namunani kuzatgan holda funksiya yasang.
// Namuna:
// Namuna("div*2") ➞ "<div></div><div></div>"

// Namuna("p*1") ➞ "<p></p>"

// Namuna("li*3") ➞ "<li></li><li></li><li></li>"

// function namuna(str) {
//   let [tag, count] = str.split("*");
//   let result = "";
//   for (let i = 0; i < count; i++) {
//     result += `<${tag}></${tag}>`;
//   }
//   return result;
// }

// console.log(namuna("div * 3"));

// 101.Funksiya butun son qabul qilsa, 1dan ushbu butun songacha bo’lgan sonlar yig’indisini qaytarsin.
// Namuna:
// namuna(3) ➞ 6
// // 1 + 2 + 3 = 6

// namuna(10) ➞ 55
// // 1 + 2 + 3 + ... + 10 = 55

// namuna(7) ➞ 28
// // 1 + 2 + 3 + ... + 7 = 28

// let n = 10;

// const yegindi = (n) => {
//   let sum = (n * (n + 1)) / 2;
//   return sum;
// };

// console.log(yegindi(n));

//=====================================================
// 102.Funskiya son va object qabul qiladi. Objectni ichida min va max degan propertilar mavjud. Agar ushbu son min va maxni oralig’ida bo’lsa funksiya true qaytarsin, aks holda false

// function oraliqSon(num, obj) {
//   if (num > obj.min && num < obj.max) {
//     return true;
//   } else return false;
// }

// let result = oraliqSon(4, { min: 0, max: 5 });

// console.log(result);

//==============================
// 103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng bo’lsa funksiya true qaytarsin, aks holda false.

// function kvSon(num) {
//   if (num === num ** 2 % 10) {
//     return true;
//   } else return false;
// }

// console.log(kvSon(6));

//============================================
// 104.Funksiya massiv qabul qiladi. Funksiya massivning elementlariga o’sha elementning indexini qo’shgan holda yangi massiv qaytarsin.

// const arr = [0, 0, 0, 0, 0, 0];

// function newArr(arr) {
//   //   let arr2 = [];

//   for (let i = 0; i < arr.length; i++) {
//     arr[i] += i;
//   }
//   return arr;
// }

// let result = newArr(arr);

// console.log(result);

//=======================================
// 105.Funksiya ichimliklar massivini qabul qiladi. Funksiya ichida shakari yo’q ichimlilarinigina qaytarishi kerak. Ichida shakari bor ichimliklar ro’yxati:
// cola
// fanta

// function ichimlik(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "water") {
//       return arr[i];
//     }
//   }
// }
// const arr = ["fanta", "cola", "water"];
// console.log(ichimlik(arr));

//=================================================
// 106.Funksiya son qabul qilsa, Funksiya ushbu sonda nechta raqam borligini qaytarsin.
// Namuna:5656

// function numberlength(num) {
//   return String(num).length;
// }
// let num = 5656;
// let result = numberlength(num);

// console.log(result);

//=====================================================

// 107.Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin bo’lgan sonni qaytarsin.

// function kattaSon(son) {
//   let sonString = String(son);
//   let sonRaqam = sonString.split("");

//   let num = "";
//   for(let i=0; i<sonString.length;i++){
//     num+=Math
//   }
// }

// console.log(kattaSon(567));

//=====================================
// 108.Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu oraliqdan bironta random son qaytarsin.

// function randomNum(num1, num2) {
//   return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
// }

// console.log(randomNum(2, 6));

//==========================================
// 109.Funksiya son qabul qiladi. Ushbu funksiya ushbu son narissistik son bo’lsa true qaytarsin, aks holda false. Narissistik son degani sonning har bir raqamini sonning uzunligi miqdorida darajaga ko’tarib qo’shib chiqilganda o’ziga teng bo’lgan son.

// function narisistik(num) {
//   let strNum = String(num);
//   let sum = 0;
//   for (let i = 0; i < strNum.length; i++) {
//     sum += strNum[i] ** strNum.length;
//   }
//   if (sum === num) {
//     return true;
//   } else return false;
// }
// let num = 153;

// let result = narisistik(num);
// console.log(result);

//=====================================
// 110.Funksiya string qabul qiladi.Funksiya ushbu stringda nechta katta harf ishtirok etganin qaytarsin.
// Namuna:

// function kattaHarfSoni(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     let letter = str.charAt(i);
//     if (letter === letter.toUpperCase() && letter !== letter.toLowerCase()) {
//       count++;
//     }
//   }
//   return count;
// }

// let str = "TFDTUYFsdiajsof;hj;oid";
// let count = kattaHarfSoni(str);
// console.log(count);

// 111.Funksiyaga massiv berilsa, funksiya ushbu massivning ichidagi nollarni massivning oxiriga sursin qolgan elementlar o’z joyida qolsin.
// Namuna:([1, 0, 1, 2, 0, 1, 3]) ➞ [1, 1, 2, 1, 3, 0, 0]

// function zeroPush(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 0) {
//       let arrIndex = arr.splice(i, 1);
//       arr.push(arrIndex[0]);
//     }
//   }
//   return arr;
// }

// const arr = [1, 0, 1, 2, 0, 1, 3];

// let result = zeroPush(arr);
// console.log(result);

//=========================================
// 112.Funksiya massiv qabul qilsa, ushbu massivning ichida eng katta sonni qaytasin.

// function maxArr(arr) {
//   return Math.max(...arr);
// }

// const arr = [300, 200, 600, 150];

// let result = maxArr(arr);
// console.log(result);

//=============================================

const movies = [
  {
    name: "Avatar 2",
    year: 2023,
    rate: 6,
  },
  {
    name: "Baron 2",
    year: 2022,
    rate: 4,
  },
  {
    name: "Openhimmer",
    year: 2023,
    rate: 9,
  },
  {
    name: "Creed 3",
    year: 2022,
    rate: 5,
  },
  {
    name: "Impossible Mission 7",
    year: 2023,
    rate: 7,
  },
];

// let newMovie = [];

// for (let i = 0; i < names.length; i++) {
//   if (names[i].rate >= 5) {
//     newMovie.push(names

//         [i]);
//   }
// }

// console.log(newMovie);

for (let i = 0; i < 100; i++) {
  console.log("ee");
}

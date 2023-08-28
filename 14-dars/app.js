// 1.  Bahosi 5, 4, 3 bo’lgan o’quvchilarni ismlaridan iborat massiv qaytaruvchi getNames(baho) funksiya tuzing. (map, filter)

// 5 baho - (85 - 100)
// 4 baho - (70 - 85)
// 3 baho – (60 - 70)

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// const studentsWithGrade = students.map((student) => {
//   const present = student.percent;
//   if (present >= 85 && present <= 100) {
//     return { ...student, greade: 5 };
//   } else if (present >= 70 && present <= 84) {
//     return { ...student, grade: 4 };
//   } else if (present >= 60 && present <= 69) {
//     return { ...student, grade: 3 };
//   } else {
//     return { ...student, grade: "fail" };
//   }
// });

// console.log(studentsWithGrade);

//========================================================
// Input: getNamesWithGrade(5)
// Output: ['Quincy', 'Alexis', 'Katie']

// const students = [
//   { name: "Quincy", percent: 96, greade: 5 },
//   { name: "Jason", percent: 84, grade: 4 },
//   { name: "Alexis", percent: 100, greade: 5 },
//   { name: "Sam", percent: 65, grade: 3 },
//   { name: "Katie", percent: 90, greade: 5 },
//   { name: "Anna", percent: 75, grade: 4 },
// ];

// const filteredStudents = students
//   .filter((student) => student.grade === 5)
//   .map((student) => student.name);

// console.log(gradeFiveName);

//======================================
// // 2.  Massivdagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating. (reduce)
// // Output: {
// //     dog: 2,
// //     chicken: 3,
// //     cat: 1,
// //     rabbit: 1
// //  }

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];

//====================================

// 3.  Massiv elementlari kvadratlaridan hosil bo’lgan massiv hosil qiling. (map)

// Input: [1, 2, 3, 4, 5]
// Output: [1, 4, 9, 16, 25]

// const numbers = [1, 2, 3, 4, 5];

// const newNumber = numbers.map((num) => {
//   return num ** 2;
// });

// console.log(newNumber);

//===================================
// 4.  Massivdagi musbat sonlar yig’indisini hisoblang. (filter va reduce)
// Output: 42

// const numbers = [1, -4, 12, 0, -3, 29, -150];

// const negativeNumber = numbers.filter((num) => {
//   return num < 0;
// });

// const count = negativeNumber.reduce((acc, num) => {
//   return acc + num;
// });

// console.log(count);

//-=======================================

// 5.  Satrdagi so’zlarning bosh harflarini oling. (split, map, join)

// Output: 'GRRM'

// let str = "George Raymond Richard Martin";

// const boshXarf = str.split(" ");
// let birinchiXarf = boshXarf.map((soz) => {
//   return soz[0];

//   //   let newHarf = soz[0].join(" ");
//   //   return soz[0];
// });

// console.log(birinchiXarf.join(""));

//=======================================
// 6.  Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).

// Output: 54;

// const people = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];

// const sortedPeople = people.sort((a, b) => {
//   return a.age - b.age;
// });

// let count = sortedPeople[sortedPeople.length - 1].age - sortedPeople[0].age;
// console.log(count);

//====================================
// 7.  N ta elementdan iborat massiv berilgan.
// Massiv elementlari orasidan juftlarini va toqlarini o'z ichiga oladigan massivlar hosil qilinsin. (filter)

// const numbers = [1, 5, 2, 4, 7, 8, 9];

// const evenNum = numbers.filter((num) => num % 2 == 0);
// const oddNUm = numbers.filter((num) => num % 2 == 1);
// console.log(evenNum, oddNUm);

//==============================

// 8.  N ta elementdan iborat massiv berilgan.
// Massiv elementlari orasidan bir xil qiymatga ega bo’lganlarini o’chiruvchi dastur tuzilsin.
// Faqat birinchi uchragani qoldirilsin. (reduce)

// const arr = [1, 2, 3, 4, 2, 5, 6, 4, 7, 8, 1];

// const uniqueArr = arr.reduce(function (unique, current) {
//   if (!unique.includes(current)) {
//     unique.push(current);
//   }
//   return unique;
// }, []);

// console.log(uniqueArr);

//==========================
// 10. Rating bo'yicha eng kuchli product topilsin. (sort)

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// const sortedProduct = products.sort((a, b) => {
//   return a.rating - b.rating;
// });

// console.log(sortedProduct);

//===========================================
//11. narxi eng past product topilsin

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// const sortedProduct = products.sort((a, b) => {
//   return a.price - b.price;
// });

// console.log(sortedProduct[0]);

//==============================

// 12. Barcha products narxlari yig'indisi topilsin. (reduce)

// const totalPrices = products.reduce(function (sum, product) {
//   return sum + product.price;
// }, 0);

// console.log(totalPrices);

//13. Faqatgina products nomlaridangina iborat bo'lgan massiv qaytaring. (map)

// const nameProducts = products.map((product) => {
//   return product.name;
// });

// console.log(nameProducts);

//==========================================
// 14. Id si 5 bo'lgan elementni nomini qaytaruvchi dastur yozing. (find)

// const nameProduct = products.find((product) => {
//   if (product.id == 5) {
//     return product.name;
//   }
// });

// console.log(nameProduct);

//=================================

// 15. Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)

// const newproduct = products.filter((product) => {
//   if (product.id !== 4) {
//     return product;
//   }
// });

// console.log(newproduct);

//====================================
// 17. Massiv truthy va falsy elementlardan tuzilgan. O’sha massivdagi truthy va falsy elementlarni alohida massivlarga ajratib object qilib qaytaruvchi getTruthyFalsy funksiya tuzing. (filter)
// Input: [false, 1, 10, "", null, "abdulaziz", 1.13, 0]
// Output: {truthy: [1, 10, "abdulaziz", 1.13], falsy: [false, "", null, 0]}

// function getTruthyFalsy(array) {
//   const truthyArray = array.filter(function (element) {
//     return Boolean(element);
//   });

//   const falsyArray = array.filter(function (element) {
//     return !Boolean(element);
//   });

//   return {
//     truthy: truthyArray,
//     falsy: falsyArray,
//   };
// }

// const inputArray = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];
// const result = getTruthyFalsy(inputArray);

// console.log(result);

//===============================

// 18. Satr berilgan.
// Satrdagi so'zlar uzunligidan iborat bo'lgan massiv qaytaring. (split, map)
// Outpu: [3, 9, 12]
// let str = "Men Abdulaziz Programmerman";

// const arr = str.split(" ");

// const numArr = arr.map((item) => {
//   return item.length;
// });

// console.log(numArr);

//=================================

// 19. Satrni bo'sh joy bor yoki yo'qligini tekshiring. (split, some)

// let str = "Men Abdulaziz Programmerman";

// function hasEmptySpace(str) {
//   return str.split(" ").some(function (word) {
//     return word === "";
//   });
// }

// const hasEmpty = hasEmptySpace(str);
// console.log(hasEmpty);

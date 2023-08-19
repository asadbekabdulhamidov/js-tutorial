// let son = 15;
// const fizzBuzz = (num1, num2) => {
//   if (son % num1 == 0) {
//     return "fizz";
//   } else if (son % num2 == 0) {
//     return "buzz";
//   }else
// };

// let result = fizzBuzz(3, 5);

// let i = 0;

// function bar() {
//   if (i <= 20) {
//     i++;
//     console.log(i);
//     bar();
//   } else return i;
// }

// bar();

// const student = {
//   name: "Asadbek",
//   age: 23,
//   address: "Quva",
//   family: 5,
//   greeting: function () {
//     return `Mening ismim ${student.name}. Yoshim ${student["age"]}. yashash joyim ${student.address}. Olilada ${student.family} ta`;
//   },
// };

// console.log(student.greeting());

// function countDown(number) {
//   // display the number
//   console.log(number);

//   // decrease the number value
//   const newNumber = number - 1;

//   // base case
//   if (newNumber > 0) {
//     countDown(newNumber);
//   }
// }

// countDown(4);

// function factorial(x) {
//   // if number is 0
//   if (x === 0) {
//     return 1;
//   }

//   // if number is positive
//   else {
//     return x * factorial(x - 1);
//   }
// }

// console.log(factorial(3));

// let account = {
//   name: "asadbek",
//   age: 23,
//   name: "shaxboz",
// };

// let key = "name";

// console.log(account);

// const ac1 = {
//   name: "asad",
//   major: 2022,
// };

// for (let i in ac1) {
//   console.log(ac1[i]);
// }

// const student = {
//   name: "Monica",
//   class: 7,
//   age: 12,
// };

// // using for...in
// for (let key in student) {
//   // display the properties
//   console.log(`${key} => ${student[key]}`);
// }

// let obj = {
//   name: "webbrain",
//   age: 23,
//   child: {
//     name: "eshmat",
//     age: 11,
//     child: {
//       name: "toshmat",
//       age: 33,
//     },
//   },
// };

// let sum = 0;

// while (obj) {
//   sum += obj.age;

//   obj = obj.child;
// }

// console.log(sum);

//=============================

// No1
// object keylarini toping
// let obj = {
//   id: 1,
//   name: "WebBrain",
// };
// let keys = obj.keys(obj);

// console.log(keys);

// object valuelarining raqamga tenglarini toping
// let obj = {
//   id: 1,
//   name: "WebBrain",
// };

// for (let i in obj) {
//   if (typeof obj[i] === "number") {
//     console.log(`${i}: ${obj[i]}`);
//   }
// }

//================================

// No3
// object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga

// chiqish
// {   offline:true,
//     online:true,
//     individual:false
// }

// let obj = {
//   id: 1,
//   name: "WebBrain",
//   offline: true,
//   online: true,
//   individual: false,
// };

// for (let i in obj) {
//   if (typeof obj[i] === "boolean") {
//     console.log(`${i}: ${obj[i]}`);
//   }
// }

//===============================

// No4
// object va string berilgan .agar object keylari ichida stringga teng bolgan key bolsa shu key va valueni chiqazing

// chiqish
//     name:"WebBrain"

// let obj = {
//   id: 1,
//   name: "WebBrain",
//   offline: true,
//   online: true,
//   individual: false,
// };
// function Search(obj, str) {
//   for (let i in obj) {
//     if (typeof i === "string" && typeof obj[i] === "string") {
//       return `${i}: ${obj[i]}`;
//     }
//   }
// }

// console.log(Search(obj, "WebBrain"));

//=====================================
// No5
// object va string berilgan.  string bor bolgan object valuelarining chiqaring
// let obj = {
//   id: 1,
//   name: "atirgul",
//   color: "qizil",
//   count: 10,
//   price: "10$",
// };

// function searchValue(obj, str) {
//   for (let i in obj) {
//     if (typeof obj[i] === "string") {
//       return obj[i];
//     }
//   }
// }
// console.log(searchValue(obj, "i")); // atirgul,qizil

//=================================================
// No6
// object ichida objectlar berilgan. ichki objectlarning ichiga age degan key berilgan. barcha ichki keylardagi age lar yigindisini toping

// chiqish
// 146

// let person = {
//   id: 1,
//   name: "Odil",
//   age: 78,
//   child: {
//     id: 1,
//     name: "Ali",
//     age: 48,
//     child: {
//       id: 1,
//       name: "Umar",
//       age: 20,
//     },
//   },
// };
// let sum = 0;
// while (person) {
//   sum += person.age;
//   person = person.child;
// }
// console.log(sum);

//========================================
// No7
// array berilgan array ning ichida objectlar berilgan. object ichida age berilgan. age ni 18dan katta bolgan objectlarni qaytaring
/*let user = {
  id: 1,
  name: "Odil",
  age: 78,
  children: [
    {
      id: 1,
      name: "Umar",
      age: 54,
      children: [
        { id: 1, name: "Asmo", age: 34 },
        { id: 2, name: "Osim", age: 30 },
        { id: 3, name: "Xattob", age: 25 },
      ],
    },
    { id: 2, name: "Umar", age: 54 },
    { id: 3, name: "Umar", age: 54 },
  ],
}; */

//=========================================

// No9
// objectdan clone oling birinchi objni o'zgartirsa ikkinchisi malumotlari ozgarmasligi kk

// let obj = {
//   id: 1,
//   name: "Usmon",
//   job: "developer",
// };

// let obj2 = structuredClone(obj);

// obj.name = "Asad";

// console.log(obj);
// console.log(obj2);

//=============================================
// No10
// objectga yangi qiymat qo'shuvchi funksiya yozing
// function add(obj, key, value) {
//   obj[key] = value;
//   return obj;
// }

// let obj = {
//   id: 1,
//   name: "WebBrain",
// };

// let result = add(obj, "address", "toshkent");

// console.log(result);

//==================================================
// No11
// agar object ichida practice 1 dan katta bolsa 'qabul qilindi'.aks holda 'ming bor uzur.'
// let obj = {
//   id: 1,
//   name: "Usmon",
//   job: "developer",
//   practice: 12,
// };

// for (let i in obj) {
//   if (obj["practice"] > 1) {
//     alert("qabul qilindi");
//   } else alert("ming bor uzur");
// }

//=================================
// No11
// agar object ichida talaba bolsa objectga {kiridit:true} key va value qoshilsin aks holsa {kiridit:olinmadi} qoshilsin
// let obj = {
//   id: 1,
//   name: "Usmon",
//   job: "developer",
//   practice: 1,
//   talaba: true,
// };

// for (let key in obj) {
//   if (key == "talaba") {
//     obj.kredit = true;
//   } else obj.kredit = "olinmadi";
// }

// console.log(obj);

//=====================================
// No12
// object ichida tugilgan yil,hozirgi yoshi malumotlari keltirilgan. agar yosh togri bolmasa 'xato malumot kiritdingiz' chiqarilsin
// let obj = {
//   id: 1,
//   name: "Usmon",
//   age: 34,
//   year: 1990,
// };

// obj.current = 2023;

// if (obj["current"] - obj["year"] == obj["age"]) {
//   console.log(true);
// } else console.log(false);

//==========================================
// No13
// talaba oz malumotlarini toldirmoqda. sizga object va massiv berilgan. massiv ichida uzbekiston viloyatlari berilgan. agar talaba massiv ichidagi viloyatlardan boshqa tanlasa bizning filallarimiz faqat shu viloyatlarda degan natija chiqsin.

// let arr=['Andijon','Namangan','Qarshi','toshkent']

//=================================================
// No14
// talabalar malumotlari massiv berilgan. massiv objectlardan tashkil topgan. objectda login parol keltirilgan.
// funksiyaga login va parol jonatiladi.
// agar login parol togri bolsa 'hush kelibsiz' aks holda 'login yoki parol xato degan qiymat chiqazing'
//logIn('Umar','2113') => xato
// logIn('Salohiddin','3421') => hush kelibsiz
// let arr = [
//   { id: 3, name: "Usmon", parol: "1231" },
//   { id: 1, name: "Umar", parol: "1241" },
//   { id: 5, name: "Jasur", parol: "3452" },
//   { id: 2, name: "Asmo", parol: "2312" },
//   { id: 4, name: "Salohiddin", parol: "3421" },
// ];

// let cleantUser = function (userName, userPassword) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].name == userName && arr[i].parol == userPassword) {
//       return "XUsh kelibsiz";
//     } else {
//       return "Xatolik";
//     }
//   }
// };
// console.log(cleantUser("Umar", "1241"));

//========================================
// No15
// object ichida objectlar berilgan. ichki objectlar bor yoqligini tekshiring

// function checkNestedObject(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "object") {
//       return true;
//     }
//   }
//   return false;
// }

// let obj = {
//   id: 1,
//   title: "the best",
//   address: { street: "Farobiy", number: "34" },
// };

// console.log(checkNestedObject(obj)); // true

// Quyidagi massivdagi barcha odamlarni yoshlarining o’rtacha qiymatini chiqaruvchi getAverageAge(arr) nomli funksiya yozing.
// Output: 22.25

// const people = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];

// function getAverageAge(people) {
//   let count = 0;
//   for (let i in people) {
//     count += people[i].age;
//   }
//   return count / people.length;
// }

// let result = getAverageAge(people);

// console.log(result);

//========================================
// Ikkita object berilgan ularning ba'zi kalitlari bir xil. Bir xil kalitlaridan iborat bo'lmagan yangi object hosil qiling.
//Output: obj = { b: 10, c: 5, e: 6, f: 15 };

// let obj1 = { a: 3, b: 10, c: 5, d: 7 };
// let obj2 = { a: 10, d: 4, e: 6, f: 15 };
// let obj = {};

// function add(obj1, obj2) {
//   let obj = {};

//   for (let key in obj1) {
//     if (!obj2.hasOwnProperty(key)) {
//       obj[key] = obj1[key];
//     }
//   }

//   for (let key in obj2) {
//     if (!obj1.hasOwnProperty(key)) {
//       obj[key] = obj2[key];
//     }
//   }

//   return obj;
// }

// let result = add(obj1, obj2);
// console.log(result);\

//========================
// Quyidagi objectni outputdagi ko'rinishda chiqaring. (toString, join)
// Output:
// firstName: Abdulaziz
// lastName: Toshpulatov
// age: 23
// languages: js,python,c++,nodejs
// friends: Jamshid+Abbos+Jalol+Mar'uf

// const me = {
//   firstName: "Abdulaziz",
//   lastName: "Toshpulatov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };

// for(let i in me){
//   console.log(`${i}: ${me[i]}`);
// }

//===================================
// Kalitlari 1 dan n gacha bo’lganlar sonlarga, qiymatlari esa o’sha sonlarning kvatratiga teng object hosil qiling. (for)

// Input: 5
// Output: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

// function obj(n) {
//   let obj1 = {};

//   for (let i = 1; i <= n; i++) {
//     obj1[i] = i ** 2;
//   }

//   return obj1;
// }

// let result = obj(5);
// console.log(result);

// 2-misoldan hosil bo’lgan objectning kalitlari va qiymatlari yig’indisini toping. (Object.keys(), Object.values())

// let obj = { 1: 1, 2: 4, 3: 9, 4: 16, 5: 25 };

// function count(obj) {
//   let yegindiKeys = 0;
//   let yegindiValues = 0;

//   for (let i in obj) {
//     yegindiKeys = yegindiKeys + Number(i);
//     yegindiValues += obj[i];
//   }
//   return [yegindiKeys, yegindiValues];
// }

// let result = count(obj);

// console.log(result);

// let yegindiKeys = 0;
// let yegindiValues = 0;

// let Keys = Object.keys(obj);
// let Values = Object.values(obj);

// for (let i = 0; i < Keys.length; i++) {
//   yegindiKeys += Number(Keys[i]);
//   yegindiValues += Values[i];
// }

// console.log(yegindiKeys, yegindiValues);

// //=====================
// Stringlar massivi berilgan. Shunday object hosil qilingki, o’sha objectning kalitlari massiv elementlaridan va qiymatlari esa ularning uzunligidan iborat bo’lsin. (for)

// Input: ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"]
// Output: {"Abdulaziz": 9, "Safarmurod": 10, "O’rol": 5, "Jahongir": 8}

// let arr = ["Abdulaziz", "Safarmurod", "Orol", "Jahongir"];

// function obj(arr) {
//   let obj2 = {};

//   for (let i = 0; i < arr.length; i++) {
//     obj2[arr[i]] = arr[i].length;
//   }
//   return obj2;
// }

// let result = obj(arr);
// console.log(result);

// Shunday object berilganki, uning kalitlari mahsulotlardan va qiymatlari esa ularning narxlaridan tuzilgan. Barcha mahsulot qancha turishini toping. (Object.values())

// Input: {"Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000}
// Output: 50000

// let obj = { Apelsin: 10000, Olma: 12000, Mandarin: 8000, Banan: 20000 };

// let valueSum = 0;

// for (let i in obj) {
//   valueSum += Number(obj[i]);
// }

// console.log(valueSum);

// ikkinchi usuli

// let value = Object.values(obj);

// let valueSum = 0;
// for (let i = 0; i < value.length; i++) {
//   valueSum += value[i];
// }
// console.log(valueSum);

//==============================================================

// Object kalitlarining barchasi string toifasidagi ma’lumotlardan tuzilgan bo’lsa true, aks holda false qiymat qaytaruvchi defineObject nomli funksiya hosil qiling. (Object.keys())

// Input: {abc: 1, 123: 2, d: 5}
// Output: false

// function defineObject(obj) {
//   let keys = Object.keys(obj);
//   for (let i = 0; i < keys.length; i++) {
//     if (typeof i !== "String") {
//       return false;
//     }
//   }
//   return true;
// }

// let obj = { abc: 1, 123: 2, d: 5 };
// let result = defineObject(obj);

// console.log(result);

//==================================
// Agar object qiymatlari ichida falsy qiymatlar bo’lsa, ularni o’chirib yangi object hosil qiling. (Object.keys())

// Input: { a: false, b: 12, c: true, d: 0 }
// Output: { b: 12, c: true }

// let obj = { a: false, b: 12, c: true, d: 0 };

// for (let i in obj) {
//   if (obj[i] == false) {
//     delete obj[i];
//   }
// }

// console.log(obj);

//=======================================

// Quyidagi ko'rinishda objectlarlardan tuzilgan massiv beriladi. Agar alreadyRead propertysi true bo'lsa o'sha kitob o'qigan deb chiqarilsin, aks holda o'qilmagan.
// Output:
// 1. Akrom Malikning "Halqa" kitobi o'qilmagan;
// 2. O'tkir Hoshimovning "Dunyo ishlari" kitobi o'qilgan;
// 3. Abdulfattoh Abu G'uddaning "Vaqtning qadri" kitobi o'qilmagan;

/*const books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    alreadyRead: false,
  },
  {
    title: "Dunyo ishlari",
    author: "O'tkir Hoshimov",
    alreadyRead: true,
  },
  {
    title: "Vaqtning qadri",
    author: "Abdulfattoh Abu G'udda",
    alreadyRead: false,
  },
];
for (let i in books) {
  if (books[i].alreadyRead) {
    console.log(`${books[i].author}ning ${books[i].title} kitobi oqilgan`);
  } else {
    console.log(`${books[i].author}ning ${books[i].title} kitobi oqilmagan`);
  }
}*/

//==========================================

// Mahsulotlar massividagi objectlarni sonini, chegirmasini hisobga olib, umumiy summani hisoblang.

//  const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];

// let totalDiscount = 0;
// let totalPrice = 0;

// for (let i = 0; i < products.length; i++) {
//   let product = products[i];

//   let discountAmount = (product.price * product.discount) / 100;
//   let discountedPrice = product.price - discountAmount;

//   totalDiscount += discountAmount;
//   totalPrice += discountedPrice * product.quantity;
// }

// console.log("Total Discount:", totalDiscount);
// console.log("Total Price:", totalPrice);

//===================================================
// Objectning kalitlaridan va qiymatlaridan iborat bo'lgan massiv tuzing.
//Output: ["it", 20, "mushuk", 10, "sigir", 200, "tovuq", 2]

// const obj = {
//   it: 20,
//   mushuk: 10,
//   sigir: 200,
//   tovuq: 2,
// };
// let arr = [];

// for (let i in obj) {
//   arr.push(i);
//   arr.push(obj[i]);
// }

// console.log(arr);

//=========================================================
// GPA ni hisoblovchi dastur tuzing.

// GPA = (grade1 * kredit1 + grade2 * kredit2 + ...) / (kredit1 + kredit2 + ...)

// const grades = [
//   { name: "Fizika", grade: 4, kredit: 6 },
//   { name: "Matematika", grade: 5, kredit: 6 },
//   { name: "Tarix", grade: 4, kredit: 4 },
//   { name: "Dasturlash", grade: 5, kredit: 8 },
//   { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
// ];

// let gpa = 0;
// let countKredit = 0;

// for (let i = 0; i < grades.length; i++) {
//   gpa += grades[i].grade * grades[i].kredit;
//   countKredit += grades[i].kredit;
// }
// let result = gpa / countKredit;
// console.log(result.toFixed(1));

//=======================================

// Abdulaziz Programmer nechta to'g'ri va noto'g'ri javob topganligini toping.

// const rightAnswers = {
//   1: "B",
//   2: "A",
//   3: "C",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "A",
//   8: "D",
//   9: "A",
//   10: "B",
// };

// const myAnswers = {
//   1: "C",
//   2: "A",
//   3: "D",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "B",
//   8: "C",
//   9: "A",
//   10: "C",
// };

// let togri = 0;
// let noTogri = 0;

// for (let i in myAnswers) {
//   if (myAnswers.hasOwnProperty(i)) {
//     let myAnswer = myAnswers[i];
//     let correctAnswer = rightAnswers[i];

//     if (myAnswer === correctAnswer) {
//       togri++;
//     } else {
//       noTogri++;
//     }
//   }
// }

// console.log(`togri javob: ${togri} ta`);

//==================================
// Qiymatlari sonlardan iborat obj nomli object berilgan. Qiymatlarini n martaga oshiruvchi getMultipleValues(n) nomli funksiya yozing.
// Output:  const res = { a: 6, b: 9, c: 12, d: 18 }
// Input:  let n = 3
// const obj = { a: 2, b: 3, c: 4, d: 6 };

// function getMultipleValues(n) {
//   for (let i in obj) {
//     obj[i] = obj[i] * 3;
//   }
// }

// getMultipleValues(3);
// console.log(obj);

//==============================================

"use strict";
// const number = [1, 2, 3, 4, 5];
// let count = 0;
// for (let i in number) {
//   count += number[i];
// }
// console.log(count);

//================================

// Array1. n natural soni berilgan. Dastlabki n ta toq sondan tashkil topgan massiv qaytaruvchi getInitialOdds(n) nomli funksiya tuzing.
// Input: getInitialOdds(5)
// Output: [1, 3, 5, 7, 9]

// let arr = [];
// let count = 1;

// for (let i = 0; i < 5; i++) {
//   arr.push(count);
//   count += 2;
// }

// console.log(arr);

//====================================
// Array4. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlari yig'indisini chiqaruvchi rangeSum(arr, K, L) programma tuzilsin.
// Input: arr = [1, 6, 9, 5, 8, 10, 15];
// Ouput: rangeSum(arr, 2, 5) => 32

// function rangeSum(arr, k, l) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (i >= k && i <= l) {
//       count += arr[i];
//     }
//   }
//   return count;
// }

// let natija = rangeSum([1, 6, 9, 5, 8, 10, 15], 2, 5);
// console.log(natija);

//==============================================
// Array5. n ta elementdan tashkil topgan massiv berilgan. Massivda qatnashgan sonlardan faqat bittadan chiqaruvchi getSingleArr(arr) tuzilsin.
// Input: let arr =  [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7]
// Output: [7, 4, 2, 3, 1, 5]

// const arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
// const newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (!newArr.includes(arr[i])) {
//     newArr.push(arr[i]);
//   }
// }

// console.log(newArr);
//==========================================================

// Array7. n ta elementdan tashkil topgan berilgan. Massiv elementlarini 1 ta o'rin ongga siklik siljituvchi programma tuzilsin. a[0] element qiymati a[1] ga o'tadi, a[1] esa a[2] ga, ..., a[n – 1] qiymati a[0] ga o'tadi.
// Input: [1, 5, 8, 9, 10]
// Output: [5, 8, 9, 10, 1]

// const arr = [1, 5, 8, 9, 10];

// let number = arr.shift();
// arr.push(number);
// console.log(arr);

//====================================
// Array1. n natural soni berilgan. 2 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel2(n) nomli funksiya tuzing.
// Input: 5
// Output: [2, 4, 16, 32, 62]

// function getLevel(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(2 ** i);
//   }
//   return arr;
// }

// let result = getLevel(5);
// console.log(result);

//=============================
// Array2. n natural soni va A, B butun sonlari berilgan (n > 2). a[0] = A; a[1] = B; boshqa elementlari o'zidan oldingi barcha elementlari yig'indisiga teng bo'lgan massivni hosil qiling va elementlarini chiqaring.
// Input: n = 5, A = 2, B = 3
// Output: [2, 3, 5, 10, 20]

// let n = 5;
// let A = 2;
// let B = 3;
// const arr = [A, B];

// for (let i = 2; i < n; i++) {
//   let sum = 0;
//   for (let j = 0; j < i; j++) {
//     sum += arr[j];
//   }
//   arr.push(sum);
// }

// console.log(arr);

//===============================================
// Array3. n ta elementdan tashkil topgan massiv berilgan. Uning elementlarini teskari tartibda chiqaruvchi programma tuzilsin.

// const arr = [2, 3, 5, 10, 20];
// const newArr = arr.reverse();
// console.log(newArr);

//================================================
// Array4. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan toqlarini indekslari o'sish tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 5 7 9 toqlar soni = 3

// const arr = [4, 5, 7, 8, 6, 9];

// const oddArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 1) {
//     oddArr.push(arr[i]);
//   }
// }

// console.log(oddArr);

//====================================
// Array5. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juftlarini indekslari o'sish tartibida chiqaruvchi, keyin massiv elementlari orasidan toqlarini indekslari kamayish tartibida chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 4 8 6 9 7 5

// const arr = [4, 5, 7, 8, 6, 9];
// let evenArr = [];
// let oddArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     evenArr.push(arr[i]);
//   } else {
//     oddArr.push(arr[i]);
//   }
// }
// const result = evenArr.concat(oddArr.reverse());

// console.log(result);

//============================================
// Array6. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[0], A[2], A[4], ... Shart operatori ishlatilmasin.

// const arr = [4, 5, 7, 8, 6, 9];

// for (let i = 0; i < arr.length; i += 2) {
//   console.log(arr[i]);
// }

//=======================================
// Array7. n ta elementdan tashkil topgan massiv berilgan (n toq son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[n-1], A[n-3], ... A[1]. Shart operatori ishlatilmasin
// const arr = [4, 5, 7, 8, 6, 8, 12];

// for (let i = arr.length - 1; i >= 0; i -= 2) {
//   console.log(arr[i]);
// }

//=======================================

// Array8. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juft indekslilarini keyin toq indekslilarini chiqaruvchi programma tuzilsin.
// A[0], A[2], A[4], ... A[1], A[3], A[5],.... Shart operatori ishlatilmasin.

// const arr = [4, 5, 7, 8, 6, 8, 12];

// const juft = [];
// const toq = [];

// for (let i = 0; i < arr.length; i += 2) {
//   juft.push(arr[i]);
// }

// for (let i = 1; i < arr.length; i += 2) {
//   toq.push(arr[i]);
// }

// console.log(juft.concat(toq));

//=============================================

// Array9. n ta elementdan tashkil topgan massiv berilgan (n juft son). Dastlab massiv elementlari orasidan toq indekslilarini o'shish tartibida keyin juft indekslilarini kamayish tartibida chiqaruvchi programma tuzilsin. A[1], A[3], A[5],.. A[6], A[4], A[2], A[0]. Shart operatori ishlatilmas

// const arr = [1, 2, 3, 4, 5, 6];

// const juft = [];
// const toq = [];

// for (let i = 0; i < arr.length; i += 2) {
//   juft.push(arr[i]);
// }

// for (let i = 1; i < arr.length; i += 2) {
//   toq.push(arr[i]);
// }

// console.log(toq.concat(juft.reverse()));

//===================================================
// Array10. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin. A[0], A[1], A[n-1], A[n-2], A[3], A[4], A[n-3], A[n-4], ...

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr.shift());
//   newArr.push(arr.shift());
//   newArr.push(arr.pop());
//   newArr.push(arr.pop());
// }

// console.log(newArr);

//===========================

// Array11. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlaridan tashqari elementlari yig'indisini qaytaruvchi rangeOutSum(arr) nomli funksiya tuzilsin.

// function rangeOutSum(arr, k, l) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (i <= k && i >= l) {
//       count += arr[i];
//     }
//   }
//   return count;
// }

// let natija = rangeOutSum([1, 6, 9, 5, 8, 10, 15], 2, 5);
// console.log(natija);

//===========================================================
// Array12. Massivga kiritilgan qiymatlardan truthy va falsy elementlaridan iborat alohida 2 ta massiv hosil qiling.
// Input: [10, false, “”, “Abdulaziz”, null]
// Output:
// Truthy: [10, “Abdulaziz”]
// Falsy: [false, “”, null]

// const arr = [10, false, "", "Abdulaziz", null];
// const truthy = [];
// const falsy = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]) {
//     truthy.push(arr[i]);
//   } else {
//     falsy.push(arr[i]);
//   }
// }

// console.log(`truthy: ${truthy} \n falsy: ${falsy}`);

//=====================================================
// Array13. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv juft indeksli elementlari orasidan kichigini aniqlovchi getOddMin(arr) nomli funksiya tuzilsin.

// function getOddMin(arr) {
//   let juft = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     juft.push(arr[i]);
//   }
//   return Math.min(...juft);
// }

// const arr = [1, 6, 9, 5, 8, 10, 15];
// console.log(getOddMin(arr));

//=======================================
// Array14. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv toq indeksli elementlari orasidan kattasini aniqlovchi getEvenMax(arr) tuzilsin.\

// function getEvenMax(arr) {
//   let toq = [];
//   for (let i = 1; i < arr.length; i += 2) {
//     toq.push(arr[i]);
//   }

//   return Math.max(...toq);
// }
// const arr = [1, 6, 9, 5, 8, 10, 15];

// console.log(getEvenMax(arr));

//=========================================

// Array15. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan oxirgi lokal maksimum elementi indeksini chiqaruvchi programma tuzilsin. Lokal maksimum - o'ng va chap qo'shinisidan katta bo'lgan element.

// function localMaxIndex(arr) {
//   let lastIndex = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//       lastIndex = arr[i];
//     }
//   }
//   return lastIndex;
// }

// const arr = [1, 3, 11, 7, 5, 8, 6];
// const lastIndex = localMaxIndex(arr);
// console.log(lastIndex);

//====================================
// Array17. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan yig'indisi eng katta bo'ladigan 2 ta qo'shni elementni chiqaruvchi programma tuzilsin.

// function eyebrowMax(arr) {
//   let sum = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] + arr[i - 1] + arr[i + 1] > sum) {
//       sum = arr[i] + arr[i - 1] + arr[i + 1];
//     }
//   }
//   return sum;
// }

// const arr = [1, 3, 9, 11, 5, 8, 6];

// const maxNum = eyebrowMax(arr);

// console.log(maxNum);

// Array18. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasida aniq 2 ta bir xil qiymatli element bor. Shu bir xil qiymatli elementlar indeksini chiqaruvchi programma tuzilsin.

// const arr = [3, 9, 11, 5, 8, 3];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; i++) {
//     if (arr[i] === arr[j]) {
//       console.log(arr[i], arr[j]);
//     }
//   }
// }

//=========================================================
// Array20. n ta elementdan iborat butun sonlardan tashkil topgan a massiv berilgan. a massivning juft elementlaridan tashkil topgan b massivini hosil qiling. b massiv elementlari soni va elementlari chiqarilsin.

// const arrA = [3, 9, 11, 5, 8, 3];
// const arrB = [];

// for (let i = 0; i < arrA.length; i += 2) {
//   arrB.push(arrA[i]);
// }

// console.log(`arrB ning elementlar soni: ${arrB.length} \n arrB:${arrB} `);

//============================================

// Array21. n ta butun sonlardan iborat a massiv va k butun soni berilgan. Massivning har bir elementini k ga orttiruvchi programma tuzilsin.

// const arr = [3, 9, 11, 5, 8, 3];
// let k = 2;

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] + k;
// }

// console.log(arr);

//=================================================

// Array22. n ta elementdan iborat massiv berilgan (n juft son). Massivning birinchi yarmi va ikkinchi yarmi qiymatlari almashtirilsin.

// const arr = [3, 9, 11, 5, 8, 2];

// for (let i = 0; i < arr.length / 2; i++) {
//   arr.push(arr.shift());
// }

// // let num = arr.length / 2;
// console.log(arr);

//==============================
// Array24. n ta butun sonlardan iborat a massiv berilgan. Massivning eng kichik va eng katta elementlari orasidagilarini nolga almashtiruvchi programma tuzilsin. Eng kichik va eng katta elementlari o'zgarishsiz qoldirilsin.

// function exchengeZero(arr) {
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);

//   let minIndex = arr.indexOf(min);
//   let maxIndex = arr.indexOf(max);

//   for (let i = 0; i < arr.length; i++) {
//     if (maxIndex - 1 == minIndex || maxIndex + 1 == minIndex) {
//       arr[i] = arr[i];
//     } else if (arr[i] > minIndex && arr[i] < maxIndex) {
//       arr[i] = 0;
//     } else if (arr[i] < minIndex && arr[i] > maxIndex) {
//       arr[i] = 0;
//     }
//   }

//   return arr;
// }
// const arr = [11, 1, 11, 5, 8, 14];

// let result = exchengeZero(arr);
// console.log(result);

//========================================
// Array25. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini bir qadam chapga siklik siljituvchi programma tuzilsin. a[n-1] element qiymati a[n-2] ga o'tadi, a[n-2] esa a[n-3] ga, ... a[0] esa a [n-1] ga o'tadi.

//==============================================

// Array26. n ta elementdan tashkil topgan massiv va k butun soni berilgan (0<= k < n). Indeksi k ga teng bo'lgan elementni o'chiruvchi va yangi massiv qaytaruvchi deleteElementWithIndex(arr, k) nomli funksiya tuzilsin.

// function deleteElementWithIndex(arr, k) {
//   arr.splice(k, 1);
//   return arr;
// }
// const arr = [11, 1, 11, 5, 8, 14];
// let k = 2;

// let result = deleteElementWithIndex(arr, k);

// console.log(result);

//================================================

// Array27. n ta elementdan tashkil topgan massiv va k, m butun sonlari berilgan (0< k < m < n). Indeksi k dan m gacha bo'lgan elementlarni o'chiruvchi programma tuzilsin. Hosil bo'lgan massiv elementlar soni va elementlari chiqarilsin.

// function deleteElementWithIndex(arr, k, m) {
//   arr.splice(k, m);
//   return arr;
// }
// const arr = [11, 1, 13, 5, 8, 14, 21, 44];
// let k = 2;
// let m = 4;

// let result = deleteElementWithIndex(arr, k, m);

// console.log(result);

//===============================================================
// Array29. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv elementlari orasidan faqat 1 marta ishtirok etganlaridan iborat yangi massiv qaytaruvchi getElementsOneTime(arr) nomli funksiya tuzing.
// Input: [1, 5, 6, 1, 5, 7, 2]
// Output: [6, 7, 2]

//=======================================

// function getElementsOneTime(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// const arr = [1, 5, 6, 1, 5, 7, 2];
// let result = getElementsOneTime(arr);
// console.log(result);

//=============================================
// Array30. arr nomli massivda k qiymatli bir nech element mavjude. Shu elementlar indekslari massividan iborat qiymat qaytaruvchid searchAllElements(arr) nomli funksiya hosil qiling !

// function searchAllElements(arr, k) {
//   let kArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == k) {
//       kArr.push(i);
//     }
//   }
//   return kArr;
// }

// const arr = [1, 5, 6, 1, 5, 7, 2, 1, 1];
// let k = 1;

// let result = searchAllElements(arr, k);
// console.log(result);

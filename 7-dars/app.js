// const bill = function (product, tax) {
//   let total = 0;
//   for (let i = 0; i < product.length; i++) {
//     total += product[i] + product[i] * tax;
//   }

//   return total;
// };

// let result = bill([10, 13, 45], 0.2);

// console.log(result);

// const bill = (product, tax) => {
//   let total = 0;
//   for (let i = 0; i < product.length; i++) {
//     total += product[i] + product[i] * tax;
//   }

//   return total;
// };

// let result = bill([10, 13, 45], 0.2);

// console.log(result)

//==============================================================

// 1.Funksiya yasang, ushbu funksiya 2ta argument qabul qilsin va ularning yig’indisini     qaytarib bersin.

// const sum = function (son1, son2) {
//   return son1 + son2;
// };

// let result = sum(12, 23);
// console.log(result);

//====================================
// 2.Minutlarni butun son sifatida qabul qilib, uni sekundlarga o’girib beradigan funksiya yasang.

// const sum = function (minut) {
//   return minut * 60;
// };
// let result = sum(60);
// console.log(result);

//==============================

// 3.Funksiya butun son qabul qiladi. Funksiya ushbu butun sondan keyingi sonni qaytarsin.

// const keyingiSon = function (son) {
//   return son + 1;
// };

// let result = keyingiSon(12);
// console.log(result);

//=================================

// 4.Funskiya uchburchakning asosi va balandligini qabul qiladi. Funksiya uchburchakning yuzini hisoblab qaytarsin. Uchburchak yuzini topish formulasi: S = (asos * balandlik) / 2

// const yuza = function (asosi, balandlik) {
//   let s = (asosi * balandlik) / 2;
//   return s;
// };

// let result = yuza(12, 6);
// console.log(result);

//========================================
// 5.Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb oling.

// const kun = function (yil) {
//   return yil * 365;
// };

// let result = kun(23);
// console.log(result);

//===============================================

// 6.Quyidagi namunalarga muvofiq ravishda funksiyani tana qismini yozing.
// kub(3) ➞ 27

// kub(5) ➞ 125

// kub(10) ➞ 1000

// const kub = function (son) {
//   return son ** 3;
// };

// let result = kub(5);

// console.log(result);
//=======================================

// 7.Massivni ichidan birinchi elementini qaytaradigan funksiya yasang.

// Namuna:
// firstElement([1, 2, 3]) ➞ 1

// const arr = function (bir) {
//   return bir[0];
// };

// let result = arr([1, 2, 3]);
// console.log(result);

//==========================================

// 8.Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin.

// let kopaytma = function (son1, son2) {
//   return son1 * son2;
// };

// let result = kopaytma(12, 3);

// console.log(result);

//=============================

// 9.Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan funksiya yasang.

// let sekund = function (soat) {
//   return soat * 3600;
// };

// let result = sekund(2);
// console.log(result);

//======================================

// 10.Uchburchakning uchinchi tomonining eng uzun qiymatini qaytaradigan funksiya yasang.
// Formula: Eng uzun uchinchi tomon = (tomon1 + tomon2) - 1

// const uzunTomon = function (tomon1, tomon2) {
//   return tomon1 + tomon2 - 1;
// };

// let result = uzunTomon(8, 10);
// console.log(result);

//===============================
// 11.Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni birinchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan funksiya yasang.

// const bolinma = (son1, son2) => {
//   return son / son2;
// };
// let result = bolinma(12, 3);

//===============================================

// 12.Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab qaytaradigan funksiya yasang. Formula S = bo’yi * eni

// const yuza = (eni, boyi) => {
//   return (s = eni * boyi);
// };

// let result = yuza(12, 4);
// console.log(result);

//=====================================================
// 13.Funksiya “a” argument sifatida string ma’lumot qabul qiladi. ushbu funksiya “Something” stringiga " " bo’sh joy va “a” stringini birlashtirib qaytarsin.

// const str = (a) => {
//   return `${a} Bob Jane`;
// };

// let result = str("something");
// console.log(result);

//======================================================

// 14.Quyidagi namunalarga qaragan holatda funksiya yasang.
// Namuna:
// kvadrat(5) ➞ 25

// kvadrat(9) ➞ 81

// kvadrat(100) ➞ 10000

// const kv = (son) => {
//   return son ** 2;
// };

// let result = kv(5);

//==========================================

// 15.Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’

// const bool = (son) => {
//   if (son > 0) {
//     return true;
//   } else return false;
// };

// let result = bool(12);
// console.log(result);

//======================================

// 16.Funksiya ko’p  burchakli shaklning burchaklar sonini qabul qiladi. Natijada funksiya ushbu shaklning ichki burchaklar yig’indisini qaytarsin. Formula (n - 2) x 180

// const burchak = (n) => {
//   return (n - 2) * 180;
// };
// let result = burchak(4);
// console.log(result);

//=======================================================
// 17.Basketbol o’yinida ikki ochkolik va uch ochkolik gollar mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar sonini va 2-argument sifatida uch ochkolik gollar sonini qabul qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang.

// const ochko = (gol1, gol2) => {
//   return gol1 * 2 + gol2 * 3;
// };

// let result = ochko(2, 2);
// console.log(result);

//========================================================
// 18.Quyidagi namunalarni kuzatgan holda unga muvofiq funksiya yasang.
// Namuna:
// nameString("Mubashir") ➞ "MubashirEdabit"

// nameString("Matt") ➞ "MattEdabit"

// nameString("javaScript") ➞ "javaScriptEdabit"

// const str = (soz) => {
//   return `Mubashir${soz}`;
// };

// let result = str("Edabit");

// console.log(result);

//=====================================================
// 19.Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya yasang.

// const bool = (son1, son2) => {
//   if (son1 + son2 < 100) {
//     return true;
//   } else return false;
// };

// let result = bool(12, 45);

// console.log(result);

//=======================================================
// 21.Fermada turli xildagi hayvonlar mavjud. Shunday funksiya yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi argument sifatida tovuqlar sonini, ikkinchi argument sifatida qo’ylarni va uchinchi argument sifatida sigirlarning sonini qabul qiladi.

// const oyoqSoni = (tovuq, qoy, sigir) => {
//   return tovuq * 2 + qoy * 4 + sigir * 4;
// };

// let result = oyoqSoni(2, 3, 4);
// console.log(result);

//=============================================

// 22.Javascriptda “&&” matiqiy operatori mavjud. Ushbu operator ikkita mantiqiy ifoda qabul qiladi. Quyidagi namunaga muvofiq keladigan funskiya yasang. Ushbu operatordan foydalangan holda!

// const bool = (qiymat1, qiyma2) => {
//   if (qiymat1 && qiyma2) {
//     return true;
//   } else return false;
// };

// let result = bool(1, 0);

// console.log(result);

//====================================================
// 23.Funksiya 2ta son qiymat qabul qiladi. Agar 1-son 2-songa teng bo’lsa rost, aks holda yolg’on qiymat qaytsin. Bunda ikkala qiymatning ma’lumot turi bir xil bo’lsin

// const rostmi = (son1, son2) => {
//   if (son1 === son2) return true;
//   else return false;
// };

// let result = rostmi(2, 2);
//====================================================

// 24.Futbolda ochkoni hisoblaydigan funksiya yasang. Bunda funksiya yutishlar soni, duranglar soni va mag’lubiyatlar sonini qabul qiladi. 1ta yutish = 3 ochko, 1ta durang = 1 ochko, 1ta mag’lubiyat = 0 ochko hisoblanadi.

// const ochko = (yutish, durrang, maglub) => {
//   return yutish * 3 + durrang * 1 + maglub * 0;
// };

// let result = ochko(1, 2, 4);

//=================================================
// 25.Funskiya soatlar va minutlarni argument sifatida qabul qiladi. Ushbu funkisya soatlar va minutlarni sekundga o’girib ularning yig’indisini qaytarsin.

// const sekund = (soat, minut) => {
//   return soat * 3600 + minut * 60;
// };

// let result = sekund(1, 3);

//===========================================
// 27.Funskiay 2ta istalgan turdagi qiymatlar qabul qiladi. Agar ushbu 2ta qiymat ham qiymat jihatidan ham ma’lumot turi jihatidan teng bo’lsa rost, aks holda funkisya yolg’on qiymat qaytarsin.

// const tengMi = (qiymat1, qiymat2) => {
//   if (qiymat1 === qiymat2) return true;
//   else return false;
// };

// let result = tengMi(1, true);

//==================================================
// 28.Funksiya boolean qiymat qabul qiladi. Ushbu funksiya boolean qiymatni stringga o’girib qaytarib bersin

// const str = function (qiymat) {
//   let soz = "";
//   return (soz += qiymat);
// };

// let result = str(true);
// console.log(result);

//===============================================
// 29.Arrow funksiyasini yarating ushbu funksiya shunchaki berilgan qiymatni qaytarsin.

// const func = (a) => {
//   return a;
// };

// let result = func(3);

//============================================
// 30.Framelar sonini hisoblaydigan funksiya yarating. Frame bu 1 sekundda necha marta ko’rinishlar soni aylanishi. Funksiya minutlar va 1 sekundda nechta framelar soni aylanishini argument sifatida qabul qiladi. Funksiya jami framelar sonini qaytarsin.

// const fram = function (minut, frame) {
//   return minut * frame * 60;
// };

// let result = fram(10, 25);
// console.log(result);

//=========================================
// 31.Oddiy matematik amallar ketma-ketligi string ko’rinishida funksiyaga argument sifatida beriladi. Ushbu funksiya matematik ifodani bajarib natijani qaytarsin.

// const calc = function (qiymat) {
//   try {
//     return eval(qiymat);
//   } catch (error) {
//     return `invalid qiymat: ${qiymat}`;
//   }
// };

// let result = calc("23+a");

// console.log(result);

//=========================================
// 32.Shunday funksiya yasangki, unda 2ta butun son argument qilib beriladi. Agar ushbu sonlardan birontasi 10ga teng bo’lsa yoki ularning yig’indisi 10ga teng bo’lsa funksiya rost qiymat qaytaradi. Aks hold yolg’on.

// const teng10 = function (son1, son2) {
//   if (son1 == 10 || son2 == 10 || son1 + son2 == 10) {
//     return true;
//   } else return false;
// };

// let result = teng10(10, 12);
// console.log(result);

//===========================================
// 33.Mashina kilometriga 10litr benzin ichadi. Mashina doim yo’lga chiqishdan oldin kamida 100litr benzin bilan chiqadi. Agar masofa funksiyaga argument sifatida berilsa, ushbu masofaga chiqish uchun Mashina necha litr benzin bilan chiqishi keraglini funksiya qaytarib bersin.

// const litrMasofa = function (masofa) {
//   return masofa * 10;
// };

// let result = litrMasofa(23.5);

// console.log(result);

//================================================
// 34.Quyidagi namunaga nazar tashlagan holda funksiya yasang.
// Namuna:
// fun(3, 7) ➞ 7

// fun(-1, 0) ➞ 0

// fun(1000, 400) ➞ 1000

// const kattaSon = function (son1, son2) {
//   return Math.max(son1, son2);
// };

// let result = kattaSon(1, 4);
// console.log(result);

//=================================================
// 35.Funksiya 2ta argument berilsa, funksiya anashu 2ta argumentdan iborat massiv qaytarsin.

// const arr = function (el1, el2) {
//   let myArr = [];
//   myArr.push(el1, el2);
//   return myArr;
// };

// let result = arr(1, 4);
// console.log(result);

//===============================
// 36.Funksiyaga 2ta argument sifatida string ko’rinishidagi ma’lumotlar beriladi. Agar ushbu ikkala stringdagi belgilar soni bir-birinikiga teng bo’lsa funksiya rost qiymat qaytarsin, aks hold yolg’on.

// const tengStr = function (str1, str2) {
//   if (str1.length == str2.length) {
//     return true;
//   } else return false;
// };

// let result = tengStr("salom", "salom");

// console.log(result);

//=======================================
// shunday funksiya yasangki, unga string argument qilib beriladi, agar ushbu string bo’sh bo’lsa funksiya true qaytaradi, aks holda false.

// const boshStr = function (str) {
//   if (str.length <= 0) {
//     return true;
//   } else return false;
// };

// let result = boshStr("a");

// console.log(result);
//=======================================

// 38.Shunday funksiya yasang.Unda butun son argument qilib beriladi. Agar ushbu butun son 5ga bo’linsa, funksiya true qaytarsin, aks holda false.

// const bolinsin5 = function (son) {
//   if (son % 5 == 0) {
//     return true;
//   } else return false;
// };

// let result = bolinsin5(15);
// console.log(result);

//=========================================

// 39.Shunday funksiya yasang.Unda butun son argument qilib beriladi. Agar ushbu butun son 100ga bo’linsa, funksiya true qaytarsin, aks holda false.

// const bolinsin100 = function (son) {
//   if (son % 100 == 0) {
//     return true;
//   } else return false;
// };

// let result = bolinsin100(1000);
// console.log(result);

//===================================
// 40.Shunday funksiya yasangki, ushbu funksiya stringni ichida nechta belgi borligini aytsin. Bunda length propertisidan foydalanmang va rekursiv funksiya ishlating.

// const uzunlik = function (str) {
//   if (str === "") return 0;
//   else {
//     return 1 + uzunlik(str.slice(1));
//   }
// };

// let result = uzunlik("salom");

// console.log(result);

//==============================================
// 41.Funksiya 2ta argument qabul qiladi. Birinchi argument ikkinchi argumentdan katta emas. Agar birinchi argumentni ikkinchisiga bo’linsa, funksiya true qaytaradi aks holda false

// const bolinsin = (son1, son2) => {
//   if (son1 < son2 && son2 % son1 == 0) {
//     return true;
//   } else return false;
// };

// let result = bolinsin(2, 21);
// console.log(result);

//=========================================
// 42.Funksiyaga raqam string ko’rinishida berilsa, funksiya ushbu ma’lumotni yana raqam ma’lumot turi ko’rinishida qaytarib bersin.

// const raqam = (str) => {
//   return parseFloat(str);
// };

// let result = raqam("12");
// console.log(result);

//===================================

// 43.To’rtburchakning yuzini hisoblaydigan funksiya yasang. Bunda funksiyaga to’rtburchakning(ya’ni to’g’ri turtburchak) tomonlari beriladi. Funksiya uning yuzini qaytarishi kerak, agar tomonlar xato kiritilgan bo’lsa funksiya -1 qaytarsin.

// const tortYuzi = (tomon1, tomon2) => {
//   if (tomon1 > 0 && tomon2 > 0) {
//     return tomon1 * tomon2;
//   } else return -1;
// };

// let result = tortYuzi(1, 12);
// console.log(result);

//======================================
// 44.Funksiyaga ism va familiya argument qilib berilsa, funksiya “ism, familiya” formatdagi string qaytarsin.

// const ismFam = (ism, familiya) => {
//   return ism + ", " + familiya;
// };

// let result = ismFam("Asadbek", "Abdulhamidov");

// console.log(result);

// 48.Funksiya son qabul qilsa, ushbu sonning negativini qaytarsin.

// const negativ = (son) => {
//   return (son = -son);
// };

// let result = negativ(12);
// console.log(result);

//==================================================================

// Func1. Tomoni a va b ga teng bo’lgan to’g’ri to’rtburchakning yuzasi va perimetrini hisoblovchi rectangle(a, b) nomli funksiya hosil qiling. QYM
// Input: rectangle (6, 9)
// Output: 54, 30

//======================================

// Func2. Tomoni a ga teng bo’lgan teng tomonli uchburchakning yuzasi va perimetrini hisoblovchi triangle(a) nomli funksiya hosil qiling. QYM
// triangle (6)
//S = (a^2 * √3) / 4
// p=3a

// const triangle = (a) => {
//   let s = (a ** 2 * Math.sqrt(3)) / 4;
//   let p = a + a + a;
//   return [s, p];
// };

// let result = triangle(6);
// console.log(result);

//=====================================

// Func3.  1 dan N ga sonlar yig’indisini qaytaruvchi sum(N) nomli funksiya hosil qiling. QY
//S = (n * (n + 1)) / 2

// const sum = (n) => {
//   let s = (n * (n + 1)) / 2;
//   return s;
// };

// let result = sum(10);
// console.log(result);

//============================
// Func4. isSquare (K) mantiqiy funksiyasini hosil qiling. (K > 0). Agar K biror butun sonning kvadrati bo'lsa - true, aks xolda false qiymat qaytarilsin. QY
// isSquare(10) => false
// isSquare(25) => true

// const isSquare = (k) => {
//   let son = Math.sqrt(k);
//   return son === Math.floor(son);
// };

// let result = isSquare(25);
// console.log(result);

//=============================

// Func5. Butun qiymat qaytaruvchi digitCount(K) funksiyasini hosil qiling. (K > 0). Funksiya K ning raqamlari sonini qaytarsin. QY
// digitCount(8791) => 4

// const digitCount = (son) => {
//   return son.toString().length;
// };

// let result = digitCount(8791);
// console.log(result);

//==================================

// Func6. n natural sonning raqamlari yig'indisini hisoblovchi getDigitSum(n) nomli funksiya hosil qiling. QY
// getDigitSum (456) => 15

// const sum = (son) => {
//   let yegindi = 0;
//   while (son > 0) {
//     yegindi += son % 10;
//     son = Math.floor(son / 10);
//   }
//   return yegindi;
// };

// let result = sum(4561);

// console.log(result);16

//=============================
// Func7. timeToHMS(T) funksiyasini hosil qiling. Funksiya berilgan T sekundni, H - soat, M - minut, S - sekundlarga ajratsin. QY

// const time = (sekund) => {
//   let h = Math.trunc(sekund / 3600);
//   let m = Math.floor((sekund - h * 3600) / 60);
//   let s = sekund % 60;
//   return
// };

// let result = time(4000);

// console.log(result);

//============================
// Func1. a sonning ixtiyoriy n-darajasini hisoblovchi power(a, n) nomli funksiya hosil qiling. QY
// power(3, 5) => 243

// const power = (a, n) => {
//   return a ** n;
// };

// let result = power(3, 5);
// console.log(result);

//=============================

// Func2. 2 ta a va b sonning o'rta arifmetigi (a + b) / 2 va geometrigi (a + b) ^ (1 / 2) hisoblovchi mean(a, b) nomli funksiya hosil qiling. QYM
// mean(12, 48) => 30, 24

// const mean = (a, b) => {
//   let orta = (a + b) / 2;
//   let gOrta = Math.sqrt(a * b);
//   return [orta, gOrta];
// };

// let result = mean(12, 48);
// console.log(result);

//=============================
// Func3. Haqiqiy sonning ishorasini aniqlovchi sign(n) nomli funksiya hosil qiling. Funksiya argumenti noldan kichik bo'lsa -1; noldan katta bo'lsa 1; nolga teng bo'lsa 0 qiymat qaytarsin. QY
// sign(10) => 1

// const sign = function (n) {
//   if (n > 0) return 1;
//   else if (n < 0) return -1;
//   else return 0;
// };

// let result = sign(1);
// console.log(result);

//===============================
// Func4. A*x^2 + B*x + C = 0 ko'rinishidagi tenglama kvadrat tenglama deyiladi. (A noldan farqli son). Kvadrat tenglamaning ildizlar sonini aniqlovchi numberOfRoots(A, B, C) nomli funksiya hosil qiling. D = B^2 - 4*A*C. Agar D > 0 bo’lsa 2 ta, D = 0 bo’lsa 1 ta, D < 0 bo’lsa 0 ta. QY
// numberOfRoots (1, -6, 9) => 1

// const numberOfRoots = (A, B, C) => {
//   const discriminant = B ** 2 - 4 * A * C;

//   if (discriminant > 0) {
//     return 2;
//   } else if (discriminant === 0) {
//     return 1;
//   } else {
//     return 0;
//   }
// };

// let result = numberOfRoots(1, -6, 9);
// console.log(result);

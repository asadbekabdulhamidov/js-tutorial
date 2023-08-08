//Case 1. 1-7 gacha bo'lgan butun sonlar berilgan. Kiritilgan songa mos ravishda hafta kunlarini so'zda ifodalovchi programma tuzilsin. (1-Dushanba, 2-Seshanba,...h.k)

// let kun = +prompt("1dan 7 gacha sonni kiriting");

// switch (kun) {
//   case 1:
//     console.log("Dushanba");
//     break;
//   case 2:
//     console.log("Seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;
//   case 4:
//     console.log("Payshanba");
//     break;
//   case 5:
//     console.log("Juma");
//     break;
//   case 6:
//     console.log("Shanba");
//     break;
//   case 7:
//     console.log("yakshanba");
//     break;
//   default:
//     console.log("no data");
// }

//=========================================================

// Case2. A, B haqiqiy va amal butun soni berilgan. A va B sonlari ustida arifmetik amallar bajaruvchi programma tuzilsin. amal quyidagi qiymatlarni qabul qiladi: 1-qo`shish, 2-ayirish, 3-bo`lish, 4- ko`paytirish.

// const a = +prompt("a sonini kiriting");
// const b = +prompt("b sonini kiriting");
// let amal = prompt("amalnoi kiriting");

// switch (amal) {
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "*":
//     console.log(a * b);
//     break;
//   case "/":
//     console.log(a / b);
//     break;
//   default:
//     console.log(" no data");
// }

//==========================================

// Case3. Yoshni yillarda aniqlovchi 20-69 gacha butun son berilgan. Kiritilgan sonni so`zlarda ifodalovchi programma tuzilsin. ("yigirma yosh", "qirq uch yosh❞ va h.k.)

//======================================

// Case1. K butun soni berilgan. Baho natijalarini chiqaruvchi programma tuzing.(1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yahshi, 5-a'lo). Agar k soni 1-5 gacha oraliqqa tegishli bo`lmasa "xato" deb chiqarilsin.

// const baxo = +prompt("baxoingizni kiriting");

// switch (baxo) {
//   case 1:
//     console.log("yomon");
//     break;
//   case 2:
//     console.log("qoniqarsiz");
//     break;
//   case 3:
//     console.log("qoniqarli");
//     break;
//   case 4:
//     console.log("yaxshi");
//     break;
//   case 5:
//     console.log("a'lo");
//   default:
//     console.log("xato");
// }

//======================================

// Case2. Oy raqamini berilgan. Kiritilgan oy qaysi faslga tegishli ekanligini chiqaruvchi programma tuzilsin. (Masalan: 2 chi oy, "qish")

// let oyRaqam = +prompt(" oy raqamini kiriting");

// switch (oyRaqam) {
//   case 1:
//     console.log("yanvar");
//     break;
//   case 2:
//     console.log("fevral");
//     break;
//   case 3:
//     console.log("mart");
//     break;
//   case 4:
//     console.log("aprel");
//     break;
//   case 5:
//     console.log("may");
//     break;
//   case 6:
//     console.log("iyun");
//     break;
//   case 7:
//     console.log("iyul");
//     break;
//   case 8:
//     console.log("avgust");
//     break;
//   case 9:
//     console.log("sentabr");
//     break;
//   case 10:
//     console.log("oktabr");
//     break;
//   case 11:
//     console.log("noyabr");
//     break;
//   case 12:
//     console.log("dekabr");
//     break;
//   default:
//     console.log("no data");
// }

//==========================================

// Case3. Oy raqami berilgan. Shu oyda nechta kun borligini aniqlovchi programma tuzilsin.

// let oyRaqam = +prompt(" oy raqamini kiriting");

// switch (oyRaqam) {
//   case 1:
//     console.log("31 kun");
//     break;
//   case 2:
//     console.log("28 kun");
//     break;
//   case 3:
//     console.log("31 kun");
//     break;
//   case 4:
//     console.log("30 kun");
//     break;
//   case 5:
//     console.log("31 kun");
//     break;
//   case 6:
//     console.log("30 kun");
//     break;
//   case 7:
//     console.log("31 kun");
//     break;
//   case 8:
//     console.log("31 kun");
//     break;
//   case 9:
//     console.log("30 kun");
//     break;
//   case 10:
//     console.log("31 kun");
//     break;
//   case 11:
//     console.log("30 kun");
//     break;
//   case 12:
//     console.log("31 kun");
//     break;
//   default:
//     console.log("no data");
// }

//========================================
// Case4. Uzinlik birliklari quyidagi tartibda berilgan. 1-desimetr, 2-kilometr, 3-metr, 4-millimeter, 5- santimetr. Uzunlik birligini bildiruvchi son berilgan (1 - 5 oraliqda) va shu birlikdagi kesma uzunligi berilgan (haqiqiy son). Kesmaning uzunligini metrlarda ifodalofchi programma tuzilsin.

// let uzunlik = 2; //1 ,2, 3, 4, 5

// switch (uzunlik) {
//   case 1:
//     console.log(`${uzunlik / 10} metr`);
//     break;
//   case 2:
//     console.log(`${uzunlik / 1000} metr`);
//     break;
//   case 3:
//     console.log(`${uzunlik / 1} metr`);
//     break;
//   case 4:
//     console.log(`${uzunlik / 1000} metr`);
//     break;
//   case 5:
//     console.log(`${uzunlik / 100} metr`);
//     break;
//   default:
//     console.log("no data");
// }

//==========================================
// Case5. Og'irlik birliklari quyidagi tartibda berilgan. 1-kilogramm, 2-milligramm, 3-gramm, 4-tonna, 5- sentner. Og'irlik birligini bildiruvchi soni berilgan va shu birlikdagi og`irlik qiymati berilgan. Og`irlikni kilogramda ifodalofchi programma tuzilsin.

// let ogirlik = 2;

// switch (ogirlik) {
//   case 1:
//     console.log(`${ogirlik / 1}`);
//     break;
//   case 2:
//     console.log(`${ogirlik / 1000000}`);
//     break;
//   case 3:
//     console.log(ogirlik / 1000);
//     break;
//   case 4:
//     console.log(`${ogirlik * 1000}`);
//     break;
//   case 5:
//     console.log(`${ogirlik * 100}`);
//     break;
//   default:
//     console, log("no data");
// }

//===========================================
// Case6. Sanani bildiruvchi ikkita butun son berilgan D (kun) va M (oy). (Kabisa bo`lmagan yil sanasi kiritiladi). Berilgan sanani ifodalovchi programma tuzilsin. Kabisa yilida 366 kun, kabisa bo'lmagan yilda 365 kun bor bo'ladi.

//=========================================

// Case8. Robot faqat to`rtta tomonga ko`cha oladi ("s"-shimol, "j"-janub, "q"-sharq, "g"-g'arb) va uchta raqamli kamanda: 0-harakni davom ettir, 1-chapga buril, 2-o`ngga buril. Y - robot yo`nalishi va K - kamanda berilgan. Berilgan kamanda bajarilgandan keying robot holatini aniqlovchi programma tuzilsin.

// let yonalish = "g"; //("s"-shimol, "j"-janub, "q"-sharq, "g"-g'arb)

// let k = 1; //0, 1, 2

// switch (yonalish) {
//   case "s":
//     switch (k) {
//       case 0:
//         console.log("robot shimoltomonga harakatni davom ettirmoqda");
//         break;
//       case 1:
//         console.log("robot shimol tomon chapga burildi");
//         break;
//       case 2:
//         console.log("robot shimoldan ongga burildi");
//         break;
//       default:
//         console.log("bunaqa harakatni bajara olmaydi");
//     }
//     break;
//   case "j":
//     switch (k) {
//       case 0:
//         console.log("robot janubga  harakatni davom ettirmoqda");
//         break;
//       case 1:
//         console.log("robot janub tomon chapga burildi");
//         break;
//       case 2:
//         console.log("robot janub ongga burildi");
//         break;
//       default:
//         console.log("bunaqa harakatni bajara olmaydi");
//     }
//     break;
//   case "q":
//     switch (k) {
//       case 0:
//         console.log("robot sharqga  harakatni davom ettirmoqda");
//         break;
//       case 1:
//         console.log("robot sharq tomon chapga burildi");
//         break;
//       case 2:
//         console.log("robot sharq ongga burildi");
//         break;
//       default:
//         console.log("bunaqa harakatni bajara olmaydi");
//     }
//     break;
//   case "g":
//     switch (k) {
//       case 0:
//         console.log("robot g'arpga  harakatni davom ettirmoqda");
//         break;
//       case 1:
//         console.log("robot g'arp tomon chapga burildi");
//         break;
//       case 2:
//         console.log("robot g'arp ongga burildi");
//         break;
//       default:
//         console.log("bunaqa harakatni bajara olmaydi");
//     }
//     break;
//   default:
//     console.log("bu tomonga harakatlana olmaydi");
// }

//====================================================
// Case9. O'yin kartasi turlari berilgan 1-g`isht, 2-olma, 3-chillak, 4-qarg`a. 10 lik kartadan katta kartalar quyidagi qiymatlarni o`zlashtirgan: 11-valet, 12-dama, 13-qirol, 14-tuz. Ikkita butun son berilgan N-karta qiymati (6≤ N ≤14), M-karta turi(1≤M ≤4) kiritilganda karta nomlarini (masalan: "olti qarg`a”) chiqarib beruvchi programma tuzilsin.

/*let kartaTuri = 2; // 1-g`isht, 2-olma, 3-chillak, 4-qarg`a.

let N = 12; //N-karta qiymati (6≤ N ≤14)

switch (N) {
  case 6:
    switch (kartaTuri) {
      case 1:
        console.log("olti gisht");
        break;
      case 2:
        console.log(` olti olma`);
        break;
      case 3:
        console.log(` olti chillak`);
        break;
      case 4:
        console.log(`olti qarga`);
        break;
      default:
        console.log(" bunaqa karta mavjud emas");
    }
    break;
  case 7:
    switch (kartaTuri) {
      case 1:
        console.log("yetti gisht");
        break;
      case 2:
        console.log(` yetti olma`);
        break;
      case 3:
        console.log(` yetti chillak`);
        break;
      case 4:
        console.log(`yetti qarga`);
        break;
      default:
        console.log(" bunaqa karta mavjud emas");
    }
    break;
  case 8:
    switch (kartaTuri) {
      case 1:
        console.log("sakkiz gisht");
        break;
      case 2:
        console.log(` sakkiz olma`);
        break;
      case 3:
        console.log(` sakkiz chillak`);
        break;
      case 4:
        console.log(`sakkiz qarga`);
        break;
      default:
        console.log(" bunaqa karta mavjud emas");
    }
    break;
  case 9:
    switch (kartaTuri) {
      case 1:
        console.log("toqqiz gisht");
        break;
      case 2:
        console.log(` toqqiz olma`);
        break;
      case 3:
        console.log(` toqqiz chillak`);
        break;
      case 4:
        console.log(`toqqiz qarga`);
        break;
      default:
        console.log(" bunaqa karta mavjud emas");
    }
    break;
  case 10:
    switch (kartaTuri) {
      case 1:
        console.log("o'n gisht");
        break;
      case 2:
        console.log(` o'n olma`);
        break;
      case 3:
        console.log(` o'n chillak`);
        break;
      case 4:
        console.log(`o'n qarga`);
        break;
      default:
        console.log(" bunaqa karta mavjud emas");
    }
    break;
  case 11:
    switch (kartaTuri) {
      case 1:
        console.log("valet gisht");
        break;
      case 2:
        console.log(` valet olma`);
        break;
      case 3:
        console.log(` valet chillak`);
        break;
      case 4:
        console.log(`valet qarga`);
        break;
      default:
        console.log(" bunaqa karta mavjud emas");
    }
    break;
  case 12:
    switch (kartaTuri) {
      case 1:
        console.log("dama gisht");
        break;
      case 2:
        console.log(` dama olma`);
        break;
      case 3:
        console.log(` dama chillak`);
        break;
      case 4:
        console.log(`dama qarga`);
        break;
      default:
        console.log(" bunaqa karta mavjud emas");
    }
    break;
  case 13:
    switch (kartaTuri) {
      case 1:
        console.log("qirol gisht");
        break;
      case 2:
        console.log(` qirol olma`);
        break;
      case 3:
        console.log(` qirol chillak`);
        break;
      case 4:
        console.log(`qirol qarga`);
        break;
      default:
        console.log(" bunaqa karta mavjud emas");
    }
    break;
  case 14:
    switch (kartaTuri) {
      case 1:
        console.log("tuz gisht");
        break;
      case 2:
        console.log(` tuz olma`);
        break;
      case 3:
        console.log(` tuz chillak`);
        break;
      case 4:
        console.log(`tuz qarga`);
        break;
      default:
        console.log(" bunaqa karta mavjud emas");
    }
    breeak;
  default:
    console.log("bunaqa karta yoq");
}*/

//==============================================

// Case10. O`quv masalalarini aniqlovchi 10-20 gacha butun son berilgan. Son kiritilganda unga mos so`zlarda ifodalovchi programma tuzilsin. ("yigirmata masala", "o`n uchta masala" va h.k.)

/*let masala = 14;
switch (masala) {
  case 10:
    console.log(`o'ningchi masala`);
    break;
  case 11:
    console.log(`o'nbirinchi masala`);
    break;
  case 12:
    console.log(`o'nikkinchi masala`);
    break;
  case 13:
    console.log(`o'nuchinchi masala`);
    break;
  case 14:
    console.log(`o'nto'rtinchi masala`);
    break;
  case 15:
    console.log(`o'nbeshinchi masala`);
    break;
  case 16:
    console.log(`o'noltinchi masala`);
    break;
  case 17:
    console.log(`o'nyettinchi masala`);
    break;
  case 18:
    console.log(`o'nsakkizinchi masala`);
    break;
  case 19:
    console.log(`o'nto'qqizinchi masala`);
    break;
  case 20:
    console.log(`yigirmanchi masala`);
    break;
  default:
    console.log("not data");
}*/

//=======================================

// Case12. Sharq kalendarida 60 yillik davr qabul qilingan. Yil muchali 5 ta rang (yashil, qizil, sariq, oq va qora) va 12 ta hayvon (sichqon, sigir, yo'lbars, quyon, ajdar, ilon, ot, qo`y, maymun, tovuq, it va to`ngizlardan) nomlaring kombinatsiyasidan kelib chiqadi. Yilning raqamiga qarab uning muchalini aniqlovchi programma tuzilsin. 1984-davr boshi: "Yashil sichqon yili".

//============================

// While2. 2 sonining qandaydir darajasini bildiruvchi n butun soni berilgan (n > 0). n = 2^k ni aniqlovchi programma tuzilsin.
// Input: 128
// Output: 7

// let n = 128;
// let k = 0;

// while (n % 2 === 0) {
//   n /= 2;
//   k++;
// }

// console.log(k);

//==================================

// While1. A va B butun musbat sonlari berilgan (A> B). A usunlikdagi kesmada maksimal darajada B kesma joylashtirilgan. A kesmaning bo'sh qismini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.

// let a = 20;
// let b = 15;

// while (a >= b) {
//   a = a - b;
// }

// console.log(` a kesmaning bbosh qismi ${a}`);

//======================================

// While2. A va B butun musbat sonlari berilgan (A > B). A usunlikdagi kesmada B kesmadan nechta joylashtirish mumkinligini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.

// let a = 35;
// let b = 10;
// let counter = 0;

// while (a >= b) {
//   a = a - b;
//   counter++;
// }

// console.log(counter);

//=================================================

// While3. n butun soni berilgan (n > 0). Agar n soni 3 ning darajasi bo'lsa "3 - ning darajasi", aks xolda "3 - ning darajasi emas” degan natija chiqaruvchi programma tuzilsin. Qoldiqli bo'lish va bo'lish amallarini ishlatmang

// let n = +prompt("sonni kiriting men uchning darajasimi yoqmi bilib beraman");

// let daraja = 1;

// while (daraja <= n) {
//   if (daraja === n) {
//     break;
//   }
//   daraja = daraja * 3;
// }

// if (daraja === n) {
//   console.log("ha uchning darajasi");
// } else {
//   console.log("yoq");
// }

//============================================================
// While4. n va m butun musbat sonlari berilgan (n > m). n sonini m soniga bo'lib butun va qoldiq qismlarini bo'lish va qoldiqni olish amallarini ishlatmasdan topuvchi programma tuzilsin.

//==========================================

// While5. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarini teskari tartibda chiqaruvchi programma tuzilsin.

// let n = 23;
// let teskari = "";

// while (n > 0) {
//   teskari += n % 10;
//   n = Math.floor(n / 10);
// }

// console.log(`Teskari tartibda: ${teskari}`);

//=================================================
// While6. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlari yig'indisini va raqamlari sonini chiqaruvchi programma tuzilsin.
// let n = 2323;
// let counter = 0;

// while (n > 0) {
//   counter += n % 10;
//   n = Math.floor(n / 10);
// }

// console.log(counter, "elementlar soni: ", counter.toString().length);

//===========================================

// While7. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida 2 raqami bor-yo'qligini aniqlovchi programma tuzilsin.

// let n = 23;

// let butun = 0;
// let qoldiq = 0;

// while (n > 0) {
//   qoldiq += n % 10;
//   butun += Math.trunc(n / 10);
//   n = Math.trunc(n / 10);
// }

// if (qoldiq == 2 || butun == 2) {
//   console.log("ha orasida 2 raqami bor");
// } else {
//   console.log("orasida ikki raqami yoq");
// }

//======================================

// While8. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida toq raqamlar bor-yo'qligini aniqlovchi programma tuzilsin.

// let n = 23;

// let butun = 0;
// let qoldiq = 0;

// while (n > 0) {
//   qoldiq += n % 10;
//   butun += Math.trunc(n / 10);
//   n = Math.trunc(n / 10);
// }

// if (qoldiq % 2 == 1 || butun % 2 == 1) {
//   console.log("ha orasida toq raqami bor");
// } else {
//   console.log("orasida toq raqami yoq");
// }

//============================================

// While9. Palindromik songa tekshirish dasturini yozing. True yoki False qaytarsin.
// Palindromik son – boshidan va oxiridan o’qilish bir xil bo’lgan son, masalan 1345431, 45788754
// let n = +prompt("sonni kiriting");
// let son = n;
// let polindrom = "";

// while (son > 0) {
//   polindrom += son % 10;
//   polindrom += Math.floor((son / 10) % 10);
//   polindrom += Math.trunc(son / 10 / 10);
//   break;
// }

// if (polindrom == n) {
//   console.log("ha bu polindrom son");
// } else {
//   console.log("yoq bu polindrom emas");
// } // UCH XONALIK SONGACHA CHIQDI

//====================================

// While10. n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.

// let son = +prompt("sonni kiriting");

// let counter = 0;

// let i = 1;
// while (i <= son) {
//   if (son % i == 0) {
//     counter++;
//   }
//   i++;
// }

// if (counter == 2) {
//   console.log("ha tub son");
// } else {
//   console.log("yoq tub son emas");
// }

// While5. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarini teskari tartibda chiqaruvchi programma tuzilsin.

// let n = 323;
// let teskari = "";

// while (n > 0) {
//   teskari += n % 10;
//   teskari += Math.floor(n / 10);
//   break;
// }

// console.log(`teskarisiga ${teskari}`);

// console.log("hello switch and while");

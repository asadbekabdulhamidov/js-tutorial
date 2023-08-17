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

const person = {
  name: "John",
  age: 30,

  // accessing name property by using this.name
  greet: function () {
    console.log("The name is" + " " + this.name);
  },
};

person.greet();

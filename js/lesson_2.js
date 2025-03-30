//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 1, 7, 80, 3];
// function findSmallerNumber(numbers) {
//     if (!Array.isArray(numbers) || numbers.length === 0) {
//         return "This is not array";
//     }
//     return Math.min(...numbers);
// }
// // const numbers = [2, 5, 35, 56, 12, 1, 7, 80, 3];
// const numbers = [];
// console.log(findSmallerNumber(numbers));



// Напишіть функцію min(a,b), яка повертає менше чисело з a і b.

// function min(a, b) {
//     return a < b ? a : b;
// };

//   function min(a, b) {
//       a = Number(a);
//       b = Number(b);
//       if (isNaN(a) || isNaN(b)) {
//           return "Error";
//       }
//       return a < b ? a : b;
//   }

//   console.log(min(5, 5));

//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.



// function calculateAverage(...args) {
//   for (const arg of args) {
//     if (typeof arg !== "number" || isNaN(arg)) {
//       return "Error";
//     }
//   }

//   const sum = args.reduce((total, num) => total + num, 0);
//   return sum / args.length;
// };

// console.log(calculateAverage("hrhr", "dhdd"));
// function calculateAverage(...args) {
//   let sum = 0;
//   let count = 0;

//   for (const arg of args) {
//     if (typeof arg !== "number" || isNaN(arg)) {
//       continue; 
//     }

//     sum += arg;
//     count++;
//   }
//   return sum / count;
// }

// =======================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function sumArrNumbers(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         result.push(arr[i] + arr[i + 1]);
//     }
//     return result;
// }
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// const newArr = sumArrNumbers(someArr);

// console.log(newArr);


//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//const array = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

// function logItems(array) {
//   for(let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// const array = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реп', 'Reggi'];
// logItems(array);


// В нас є объект, в якому зберігаються зарплатні
// нашої команди
// Напишіть код для підсумовання всіх зарплат і
// Збережіть його результат в перемінну sum.

// const salaries = {
//  Mango: 100,
// Poly: 160,
// Ajax: 1470,
// };
// let sum = 0;
// for (const salary of Object.values(salaries)) {
//     sum += salary;
// }

// console.log(sum);


// Напиши скрипт, який для об'єкта user,
// Послідовно:
// 1. додати поле mood зі значенням 'happy'
// 2. замінити hobby на 'skydiving'
// 3. замінити значення premium на false
// 4. виводити зміст об'єкта user у форматі
// ключ:значення використовуючи Object.keys() і for...of

const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};

// Потрібно написати функцію, яка приймає 2 параметри key та obj,
// яка буде перебирати об'єкт
// Якщо у об'єкта є такий ключ - поверне true

// const obj = {
//   name: "Igor",
//   car: "Mercedes",
//   carColor: "black",
// };
// console.log(getBool(obj, "name"));

// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2
// треба повертати об'єкт

// const menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// console.log(multiplyNumeric(menu));


// Напиши функцію яка приймає массив чисел і повертає новий массив,
// унікальних чисел

// const numbers = [1, 1, 1, 2, 3, 4, 7, 7, 6, 6, 5, 4, 23, 22, 22, 111, 1, 5];

// console.log(uniqueArray(numbers));


// задачка )) почему 4 ?
// const a = [1, 2, 3, 4, 5, 6, 7];
// const b = a.slice(3, 6).push(4);
// console.log("b =", b);
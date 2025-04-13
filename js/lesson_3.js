//TODO № 1 з колбеком =====================================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// function letMeSeeYourName(callback) {
//    const name = prompt("Введіть ім’я:");
//   if (name) {
//     callback(name);
//   } else {
//     console.log("Ім’я не введено.");
//   }
// }

// function hello(name) {
//   console.log(`Привіт, ${name}`);
// }

// letMeSeeYourName(hello);


//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль


// function makeProduct(name, price, callback) {
//   const product = {
//     id: Date.now(),
//     name,
//     price
//   };
//   callback(product);
// }
// function showProduct(product) {
//   console.log(product);
// }

// makeProduct("Fish", 350, showProduct);
// makeProduct("Chicken", 250, showProduct); ///{id: 1744558865445, name: 'Chicken', price: 250}

// const makeProduct = (name, price, callback) => {
//   const product = {
//     id: Date.now(),
//     name,
//     price
//   };
//   callback(product);
// };
// const showProduct = (product) => {
//   console.log(product);
// };

// makeProduct("Fish", 350, showProduct);
// makeProduct("Chicken", 250, showProduct);

//TODO: № 4 на this ✅==============================================
//Виправте помилки, щоб код працював

// function callAction(action, text) {
//   action.call(text);
// }

// const item = {
//   getQuatity() {
//     console.log(this.quantity);
//   },
//   quantity: 5,
// };

// callAction(item.getQuatity, item);

//TODO якщо що на замикання ✅ ==============================================

// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), яка памятає імя щефа піл час її виклику
// Функція  makeDish має логіровать рядок "<імя шефа> is cooking <dish>"

// function makeShef(shefName) {
//   return function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   };
// }

// const shefCooking = makeShef("Jon");
// shefCooking("dinner");


//TODO: № 5 на перебирання ✅ ==============================================
//Зібрати в allTopics масив всіх предметів всіх курсів
//Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи
// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];

// const allTopics = courses.flatMap(course => course.topics);
// const uniqueTopics = [...new Set(allTopics)];

// console.log(uniqueTopics);



//TODO: № 6 на функцію конструктор ✅ =============================================
//Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`
// const polly = new User({ userName: "Polly", age: 30, numbersOfPost: 15 });
// console.log(polly);
// polly.getInfo();







//TODO:№ 9 на class-и ✅ =============================================
//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email
// getClientData()
// changeEmail
// const client = new Client("mango", "mango@gmail.com");
// client.changeEmail = '"mango@gmail.com"';
// console.log(client.getClientData.email);

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   getClientData() {
//     return {
//       login: this.#login,
//       email: this.#email,
//     };
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// };

// const client = new Client("mango", "mango@gmail.com");
// client.changeEmail("mangoz@gmail.com");
// console.log(client.getClientData());



//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.

class Animal {
  constructor(name, type) {
    
  }
  getInfo() { }
  
  feed() {}
}

class Mammal extends Animal {
  constructor(name, type, ...) {
    super(name,type)
  }
}
class Bird extends Animal {
  constructor(name, type, ...) {
    super(name,type)
  }
}
class Zoo {
  constructor() {
    
  }
  addAnimal() { }
  listAnimals() {}
}


// const zoo = new Zoo();

// const lion = new Mammal("Simba", "Lion", "African Lion");
// zoo.addAnimal(lion);

// const eagle = new Bird("Bald Eagle", "Bird", 72);
// zoo.addAnimal(eagle);

// zoo.listAnimals();
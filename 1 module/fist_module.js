// JS TEAM 1 \\\\\\\

// Дано рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'
//const str = "kabcde";
//const isContains = str.startsWith("a");
//if (isContains) {
//console.log("ok");
//} else {
//console.log("false");
//}// Робимо ім

//ітацію логіна юзера і визначаємо до якої групи він відноситься
// В перший prompt() юзер вводить своє імя, в 2 prompt() вводить свій вік
// Якщо юзер молодший 18 років виводемо стрінгу `User ${name} has been added to the children group
// Якщо юзеу 18 років і більше виводемо стрінгу `User ${name} has been added to the adult group
//console.log(Number(null));
//const userName = prompt("What's your name");
//const age = prompt("What's your age");

//const ageToNumber = Number(age);

//if (!age) {
// console.log("Enter");
//} else if (ageToNumber < 18) {
//console.log(`User ${userName} has been added to the children group`);
//} else {
// console.log(`User ${userName} has been added to the adult group`);
//}

// Потрібно створити світлофор за допомогою switch()
// Користувач вводить в prompt() колір який він бачить
// В результаті отримує меседж з дією яку повинен виконати
// Світлофор може мати 4 стани green (GO), yellow (READY),red (STOP), будь що інше означає що сфітлофор не працює (BE CAREFUL)

//const color = prompt("What color do you see?");
//const newColor = color ? color.toLowerCase() : color;
//let message;
//switch (newColor) {
// case "red":
//   message = "STOP";
//   break;

// case "green":
//  message = "GO";
//  break;

// case "yellow":
//  message = "READY";
//  break;

// default:
//   message = "BE CAREFUL";
//}
//console.log(message);

//const str = "12a345";
//const toNum = str;
//console.log(typeof toNum, toNum);
//console.log("порівняння", toNum === toNum);
//console.log(NaN === NaN); // false
//console.log("isNaN()", isNaN(toNum)); // примусово конвертує в Number
//console.log("Number.isNaN()", Number.isNaN(toNum)); // НЕ конвертує в Number

//const str = "1234556";

//for (let i = 0; i < str.length; i += 1) {
//str[i] - поточний елемент ітерації
//const isDouble = str.includes(str[i], i + 1);
//i - значення лічильника, яке ми співставляємо із індексом елемента
//if (isDouble) {
//  console.log(str[i]);
//}
//}
//Створити функцію яка буде рахувати за скільки днів равлик зможе виповзти з колодязя, функція приймає 1 параметр.
//1 глибина колодязя (depth)

//Функція повертає кількість днів

// Умови:
// вдень Равлик проповзає на 7 м вгору, а за ніч опускається на 2 м вниз
// використовувати цикл while()

// function calcDays(depth) {

// }
// calcDays(42)//виповзе за 8 днів
// calcDays(17)//виповзе за 3 дні
// calcDays(18)//виповзе за 4 дні

//const depth = 42;
//const daySpeed = 7;
//const nightSpeed = 2;
//let total = 0;
//let days = 0;

//while (total < depth) {
//days += 1;
//total += daySpeed;
//if (total < depth) {
//  total -= nightSpeed;
//}
//}
//console.log(days);

// Просумувати всі елемнти рядку, якщо їх можливо привести до числа
//const str = '357g235'

//const str = "357g235";
//let total = 0;

//for (let i = 0; i < str.length; i += 1) {
//if (!isNaN(str[i])) {
// total += Number(str[i]);
//}
//}
//console.log(total);

//. За допомогою циклу for додайте всі парні числа від min до max

// const max = 50;
// const min = 0;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (!(i % 2)) {
//     //аналог i%2===0
//     total += i;
//   }
// }
// console.log(total);

// Потрібно мутувати масив так щоб залишились тільки (імена) елементи типу String.
 const names = ['Anna', 3, 'Roma', 17, 'Kate', 14, 'Oleg'];
for(let i=0; i<names.length; i+=1){
  // if()
  console.log(typeof names[i])
}

//Створіть функцію, яка приймає 1 параметр
//1 масив імен користувачів, які поставили лайки.
//Функція повертає меседж, як вказано у прикладах:
//Використовувати switch()

// /**
//  *
//  * @param {Array} users
//  */
//  function stringBuilder(users){
//      switch (users.length) {
//          case 0:
//              console.log("no one likes this");
//              break;
//          case 1:
//              console.log(`${users[0]} likes this`);
//              break;
//          case 2:
//              console.log(`${users[0]} and ${users[1]} likes this`);
//              break;
//          case 3:
//              console.log(`${users[0]}, ${users[1]} and ${users[2]} likes this`);
//              break;
//          default:
//              console.log(`${users[0]}, ${users[1]} and ${users.length-2} others like this`);

// }

// }

//  stringBuilder([])//"no one likes this";
// stringBuilder(["Peter"])//"Peter likes this";
//  stringBuilder(["Jacob", "Alex"])//"Jacob and Alex like this";
// stringBuilder(["Max", "John", "Mark"])//"Max, John and Mark like this";
//  stringBuilder(["Alex", "Jacob", "Mark", "Max", "Alex", "Jacob", "Mark", "Max"])//"Alex, Jacob and 2 others like this;

// https://habr.com/ru/company/ruvds/blog/599929/

// Cтворити функцію яка буде приймати 1 параметр та знаходити в масиві елементи що дублюються і потім ці елменти добавляти в новий масив
// 1 масив чисел (arr)

// const numbers = [1, 2, 3, 1, 1, 2, 17, 19];
// const dubl = [];
// //JS-doka
// /**
//  * для вирахування елеметів, що дублюються.
//  * @param {Array} arr
//  * @returns {Array} - масив елементів, які дублюються
//  */
//  function getCommonElements(arr) {
// for( let i=0; i <arr.length; i+=1){

//     if(arr.includes(arr[i], i+1)){
// dubl.push(arr[i]);
//     }
// }
// return dubl;
//  };
// console.log(getCommonElements(numbers));

//Створити функцію яка буде приймати 2 параметри:
//1 масив імен які вже зареєстровані. (users)
//2 рандомне ім'я. (name)
//Функція повертає меседж.
//Якщо юзер з таким ім'ям вже існує повертаємо меседж що потрібно обрати інше ім'я
//Якщо юзер з таким ім'ям не існує добавляємо його в масив та вказуємо що юзера додано успішно.

// const users = ['artem', 'anna', 'maks', 'vlad'];

// /**
//  *
//  * @param {Array} users
//  * @param {String} name
//  * @returns {Array || String} - масив імен або error msg
//  */

// function createUser(users, name) {
//   if (users.includes(name)) {
//     return "Потрібно обрати інше імʼя";
//   }
//   users.push(name);
//   return users;
// }

// console.log(createUser(["artem", "anna", "maks", "vlad"], "maks"));

// let a = 12;
// if (true) {
//   let a = 15;
//   console.log(a);
// }

// console.log(a);

// let a = 12;
// if (true) {
//   let a = 15;
//   console.log(a);
// }

// console.log(a);

// let a = 12;
// if (true) {
//   a = 15;
//   console.log(a);
// }

// console.log(a);

// let a = 12;
// if (true) {
//   a = 15;
//   let a = 22;
//   console.log(a);
// }

// console.log(a);

// if (true) {
//   let a = 22;
//   console.log(a);
// }

// console.log(a);

// let a = 22;

// if (true) {
//   let a = 14;
//   if (false) {
//     a = 12;
//   }
//   console.log(a);
// }

// console.log(a);

// const result = 12 || 22

// const result = 12 && 22

// const result = "" || 22

// const result = "" && 22

// const result = "" || (22 && null)

// const result = ("" && 22) || 16

// console.log(result);

// function foo() {
//   let message = `I have friends`;
//   const arr = Array.from(arguments);
//   console.log(message + " " + arr.join(", "));
//   return message + " " + arr.join(", ");
// }

// foo("Den", "Alex");

// foo("Den", "Alex", "David");


// 3. Напишіть функцію squareDigits, яка приймає число та зводить у квадрат кожен символ.
// function squareDigits(number){
//     const str = String(number);
//     const numArr = [];
// const numberArr = str.split("");
// for(let i=0; i<numberArr.length; i+=1){
//     const numPow = Math.pow(numberArr[i], 2);
//      numArr.push(numPow);
     
// }
// return numArr.join("");
// }

// 4. Напишіть функцію isPalindrome, яка перевіряє, чи переданий рядок є паліндромом.
// Паліндром - це слово, фраза чи послідовність, які читаються так само як уперед, назад, наприклад, level.


//  function isPalindrome(newString) {
//   // const str = newString.toLowerCase();
//   // return str === str.split("").reverse().join("");
   
   
// }
//
//
// function isPalindrome(str) {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPalindrome("level"));

// console.log(isPalindrome('level')); // true
// console.log(isPalindrome('topot')); // true
// console.log(isPalindrome('вимив')); // true
// console.log(isPalindrome('анна')); // true
// console.log(isPalindrome('алла')); // true
// console.log(isPalindrome('дід')); // true
// console.log(isPalindrome('ротатор')); // true
// console.log(isPalindrome('радар')); // true
// console.log(isPalindrome('привіт')); // false
// console.log(isPalindrome('що')); // false
// console.log(isPalindrome('that'));  // false
//

//------------------------

// 5. Написати функцію stringTransformer, яка буде трансформувати рядок за такими правилами:

// 1) Змінити регістр кожного знака, тобто. нижній регістр у верхній регістр, верхній регістр у нижній регістр. (наприклад 'FizzBuzz'-> 'fIZZbUZZ');
// 2) Змінити порядок слів на зворотний (наприклад, 'pen pineapple apple PEN' --> 'pen APPLE PINEAPPLE PEN'). // Done


// console.log(stringTransformer('torininGEN THE bEst'));
// BeST the TORININgen

// console.log(stringTransformer('JavaScript IS cool LANGUAGE'));
// language COOL is jAVAsCRIPT


//------------------------

// 6. Реалізувати функцію, яка виконуватиме математичні операції з введеними користувачем числами

// Технічні вимоги:

// Взяти за допомогою модального вікна браузера два числа. ( функцією )
// Взяти за допомогою модального вікна браузера математичну операцію, яку потрібно здійснити. Сюди можна ввести +, -, *, /. ( функцією )
// Створити функцію, в якій провести запит чисел, мат. операції та виконати обчислення )
// Вивести у консоль результат виконання функції.
//
// Необов'язкове завдання додаткової складності:
//
// Після введення даних додати перевірку їхньої коректності.
// Якщо користувач не ввів числа, або при введенні вказав не числа - запитати обидва числа заново
// Якщо користувач вві неправильний символ - запитати ще раз



//------------------------

//  напиши функцію яка буде створювати масив з не унікальних значень в масиві, які є в тестових масивах
// function foo(newArr){
//     const notUnicArr = []
//     for( let i = 0; i < newArr.length; i+=1){
//         if(newArr.includes(newArr[i], i+1))
//         notUnicArr.push(newArr[i])
//     }
//     return notUnicArr
// }
//
// const arr1 = [1, 2];
// const arr2 = [2, 3];
// const arr3 = ['a', 'b'];
// const arr4 = ['b', 'c'];
// const arr5 = ['b', 'e', 'c'];
// const arr6 = ['b', 'b', 'e'];
// const arr7 = ['b', 'c', 'e'];
// const arr8 = ['b', 'e', 'c'];
// console.log(foo(arr1))
// console.log(foo(arr2))
// console.log(foo(arr3))
// console.log(foo(arr4))
// console.log(foo(arr5))
// console.log(foo(arr6))
// console.log(foo(arr7))
// console.log(foo(arr8))

// Потрібно створити функцію яка буде перевіряти чи елементи в масиві розташовані в порядку зростання,
// якщо ні то замінювати елемент на вірний
const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9]
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function newFun(numbers){
  for(let i = 0; i <numbers.length; i++ ){
    if(numbers[i] + 1 !== numbers[i + 1]) {
      numbers[i +1] = numbers[i] + 1
    }
  }
}
newFun(numbers)
console.log(numbers)



//Замінити всі розширення файлів з .css на .js

// const files = ['index.css', 'script.js', 'style.css', 'step-types.json', 'firebase.css'];

// for (let i = 0; i < files.length; i += 1) {
//   console.log(files[i].replace('.css', '.js'));
//   console.log(files[i]);
//   files[i] = files[i].replace('.css', '.js');
// }
// console.log(files);

//Створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів. (users)
//2 параметр це масив з чоловічими іменами. (mens)
// Функція повина повертати масив з жіночими іменами.

//  const users = ['Artem', 'Anna', 'Larisa', 'Maksim', 'Svetlana', 'David', 'Roman', 'Olga'];
//  const men = ['Artem', 'Maksim', 'David', 'Roman'];
// const women=[];
// for( const user of users){
// if(!men.includes(user)){
// console.log(user)
// women.push(user)
// }
// }
// console.log(women)

console.log("helloWorld")

const names = ['Anna', 3, 'Roma', 17, 'Kate', 14, 'Oleg'];
for(let i=0; i<names.length; i+=1){
   if(typeof names[i] !== 'string'){
    names.splice(i, 1);
    
   }
}
console.log(names)


// 1. Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.
const apples = 47;
const grapes = 135;


//-----------------------------------

// 2. Заміни вираз перевизначення комбінованим оператором +=,  -=, *=, /=.
// let students = 100;
// students = students + 50;
// console.log(students);




//-----------------------------------


// 3.Розбери пріоритет операторів в інструкції надання значення змінної result.
// const result = 101 + 300 / 10 - 60 + 10 * 4
// console.log(result);

//-----------------------------------

// 4. Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.
// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// console.log(message);


// console.log(message);

//-----------------------------------

// 5. Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини за метри.
// let weight = '88.3';
// let height = '1.75';

// const bmi =
// console.log(bmi); // 28.8



//-----------------------------------

// 6. Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. Значення змінної value.
// Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевірте, що буде в консолі при значеннях 27.3 і 27.9.


//-----------------------------------

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);


// -----------------------------------

// 7.Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) у рядок у форматі годин і хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 70;



/* ЗАВДАННЯ 8
     * Записати в змінну '123', вивести в консоль typeof цієї змінної.
     * Перетворити цю змінну на чисельний тип за допомогою parseInt(), parseFloat(), унарний плюс +
     * Після цього повторно вивести в консоль typeof цієї змінної.
    * */

//  let myVar = "123.67";
//  console.log();
// //
//  let myVar2 =
// console.log();
// //
// let myVar3 =
// console.log(;

// let myVar4 =
// console.log();


// console.log();

//-----------------------------------

/* ЗАВДАННЯ 9
 * Вивести на екран модальне вікно prompt з повідомленням "Enter the number".
 * Результат виконання модального вікна записати в змінну, значення якої вивести в консоль.
 * */


//-----------------------------------

/* ЗАВДАННЯ 10
   * За допомогою модального вікна prompt отримати від користувача два числа.
   * Вивести в консоль суму, різницю, добуток, поділ та залишок від поділу їх один на одного.
   * */

//  console.log(0.1 + 0.2)
"use strict";

/* let firstName = "Admin";  // var, let, const
console.log(firstName); 

let age = 25;
console.log(age);

let lastName = "Hello";
console.log(lastName);

let LastName = "World";
console.log(LastName); */

// let a = "Hello";
// console.log(a, typeof (a));
// console.log(a, typeof a);

// let b = 5;  // инициализация
// b = 10;
// b = "Hello";

// console.log(b, typeof b);

// let a;

// a = 10;
// a = "Hello";

// console.log(a);

// let str1 = "Двойные \
// кавычки";
// let str2 = 'Одинарные \nкавычки';


// console.log(str1 + " " + str2);  // конкатенация

// let str = "E:\\Frontend512\\folder\\file.txt";
// console.log(str);
// let a = 5;
// let str1 = "Новый ${a} текст.";
// console.log(str1);


// let str = `Обратные ${a}  ${a + 2}
//      кавычки`;
// console.log(str);

// let firstName = "Sergey";
// // alert("Hello, " + firstName);
// alert(`Hello, ${firstName}`);

// let days = 365;
// let earth = "Земля";
// let peoples = "7 млрд.";
// let sun = "Солнца";

// // alert(`"Мы живем на планете ${earth}, она делает один оборот вокруг ${sun} за ${days} дней. Население нашей планеты составляет примерно ${peoples} человек."`);
// alert("\"Мы живем на планете " + earth + ", она делает один оборот вокруг " + sun + " за " + days + " дней. Население нашей планеты составляет примерно " + peoples + " человек.\"");

// const WEEK = 7;
// // WEEK = 9;
// console.log(WEEK);

// let res = confirm("Знаете ли вы HTML?");
// console.log(res);
// if (res) {
//     alert("Пора учить JavaScript");
// } else{
//     alert("Нужно выучить HTML");
// }

// OK => true
// Отмена => false

// let a = null;
// console.log(a, typeof a);

// let res = prompt("Ваше имя", "Виктор");
// alert(`Привет ${res}!`);
// console.log(res);

// OK => Виктор
// Отмена => null

// let a = 12;
// let b = 6;

// console.log("+:", a + b);
// console.log("-:", a - b);
// console.log("*:", a * b);
// console.log("/:", a / b);
// console.log("**:", a ** b);
// console.log("%:", a % b);


// let num1 = +prompt("Введите первое число", 5);
// let num2 = parseInt(prompt("Введите второе число", 7));
// let num3 = Number(prompt("Введите третье число", 3));

// let sum = num1 + num2 + num3;
// console.log("Сумма: ", sum);
// console.log("Произведение: ", num1 * num2 * num3);
// console.log("Среднее арифметическое: ", sum / 3);


// let num1 = prompt("Введите первое число", 5);
// console.log(num1, typeof num1);

// console.log(parseInt("21.84"));  // 21
// console.log(parseFloat("21.84"));  // 21.84
// console.log(Number("21.84"));  // 21.84
// console.log(Number("21.84455654").toFixed(3));  // 21.845

// console.log(+"21.84");
// console.log(+1 * "21.84");

// console.log("6" * "3");

// let a = 23;
// let b = +"6";

// console.log("Результат: " + (a + b));

// let res = prompt("Input Number", 4);

// console.log("Квадрат числа: " + res ** 2);
// console.log("Куб числа: " + res ** 3);
// console.log("4-я степень числа: " + res ** 4);


// let num = 4321;  // 1200
// let one, two, three, four;

// console.log(num);

// one = num % 10;  // 1
// console.log(one);  
// num = parseInt(num / 10);  // 432
// two = num % 10;  // 2
// console.log(two);  
// num = parseInt(num / 10);  // 43
// three = num % 10;  // 3
// console.log(three); 
// num = parseInt(num / 10); 
// four = num % 10;  // 4
// console.log(four); 

// console.log(one * 1000 + two * 100 + three * 10 + four);

// let a = 0, b = 0;
// let c = ++a;   // a = a + 1;
// console.log(a);  // 1
// console.log(c);  // 1
// let d = b++;  // b = b + 1;
// console.log(b);  // 1
// console.log(d);  // 0


// let a = 0, b = 0;
// let c = a++ + 2;  // c = 0 + 2  a = 1
// let d = ++b + 2;  // d = 1 + 2  b = 1
// console.log(a);  // 1
// console.log(b);  // 1
// console.log(c);  // 2
// console.log(d);  // 3

// let a = 1;
// let b = a++;
// console.log(a); 
// let c = b + 5 + a;  //  c = 1 + 5 + 2
// console.log(c);  // 8

// let a = 1;
// let b = ++a;
// console.log(a); 
// let c = b + 5 + a;  //  c = 2 + 5 + 2
// console.log(c);  // 9

// let a = 5;
// let b = a++ - 3;  // b = 5 - 3 => 2, a = 5 + 1 => 6
// console.log(a); // 6
// console.log(b); // 2

// let a = 5;
// let b = 3;  // 
// let c = a++ * ++b;  // 5 * 4
// console.log(a); // 6
// console.log(b); // 4
// console.log(c); // 20

// let a = 3;
// let b = ++a - 3;  // b = 4 - 3 => 1, a = 4
// let c = a++ + 2 + ++b;  // c = 4 + 2 + 2
// console.log(a); // 5
// console.log(b); // 2
// console.log(c); // 8

// let a = 3;
// console.log(a++);  // a = a + 1
// console.log(a);  // 4


// let a = 3;
// let b = 5 + a-- - 1;  // 5 + 2 - 1
// console.log(a);  // 2
// console.log(b);  // 6


// let a = 3;
// a += 5;  // a = a + 5;
// console.log(a);  // 8

// a -= 3; // a = a - 3
// console.log(a);  // 5

// a **= 2;  // a = a ** 2
// console.log(a);  // 25

// let a = +prompt("Ведите 1 число:", 5);
// let b = +prompt("Ведите 2 число:", 4);
// let c = +prompt("Ведите 3 число:", 6);
// let sum = a + b + c;
// console.log("Сумма чисел: " + sum);

// let sum = +prompt("Ведите 1 число:", 5);
// sum += +prompt("Ведите 2 число:", 4);
// sum += +prompt("Ведите 3 число:", 6);
// console.log("Сумма чисел: " + sum);

// let sum = 0;
// sum = sum + +prompt("Ведите 1 число:", 5);
// sum += +prompt("Ведите 2 число:", 4);
// sum += +prompt("Ведите 3 число:", 6);
// console.log("Сумма чисел: " + sum);

// console.log(5 == "5");
// console.log(5 === "5");

// console.log(5 != "5");
// console.log(5 !== "5");

// console.log(5 != 5);
// console.log(5 !== "5");


// console.log(5 > 3);
// console.log(5 < 3);
// console.log(5 >= 5);
// console.log(5 <= 5);

// console.log(+true);  // 1
// console.log(+false);  // 0


// let a = 5 + true;  // 5 + 1
// console.log(a);

// let b = 5 + false;  // 5 + 0
// console.log(b);

// 7 < 3 ? alert("7") : alert("3");

// let age = prompt("Введите возраст:");
// age >= 18 ? alert("Совершеннолетний") : alert("Несовершеннолетний");

// let ch = prompt("Угадайте число от 1 до 10");
// let num = 7;
// // ch == num ? alert("Угадали") : alert("Не угадали");
// ch == num ? alert("Угадали") : (ch < num ? alert("Загаданное число больше") : alert("Загаданное число меньше"));

// let temp = prompt("Введите температуру");

// let res = temp > 30 ? "Очень жарко"  // -2 > 30
// : temp > 20 ? "Тепло"  // -2 > 20
// : temp > 10 ? "Прохладно"  // -2 > 10
// : temp > 0 ? "Холодно"  // -2 > 0
// : "Очень холодно";

// alert(res);  // -2

// if (условие) {
//     истина (TRUE)
// } else {
//     ложь (FALSE)
// }

// let a = 12;
// let b = 0;

// if (b != 0) {
//     let res = a / b;
//     alert("Результат: " + res);
// } else {
//     alert("Делить на \"0\" нельзя");
// }

// let value = prompt("Введите число:");

// if (value % 2 == 0) {
//     alert("Число четное");
//     alert("Другой текст");
// } else {
//     alert("Число не четное");
// }  

// let a = 32;
// let b = 22;
// if (a > b){
//     alert(a + " > " + b);
// } 
// if (a == b){
//     alert(a + " == " + b);
// }
// if (a < b) {
//     alert(a + " < " + b);
// }

// let a = 5;
// let b = 15;
// if (a > b){
//     alert(a + " > " + b);
// } else if (a == b){
//     alert(a + " == " + b);
// } else {
//     alert(a + " < " + b);
// }

// let day = prompt("Введите день недели (цифрами):");

// if(day == 1){
//     alert("День недели - понедельник");
// }
// else if(day == 2){
//     alert("День недели - вторник");
// }
// else if(day == 3){
//     alert("День недели - среда");
// }
// else if(day == 4){
//     alert("День недели - четверг");
// }
// else if(day == 5){
//     alert("День недели - пятница");
// }
// else if(day == 6){
//     alert("День недели - суббота");
// }
// else if(day == 7){
//     alert("День недели - воскресенье");
// }
// else{
//     alert("Такого дня недели не существует");
// }

// ==============================================================
// false => "", 0, null, undefined, NaN, false
// ==============================================================

// let a = 5 < 3;

// if (a) {    
//     console.log("TRUE");
// } else {
//     console.log("FALSE");
// }
// console.log(a);

// let login = prompt("Введите логин:", "admin");

// if (login) {
//     if (login == "admin") {
//         let pas = prompt("Введите пароль:", "password");
//         if (pas) {
//             if (pas == "password") {
//                 alert("Добро пожаловать");
//             } else {
//                 alert("Пароль неверен");
//             }
//         } else {
//             alert("Вход отменен");
//         }
//     } else {
//         alert("Я вас не знаю");
//     }
// } else {
//     alert("Вход отменен");
// }

// if (5 > 12 && 5 == 3) {    //  true && true => true
//     console.log("TRUE");  // false && true => false
// } else {                  //  true && false => false        
//     console.log("FALSE"); // false && false => false 
// }

// if (5 > 12 || 5 == 3) {    //  true || true => true
//     console.log("TRUE");  // false || true => true
// } else {                  //  true || false => true         
//     console.log("FALSE"); // false || false => false  
// }

// let age = prompt("Введите возраст");
// if(age > 17 && age < 70){
//     alert("Вы можете получать права");
// } else {
//     alert("Права не давать");
// }

// let age = prompt("Введите свой возраст", 40);

// if(age < 18 || age > 69) {
//     alert("Права не давать")
// } else {
//     alert("Вы можете получить права")
// }

// let a = prompt("Введите первую стронону", 30);
// let b = prompt("Введите вторую стронону", 20);
// let c = prompt("Введите третью стронону", 10);

// if (a == b && b == c) {
//     alert("Треугольник равносторонний");
// } else if (a == b || b == c || a == c) {
//     alert("Треугольник равнобедренный");
// } else {
//     alert("Треугольник разносторонний");
// }

// if (a == b && b == c) {
//     alert("Треугольник равносторонний");
// }
// if (a == b || b == c || a == c) {
//     alert("Треугольник равнобедренный");
// }
// if(a != b || b != c || a != c){
//     alert("Треугольник разносторонний");
// }

// console.log("Hello");

// if("Hello"){
//     console.log("true");    
// }

// console.log(!!!"Hello");
// console.log(!0);

// console.log(!(7==5));

// let ch = prompt("Введите количество ворон: ", 5);

// if(ch >= 0 && ch <= 9){
//     if(ch == 1){
//         alert(`На ветке ${ch} ворона`);
//     } else if(ch >= 2 && ch <= 4){ // ch == 2 || ch == 3 || ch == 4
//         alert(`На ветке ${ch} вороны`);
//     } else{
//         alert(`На ветке ${ch} ворон`);
//     }
// } else{
//     alert("Недопостимое значение");
// }


// let ch = prompt("Введите количество ворон: ", 5);

// if(ch >= 0 && ch <= 9){
//     if(ch == 1){
//         alert(`На ветке ${ch} ворона`);
//     } 
//     if(ch >= 2 && ch <= 4){ // ch == 2 || ch == 3 || ch == 4
//         alert(`На ветке ${ch} вороны`);
//     } 
//     if(ch >= 5 && ch <= 9 || ch == 0){
//         alert(`На ветке ${ch} ворон`);
//     }
// } else{
//     alert("Недопостимое значение");
// }

// switch(условие){
//     case значение_1:
//         код;
//     break;
//     case значение_2:
//         код;
//     break;
//     case значение_n:
//         код;
//     break;
//     default:
//         код;
// }

// let a = +prompt("Введите число");  // 1
// switch (a) {  // "1" === "1"
//     case 1:
//         alert("Код 1");
//     break;    
//     case 2:       
//         alert("Код 2");
//     break;
//     case 3:
//         alert("Код 3");
//     break;
//     default:
//         alert("Я таких значений не знаю");     
// }

// let a = +prompt("Введите результат '2 + 2'");  
// switch (a) {  
//     case 4:       
//         alert("Верно");
//     break; 
//     case 5:
//     case 8:
//         alert("Не верно");
//     break;
//     default:
//         alert("Я таких значений не знаю");     
// }

// let error = 1768;

// switch (error) {
//     case 404:
//         console.log("Страницы не существует");
//         break;
//     case 200:
//         console.log("Заспрос успешно обработан");
//         break;
//     case 500:
//         console.log("Ошибка сервера");
//         break;
//     default:
//         console.log("Неизвестная ошибка");           
// }

// let day = "понедельник1";

// switch(day){
//     case "суббота":
//     case "воскресенье":
//         alert("Выходной день");
//         break;
//     case "понедельник":
//     case "вторник":
//     case "среда":
//     case "четверг":
//     case "пятница":
//         alert("Это рабочий день");
//         break;
//     default:
//         alert("Некоррекный день");
// }

// let m = +prompt("Введите номер месяца");
// let n;

// switch(m){
//     case 1: n="Январь"; break;
//     case 2: n="Февраль"; break;
//     case 3: n="Март"; break;
//     default: n = "Неправильный номер месяца";  

// }

// alert("Вы ввели: " + n);

//  4  => весна
// Пользователь вводит номер месяца, показавается время года

// let month = +prompt("Введите номер месяца (1–12)");
// let n;
// switch (month) {
//     case 12:
//     case 1:
//     case 2:
//         n = "Зима";
//         break;
//     case 3:
//     case 4:
//     case 5:
//         n = "Весна";
//         break;
//     case 6:
//     case 7:
//     case 8:
//         n = "Лето";
//         break;
//     case 9:
//     case 10:
//     case 11:
//         n = "Осень";
//         break;
//     default:
//         n = "Ошибка ввода данных";
// }
// alert("Время года: " + n);

// let operator = prompt("Действия: +, -, *, /, %:");
// let num1 = +prompt("Введите первое число:", 5);
// let num2 = +prompt("Введите второе число:", 0);

// switch (operator) {
//     case "+":
//         alert("Сумма: " + (num1 + num2));
//         break;
//     case "-":
//         alert("Разность: " + (num1 - num2));
//         break;
//     case "*":
//         alert("Прозведение: " + num1 * num2);
//         break;
//     case "/":
//         if (num2 == 0) {
//             alert("Делить на 0 нельзя");
//         } else {
//             alert("Частное: " + num1 / num2);
//         }
//         break;
//     case "%":
//         if (num2 == 0) {
//             alert("Делить на 0 нельзя");
//         } else {
//             alert("Остаток от деления: " + num1 % num2);
//         }
//         break;
//     default:
//         alert("Я такого оператора не знаю");
// }


// document.writeln("<p>Текст <br>выведен <b>в окно браузера</b></p>");
// document.writeln(`<p><img src="1.jpg" alt="">Еще текст</p>`);

// Цикл do...while (цикл с постусловием)
/* 
do{
    тело цикла (действие);
}while(условие); 
*/

// Итерация - один шаг цикла

// let i = 0;  // счетчик
// do {
//     document.writeln("Это номер: " + i + "<br>");
//     i++;  // изменение счетчика
// } while (i < 5);  // 5 < 5

// let i = 1;  
// do {
//     document.writeln("Квадрат " + i + " равен " + i ** 2 + "<br>");
//     i++;
// } while (i < 8);

// let i = 0;
// do {
//     document.writeln("Это номер: " + i + "<br>");
//     i = i + 5;
// } while (i <= 25);

// let i = 10;  
// do {
//     document.writeln("Это номер: " + i + "<br>");
//     i--;
// } while (i > 0);

// let i = 1;
// do {
//     if (i % 2 == 0) {
//         document.writeln(`i = ${i}<br>`);
//     }
//     i++;
// } while (i <= 20);

// let i = 2;
// do {
//     document.writeln(`i = ${i}<br>`);
//     i += 2; // i = i + 2;
// } while (i <= 20);

// let n = +prompt("Введите начало диапазона: ", 1);
// let m = +prompt("Введите конец диапазона: ", 5);
// let i = n;  // 1
// let sum = 0;
// do{  
//     if(i % 2){  // i % 2 != 0  // i % 2 == 1
//         // document.writeln(i + "<br>");  // 1 3 5
//         sum = sum + i;  // 9 = 4 + 5
//     }    
//     i++;
// }while(i <= m);  // 1 <= 5

// document.writeln("Сумма целых нечетных чисел: " + sum + "<br>");


// let n = +prompt("Введите начало диапазона: ", 1);
// let m = +prompt("Введите конец диапазона: ", 5);
// let sum = 0;
// do {
//     if (n % 2) {
//         sum += n;
//     }
//     n++;
// } while (n <= m);

// document.writeln("Сумма целых нечетных чисел: " + sum + "<br>");

// let a = 5;  // глобальная переменная

// if(a>0 && a<10){
//     let a = 6;  // локальная переменная
//     document.writeln(a);
// }
// document.writeln(a);


// let b = 1; // 1
// let i = 0;
// do {
//     let b = 0;
//     b = b + 2;  // b = 0 + 2

//     document.writeln(b + "<br>");
//     i++;
// } while (i < 5);

// document.writeln("b = " + b + "<br>");
// document.writeln("i = " + i);

// Цикл while (цикл с предусловием)

/* while(условие){
    тело цикла (действие);
}
 */

// let i = 0;
// while(i > 5){   // 0 > 5 
//     document.writeln("Это номер: " + i + "<br>");
//     i++;  
// }
// document.writeln("<br><br>");

// let j = 0;
// do{
//     document.writeln("Это номер: " + j + "<br>");
//     j++; 
// } while(j > 5);  // 1 > 5
// document.writeln("j: " + j + "<br>");

// let count = prompt("Укажите количетво звездочек");
// let i = 0;
// while(i < count){  // 3 < 7
//     document.writeln("*");
//     i++; // 2
// }

// Написать программу, выводящую на экран целые числа от 1 до 30, за исключением чисел кратных трем.

// let i = 1;
// while (i <= 30) {
//     if (i % 3) {
//         document.writeln(i + "<br>");      
//     }  
//     i++;
// }

// Написать программу, вычисляющую произведение чисел в заданном диапазоне (Например: 5 и 10. Результат: 5*6*7*8*9*10=151200).

// let start = 5;
// let end = 10;
// let res = 1;

// while(start <= end){
//     // document.writeln(start + "<br>");
//     res *= start;  // res = res * start;
//     start++;
// }
// document.writeln(res + "<br>");

// let i = 3;
// while(i){ // 0
//     document.writeln(i + "<br>");
//     i--;
// }
// let n;
// let count = 0;
// do{
//     n = prompt("Введите целое число:");
//     document.writeln(n + "<br>");
//     if(n != 0){
//         count++;
//     }    
// } while(n != 0);
// document.writeln("Количество: " + count + "<br>");

// let sum = 0;
// let count = -1;
// let n;

// let max = 0;
// do{
//     n = +prompt("Введите число");  // 4 9 3 11 0
//     sum += n;
//     count++;
//     if(max < n){  // 11 < 0
//         max = n;  // 11
//     }
// } while(n != 0);
// document.writeln("Среднее арифметическое: " + sum / count + "<br>");
// console.log("sum:", sum);
// console.log("count:", count);
// document.writeln("MAX: " + max);

// let n = +prompt("Введите число");  // 4 
// let max = n;  // 4
// let min = n;  // 4
// let sum = n;
// let count = 0;
// while (n != 0) {
//     n = +prompt("Введите число");   // 5 1 0
//     sum += n;  // sum = sum + n
//     count++;
//     if (max < n && n != 0) {  
//         max = n;  
//     }
//     if(n < min && n != 0){  
//         min = n; 
//     }
// }
// document.writeln("MAX: " + max + "<br>");
// document.writeln("MIN: " + min + "<br>");
// console.log("sum:", sum);
// console.log("count:", count);
// document.writeln("Среднее арифметическое: " + (sum / count).toFixed(2) + "<br>");


// let res = 1;
// do{
//     let n = +prompt("Введите число");  // 5 2 0 -7

//     if(n < 0){
//         break;
//     }
//     if(n == 0){
//         continue;
//     }

//     res *= n;
// } while(true);

// console.log("Произведение:", res);

// let i = 0;
// do{
//     if(i == 6){  // 6 == 6
//         break;
//     }
//     if(i == 3){  // 3 == 3
//         i++;  
//         continue;
//     }
//     document.writeln(i + " ")
//     i++;  // 6
// } while(i < 10);

// let res = 1;
// do{
//     let num = prompt("Введите число");
//     if(num == 0){
//         break;
//     }else{
//         res *= num;
//     }
// }while(true);
// console.log("Произведение:", res);

// let res = 1;
// let num;
// do {
//     num = prompt("Введите число");
//     if(num == 0){
//         continue;
//     }        
//     res *= num;  // res = -15 * 2 => -30
// } while (num != 0);
// console.log("Произведение:", res);

// let res = 1;
// do{
//     let num = prompt("Введите число");
//     if(num == 0){
//         break;
//     }
//     res *= num;

// }while(true);
// console.log("Произведение:", res);

// for(цикл со счетчиком)

// for(инициализация_переменной; проверка_условия; изменение_переменной){
//     тело_цикла;
// }

// for(let i = 1; i < 6; i++){
//     document.writeln(i + "<br>");
// }
// document.writeln("<br>");

// let i = 1;
// while(i < 6){
//     document.writeln(i + "<br>");
//     i++;
// }

// for(let i = 1; i < 12; i++){
//     if(i == 3){
//         continue;
//     }
//     if(i == 6){
//         break;
//     }
//     document.writeln(i + "<br>");
// }

// let n = prompt("n = ");
// let sum = 0;
// let count = 0;

// for(let i = 0; i < n; i++){
//     let num = +prompt("-> ");
//     document.writeln(num + "<br>");
//     sum += num;
//     if(num != 0){
//         count++;
//     }
// }
// console.log(sum);
// console.log(count);
// document.writeln("Среднее арифметическое: " + (sum / count).toFixed(2) + "<br>");


// let i = 1;
// for (; ;) {  //i < 7
//     if (i == 7) {
//         break;
//     }
//     document.writeln(i + "<br>");
//     i++;
// }
// let i;
// for (let i = 1; i < 6; i++) {
//     document.writeln(i + "<br>");
// }
// console.log(i);

// Вычислить сумму четных чисел и произведение нечетных чисел в заданном диапазоне.

// let start = 5;
// let end = 10;

// for(let i = start; i <= end; i++){

// }

// let start = +prompt("Введите начало диапазона");
// let end = +prompt("Введите конец диапазона");
// let sum = 0;
// let res = 1;
// for (let i = start; i < end; i++) {
//     if (i % 2 == 0) {
//         sum += i;
//     } else {
//         res *= i;
//     }
// }
// document.writeln("Сумма чётных: " + sum + "<br>");
// document.writeln("Произведение нечётных: " + res);

// Разбить введенное число на отдельные цифры и вывести в обратном порядке.

// let ch = 987654321;
// document.writeln("Исходное число: " + ch + "<br>");
// for (let i = 1; ; i*=10) {
//     let res = parseInt(ch / i);  // 321 / 1000 => 0
//     if (res == 0) {
//         break;
//     }
//     document.writeln(res % 10);
// }

// Найти сумму целых положительных чисел больших 5, меньших 30 и кратных 3.

// let start = 5;
// let end = 30;
// let sum = 0;

// for (let i = start; i <= end; i++) {
//     if (i % 3) {
//         continue;
//     } else {
//         sum += i;
//     }
// }
// document.writeln("Сумма чисел кратных трем: " + sum);
// let a;
// let start = 5;
// let end = 30;
// let sum = 0;
// for (let i = start; i <= end; i++) {   //  31 <= 30
//     if (i % 3 == 0) {        
//         console.log(i);
//         sum += i;
//         document.writeln("сумма на каждой итерации: " + sum + "<br>");
//     }
// }
// document.writeln("сумма:" + sum);


// let count = +prompt("Введите количество символов: ", 7);
// if (count != 0) {
//     if (count != NaN) {
//         document.writeln(count);
//         console.log(count);
//     }
// } else {
//     alert("Вы не ввели количество символов")
// }


// let i = 0;  // 4
// while (i < 4) {  // 4 < 4
//     document.writeln("+++<br>");

//     let j = 0;  // 2
//     while(j < 2){  // 2 < 2
//         document.writeln("--<br>");
//         j++;
//     }

//     i++;
// }


// for(let i = 0; i < 4; i++){
//     document.writeln("+++<br>");
//     for(let j = 0; j < 2; j++){
//          document.writeln("--<br>");
//     }
// }

// let symbol = prompt("Введите символ: ", "*");
// let tr = prompt("Введите количество строк: ");
// let td = prompt("Введите количество столбцов: ");
// document.writeln("<table border='1' width='150'>");
// for (let i = 0; i < tr; i++) {
//     document.writeln("<tr align='center'>");
//     for (let j = 0; j < td; j++) {
//         document.writeln("<td>" + symbol + "</td>");
//     }
//     document.writeln("</tr>");
// }
// document.writeln("</table>");

// document.writeln("<table border='1' width='260' align='center'>");
// for (let i = 1; i < 11; i++) {
//     document.writeln("<tr align='center'>");
//     for (let j = 1; j < 11; j++) {
//         if (j % 2 == 0) {
//             document.writeln("<td bgcolor='red'>" + i * j + "</td>");
//         } else {
//             document.writeln("<td bgcolor='yellow'>" + i * j + "</td>");
//         }
//     }
//     document.writeln("</tr>");
// }
// document.writeln("</table>");

// Массивы

// let mas = [2, 6, 8];
// document.writeln(mas[2]);
// console.log(mas);

// let mas1 = [5];  // массив на 1 элемент со значением 5
// console.log(mas1);


// let mas2 = new Array(2, 6, 8);
// console.log(mas2);

// let mas3 = new Array(5);  // массив на пять элементов, но без значений
// console.log(mas3);

// let mas4 = [];
// let mas5 = new Array();
// console.log(mas4);
// console.log(mas5);

// let mas = [2, 6, 8];
// document.writeln(mas + "<br>");
// console.log(mas);
// document.writeln(mas.length);

// let arr = [1, 2, 3, 4, 5, 6];
// document.writeln(arr + "<br>");
// document.writeln(arr.length + "<br>");

// arr.length = 3;
// document.writeln(arr + "<br>");
// document.writeln(arr.length + "<br>");

// arr.length = 6;
// document.writeln(arr + "<br>");
// document.writeln(arr.length + "<br>");
// document.writeln(arr[10] + "<br>");
// console.log(arr);

// arr.length = 0;
// document.writeln("Пустой массив: " + arr + "<br>");
// document.writeln(arr.length + "<br>");
// console.log(arr);

// последний индекс массива = длина массива - 1
// length = последний индекс массива + 1

// let arr1 = [1, 2, 3, 4, 5, 6];
// document.writeln(arr1 + "<br>");
// document.writeln(arr1[arr1.length - 1] + "<br>");
// console.log(arr1);



// let arr = [5, 9, -3, -1, 4, -8, 7, 2, -6];
// for(let i=0; i < arr.length; i++){
//     document.writeln(arr[i] ** 2 + "<br>")
// }

// Заменить все отрицательные значения элементов массива их модулями
// let arr = [5, 9, -3, -1, 4, -8, 7, 2, -6];
// for(let i=0; i < arr.length; i++){
//     if(arr[i] < 0){
//         arr[i] *= -1;  // arr[i] = arr[i] * -1;
//     }
//     document.writeln(arr[i] + "<br>");
// }

// console.table(arr);

// Посчитать в массиве сумму всех отрицательных элементов
// let arr = [5, 9, -3, -1, 4, -8, 7, 2, -6];
// let sum = 0;
// for(let i=0; i < arr.length; i++){
//     if(arr[i] < 0){
//          document.writeln(arr[i] + "<br>");
//          sum += arr[i];
//     }   
// }
// document.writeln(sum + "<br>");

// let arr = new Array();  // []
// arr[0] = 15;
// arr[1] = 6;
// arr[2] = 9;
// arr[3] = 4;

// arr[6] = 59;

// console.log(arr);

// let arr = new Array(5);

// // for(let i=0; i<arr.length; ){
// //     // arr[i] = prompt("Введите " + (i + 1) + " элемент массива: ");    
// //     arr[i] = prompt("Введите " + ++i + " элемент массива: ");    
// // }
// // document.writeln(arr + "<br>");

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = prompt("Введите " + (i + 1) + " элемент массива: ");
// }
// document.writeln(arr + "<br>");
// console.log(arr);


// for (let i = arr.length - 1; i >= 0; i--) {  // 0  // 0 >= 0 
//     document.writeln(arr[i] + " ");
// }

// let arr = ['a', 'b', 'c'];

// arr[0] = arr[0] + "!";
// arr[1] = arr[1] + "!!";
// arr[2] = arr[2] + "!!!";

// console.log(arr);

// let arr = [1, 2, 3, 4];

// arr[0]++;
// ++arr[1];
// arr[2]--;
// --arr[3];

// console.log(arr);  // [2, 3, 2, 3]

// let n = +prompt("Введите количество элементов массива: ");
// let mas = [];
// for (let i = 0; i < n; i++) {
//     if (n > 5) {
//         mas[i] = 0;
//     } else{
//         mas[i] = prompt("->");
//     }
// }

// console.log(mas);



// document.writeln("<table border='1' width='260' align='center'>");
// document.writeln("<tr>");
// for (let i = 0; i < 11; i++) {
//     document.writeln("<th>" + i + "</th>");
// }
// document.writeln("</tr>");
// for (let i = 1; i < 11; i++) {
//     document.writeln("<tr align='center'>");
//     document.writeln("<th>" + i + "</th>");
//     for (let j = 1; j < 11; j++) {
//         if (i % 2 == j % 2) { // (i + j) % 2 == 0 // i % 2 == 0 && j % 2 == 0 || i % 2 != 0 && j % 2 != 0
//             document.writeln("<td bgcolor='red'>" + i * j + "</td>");
//         } else {
//             document.writeln("<td bgcolor='yellow'>" + i * j + "</td>");
//         }
//     }
//     document.writeln("</tr>");
// }
// document.writeln("</table>");

// let n = prompt("Количество символов: ");  // 5
// let symbol = prompt("Тип спмвола: ");  // +
// let orient = prompt("0 - горизонтальная\n1 - вертикальная");

// for (let i = 0; i < n; i++) {  // 5 < 5
//     if (orient == 0){
//         document.writeln(symbol);
//     }        
//     else if(orient == 1){
//         document.writeln(symbol + "<br>");
//     } else{
//         document.writeln("Такой ориентации не существует");
//         break;
//     }
// }


// let n = +prompt("Введите количество элементов массива: ");
// let mas = new Array(n);

// for(let i = 0; i < mas.length; i++){
//     mas[i] = prompt("->");  // mas[2] = 2
// }

// console.log(mas);

// for(let i = 1; i < mas.length; i++){  // i = 3
//     if(mas[i] > mas[i - 1]){  // if('6'>'4')
//         document.writeln(mas[i] + " ");
//     }    
// }


// let mas = [49, 22, 13, 31, 43, 22, 10, 20, 28, 10, 40, 49, 38, 30, 48, 48, 31, 38, 35, 25];

// let sum = 0;
// let count = 0;

// for (let i = 0; i < mas.length; i++) {
//     if (mas[i] % 2 == 0) {
//         count++;
//     } else {
//         sum += mas[i];
//     }
// }

// document.writeln("Count: " + count + "<br>");
// document.writeln("Sum: " + sum);

// let arr = [2, 6, 7, "Игорь", true, 1.5];
// console.log(arr);
// let sum = 0;

// for (let i = 0; i < arr.length; i++) { 
//     sum += arr[i];    
// }
// document.writeln(sum + "<br>");

// let mas = [[2, 1, 1], [6, 3, 7, 7, 9], [8, 5, 6]];
// console.log(mas);
// console.table(mas);
// document.writeln(mas[1][2]);
// document.writeln(mas[0][2][1]);

// for(let i=0; i<mas.length; i++){
//     for(let j = 0; j < mas[i].length; j++){
//         document.writeln(mas[i][j] + " ");
//     }  
//     document.writeln("<br>");  
// }


// let mas = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
// for (let i = 0; i < mas.length; i++) { 
//     for (let j = 0; j < mas[i].length; j++) {  
//         document.writeln(mas[i][j] + "- - -");  
//     }
//     document.writeln("<br>");
// }

// console.log(mas.length);  // 3
// document.writeln("<br>");

// for (let i = 0; i < mas.length; i++) { 
//     for (let j = 0; j < mas[i].length; j++) {  
//         document.writeln(mas[i][j] ** 2 + "- - -");  
//     }
//     document.writeln("<br>");
// }

// let questions = ["На ноль делить можно?", "Волга впадает в Каспийское море?", "Атмосферное давление увеличивается с высотой?", "2x2 будет 8?", "Дельфины - это рыбы?", "Мадонна - это настоящее имя певицы?", "Первая мировая война началась 1 сентября 1939 года?"];
// let answers = [false, true, false, false, false, false, false];
// let sum = 0;
// let res = new Array();  // []

// for(let i=0; i<questions.length; i++){
//     let answer = confirm(questions[i]);
//     if(answer == answers[i]){
//         res[i] = 10;
//         sum += res[i];
//     } else {
//         res[i] = 0;
//     }
// }

// console.log(res);
// console.log(sum);

// document.writeln("<table border='1' width='500'>");
// document.writeln("<tr>");
// document.writeln("<th>Вопрос</th>");
// document.writeln("<th>Баллы</th>");
// document.writeln("</tr>");

// for(let i=0; i<questions.length; i++){
//     document.writeln("<tr>");
//     document.writeln("<td>" + questions[i] + "</td>");
//     document.writeln("<td>" + res[i] + "</td>");
//     document.writeln("</tr>");
// }

// document.writeln("<tr>");
// document.writeln("<th>Итог</th>");
// document.writeln("<th>"+ sum +"</th>");
// document.writeln("</tr>");
// document.writeln("</table>");

// let answer;
// let res = 0;

// let question = new Array();
// question[0] = 'Как называют манекенщицу супер-класса?\n\n A: Топмодель\t B: Тяп-модель\n C: Поп-модель\t D: Ляп-модель';
// question[1] = 'Кто вырос в джунглях среди диких зверей?\n\n A:\
// Колобок\t B: Маугли\n C: Бэтмен\t D: Чарльз Дарвин';
// question[2] = 'Как называлась детская развлекательная программа,\
// популярная в прошлые годы?\n\n A: АБВГДейка\t B: ЁКЛМНейка\n C:\
// ЁПРСТейка\t D: ЕЖЗИКейка';
// question[3] = 'Как звали невесту Эдмона Дантеса, будущего графа МонтеКристо?\n\n A: Мерседес\t B: Тойота\n C: Хонда\t D: Лада';
// question[4] = 'Какой цвет получается при смешении синего и \
// красного?\n\n A: Коричневый\t B: Фиолетовый\n C: Зелёный\t D:\
// Голубой';
// question[5] = 'Из какого мяса традиционно готовится начинка для \
// чебуреков?\n\n A: Баранина\t B: Свинина\n C: Телятина\t D: Конина';
// question[6] = 'Какой народ придумал танец чардаш?\n\n A: Венгры\t B:\
// Румыны\n C: Чехи\t D: Молдаване';
// question[7] = 'Изучение соединений какого элемента является основой\
// органической химии?\n\n A: Кислород\t B: Углерод\n C: Азот\t D: \
// Кремний';
// question[8] = 'Кто открыл тайну трёх карт графине из «Пиковой дамы» А.\
// С. Пушкина?\n\n A: Казанова\t B: Калиостро\n C: Сен-Жермен\t D: Томас\
// Воган';
// question[9] = 'В какой стране была пробурена первая промышленная\
// нефтяная скважина?\n\n A: Кувейт\t B: Иран\n C: Ирак\t D:\
// Азербайджан';
// question[10] = 'Разновидностью какого минерала является горный\
// хрусталь?\n\n A: Апатита\t B: Циркона\n C: Кварца\t D: Турмалина';
// question[11] = 'Какое название в 1918 году дали городу Царское\
// Село?\n\n A: Павловск\t B: Пушкин\n C: Красное Село\t D: Детское\
// Село';
// question[12] = 'Кто распорядился поместить на американских банкнотах\
// надпись «Мы верим в Бога»?\n\n A: Дуайт Эйзенхауэр\t B: Сэлмон Чейз\n \
// C: Бенджамин Франклин\t D: Франклин Рузвельт';
// question[13] = 'На каком языке просветитель Франциск Скорина в 1517— \
// 1525 годах напечатал первые среди восточных славян книги?\n\n A: На \
// польском\t B: На русском\n C: На белорусском\t D: На украинском';
// question[14] = 'Какого слова нет на памятнике П. К. Пахтусову в \
// Кронштадте?\n\n A: Польза\t B: Отвага\n C: Дело\t D: Труд';

// let correctAnswer = new Array();
// correctAnswer[0] = 'a';
// correctAnswer[1] = 'b';
// correctAnswer[2] = 'a';
// correctAnswer[3] = 'a';
// correctAnswer[4] = 'b';
// correctAnswer[5] = 'a';
// correctAnswer[6] = 'a';
// correctAnswer[7] = 'b';
// correctAnswer[8] = 'c';
// correctAnswer[9] = 'd';
// correctAnswer[10] = 'c';
// correctAnswer[11] = 'd';
// correctAnswer[12] = 'b';
// correctAnswer[13] = 'c';
// correctAnswer[14] = 'c';

// let money = new Array();
// money[0] = '100';
// money[1] = '200';
// money[2] = '300';
// money[3] = '500';
// money[4] = '1000';  // 
// money[5] = '2000';
// money[6] = '4000';
// money[7] = '8000';
// money[8] = '16000';
// money[9] = '32000';  //
// money[10] = '64000';
// money[11] = '125000';
// money[12] = '250000';
// money[13] = '500000';
// money[14] = '1000000';

// alert("Игра 'Первый миллион'");
// for (let i = 0; i < question.length; i++) {
//     alert("Вопрос " + (i + 1) + ":");
//     answer = prompt(question[i]);
//     if(answer == correctAnswer[i]){
//         alert("Поздравляем! Вы выиграли " + money[i] + " денежных единиц");
//         if(money[i] == 1000 || money[i] == 32000){
//             alert("Поздравляем! Вы дошли до несгораемой суммы");
//             res = money[i];
//         }
//     } else{
//         alert("Конец игры!\nВы програли((");
//         alert("Вы выиграли " + res + " денежных единиц");
//         break;
//     }

//     if(money[i] == 1000000){
//         alert("Ура!\nВы победили))\nТеперь вы миллионер");
//     }
// }

// let arr = [1, 2, 3, 4, 5];
// for(let i of arr){
//     console.log(i);    
// }

// for(let i = 2; i < arr.length - 1; i++){
//     document.writeln(arr[i] + "<br>");
// }


// let colors = ["red", "blue", "green", "yellow"];
// for(let color of colors){
//     document.writeln(color + "<br>");
// }

// let arr = [1, 2, 3, 4, 5];
// let flag = false;

// for (let elem of arr) {
//     if (elem == 3) {
//         flag = true;
//         break;
//     } 
// }

// // console.log(flag);

// if(flag){
//     console.log("+++");
// } else{
//     console.log("---");
// }

// let arr = [7, 55, 9, 33, 2];

// let max = arr[0];

// for(let i=0; i<arr.length; i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }

// for(let num of arr){
//     if(num > max){
//         max = num;
//     }
// }

// console.log(max);

// let arr = [7, 55, 9, 33, 2];
// let sum = 0;
// for (let num of arr) {
//     sum += num;
// }

// console.log(sum);

// let text1 = document.getElementById("text_1");
// console.log(text1);
// console.log(text1.textContent);
// text1.textContent = "Новое содержимое с <b>html разметкой</b>";

// let text2 = document.getElementById("text_2");
// text2.innerHTML = "Новое содержимое с <b>html разметкой</b>";



// let res = +prompt("Выберите изображение", "1-собака, 2-кот, 3-птица, 4-рыба");
// document.writeln("<div id='image'></div>");
// let img = document.getElementById("image");

// switch (res) {
//     case 1:
//         img.innerHTML = "<img src='img/dog.jpg'>";
//         break;
//     case 2:
//         img.innerHTML = "<img src='img/cat.jpg'>";
//         break;
//     case 3:
//         img.innerHTML = "<img src='img/bird.jpeg'>";
//         break;
//     case 4:
//         img.innerHTML = "<img src='img/fish.jpeg'>";
//         break;
//     default:
//         alert("Такого изображения нет");
// }

// let tag = document.getElementsByTagName("p")[2];
// console.log(tag);
// tag.innerHTML = "Hello <u>tag</u>";
// tag.style.color = "blue";
// tag.style.fontWeight = "bold";
// tag.style.background = "silver";
// tag.style.padding = "10px 20px";

// // list-style-type => listStyleType

// tag.id = "test";
// tag.className = "x";

// let tag = document.getElementsByTagName("p");
// tag[2].innerHTML = "Hello <u>tag</u>";
// tag[2].style.color = "blue";
// tag[1].style.color = "orange";

// let q = document.getElementsByClassName("two");
// console.log(q);
// q[1].style.color="red";

// document.querySelector("CSS");
// document.querySelectorAll("CSS");

// let id = document.querySelector("div");
// console.log(id);
// id.style.color = "red";


// let el = document.querySelector("h2");
// el.style.color = "red";

// // let el2 = document.querySelectorAll("h2")[1];
// let el2 = document.querySelector("h1 + h2");
// el2.style.color = "purple";

// let lists = document.querySelectorAll("li");
// // console.log(lists.length);
// for(let i=0; i < lists.length; i++){
//     lists[i].innerHTML += "!!!";  // lists[i].innerHTML = lists[i].innerHTML + "!!!"
// }

// let purple = document.querySelectorAll(".purple li");
// // console.log(purple.length);
// for(let i=0; i < purple.length; i++){
//     purple[i].style.color = "purple";
//     purple[i].innerHTML += "???";
// }

// // let m = document.querySelectorAll(".red li")[1];
// let m = document.getElementsByClassName("red")[0].getElementsByTagName("li")[1];
// m.style.color = "orange";


// document.writeln("<div id='divSample'></div>");
// // let div = document.getElementById("divSample");
// let div = document.querySelector("#divSample");
// console.log(div);
// div.textContent = `Дюбель —конструктивный элемент, который используется для укрепления винта или предмета на стене, на потолке или на полу в помещении или под открытым небом в различных материалах 
// (бетон, кирпич и прочее). Сам дюбель удерживается в конструкции при помощи сил трения. С
// некоторого времени элементы связи и укрепления, дюбели и винт (шуруп) объединяют в одно
// целое и используются, прежде всего, для тяжёлых нагрузок. Дюбели предлагаются в различных
// величинах, которые руководствуются диаметром дюбеля (и соответственно необходимым
// отверстием), измеренным в миллиметрах.`;
// div.style.background = "#f0f";
// div.style.color = "#99ffff";
// div.style.width = "50%";
// div.style.outline = "10px dotted #000";
// div.className = "resetFont";

// let cl = document.querySelector(".resetFont");
// cl.style.fontSize = "12pt";
// cl.style.fontWeight = "bold";
// cl.style.textDecoration = "line-through";


// let el = document.querySelector(".elem");

// console.log(el.closest(".content"));

// // el.style.color = "green";

// // let blue = el.closest("ul");
// // blue.style.color = "blue";

// console.log(el.closest(".container"));
// console.log(el.closest("h1"));


// let all = document.querySelectorAll("*");
// let all = document.querySelectorAll("[class='two']");
// let all = document.querySelectorAll("[class~='two']");
// let all = document.querySelectorAll("[class^='cont']");
// let all = document.querySelectorAll("[class$='ner']");
// let all = document.querySelectorAll("[class*='ne']");
// let all = document.querySelectorAll(":empty");
// console.log(all);


// let title = document.querySelector("h1");
// title.style.color = "red";

// Методы массива

// let js = ["нужно", "учить", "JavaScript"];
// document.writeln(js + "<br>");
// console.log(js);

// let last = js.pop()
// console.log(last);  // удаляет последний элемент из массива и возвращает удаленный элемент, при этом урезает массив
// console.log(js);

// js.push("JavaScript", "!");  // добавляет элемент в конец массива
// console.log(js);

// console.log(js.shift());  // удаляет первый элемент массива и возвращает удаленный элемент
// console.log(js);

// js.unshift("почему", "нужно");  // добавляет элемент в начало массива
// console.log(js);



// let mas = [];
// let n = prompt("Количество элементов массива:");
// for(let i = 0; i < n; i++){
//     let x = prompt("Введите число:");
//     // mas.push(x);  // mas[i] = x;
//     // mas.unshift(x);  // [5,4,3,2,1]    
// }
// for(let i = 0; i < n; i++){
//     document.writeln(mas[i] + " ");
// }

// let masFirst = [1, 2, 3];
// let masSecond = [11, 22, 33];
// let masEnd = [];  // [1, 11, 2, 22, 3, 33]

// for(let i=0; i<masFirst.length; i++){
//     masEnd.push(masFirst[i]);
//     masEnd.push(masSecond[i]);
// }

// document.writeln(masEnd);

// let arr = js.slice(1, 3);  // slice(bigin, end) - копирует участок массива от begin до end, не включая end
// console.log(arr);

// console.log(js.slice(1));  // если end не указан, продолжается копирование до конца массива
// console.log(js);

// let range = js.toSpliced(1, 3);  // получение элементов вне диапазона
// console.log(range);
// console.log(js);

// delete js[1];  // удалил значение по заданному индексу
// console.log(js);

// js.splice(1, 1);  // splice(start, length) - удаляет из массива указанное число элементов, начиная с позиции start, второй параметр указывает количество элемнтов для удаления
// console.log(js);

// js.splice(0, 2, "Мы", "изучаем");   // также можем добавлять элементы
// console.log(js);

// js.splice(2, 0, "сложный", "язык"); // если мы не хотим удалять элементы, а хотим их добавить, то вторым параметром указываем значение "0" и после него с третьего параметра указываем добавляемы элементы
// console.log(js);

// js.splice(-3, 0, "но", "очень", "интересный");  // работает с отрицательными индексами, отсчет ведется с конца
// console.log(js);



// let mas = [];
// let n;
// do {
//     n = prompt("Введите элемент массива:")
//     if(n >= 0){
//         mas.push(n);
//     } else{
//         break;
//     }
// } while (true);
// document.writeln(mas + "<br>");

// let k = prompt("Введите индекс для удаления от 0 по " + (mas.length - 1));
// // delete mas[k];
// if(k>= 0 && k < mas.length){
//     mas.splice(k, 1);
// } else{
//     alert("Недопустимый индекс");
// }

// for(let el of mas){
//     document.writeln(el + " ");
// }

// let index = js.indexOf("сложный");  // возращает перый индекс по которому данный элемент может быть найден в массива, или "-1", если элемент не найден
// console.log(index);

// js.push("сложный");
// console.log(js);

// let index1 = js.indexOf("сложный", index + 1);  // второй параметр указывает начальный индекс для поиска
// console.log(index1);

// let index2 = js.lastIndexOf("сложный");
// console.log(index2);


// let isValue = js.includes("интересный");  // проверяет, содержит ли массив определенное значение
// console.log(isValue);


// let str = js.join(" ");  // объединяет все элементы массива в строку через символ разделитель (объединитель)
// console.log(str);

// js.reverse();  // меняет порядок следования элемнтов в массиве на обратный
// console.log(js);



// Нужно заполнить массив на 10 элементов с клавиатуры. Необходимо найти максимальный элемент массива и переместить его в начало массива.

// 8 82 90 46 14 39 66 86 75 57
// MAX: 90
// 90 8 82 46 14 39 66 86 75 57

// let mas = [];
// let n; 

// for (let i = 0; i < 10; i++) {   // i = 0; 0 < 10
//      n = +prompt("Введите элемент массива!"); // n = 8
//     mas.push(n); 
//     document.writeln(mas[i] + " "); 
// }

// let max = mas[0];
//  for (let i = 0; i < 10; i++) {   
//      if (max < mas[i]) {  
//          max = mas[i];   
//     } 
// } 

// document.writeln("<br>");
// document.writeln("Максимальное значение  ", max);

// let ind = mas.indexOf(max);
// console.log("ind", ind);

// mas.splice(ind, 1);
// mas.unshift(max);

// document.writeln("Массив: " + mas);


// Необходимо найти уникальные элементы массива
// let array = ["5", 4, 1, 4, 7, 4, 1, 4, 7, 7, 1, 4, 5];
// let res = [];

// for(let el of array){  // 7
//     if(!res.includes(el)){  // res = [7,4,1];
//         res.push(el);
//     }
// }

// for(let el of res){
//     document.writeln(el + " ");
// }

// Запросить ФИО (массив) => ФИО (строка с пробелами между словами)

// let st = ["Фамилия", "Имя", "Отчество"]
// let fio = new Array(3);

// for (let i = 0; i < fio.length; i++) {
//     fio[i] = prompt("Введите данные:\n" + st[i]);
// }

// alert(fio.join(" "));

// let people = ["Tom", "Bob", ["Alice", "Kate", ["Sam", "Ann"]]];

// let arr = people.flat(2);  // упрощает массив с учетом указанной вложенности элементов
// console.log(arr);

// let a = [1, 2];
// let b = a.concat(3, 4);  // создает новый массив, объединяющий несколько массивов, либо в массив добавляются элементы
// console.log(b);  // [1, 2, 3, 4]
// let c = ['a', 'b', 'c'];
// let num = a.concat(b, c);
// console.log(num);

// let users =  ['Tom', 'Bob', 'Alice', 'Kate', 'Sam', 'Ann'];

// // let modified = users.with(0, "Tomas");  // изменяет элемент массива, но при этом сохраняет старое состояние исходного массива

// console.log(users);
// // console.log(modified);

// console.log(users.sort());

// let firstName = prompt("Как вас зовут:", "Елена");
// // console.log(firstName);

// let favorite = "";
// console.log(favorite);

// let arr = [];

// while (favorite != null) {
//     favorite = prompt("Введите любимое имя:");
//     arr.push(favorite);
// }

// arr[arr.length - 1] = firstName;
// arr.sort();

// console.log(arr);
// let index = arr.indexOf(firstName);
// console.log(index);

// for (let i = 0; i < arr.length; i++) {
//     if(i == index){
//          document.writeln("<span style='color: blue; text-decoration: underline;'>" + arr[i] + "</span> ");
//     } else{
//         document.writeln(arr[i] + " ");
//     }       
// }

// let n = [1, 5, 15, 2];
// n.sort((a, b) => a - b);
// console.log(n);

// ["1", "5", "15", "2"]
// ["1", "15", "2", "5"]


// Function Declaration (Определение функции)

/* 
function имя(агрументы){
    тело функции
} 
*/

// function hello(name) {
//     document.writeln("Hello, " + name + "<br>");
// }

// hello("Igor");
// hello("Irina");  // параметр


// function caption() {
//     for (let i = 1; i <= 6; i++) {
//         document.writeln("<h" + i + ">Заголовок " + i + "</h" + i + ">");
//     }
// }

// caption();

/* function test(a, b, c){
    // alert(a + b + c);  // 10 + 20 + 30
    let res = a + b + c;
    return res;
}

let n1 = 10, n2 = 20, n3 = 30, m1 = 1, m2 = 2, m3 = 3;
let sum = test(n1, n2, n3);  // 60
// let sum = 60;  // 60
// test(m1, m2, m3);  // 6
console.log(sum); */


// function test2(n, m){
//     if(m == 0){
//         return "Делить на 0 нельзя";
//     } 
//     return n / m;    
// }

// let a1 = test2(10, 2);
// let a2 = test2(10, 0);

// alert(a1);
// alert(a2);

// Попросить пользователя ввести два числа, если первое число больше второго, то найти разность этих числе, а второе число больше первого найти сумму чисел.

// function result(n, m){  // (2, 1)
//     if(n > m){  // 2 > 1
//         return n - m;  // 1
//     } else{
//         return n + m;
//     }
// }

// let a = +prompt("Введите первое число");
// let b = +prompt("Введите второе число");
// let res = result(a, b);  // 2, 1
// alert(res);

// Создать функцию для вычисления суммы элементов массива

// function sum(arr) {
//     let res = 0;
//     for (let i = 0; i < arr.length; i++) {
//         res += arr[i];
//     }
//     return res;  // 8
// }

// document.writeln(sum([3, 8, 9, 4, 1, 2, 5]) + "<br>");
// document.writeln(sum([1, 2, 5]) + "<br>");


// Создать функцию для нахождения большего из двух чисел, учитывая, что числа могут быть равны

// function max(a, b) {
//     if (a > b) {
//         document.writeln("Большее число: " + a + "<br>");
//     }
//     else if (a == b) {
//         document.writeln("Числа равны")
//     }
//     else {
//         document.writeln("Большее число: " + b + "<br>");
//     }
// }

// max(5, 2); // Большее число: 5
// max(2, 5); // Большее число: 5
// max(5, 5); // Числа равны

// Пользователь с клавиатуры вводит набор чисел. Необходимо проверить кратное ли число трем, если это так то сохранить эти числа в массив.

// let arr = new Array(9);  // [1,8,9,6,5,3,7,12,5] => [9, 6, 3, 12]


// function showArrayContent(arrayToShow) { // ['зима', 'весна', 'лето', 'осень']
//     if(arrayToShow.length == 1){
//         return arrayToShow;
//     } else{
//         let last = arrayToShow.pop();  // ['зима', 'весна', 'лето'], last = 'осень'
//         let str = arrayToShow.join(", "); // ['зима', 'весна', 'лето'] => 'зима, весна, лето'
//         let res = str + " и " + last;  // 'зима, весна, лето и осень'
//         return res;
//     }
// }

// let a = new Array('Текст');
// let b = new Array('день', 'ночь');
// let c = new Array('зима', 'весна', 'лето', 'осень');
// // alert(showArrayContent(a)); 
// // alert(showArrayContent(b)); 
// alert(showArrayContent(c));

// Function expression (функциональное выражение)

/* 
let func = function(аргументы){
    // тело функции
}

func(параметры);
*/
// alert(sum1(20, 30));  // 50
// function sum1(a, b) {
//     return a + b;
// }

// let sum2 = function (a, b) {
//     return a + b;
// }
// alert(sum2(2, 3));  // 5


// Дан массив целых чисел. Определить среднее арифметическое этих чисел используя функцию

// let average = function (arr) {
//     let sum = 0;
//     for(let i=0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return (sum / arr.length).toFixed(2);
// }

// document.writeln(average([3, 8, 9, 4, 1, 2, 5]) + "<br>");
// document.writeln(average([8, 2, 4]) + "<br>");

// Написать функцию нахождения максимального числа из массива

// let max = function (arr) {
//     let num1 = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (num1 < arr[i]) {
//             num1 = arr[i];  // 9
//         }
//     }
//     return num1;
// }

// document.writeln(max([3, 8, 9, 4, 1, 2, 5]) + "<br>");  // 9
// document.writeln(max([1, 2, 5]) + "<br>");  // 5


//Immediately Invoked Function Expression (IIFE) - самовызывающаяся (анонимная функция)

// (function(){
//     alert("Привет мир!");
// })();

// (function(n){
//     alert(n * n);
// })(4);


// Arrow Function (стрелочная функция)

// function test(a, b, c){
//     let res = a + b + c;
//     return res;
// }

// alert(test(10, 20, 30));  // 60

// let test2 = (a, b, c) => a + b + c;
// alert(test2(1, 2, 3));  // 6


// let hello = () => alert("Hello");

// hello();

// let double = n => n ** 2;

// let arr = [5, 3, 8, 2];
// let res = [];
// for(let i = 0; i<arr.length; i++){
//     res[i] = double(arr[i]);
// }

// console.log(res);

// let symbol = (count, a, b) => {
//     for (let i = 0; i < count; i++) { // 2
//         document.writeln(i % 2 ? b : a);
//     }
//     document.writeln("<br>");
// }

// symbol(9, "+", "-");
// symbol(7, "X", "0");

// let change = lst => {
//     let temp = lst[lst.length - 1];  
//     lst[lst.length - 1] = lst[0];  
//     lst[0] = temp;  
//     // [lst[0], lst[lst.length-1]] = [lst[lst.length-1], lst[0]];
//     return lst;
// }

// // let change = lst => {
// //     let last = lst.pop();
// //     let first = lst.shift();
// //     lst.push(first);
// //     lst.unshift(last);
// //     return lst;
// // }

// document.writeln(change([1, 2, 3]) + "<br>");
// document.writeln(change([9, 12, 33, 54, 105]) + "<br>");
// document.writeln(change(["с", "л", "о", "н"]) + "<br>");


// let a = 5;
// let b = 7;
// console.log("a =", a, "b =", b);

// let temp = a;  // 5
// a = b;  // a = 7
// b = temp;  // b = 5

// console.log("a =", a, "b =", b);

// let isGreater = (x, y) => x > y ? true : false;

// document.writeln(isGreater(10, 5) + "<br>");
// document.writeln(isGreater(5, 10) + "<br>");

// let checkPassword = password => {
//     let hasUpper = false;
//     let hasLower = false;
//     let hasNum = false;

//     for(let ch of password){
//         // console.log(ch);
//         if("A" <= ch && ch <= "Z"){
//             hasUpper = true;
//         } 
//         if("a" <= ch && ch <= "z"){
//             hasLower = true;
//         }
//         if("0" <= ch && ch <= "9"){
//             hasNum = true;
//         }
//     }

//     if(password.length >= 8 && hasUpper && hasLower && hasNum){
//         return true;
//     }
//     return false;
// }

// let psw = prompt("Введите пароль:");
// if(checkPassword(psw)){
//     document.writeln("Это надежный пароль");
// } else{
//     document.writeln("Это ненадежный пароль");
// }

// 5! = 1 * 2 * 3 * 4 * 5  => 120

// let factorial = n => {
//     let fact = 1;
//     for(let i = 1; i <= n; i++){
//         fact *= i;     
//     }
//     return fact;
// }

// document.writeln(factorial(7));

// function getNames(){
//     let firstName = "Irina", lastName = "Vetrova", age=25;
//     return [firstName, lastName, age];
// }

// // let names = getNames();
// // console.log(names);
// // let surname = names[1];
// // console.log(surname);
// let [name1, surname, year] = getNames(); // деструктуризация
// console.log(name1);
// console.log(surname);
// console.log(year);

// function isOdd(number){
//     return number % 2;  // 0 или 1
// }

// function isEven(number){
//     return number % 2 == 0;  // 0 или 1
// }

// function filter(numbers, fn) {
//     let results = [];
//     for(let number of numbers){
//         if(fn(number)){
//             results.push(number);
//         }
//     }
//     return results;
// }

// let num = [1, 2, 4, 7, 3, 5, 6];
// console.log(filter(num, isOdd));  // [1, 7, 3, 5]
// console.log(filter(num, isEven));  // [2, 4, 6]


// function filter(numbers, fn) {
//     let results = [];
//     for (let number of numbers) {  // 4
//         if (fn(number)) {
//             results.push(number);
//         }
//     }
//     return results;
// }

// let num = [1, 2, 4, 7, 3, 5, 6];
// let arr = [8, 9, 8, 7, 1, 2, 3];

// // let oddNumbers = filter(num, function(number) {
// //     return number % 2;
// // });
// let oddNumbers = filter(num, number => number % 2);
// let oddNumbers2 = filter(arr, number => number % 2);
// let evenNumbers = filter(num, number => number % 2 == 0);

// console.log(oddNumbers);  // [1, 7, 3, 5]
// console.log(oddNumbers2);  // [1, 7, 3, 5]
// console.log(evenNumbers);  // [2, 4, 6]


// forEach() - цикл

// let numbers = [1, 2, 3, 4, 5, 6];

// numbers.forEach(function(n){
//     document.writeln("Квадрат числа " + n + " равен: " + n * n + "<br>");    
// });

// numbers.forEach(n => document.writeln("Квадрат числа " + n + " равен: " + n * n + "<br>"));

// ["Hello", "World"].forEach(alert);


// let textArray = ["Hello", "World"];
// for(let i = 0; i <textArray.length; i++){
//     alert(textArray[i]);
// }

// ["Hello", "World"].forEach((item, index, array) => {
//     alert(`У ${item} индекс ${index} в ${array}`)
// })

// let numbers = [1, 2, 3, 4, 5, 6];

// let squares = numbers.map(n => n ** 3);
// console.log(squares);


// let lengths = ["Hello", "World", "!"].map(item => item.length);
// console.log(lengths);

// let number = [1, -12, 8, -4, 25, 42];

// let passed = number.filter(n => n > 0);
// console.log(passed);



// let mas = [];
// for(let i = 0; i < number.length; i++){
//     if(number[i] > 0){
//         mas.push(number[i]);
//     }
// }
// console.log(mas);

// let colors = ["red", "orange", "green", "yellow"];
// let newColors = colors.filter(color => color.length > 5);
// console.log(newColors);


// let colors = ["red", "orange", "green", "yellow"];
// let newColors = colors.filter(function(color){
//     return color.length > 5;
// });
// console.log(newColors);

// let number = [1, -12, 8, -4, 25, 42];

// let passed = number.every(n => n > 0);  // проверяет все ли элементы соответствуют определенному условию
// console.log(passed);  // false


// let number = [1, -12, 8, -4, 25, 42];

// let passed = number.some(n => n > 0);  // проверяет на соответствие хотябы один из элементов 
// console.log(passed);  // true

// массив.reduce и массив.reduceRight
// используются для вычисления единого значения на основе массива

// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current) => sum + current, 0);

// document.writeln(result);

// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current) => sum + current);

// document.writeln(result);

// document.writeln(Math.floor(7.9) + "<br>");  // округление в нижнюю сторону
// document.writeln(Math.ceil(7.2) + "<br>");  // округление в верхнюю сторону
// document.writeln(Math.round(7.5) + "<br>");  // округление по законам математики

// (function(){
//     document.writeln(Math.random() + "<br>");    // генерирует случайное число от 0 до 1 (не включая)
// })();

// (function(min, max){
//     document.writeln(Math.floor(Math.random() * (max - min) + min)+ "<br>");    
// })(2, 9);  // случайное число из диапазона от 2 до 9 (не включая)

// document.writeln(Math.floor(Math.random() * 9) + "<br>");  // от 0 до 9 (не включая)

// document.writeln(Math.floor(Math.random() * 7 + 2) + "<br>");  // от 2 до 9 (не включая)

// // от 6 до 14 (не включая)
// document.writeln(parseInt(Math.random() * 8 + 6) + "<br>");
// let randomWorld = ["Цикл", "Массив", "Условие", "Функция", "Переменная"];

// let pickRandom = function(arr){
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// let word = pickRandom(randomWorld);
// document.writeln(word);


// let randomWorld = ["Цикл", "Массив", "Условие", "Функция", "Переменная"];
// let word = pickRandom(randomWorld);
// document.writeln(word);


// function pickRandom(arr){  // ["Цикл", "Массив", "Условие", "Функция", "Переменная"]
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// document.writeln("<div id='block'></div>");
// let id = document.getElementById("block");
// id.style.height = "100px";
// id.style.width = "100px";
// // id.style.background = "rgb(255, 0, 0)";
// createColor();

// function createColor() {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     // id.style.background = "rgb(" + r + ", " + g + ", " + b + ")";
//     id.style.background = `rgb(${r}, ${g}, ${b})`;
// }

// document.writeln("<div id='block'></div>");
// let id = document.getElementById("block");
// id.style.height = "100px";
// id.style.width = "100px";
// id.style.background = `rgb(${createColor()}, ${createColor()}, ${createColor()})`;


// function createColor() {
//     return Math.floor(Math.random() * 256);
// }

// function fn(a, b, ...args) {
//     console.log("a =", a, "b =", b, "args =", args);
// }

// fn(1);
// fn(1, 2, 3, "A", "B", "C");

// function sum(...args) {
//     let total = 0;
//     for(let a of args){
//         total += a;
//     }
//     return total;
// }

// function sum(...args) {
//     return args
//         .filter(function(e){
//             return typeof e == 'number'
//         })
//         .reduce(function(prev, curr){
//             return prev + curr
//         });
// }

// function sum(...args) {  // [10, "Hi", null, undefined, 20]  // [10, 20]
//     return args.filter(e => typeof e === 'number').reduce((prev, curr) => prev + curr);
// }

// console.log(sum(10, "Hi", null, undefined, 20));

// let combine = (...arg) => arg.reduce((prev, curr) => prev + " " + curr);

// console.log(combine("Hello", "World", "!"));

// function hello(name){
//     name = name || "незнакомец";
//     document.writeln("Привет, " + name + "!<br>");    
// }

// function hello(name="незнакомец"){
//     document.writeln("Привет, " + name + "!<br>");    
// }

// hello("Сергей");
// hello();

// function fn(a=0, b=0) {
//     console.log(a + b);
// }

// fn(1, 2);
// fn(1);
// fn();

// function rectangle(w, h=100, fon="gold"){
//     document.writeln("<div id='shape'></div>");
//     let id = document.getElementById("shape");

//     id.style.width = w + "px";
//     id.style.height = h + "px";
//     id.style.background = fon;
// }

// // rectangle(200, 100, "green");
// // rectangle(200, 100);
// // rectangle(300);
// rectangle(50, 50, "red");

// let j = 2;  // глобальная переменная

// function ch(){
//     let j = 3;  // локальная переменная
// }

// let j = 2;  

// function ch(){
//     j = 3;  
// }

// // ch();
// console.log(j);  // 3



// function func(num1, num2) {
//     function square(num) {
//         return num * num;
//     }
//     return square(num1) + square(num2);
// }

// console.log(func(2, 3)); // 2 * 2 + 3 * 3 => 13
// console.log(square(4));



// function test(num1, num2){ // 5, 2
//     // let num1, num2; 
//     function func(){
//         console.log(num1 + num2);   //    5 + 2
//     }
//     num1 = 2;  // 2
//     func();
// }
// // console.log(num1 + num2);  
// test(5, 2);

// function test(num){  // 5
//     function func(localNum){  // 7
//         console.log(localNum);  // 7      
//     }
//     func(num + 2); // 5 + 2 = 7
// }

// test(5);

// function func(num1){
//     return function(num2){
//         return num1 + num2;
//     }
// }

// console.log(func(1)(2));

// func(2)(3)(4)(5)() => [2, 3, 4, 5]


// function func(num2) {  // 2
//     return function (num3) { // 3
//         return function (num4) { // 4
//             return function (num5) {  // 5
//                 return function () {
//                     return [num2, num3, num4, num5];
//                 }
//             }
//         }
//     }
// }

// console.log(func(2)(3)(4)(5)());

// function hello(){
//     console.log("Привет");    
// }

// let fn = hello;
// console.log(fn);

// Замыкание

// function test(){
//     let num = 5;

//     return function(){
//         console.log(num);        
//     }
// }

// let func = test();
// // console.log(func);
// func();

// function outer(n){
//     return function(x){
//         return n + x;
//     }
// }

// let add5 = outer(5);
// console.log(add5(10));


// let add6 = outer(6);
// console.log(add6(10));


// function test(city){
//     let num = 0;  // 3   4

//     return function(){
//         num++;
//         console.log(city, num);
//     }
// }

// let func1 = test("Москва");
// func1();
// func1();
// func1();
// let func2 = test("Сочи");
// func2();
// func2();
// func2();
// func2();

// func1();

// function isBetween(a, b){  // 3, 6
//     return function (x){  // 6
//         return x >= a && x <= b;  // 6 >= 3 && 6 <= 6
//     }
// }


// function isArray(arr){  // [1, 2, 10].includes(6)
//     return function(x){
//         return arr.includes(x);
//     }
// }

// let arr = [2, 3, 4, 1, 7, 5, 6];
// console.log(arr.filter(isBetween(3, 6)));
// // написать функцию, которая будет выбирать только значения между 3 и 6 (включительно)

// console.log(arr.filter(isArray([1, 2, 10])));

// написать функцию, которая будет выбирать только элементы совпадающие с одним из элеменотов массива [1, 2, 10]



// let mas = ["копеек", "копейка", "копейки", "- число за препделами диапазона"];
// let first = -5;
// let last = 99;
// let ch = prompt("Введите количество копеек", 5);
// console.log(ch, countKop(first, last, ch)(mas));

// function countKop(start, end, num) {
//     // if(num<0)
//     //     num = (-1) * num
//     let n = num % 10;
//     let m = num % 100;
//     // let chislo;
//     // if (start <= num && num <= end) {
//     //     chislo = n == 1 && m != 11 ? 1
//     //         : 2 <= n && n <= 4 && !(12 <= m && m <= 14) ? 2
//     //             : 0
//     // } else {
//     //     chislo = 3;
//     // }
//         //   1 <= 100 && 100 <= 99
//     let chislo = !(start <= num && num <= end) ? 3
//         : n == 1 && m != 11 ? 1
//             : 2 <= n && n <= 4 && !(12 <= m && m <= 14) ? 2
//                 : 0
//     return arr => arr[chislo];
// }

// let str = "I\'m a JavaScript \"programmer\"";

// document.writeln(str + "<br>");
// document.writeln(str[2] + "<br>");

// str = str[2] + "y";
// document.writeln(str + "<br>");
// document.writeln(str.length + "<br>");  // 29

// document.writeln(str[6] + "<br>");
// document.writeln(str[str.length - 1] + "<br>");
// document.writeln(str.at(-1) + "<br>");
// document.writeln(str.at(6) + "<br>");
// document.writeln(str.at(-2) + "<br>");

// for(let ch of str){
//     console.log(ch);    
// }

// let st1 = "Написать скрипт подсчитывающий количество каждой буквы русского алфавита в тексте";
// countLetters(st1);

// let st2 = "абббабввбабвбвббабвббабв";
// countLetters(st2);


// function countLetters(st){      
//     let letters = ["а", "б", "в"];
//     for(let i=0; i < letters.length; i++){  // ["а", "б", "в"]
//         let count = 0;  // 0
//         for(let j=0; j < st.length; j++){ // "абббабввбабвбвббабвббабв"
//             if(st[j] == letters[i]){  // в == в
//                 count++;  // 6
//             }
//         }
//         document.writeln("Символ '" + letters[i] + "' встретился " + count + " раз<br>");
//     }
// }
// let newStr = str.toUpperCase();
// document.writeln(newStr + "<br>");  // преобразование в верхний регистр

// document.writeln(str.toLowerCase() + "<br>");  // преобразование в нижний регистр

// document.writeln(str + "<br>");

// let n = prompt("Введите имя", "иГоРь");
// alert(first(n));

// function first(st){
//     // let newStr = st.at(0).toUpperCase();
//     let newStr = st[0].toUpperCase();

//     for(let i=1; i< st.length; i++){
//         // newStr += st.at(i).toLowerCase();
//         newStr += st[i].toLowerCase();
//     }

//     return newStr;
// }

// let str1 = "Я учу JavaScript. Мне нравится JavaScript";

// str = str.concat(". ", str1);
// document.writeln(str + "<br>");

// let message = "*";
// document.writeln(message.repeat(30) + "<br>");

// document.writeln(str.indexOf("JavaScript") + "<br>");  // возвращает индекс, на котором находится подстрока или "-1" если ничего не найдено

// document.writeln(str.indexOf("JavaScript", 7) + "<br>");
// document.writeln(str.lastIndexOf("JavaScript") + "<br>");  // последнее совавдение

// let email;

// do{

//     email = prompt("Введите email:", "test");
//     if(email.indexOf("@") == -1){
//         alert("Некорректно. Повторите операцию");
//     } else {
//         break;
//     }

// } while(true);

// alert("Спасибо за сотрудничество");
// do {
//     email = prompt("Введите email:", "test");
//     if (email.indexOf("@") == -1) {
//         alert("Некорректно. Повторите операцию");
//         continue;
//     }
//     break;
// } while (true);

// alert("Спасибо за сотрудничество");

// document.writeln(str.includes("JavaScript") + "<br>");
// document.writeln(str.startsWith("JavaScript", 6) + "<br>");
// document.writeln(str.endsWith("JavaScript") + "<br>");
// document.writeln(str.length + "<br>");

// console.log(str.split(" ", 3));
// console.log(str.split(". "));
// console.log("05-04-2026".split("-"));


// let arr = str.split("JavaScript");
// console.log(arr);
// let st = arr.join("C++");
// document.writeln(st + "<br>");
// document.writeln(message.repeat(30) + "<br>");
// // let text = st.replace("C++", "JavaScript");
// let text = st.replaceAll("C++", "JavaScript");
// document.writeln(text + "<br>");

// document.writeln(str.slice(0, 3) + "<br>");
// document.writeln(str.slice(6) + "<br>");
// document.writeln(str.slice(-23, -10) + "<br>");
// document.writeln(str.slice(3, 0) + "<br>");
// document.writeln(message.repeat(30) + "<br>");

// document.writeln(str.substring(0, 3) + "<br>");
// document.writeln(str.substring(6) + "<br>");
// document.writeln(str.substring(3, 0) + "<br>");


// background-color => backgroundColor
// list-style-type => listStyleType

// let style = prompt("Введите свойство CSS", "background-color");
// alert(def(style));

// function def(st){
//     let arr = st.split("-");
//     console.log(arr);
//     for(let i=1; i < arr.length; i++){
//         // arr[i] = arr[i].at(0).toUpperCase() + arr[i].slice(1);
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//     }

//     return arr.join("");
// }

// let hello = "   Hello  ";
// console.log(">" + hello + "<");
// let beforeLength = hello.length;
// console.log("Длина строки до:", beforeLength);

// hello = hello.trim();
// console.log(">" + hello + "<");
// let afterLength = hello.length;
// console.log("Длина строки после:", afterLength);

// let add = hello.padStart(15, "_");
// console.log(">" + add + "<");
// add = hello.padEnd(15, "_");
// console.log(">" + add + "<");

// document.writeln(1);


// document.writeln("hello" > "Hello");  // 104 > 72
// document.writeln("hello".codePointAt(0));
// document.writeln("Hello".codePointAt(0));
// document.writeln("Ё".codePointAt(0));  // 1025
// document.writeln("А".codePointAt(0));  // 1040
// document.writeln("Я".codePointAt(0));  // 1071
// document.writeln("а".codePointAt(0));  // 1072
// document.writeln("я".codePointAt(0));  // 1103
// document.writeln("ё".codePointAt(0));  // 1105

// Ё..А-Яа-я..ё

// document.writeln(String.fromCodePoint(104));
// document.writeln(String.fromCodePoint(1025));

// let a = 97;
// let b = 122;

// if (a > b) {
//     for (let i = b; i <= a; i++) {
//         document.writeln(String.fromCodePoint(i));
//     }
// } else {
//     for (let i = a; i <= b; i++) {
//         document.writeln(String.fromCodePoint(i));
//     }
// }
// let shortest = 12;
// let longest = 18;
// let minASCII = 33;
// let maxASCII = 126;

// function randomPassword() {
//     let randomLength = rand(shortest, longest);
//     let res = "";
//     for (let i = 0; i < randomLength; i++) {
//         let randomChar = String.fromCodePoint(rand(minASCII, maxASCII));
//         res = res + randomChar;
//     }

//     return res;
// }

// function rand(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// document.writeln("Ваш случайный пароль: " + randomPassword());

// Рекурсивная функция

// function elevator(n){  // 0
//     if(n == 0){
//         document.writeln("Вы в подвале<br>");
//         return;
//     }
//     console.log(n);

//     elevator(n-1);  // 5 4 3 2 1
//     document.writeln(n + " ");
// }

// let n1 = prompt("На каком вы этаже: ", 5);
// elevator(n1);


// Вычислить сумму чисел от 1 до n 

// function sum(n){ // 1
//     if(n <= 1){
//         return n;  // 1
//     }
//     return n + sum(n - 1);  // 15    
// }

// document.writeln(sum(5));  // 1 + 2 + 3 + 4 + 5 = 15


// let chislo = +prompt("Число:", 2);
// let stepen = +prompt("Степень:", 4);
// document.writeln(chislo, " в степени ", stepen, " = ", degree(chislo, stepen));


// function degree(ch, st){ // 0
//     if(st){
//         return ch * degree(ch, st - 1);  // 2 * 2 * 2 * 2 * 1
//     }
//     return 1;
// }

// 5! = 1 * 2 * 3 * 4 * 5

// let factorial = n => {
//     let fact = 1;
//     for(let i = 1; i <= n; i++){
//         fact *= i;
//     }
//     return fact;
// }

// document.writeln(factorial(5));

// стек:  
// 0 > 0 ? 0 : 1  
// let factorial = n => (n > 0) ? n * factorial(n - 1) : 1;

// function factorial(n) {
//     if (n <= 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// document.writeln(factorial(5));

// 1 * 1 = 1
// 2 * 1 = 2
// 3 * 2 = 6
// 4 * 6 = 24
// 5 * 24 = 120

// function toStr(n, base){ // 15 
//     let convert = "0123456789ABCDEF";
//     if(n < base){  // 15 < 16
//         return convert[n];  // 'F'
//     } else {
//         return toStr(parseInt(n / base), base) + convert[n % base];  // 'E'
//         // return 'FE'
//     }
// }

// document.writeln(toStr(254, 16));

// function loadStr(){
//     alert("Страница была загружена");
// }

// let m = document.getElementById("mes");

// function over(){    
//     m.style.color = "red";
// }

// function out(){
//     m.style.color = "yellow";
// }

// function change(){
//     let id = document.querySelector("h2");
//     id.style.color = "blue";
// }

// function randomBg(){
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     document.body.style.background = `rgb(${r},${g},${b})`;    
// }

// let newImg = document.getElementById("newImg");

// function on(){
//     newImg.src = "night.png";
// }

// function off(){
//     newImg.src = "day.png";
// }

// let but = 5;

// let but = document.getElementById("but");

// but.onclick = function(){
//     alert("Спасибо");
// }

// function hello(){
//     alert("Спасибо");
// }

// but.onclick = hello;

// let hex = "0123456789ABCDEF".split("");
// console.log(hex);  // ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

// let button = document.getElementById("btn");
// let color = document.querySelector(".color");

// button.onclick = () => {
//     let hexColor = generateHex();
//     console.log(hexColor);
//     color.textContent = hexColor;
//     document.body.style.background = hexColor;
// }

// function generateHex(){
//     let hexColor = "#";
//     for(let i=0; i<6; i++){
//         hexColor += hex[getRandomNumber()];
//     }
//     return hexColor;
// }

// function getRandomNumber(){
//     return Math.floor(Math.random() * hex.length);
// }

// function change(id){
//     id.innerHTML = "Новый текст";
//     id.style.color= "red";
// }

// function change(id){
//     id.innerHTML = "Новый текст";
//     id.style.color= "red";
// }

// function setColor(color){
//     document.body.style.background = color.className;
// }

//№5 Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
// let a = prompt("Введите первое число: ");  // "9021"
// let b = prompt("Введите второе число: ");  // "-9789"

// if(a.at(0) == "-"){
//     a = String(a * -1);  
//     console.log(a);    
// }
// if(b.at(0) == "-"){
//     b = String(b * -1); // "9"
//     console.log(b);
// }

// if(a.at(0) == b.at(0)){  // "9" == "9"
//     console.log("Первые цифры одинаковые");
// }else{
//     console.log("Первые цифры не одинаковые");
// }

// let a = prompt("Input1", "qwe");
// let b = prompt("Input2", "qaz");

// if(a < 0) {
//     a = String(a * -1);
// }
// if (b < 0) {
//     b = String(b * -1);
// }
// if (a.at(0) == b.at(0)) {
//     console.log("=");

// } else {
//     console.log("-");
// }

// let a = +prompt("Input1");
// let b = +prompt("Input2");

// if(a < 0) {
//     a = a * -1;
// }
// if (b < 0) {
//     b = b * -1;
// }
// if (String(a).at(0) == String(b).at(0)) {
//     console.log("=");

// } else {
//     console.log("-");
// }

// let el = document.querySelector("#elem");

// // элемент.addEventListener("тип события", функция);

// el.addEventListener("click", function(){
//     el.innerHTML = "Новый текст";
// });

// el.addEventListener("contextmenu", function(){
//     el.style.color = "green";
//     el.style.background = "yellow";
// });

/* // Считываем элементы input и list
let searchInput = document.querySelector("#searchInput");
let list = document.querySelectorAll("#list li");

// Добавляем прослушиватель событий при вводе в input
searchInput.addEventListener("input", function(){
    // Получаем поисковый запрос
    let searcTerm = this.value.toLowerCase();
    // console.log(searcTerm);
    // console.log(list.length);

    // Перебираем элементы списка
    for(let i=0; i < list.length; i++){
        let item = list[i];
        // Если поисковый запрос найден в тексте элемента, показываем его
        if(item.textContent.toLowerCase().indexOf(searcTerm) !== -1){
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }        
    }
}); */

// let but = document.querySelector("button");

// but.addEventListener("click", function(event){
//     console.log(event);

// })


// let buttons = document.querySelectorAll("input");

// let handleClick = function(event){
//     console.log("Кликнули по:", event.target.value);    
// }

// for(let i=0; i < buttons.length; i++){
//     buttons[i].addEventListener("click", handleClick);
// }

// document.addEventListener("mousemove", function(event){
//     let c = document.querySelector("#ev");
//     let x = event.clientX;
//     let y = event.clientY;
//     console.log(event);

//     c.textContent = "X = " + x + ", Y = " + y;

//     c.addEventListener("dblclick", function(event){
//         event.target.style.background = "red";
//     })
// });


// let section = document.querySelector("section");
// let div = document.querySelector("div");
// let p = document.querySelector("p");

// section.addEventListener("click", function(){
//     section.style.background = "red";
// });

// div.addEventListener("click", function(event){
//     div.style.background = "orange";
//     event.stopPropagation();
// });

// p.addEventListener("click", function(event){
//     p.style.background = "yellow";
// });

// let link = document.querySelector("a");

// link.addEventListener("click", function(event){
//     event.preventDefault();
//     console.log("Переход по ссылке отменен");    
// });

// let input = document.querySelector("#but");
// input.addEventListener("click", handle);

// function handle(){
//     alert("Спасибо");
//     input.removeEventListener("click", handle);
// }

// setTimeout(функция, задержка);

// setTimeout("alert('Текст')", 3000);
// setTimeout(hello, 3000);
// setTimeout("hello('Привет', 'друг')", 3000);
// setTimeout(hello, 3000, 'Привет', 'друг');

// function hello(h, n){
//     alert(h + ", " + n + "!");
// }

// setTimeout(hello);

// function hello(){
//     alert("Привет!");
// }

// document.writeln("<div id='dt'>Создание анимированного текста</div>");

// let tag = document.querySelector("#dt");
// let text = document.querySelector("#dt").innerHTML;
// let i = 0;

// window.addEventListener("load", animText);

// function animText() {
//     tag.innerHTML = text.substring(0, i);
//     i++;

//     if(i > text.length){
//         i = 0;
//     }

//     setTimeout(animText, 300);
// }


// let d = new Date();
// document.writeln(d + "<br>");
// document.writeln(d.toDateString() + "<br>");
// document.writeln(d.getFullYear() + "<br>");  // 2026
// document.writeln(d.getMonth() + "<br>");  // 3, месяцы от 0 по 11
// document.writeln(d.getDate() + "<br>");  // 12
// document.writeln(d.getDay() + "<br>");  // 0 - воскресенье, 1 - понедельник, ..., 6 - суббота


// let d = new Date(2024, 11, 18, 10, 0, 0).getTime();
// console.log(d);

// Сегодня: 12 апреля 2026, Воскресенье

// setInterval(функция, интервал);

// document.writeln("<input type='button' value='Start/Stop'>");
// document.querySelector("input").addEventListener("click", st);

// function setColor(){
//     let x = document.body;
//     x.style.background = (x.style.background == "yellow") ? "orange" : "yellow";
// }

// let act, run;  // run = undefind  // true
// console.log(run);

// function st(){
//     if(!run){  // !false => true
//         act = setInterval(setColor, 1000);
//         // run = true;
//     } else{
//         clearInterval(act);
//         // run = false;
//     }
//     run = !run;   // true 
// }

// document.writeln("<input type='button' value='Start'>");
// document.writeln("<input type='button' value='Stop'>");
// document.querySelector("input").addEventListener("click", st);
// document.querySelectorAll("input")[1].addEventListener("click", st2);

// function setColor(){
//     let x = document.body;
//     x.style.background = (x.style.background == "yellow") ? "orange" : "yellow";
// }

// let act;
// function st(){
//     act = setInterval(setColor, 1000);
//     console.log(act);

// }

// function st2(){
//     clearInterval(act);
// }

// document.writeln("<div id='text'>Время</div>");

// window.addEventListener("load", () => setInterval(time, 1000));

// // window.addEventListener("load", function(){
// //     setInterval(time, 1000)
// // });

// function time(){
//     let d = new Date();
//     let hour = d.getHours();
//     let min = d.getMinutes();
//     let sec = d.getSeconds();
//     if(min < 10){
//         min = "0" + min;
//     }
//     if(sec < 10){
//         sec = "0" + sec;
//     }
//     let t = hour + ":" + min + ":" + sec;
//     document.querySelector("#text").innerHTML = t; 
// }

// document.writeln(`
//         <input type="text" id="timer" value="0.0" size="4">
//         <input type="button" value="Start/Stop">
//         <input type="button" value="Clear">
//     `);

// document.querySelector("input[value='Start/Stop']").addEventListener("click", startTimer);
// document.querySelector("input[value='Clear']").addEventListener("click", resetTimer);

// let act, run;
// function startTimer() {
//     if (!run) {
//         act = setInterval(incTimer, 100);
//     } else {
//         clearInterval(act);
//     }
//     run = !run;
// }

// let tsec = 0;
// function incTimer() {
//     tsec++;
//     let t = tsec / 10.0;
//     if (tsec % 10 == 0) {
//         t += ".0";
//     }
//     document.getElementById("timer").value = t;
// }

// function resetTimer(){
//     document.getElementById("timer").value = "0.0";
//     tsec = 0;
// }

// let countdownElement = document.querySelector(".countdown");
// let items = document.querySelectorAll(".countdown-item > h4");

// let countdownDate = new Date(2026, 3, 18, 16, 30, 0).getTime();

// function getCountTime() {
//     let now = new Date().getTime();

//     let distance = countdownDate - now;


//     /*
//     1c = 1000мс
//     1м = 60с
//     1ч = 60м
//     1д = 24ч
//     */

//     let oneDay = 24 * 60 * 60 * 1000;
//     let oneHour = 60 * 60 * 1000;
//     let oneMinute = 60 * 1000;

//     let days = Math.floor(distance / oneDay);
//     let hours = Math.floor(distance % oneDay / oneHour);
//     let minutes = Math.floor(distance % oneHour / oneMinute);
//     let seconds = Math.floor(distance % oneMinute / 1000);

//     let values = [days, hours, minutes, seconds];

//     items.forEach(function(item, index){
//         item.textContent = values[index];
//     })

//     if(distance < 0){
//         clearInterval(countdown);
//         countdownElement.innerHTML = "<h4 class='expired'>Время вышло!</h4>"
//     }
// }

// let countdown = setInterval(getCountTime, 1000);



// getCountTime();

// let but = document.querySelector("#cl");
// but.addEventListener("click", myMove);

// function myMove() {
//     let elem = document.getElementById("animate");
//     let pos = 0;
//     let id = setInterval(frame, 20);

//     function frame() {
//         if (pos == 350) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }
// }

// document.image.border = "1";
// document.writeln("<br>Ширина изображения: " + document.image.width);
// document.writeln("<br>Высота изображения: " + document.image.height);

// document.image.width = 200 + 5;
// document.image.height = 50;

// document.writeln("*********************************************")
// document.writeln("<br>Ширина изображения: " + document.image.width);
// document.writeln("<br>Высота изображения: " + document.image.height);

// document.image.src = "blue_star.png";

// document.image.addEventListener("click", changeImage);

// let flag = 0;
// function changeImage(){
//     if(flag == 0){
//         document.image.src = "blue_star.png";
//         flag = 1;
//     } else{
//         document.image.src = "golden_star.png";
//         flag = 0;
//     }
// }

// let array = new Array("2.jpg", "3.jpg", "4.jpg");

// document.writeln("<input type='button' value='<' name='left'>");
// document.writeln("<img id='sl' src='"+ array[0] +"'>");
// document.writeln("<input type='button' value='>' name='right'>");

// document.getElementsByName("right")[0].addEventListener("click", setRight);
// document.getElementsByName("left")[0].addEventListener("click", setLeft);

// let i = 0;
// let image = document.getElementById("sl");

// function setRight(){
//     i++;
//     if(i == array.length){
//         i = 0;
//     }
//     image.src = array[i];
// }

// function setLeft(){
//     i--;
//     if(i < 0){
//         i = array.length - 1;
//     }
//     image.src = array[i];
// }

// let imgTime = ["c0.gif", "c1.gif", "c2.gif", "c3.gif", "c4.gif", "c5.gif", "c6.gif", "c7.gif", "c8.gif", "c9.gif"];
// let masImg = document.querySelectorAll("#block img");
// clock();


// function clock() {
//     let time = new Date();
//     let hours = time.getHours();
//     let min = time.getMinutes();
//     let second = time.getSeconds();
//     getImg(hours, min, second);
//     setTimeout(clock, 1000);
// }

// function getImg(h, m, s) {  //h = 15
//     masImg[0].src = imgTime[parseInt(h / 10)];
//     masImg[1].src = imgTime[h % 10];

//     masImg[3].src = imgTime[Math.floor(m / 10)]; 
//     masImg[4].src = imgTime[m % 10];

//     if(s<10){
//         masImg[6].src = imgTime[0]; 
//         masImg[7].src = imgTime[String(s)[0]];
//     } else{
//         masImg[6].src = imgTime[String(s)[0]]; 
//         masImg[7].src = imgTime[String(s)[1]];
//     }    
// }

// document.querySelector("button").addEventListener("click", function(){
//     console.log(document.querySelector("input").value);
// })

// let a = 5;
// let b = 7;
// console.log("a:", a);
// console.log("b:", b);

// let temp = a;
// a = b;
// b = temp;

// console.log("a:", a);
// console.log("b:", b);


// alert(document.documentElement.innerHTML);
// alert(document.head.innerHTML);
// alert(document.body.innerHTML);

// let myTitle = document.querySelector("h1").innerHTML;
// console.log(myTitle);
// let title3 = document.querySelector("h3").firstChild.nodeValue;
// let title3 = document.querySelector("h3").lastChild.nodeValue;
// let title3 = document.querySelector("h3").childNodes[0].nodeValue;
// console.log(title3);

// document.querySelector("h1").innerHTML = document.querySelector("h3").innerHTML;

// let myTitle = document.querySelector("h1").firstChild;
// // alert(myTitle.nodeName);  // H1
// alert(myTitle.nodeType);  // 

// let elem = document.querySelector("#root");

// let tag = document.createElement("p");  // <p></p>
// let node = document.createTextNode("Новый текст!!!")  // "Новый текст!!!"
// tag.append(node);  // <p>Новый текст!!!</p>

// elem.append(tag);  // добавляет новый элемент последним дочерним элементом внутри родительского

// elem.prepend(tag);  // добавляет новый элемент первым дочерним элементом внутри родительского

// elem.before(tag);  // добавляет новый элемент до выбранного id

// elem.after(tag);  // добавляет новый элемент после выбранного id

// elem.replaceWith(tag);  // заменяет новым элементом выбранный id


/* let tree = document.querySelector(".tree");
for(let li of tree.querySelectorAll("li")){
    let span = document.createElement("span"); // <span></span>
    li.prepend(span); // <li><span></span>...</li>   
    span.append(span.nextSibling);
}


tree.addEventListener("click", function(event){
    // if(event.target.tagName != "SPAN"){
    //     return;
    // }

    let childrenContainer = event.target.parentNode.querySelector("ul");
    // if(!childrenContainer){
    //     return;
    // }

    childrenContainer.hidden = !childrenContainer.hidden;
}) */


// let but = document.querySelector("#btn");
// but.addEventListener("click", onChange);

// function onChange(){
//     let ch = document.getElementById("change").value;
//     let on = document.getElementById("on").value;

//     // let temp = document.getElementById 
//     let a = document.getElementById("image" + ch); // image1
//     let b = document.getElementById("image" + on); // image3   

//     let temp = a.src;
//     a.src = b.src;
//     b.src = temp;
// }

/* 
a = 5;
b = 7;

temp = a;
a = b;
b = temp;

*/

// let but = document.querySelector("#cl");
// but.addEventListener("click", myMove);
// let flag;

// function myMove() {

//     //получаем доступ к вложенному квадрату
//     let elem = document.getElementById("animate");
//     let pos = 0;
//     let id, id2;

//     if (!flag) {
//         id = setInterval(frame, 8);
//     } else {
//         id2 = setInterval(reverse, 8);
//         pos = 350;
//     }
//     flag = !flag;

//     function frame() {
//         if (pos == 350) {
//             clearInterval(id);
//             // после остановки снова разрешаем клик
//             but.addEventListener("click", myMove);
//         } else {
//             but.removeEventListener("click", myMove);
//             pos++;
//             //теперь перемещаем elem
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }
//     function reverse() {
//         if (pos == 0){
//             clearInterval(id2);
//         } else{
//             pos--;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }
// }

// let list = document.querySelector("ul");

// let newItem = document.createElement("li");
// // newItem.textContent = "Новый <i>элемент списка</i>";
// newItem.innerHTML = "Новый <i>элемент списка</i>";

// list.append(newItem);

// let i = 1;
// document.querySelector("#func1").addEventListener("click", change);
// document.querySelector("#func2").addEventListener("click", add);

// function change(){
//     let elem = document.querySelector("#list2").lastChild;
//     document.querySelector("#list1").append(elem);
// }

// function add(){
//     let elem = document.createElement("li");
//     elem.innerHTML = "Water" + i;
//     document.querySelector("#list2").append(elem);
//     i++;
// }

// let calendar = document.getElementById("calendar");
// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth() + 1;  // 4

// createCalendar(calendar, year, month);


// function createCalendar(elem, year, month) {
//     let curDate = new Date(year, month - 1, 1);  // 3
//     let findDate = new Date(year, month, 0);  // 4

//     while(curDate.getDay() != 1){
//         curDate.setDate(curDate.getDate() - 1);
//     }

//     let currentMonth = [
//         "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
//     ]

//     let current = document.createElement("h2");
//     current.textContent = `${currentMonth[month - 1]} ${year}`;
//     elem.append(current);

//     let table = document.createElement("table");
//     table.innerHTML = `
//         <tr>
//             <th>пн</th>
//             <th>вт</th>
//             <th>ср</th>
//             <th>чт</th>
//             <th>пт</th>
//             <th>сб</th>
//             <th>вс</th>
//         </tr>
//     `;
//     while (curDate <= findDate) {
//         let tr = document.createElement("tr");
//         for (let i = 0; i < 7; i++) {
//             let td = document.createElement("td");
//             if(curDate.getMonth() == month - 1){
//                 td.textContent = curDate.getDate();
//             }
//             tr.append(td);
//             curDate.setDate(curDate.getDate() + 1);
//         }
//         table.append(tr);
//     }

//     elem.append(table);
// }

// let div = document.querySelector("#root");
// div.insertAdjacentHTML("beforebegin", "<p>До выбранного элемента</p>");
// div.insertAdjacentHTML("afterend", "<p>После выбранного элемента</p>");
// div.insertAdjacentHTML("afterbegin", "<p>Первым внутри выбранного элемента</p>");
// div.insertAdjacentHTML("beforeend", "<p>Последним внутри выбранного элемента</p>");

// let child = document.querySelector("#p1");
// // child.remove();
// let second = document.querySelector("#p2");

// second.after(child);

// let ul = document.querySelector("ul");
// let li = ul.cloneNode(true);

// li.querySelector("li").innerHTML = "Начало клонируемых элементов";
// ul.after(li);

// let list = document.querySelector(".list");  // ul
// list.insertAdjacentHTML("beforebegin", "<h2>Список </h2><hr>");
// let listInner = document.querySelector("h2");
// listInner.insertAdjacentText("beforeend", "планет");
// list.insertAdjacentHTML("afterbegin", "<li>Солнце</li>");
// list.insertAdjacentHTML("beforeend", "<li>Марс</li>");
// list.insertAdjacentHTML("afterend", "<hr>");

// let hr = document.querySelectorAll("hr")[1];
// let h4 = document.createElement("h4");
// h4.innerHTML = "Конец списка";
// hr.insertAdjacentElement("afterend", h4);

// let idRemove = setInterval(function(){
//     let li = document.querySelector("li:last-child");
//     if(li === null){
//         clearInterval(idRemove);
//         // alert("Список удален");
//         list.insertAdjacentHTML("afterbegin", "<li>Список удален</li>");
//     } else{
//         li.remove();
//     }
// }, 500);

// let spans = document.querySelectorAll("span");

// for(let i = 0; i < spans.length; i++){
//     // spans[i].addEventListener("click", () => {
//     //     spans[i].parentNode.remove();
//     // })
//      spans[i].addEventListener("click", function() {
//         this.parentNode.remove();
//     })
// }

/* let div = document.querySelector("div");
div.className = "alert";
let activeDiv = document.querySelector(".active");
activeDiv.classList.add("hidden");
// activeDiv.classList.remove("hidden");
activeDiv.classList.toggle("hidden");
activeDiv.classList.replace("active", "alert"); */

// let menu = document.querySelector(".menu");
// let child = document.querySelectorAll(".menu li");

// menu.addEventListener("click", (event) => {
//     if (event.target.tagName === "LI") {
//         for (let item of child) {
//             item.classList.remove("active");
//         }
//         event.target.classList.add("active");
//     }
// })

// let menuElem = document.getElementById("sweeties");
// let titletElem = menuElem.querySelector(".title");

// titletElem.addEventListener("click", function(){
//     menuElem.classList.toggle("open");
// })

/* let brush = document.createElement("div");
brush.classList.add("brush");

brush.hidden = true;

document.addEventListener("mouseover", function () {
    brush.hidden = false;
})

document.addEventListener("mouseout", function () {
    brush.hidden = true;
})

document.addEventListener("mousemove", function (event) {
    // console.log("Событие стработало", event.clientX, event.clientY);
    brush.style.left = `${event.clientX}px`;
    brush.style.top = `${event.clientY}px`;

    //    console.log(event.buttons);
    if (event.buttons === 1) {
        let paint = document.createElement("div");
        paint.classList.add("paint");

        paint.style.left = `${event.clientX}px`;
        paint.style.top = `${event.clientY}px`;

        document.body.append(paint);
    }
})

document.addEventListener("mousedown", function () {
    // console.log("Событие стработало");
    brush.style.scale = "0.8";
})

document.addEventListener("mouseup", function () {
    // console.log("Событие стработало");
    brush.style.scale = "1";
})

document.body.append(brush); */

/* let frogImg = document.getElementById("green-frog");

console.log(frogImg.id);
console.log(frogImg.className);
console.log(frogImg.alt);
console.log(frogImg.title);
console.log(frogImg.src);

console.log(frogImg.getAttribute("src"));

frogImg.title = "Новый текст подсказки";

frogImg.setAttribute("src", "4.jpg");
// frogImg.removeAttribute("src");
console.log(frogImg.hasAttribute("src"));

console.log(frogImg.getAttribute("data-frog"));

console.log(frogImg.dataset.frog); */

/* let lengthPath = 5;
let pagination = document.querySelector(".pagination");
let product = document.querySelector(".product-cover");
let data = new Array(18);
let filter = document.querySelector(".buttons");

for(let i=0; i<data.length; i++){
    data[i] = document.createElement("div");
    data[i].classList.add("card");
    if(i % 3){
        data[i].classList.add("blue");
    } else {
        data[i].classList.add("gray");
    }
    let node = document.createTextNode(i + 1);
    data[i].append(node);
    product.append(data[i]);
}

let chunks = splitParts(data);
renderChunks(0);
renderPagination();


pagination.addEventListener("click", e => {
    let item = e.target.closest(".pagination-item");

     if(item){
        let active = pagination.querySelector('.pagination-item.active'), part;
        if (item.classList.contains("item-prev") || item.classList.contains("item-next")){
            if(item.classList.contains("disable")){
                return false;
            }
            part = +active.dataset.part;
            part = item.classList.contains("item-prev") ? part - 1 : part + 1;
            renderChunks(part);

            active.classList.remove("active");
            
            pagination.querySelector(`.pagination-item[data-part="${part}"]`).classList.add("active");

        } else {
            active.classList.remove("active");
            item.classList.add("active");
            part = +item.dataset.part;
            renderChunks(part);
        }

        let prev = pagination.querySelector(".pagination-item.item-prev");
        let next = pagination.querySelector(".pagination-item.item-next");

        if(prev.classList.contains('disable')){
            prev.classList.remove("disable");
        }
        if(next.classList.contains('disable')){
            next.classList.remove("disable");
        }

        if(part === 0){
            prev.classList.add("disable");
        }
        if(part === chunks.length - 1){
            next.classList.add("disable");
        }
     }
});


function splitParts(arr){
    if(arr.length > lengthPath){  // 18 > 5
        let chunks = [];

        for(let i = 0; i < arr.length; i += lengthPath){
            chunks.push(arr.slice(i, i + lengthPath));
        }
        return chunks;
    } else {
        return arr;
    }
}

function renderChunks(part){
    if(part >= 0 && part <= chunks.length){
        product.innerHTML = "";
        chunks[part].map(elem => product.append(elem));
    } else {
        return false
    }
}

function renderPagination(){

    if(chunks.length > 1){
        chunks.map((elem, i) => pagination.insertAdjacentHTML("beforeend", `<li class='pagination-item${i === 0 ? " active" : ""}' data-part="${i}"><a href="#">${i + 1}</a></li>`));

        pagination.insertAdjacentHTML("afterbegin", "<li class='pagination-item item-prev disable'><a href='#'>prev</a></li>");

        pagination.insertAdjacentHTML("beforeend", "<li class='pagination-item item-next'><a href='#'>next</a></li>")
    }
}

filter.addEventListener("click", e => {
    let btn = e.target.closest(".btn");
    pagination.innerHTML = "";
    if(btn){
        if(btn.dataset.filter !== "all"){
            chunks = splitParts(data.filter(elem => elem.classList.contains(btn.dataset.filter)));
        } else {
            chunks = splitParts(data);
        }
    }
    renderChunks(0);
    renderPagination();
}); */

// let form = document.querySelector("form");
// // console.log(form.length);
// console.log(form.elements);
// console.log(form.name);
// console.log(form.action);
// console.log(form.method);

// document.form1.style.background = "silver";

// document.forms[0].style.margin = "20px";
// document.forms["form1"].style.padding = "16px";
// document.forms.form1.style.border = "2px dotted gray";

// let key = form.elements[0];
// console.log(key);

// let key2 = form.elements["name1"];
// console.log(key2);

// document.form1.name1.style.color = "blue";
// document.form1["name1"].style.background = "aqua";

// let txt = document.querySelector("#text1");
// let but = document.querySelector("button");

// but.addEventListener("click", content);

// function content(){
//     alert(txt.value);
// }

// let text = document.querySelector("input");
// let output = document.querySelector("#length");

// text.addEventListener("input", function(){
//     output.textContent = text.value.length + " / 30";
// })

// let form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
//     console.log("Сохраненные данные: " + form.elements.value.value);
//     event.preventDefault();
// })

// let reg = document.querySelector(".register");
// let h2 = document.querySelector("h2");
// let win = document.createElement("p");
// h2.after(win);


// reg.addEventListener("submit", function (event) {
//     event.preventDefault();

//     let login = reg.login.value;
//     let password = reg.psw.value;
//     let password2 = reg.psw2.value;
//     let errors = "";

//     if (login == "" || password == "" || password2 == "") {
//         win.className = "red";
//         win.innerHTML = "Все поля должны быть заполнены";
//         return;
//     }

//     if (password != password2) {
//         errors += "Пароли не совпадают<br>";
//     }

//     if (password.length < 6) {
//         errors += "Слишком короткий пароль";
//     }

//     if (errors == "") {
//         win.className = "green";
//         win.innerHTML = "Регистрация прошла успешно";
//         reg.login.value = "";
//         reg.psw.value = "";
//         reg.psw2.value = "";

//     } else {
//         win.className = "red";
//         win.innerHTML = errors;
//     }
// })

/* let input = document.querySelector("#input");
let list = document.querySelector("#list");

input.addEventListener('keypress', function (event) {
    if (event.key == 'Enter') {
        let li = document.createElement("li");
        let task = document.createElement("span");
        task.classList.add('task');
        task.textContent = input.value;
        task.addEventListener("dblclick", function () {
            let text = this.textContent;
            console.log(text);
            this.textContent = "";
            
            let edit = document.createElement("input");
            edit.value = text;
            this.append(edit);

            let self = this;
            edit.addEventListener("keypress", function(event){
                if(event.key == "Enter"){
                    self.textContent = edit.value;
                }
            })
        })

        li.append(task);

        let remove = document.createElement("span");
        remove.textContent = "удалить";
        remove.classList.add('remove');
        remove.addEventListener("click", function(){
            // li.remove();
            remove.parentNode.remove();
        });
        li.append(remove);

        let mark = document.createElement("span");
        mark.textContent = "выполнено";
        mark.classList.add("mark");
        mark.addEventListener("click", function(){
            mark.parentNode.classList.add("done");  // toggle
        })
        li.append(mark);

        list.append(li);
        input.value = "";
    }
}) */


// let checkbox = document.querySelector("#purple");
// checkbox.addEventListener("change", function(){
//     document.body.style.background = checkbox.checked ? "mediumpurple" : "";
//     console.log(checkbox);

// })


// let btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//     let checkboxs = document.querySelectorAll('input[name="language"]:checked');
//     console.log(checkboxs);

//     let selected = Array.from(checkboxs).map(checkbox => checkbox.value)

//     alert("Выбранные языки: " + selected.join(", "));
//     console.log(selected.join(", "));    
// })

/* let input = document.querySelectorAll("input");
let form1 = document.forms.form1;

// console.log(form1.length);
for(let i = 0; i < form1.length; i++){
    input[i].addEventListener('click', checkAll);
}

let numChecked;
function checkAll(){
    numChecked = 0;
    for(let i = 0; i < form1.length; i++){
        if(input[i].checked && input[i].type == "checkbox"){
            numChecked++;
        }
    }

    if(numChecked == 3){
        for(let i = 0; i < form1.length; i++){
             if(!input[i].checked  && input[i].type == "checkbox"){
                input[i].disabled = true;    
             }
        }
    } else {
        for(let i = 0; i < form1.length; i++){
            input[i].disabled = false; 
        }
    }

    // console.log(numChecked);
    
} */


// let input = document.querySelectorAll("input[type='checkbox']");
// let form1 = document.forms.form1;

// console.log(input.length);
// for(let i = 0; i < input.length; i++){
//     input[i].addEventListener('click', checkAll);
// }

// let numChecked;
// function checkAll(){
//     numChecked = 0;
//     for(let i = 0; i < input.length; i++){
//         if(input[i].checked){
//             numChecked++;
//         }
//     }

//     if(numChecked == 3){
//         for(let i = 0; i < input.length; i++){
//              if(!input[i].checked){
//                 input[i].disabled = true;    
//              }
//         }
//     } else {
//         for(let i = 0; i < input.length; i++){
//             input[i].disabled = false; 
//         }
//     }

//     // console.log(numChecked);

// }

// let choose = document.querySelector("input[type='button']");

// choose.addEventListener("click", chooseColor);

// function chooseColor() {
//     let f = document.form3;    
//     document.body.style.background = f.radio2.value;
// }

// function chooseColor() {
//     let f = document.form3;   

//     for (let i = 0; i < f.radio2.length; i++){
//         if(f.radio2[i].checked){
//              document.body.style.background = f.radio2[i].value;
//         }       
//     }
// }


// let f = document.form3; 
// for (let i = 0; i < f.radio2.length; i++){
//     f.radio2[i].addEventListener('change', chooseColor);
// }

// function chooseColor(event) {
//     document.body.style.background = event.target.value;
// }

// let languages = document.querySelector("#languages");
// let languageOptions = ["Python", "JavaScript", "C++", "Java"];

// languages.innerHTML = languageOptions.map(language => `
//     <div>
//         <input type="radio" name="language" value="${language}" id="${language}">
//         <label for="${language}">${language}</label>
//     </div>
//     `).join(" ");

// let radioButtons = document.querySelectorAll('input[name="language"]');
// for(let radioButton of radioButtons){
//     radioButton.addEventListener("change", showSelectedLanguage);
// }

// function showSelectedLanguage(){
//     if(this.checked){
//         document.querySelector("#languageOutput").textContent = `Вы выбрали: ${this.value}`;
//     }
// }

// let city = document.querySelector("#city");

// city.addEventListener("change", setImage);

/* Свойства select
select.options - коллекция из подэлементов <option>
select.value - значение выбранного в данный момент <option>
select.selectedIndex - номер (индекс) выбранного <option>
*/
// function setImage() {
//     let cities = city.selectedIndex;
//     let options = city.options;
//     let code = options[cities].value;
//     console.log(code);

//     let div = document.querySelector("#image");
//     div.innerHTML = "<img src='img/" + code + ".png'>"
// }

// let select = document.querySelector("select");
// let output = document.querySelector("#output");

// select.addEventListener("change", function () {
//     let number = 0;
//     for (let i = 0; i < select.options.length; i++) {
//         let option = select.options[i];
//         if(option.selected){
//             number += Number(option.value);
//         }
//     }

//     output.textContent = number;
// })

// let countries = document.querySelector("#countries");

// let ruCities = document.querySelector("#ru");
// let byCities = document.querySelector("#by");

// countries.addEventListener("change", function(){
//     document.querySelector(".cities.active").classList.remove('active');

//     if(this.value == 'ru'){
//         ruCities.classList.add('active');
//     }
//     if(this.value == 'by'){
//         byCities.classList.add('active');
//     }
// })


// let option = new Option("Текст", "value", true);
// console.log(option);


// let btnAdd = document.querySelector("#btnAdd");
// let btnRemove = document.querySelector("#btnRemove");
// let taskInput = document.querySelector("#task");
// let taskList = document.querySelector("#taskList");

// btnAdd.addEventListener("click", e => {
//     e.preventDefault();

//     if (taskInput.value.trim() === "") {
//         alert("Введите название задачи");
//         return;
//     }

//     let option = new Option(taskInput.value, taskInput.value);
//     taskList.add(option, undefined);
//     taskInput.value = '';
//     taskList.focus();
// })

// btnRemove.addEventListener("click", e => {
//     e.preventDefault();

//     let selectedTasks = [];

//     for (let i = 0; i < taskList.options.length; i++) {
//         selectedTasks[i] = taskList.options[i].selected;
//     }

//     let index = taskList.options.length;
//     while(index--){
//         if(selectedTasks[index]){
//             taskList.remove(index);
//         }
//     }
// })


// let input = document.querySelector("input");
// input.addEventListener("change", function(){
//     if(input.files.length > 0){
//         let file = input.files[0];
//         console.log("Вы выбрали:", file.name);
//         if(file.type){
//             console.log("У него тип:", file.type);            
//         }
//     }
// })

/* let gas = document.querySelector(".gallon");

console.log(gas.blur());

let petrol = document.querySelectorAll(".petrol");
let res;

for(let i=0; i < petrol.length; i++){
    petrol[i].addEventListener("click", function(){
        let gallons = gas.value;
        let amount = this.getAttribute("data-pet");
        
        res = gallons * amount;
        let sum = document.querySelector(".sum");
        sum.innerHTML = res;        
    })
}
 */

// //========================My project "Calculator Online"================

// let a = document.querySelector("#firstNumber");
// let b = document.querySelector("#operator");
// let c = document.querySelector("#secondNumber");
// let res = document.querySelector("#result");
// let but = document.querySelector("button");
// but.addEventListener("click", calculate);

// function calculate(){
//     let data1 = Number(a.value);
//     let data2 = b.value;
//     let data3 = Number(c.value);
//     console.log(data1);
//     console.log(data2);
//     console.log(data3);

//     let count;

//     if (data2 === "+") {
//         count = data1 + data3;
//     } else if (data2 === "-") {
//         count = data1 - data3;
//     } else if (data2 === "*") {
//         count = data1 * data3;
//     } else if (data2 === "/") {
//         count = data1 / data3;
//     } else {
//         count = "Ошибка";
//     }
//     res.textContent = count;
// }

// /* let arr = []; */

// let one = document.querySelector("#n1");
// let two = document.querySelector("#n2");
// let three = document.querySelector("#n3");
// let four = document.querySelector("#n4");
// let five = document.querySelector("#n5");
// let six = document.querySelector("#n6");
// let seven = document.querySelector("#n7");
// let eight= document.querySelector("#n8");
// let nine = document.querySelector("#n9");

// one.addEventListener("click", clickNumber);  
// two.addEventListener("click", clickNumber);    
// three.addEventListener("click", clickNumber);    
// four.addEventListener("click", clickNumber);    
// five.addEventListener("click", clickNumber);    
// six.addEventListener("click", clickNumber);    
// seven.addEventListener("click", clickNumber);    
// eight.addEventListener("click", clickNumber);    
// nine.addEventListener("click", clickNumber);

// function clickNumber(event) {
//    let v = event.target.textContent;
//    a.addEventListener("click", function(){
//      a.value += v;
//    })
// /*     console.log(c.focus());
//    if(a.focus()){
//         a.value += v;  */
// /*         a.classList.add("active");
//         a.classList.remove("disabled");
//         c.classList.add("disabled");
//         c.classList.remove("active"); */
// /*     }else{
//         c.value += v;  */
// /*         c.classList.add("active");
//         c.classList.remove("disabled");
//         a.classList.add("disabled");
//         a.classList.remove("active"); */
// }


//========================My project "Calculator Online"================

/* let a = document.querySelector("#firstNumber");
let b = document.querySelector("#operator");
let c = document.querySelector("#secondNumber");
let res = document.querySelector("#result");
let but = document.querySelector("button");
let numbersButtons = document.querySelector(".numbersButtons");
but.addEventListener("click", calculate);

function calculate() {
    let data1 = Number(a.value);
    let data2 = b.value;
    let data3 = Number(c.value);
    // console.log(data1);
    // console.log(data2);
    // console.log(data3);

    let count;

    if (data2 === "+") {
        count = data1 + data3;
    } else if (data2 === "-") {
        count = data1 - data3;
    } else if (data2 === "*") {
        count = data1 * data3;
    } else if (data2 === "/") {
        count = data1 / data3;
    } else {
        count = "Ошибка";
    }
    res.textContent = count;
}

let fields = [a, c];
let lastFocused = null;
for (let i = 0; i < fields.length; i++) {
    fields[i].addEventListener("focus", function (e) {
        // let v = event.target.textContent;
        if(document.querySelector('input:focus') == a){            
            lastFocused = a;           
        } else if(document.querySelector('input:focus') == c){
            lastFocused = c;
        }
    })
}

let nums = [];
for (let i = 1; i <= 9; i++) {
    numbersButtons.insertAdjacentHTML("beforeend", `<button id='n${i}'>${i}</button>`);
    nums[i] = document.querySelector(`#n${i}`);
    nums[i].addEventListener("click", clickNumber);
}

function clickNumber(event) {
    let v = event.target.textContent;
    if (lastFocused == a) {
        a.value += v;
    } else if (lastFocused == c) {
        c.value += v;
    }
}
 */

// document.getElementById("slider").addEventListener("input", function(){
//     document.getElementById('slider-value').textContent = this.value;
// })

// let tds = document.querySelectorAll("td");

// for (let i = 0; i < tds.length; i++) { 
//     tds[i].addEventListener("click", function func(){
//         let input = document.createElement("input");
//         input.value = this.innerHTML;        
//         this.innerHTML = '';
//         this.append(input);
//         console.log(this);

//         let td = this;
//         input.addEventListener('blur', function(){
//             td.innerHTML = this.value;
//             td.addEventListener("click", func);
//         })

//         this.removeEventListener("click", func)
//     })
// }

// let userInput = document.getElementById("userInput");
// let name = document.getElementById("displayName");

// userInput.addEventListener("input", function(){
//     name.textContent = this.value || "Гость";
// })

// let form = document.getElementById("myForm");

// form.addEventListener("submit", function (event) {
//     // if (!form.checkValidity()) {
//     //     event.preventDefault();
//     //     alert("Заполните все поля корректно");
//     // }

//     // let username = form.username.value;
//     // let password = form.password.value;
//     // console.log(username);
//     // console.log(password);

//     // let formData = new FormData(form);
//     // console.log(formData.get("username"));
//     // console.log(formData.get("password"));

//     let username = form.username.value;
//     let password = form.password.value;
//     event.preventDefault();
//     // if(username.length < 3){

//     //     alert("Имя пользователя должно быть более 3 символов")
//     // }

//     // if(password.length < 6){

//     //     alert("Пароль должен быть более 6 символов");
//     // }

//     console.log(typeof username);
//     console.log(typeof password);

// })


/* Методы:
search - возвращает позицию, на которой регулярное выражение совпадает с вызывающей строкой, или "-1", если совпадений нет

match - получит все совпадения с регулярным выражением

replace - поиск и замена

split - делит строку на массив, разбивая ее по указанной подстроке

test - выполняет поиск совпадения регулярного выражения со строкой. Возвращает true или false
*/

/* Синтаксис записи:
let regexp = new RegExp("шаблон", "флаги");
let regexp = /шаблон/флаги;
*/









// let str = "Я ищу совпадения в 2026 ^ году 789535678 Hello_World ё";
// let regexp = /[206]/g;
// document.writeln(str + "<br><br>");
// document.writeln(str.search(regexp) + "<br>");
// document.writeln(str.match(regexp) + "<br>");
// document.writeln(regexp.test(str) + "<br>");

/* Флаги
g (global) - исчет все совпадения с шаблоном поиска (глобальный поиск)
i (ignoreCase) - регистрозависимый поиск
u - включает поддержку Unicode
m - (multiline) - многострочный текст
s (dotAll) - включает \n
*/
// let regexp = /[я]/gi;

/* Диапазон 
[0-9] - любая цифра от 0 по 9, [1-6]
[А-яЁё] - поиск букв русского алфавита
[A-Za-z] - английский алфавит
*/

// let regexp = /[1-6]/gi;
// let regexp = /[А-Яа-я]/g;
// let regexp = /[А-яЁё]/g;
// let regexp = /[A-Za-z]/g;
// document.writeln(str.match(regexp) + "<br>");

// console.log("Ё", "Ё".codePointAt(0));  // 1025
// console.log("А", "А".codePointAt(0));  // 1040
// console.log("Я", "Я".codePointAt(0));  // 1071
// console.log("а", "а".codePointAt(0));  // 1072
// console.log("я", "я".codePointAt(0));  // 1103
// console.log("ё", "ё".codePointAt(0));  // 1105

// function lowerCase(str){
//     return str.replace(/[А-Я]/g, u => u.toLowerCase());
// }

// console.log(lowerCase("Несколько Слов"));

// [^abc] - исключающий диапазон, ни один из указанных символов
// let regexp = /[^0-9]/g;


/* 
{3} - количество символов идущих подряд
{1,} - от 1 до бесконечного количества повторений
{2,5} - от 2 до 5 повторений
*/
// let regexp = /[0-9]{2,5}/g;
// document.writeln(str.match(regexp) + "<br>");

// let html = `
//     <table>
//         <tr> 
//             <td bgcolor="#CCC">
//                 <img src="222.png" />
//             </td>
//             <td bgcolor="#003399">
//                 <img src="af3.png" />
//             </td>
//             <td bgcolor="#00ccdd">
//                 <img src="fff.png" />
//             </td>
//         </tr>
//     </table>
// `;

// let exp = /#([0-9a-f]{3}){1,2}/ig;
// console.log(html.match(exp));

/* 
\d (digit) - любая цифра
\s (space) - пробельный символ, включая табуляцию и перевод строки
\w (word) - любая цифра, буква и символ подчеркивания
\b - граница слова
*/

// let regexp = /\w/g;
// document.writeln(str.match(regexp) + "<br>");


// let st = "Это пример строки с нескольким пробелами";
// let reg = "шаблон";

// let result = ...;
// console.log(result);  // Это_пример_строки_с_нескольким_пробелами

/* let string = "Мой номер телефона: +7 (999) 123-45-67. Номер телефона моего друга: +7 (987) 654-32-10.";
let ex = /\+\d\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/g;
let phoneNumbers = string.match(ex);

console.log(phoneNumbers); */

// let regex = /\d{2}[-:]\d{2}/g;
// document.writeln("Заврак в 09:00. Ужин в 21-30".match(regex));


/* 
\D - все кроме цифр
\S - не пробел
\W - все кроме цифр, букв (латиница) и символов подчеркивания
*/
// let regexp = /\W/g;
// document.writeln(str.match(regexp) + "<br>");

// document.writeln("Hello, Java !".match(/\bJava\b/) + "<br>");
// document.writeln("Hello, Java!".match(/\bJava!/) + "<br>");
// document.writeln("Hello, JavaScript!".match(/\bJavaScript\b/) + "<br>");

// document.writeln("1 23 456 78".match(/\b\d{2}\b/g) + "<br>");
// document.writeln("12-,34,56".match(/\b\d{2}\b/g) + "<br>");
// document.writeln("1 23 456 78".match(/\d{2}/g) + "<br>");

// document.writeln("Завтрак в 09:00 в комнате 123:456.".match(/\b\d{2}:\d{2}\b/g));
// let regexp = /[\p{Alpha}\p{Nd}]/gu;
// let regexp = /[\p{L}\p{N}]/gu;
// document.writeln(str.match(regexp) + "<br>");

/* 
^ - начало строки (перед последовательностью ничего не должно быть)
$ - конец строки (после последовательностью ничего не должно быть)
*/

// let html = "909";
// let exp = /^\d{3}$/;
// document.writeln(html.match(exp) + "<br>");

// function capitalize(st){
//     return st.replace(/^[а-я]/, s => s.toUpperCase());
//     // return st.replace("н", "H");
// }

// console.log(capitalize("сколько слов"));

/* Количество повторений
+ => от 1 до бесконечности {1,}
? => от 0 до 1 {0,1}
* => от 0 до бесконечности {0,}
*/

// let st = "+7(903)-123-45-67";
// document.writeln(st.match(/\d+/g) + "<br>");
// document.writeln("100 10 1".match(/\d0*/g) + "<br>");
// document.writeln("10, +23, -8, 5".match(/[+-]?\d+/g) + "<br>");
// document.writeln("0 1 12.345 7890".match(/\d+\.\d+/g) + "<br>");

//  document.writeln("..Привет!... Как дела?.....".match(/\.{3,}/g));

// function extractLinks(text){
//     let regex = /https?:\/\/[\w.]+/g;
//     return text.match(regex) || [];
// }

// console.log(extractLinks("<a href='https://htmlbook.ru'> и <a href='https://webref.ru'>"));


// function validateEmail(email){
//     // let regexp = /^[a-z0-9_%+.-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
//     let regexp = /^[^\s]+@[^\s]+\.[^\s]{2,}$/i;
//     return regexp.test(email);
// }

// console.log(validateEmail("user@example.com"));

// let st = `JavaScript
// ssddff
// javascript
// JAVASCRIPT`;
// let mas = st.match(/^\w+/gm)
// console.log(mas);
// mas.map((el) => console.log(el));


// let re = /CS.3/;
// document.writeln("Стандарт CSS3".match(re) + "<br>");
// document.writeln("Сталь CS-3".match(re) + "<br>");
// document.writeln("CS 3".match(re) + "<br>");

// let st = "Hello\nworld";
// console.log(st);
// let exp = /Hello.world/s;
// console.log(exp.test(st));

// let regexp = /html|css|java(script)?/gi;
// let st = "Сначала появился язык Java, затем HTML, потом JavaScript";
// document.writeln(st.match(regexp));

// let html = `
//     <b>my text</b>
//     <img src="222.jpg">
//     <span>else</span>
//     <img src="dfsdf222.png">
//     <img src="img.png">
//     <img src="uio.gif">
// `;

// let ex = /\w+\.(jpg|jpeg|png|bmp|gif)/ig;
// document.writeln(html.match(ex));

// function validatePhoneNumber(phoneNumber){
//     let phoneRegex = /^(\+7|8)?\d{10}$/;
//     return phoneRegex.test(phoneNumber);
// }

// let phone = "+79123456789";
// // let phone = "89123456789";
// // let phone = "9123456789";
// if(validatePhoneNumber(phone)){
//     console.log("Номер телефона валиден!");
// } else{
//    console.log("Номер телефона не валиден!"); 
// }

// let regex = /java(script)?|php|c(\+{2})?/gi;
// // let regex = /\w+(\++)?/gi;
// let st = "Java, JavaScript, PHP, C, C++++";
// document.writeln(st.match(regex));  // Java,JavaScript,PHP,C, C++

// document.writeln("aaa".replace("a", "b") + "<br>");
// document.writeln("aaa".replace(/a/g, "b") + "<br>");

// let text = "I kill you black dog";
// document.writeln(text + "<br>");
// let exp = /book|kill|black/ig;
// text = text.replace(exp, "***");
// document.writeln("<p>" + text + "</p>");

// let st = "<p>Hello world</p>";
// let reg = /<.+?>/g;

// let st = "131231564";
// let reg = /\d{2,4}?/g;
// console.log(st.match(reg));
/* 
*?, +?, ??
{2,4}?, {2,}?, {2}?
*/

// let st = "<p>Hello world</p>";
// let reg = /<[^>]+>/g;
// console.log(st.match(reg));

// let st = "... <!-- My -- comment text --> .. <!----> ..";
// // let reg = /<[^>]+>/g;
// let reg = /<!--.*-->/g;
// alert(st.match(reg)); // <!-- My -- comment text -->, <!---->

// let st = "<> <a href='#'> <input type='radio' checked> <b>";
// let reg = /<[^>]+>/g;
// alert(st.match(reg)); // <a href='#'>, <input type='radio' checked>, <b>

// let html = "Дмитрий Васильев";
// let exp = /(Дмитрий) Васильев/;
// document.writeln(html.match(exp) + "<br>");


// let html = "site.com и my.site.com";
// let exp = /(\w+\.)+\w+/g;
// document.writeln(html.match(exp) + "<br>");

// let st = "<h1>Hello, world!</h1>";
// let tag = st.match(/<(.*?)>/);
// alert(tag[0]);
// alert(tag[1]);

// let date = "2026-05-30";
// let reg = /^(\d{4})-(\d{2})-(\d{2})$/;
// let match = date.match(reg);
// let format = match[3] + "." + match[2] + "." + match[1];
// console.log(format);  // 30.05.2026

// let st = "<span class='my'>";
// let exp = /<(([a-z]+)\s*([^>]*))>/;
// let res = st.match(exp);
// alert(res[3]);

// let date = "2026-05-30 2026-10-15";
// let reg = /(?<year>[0-9]{4})-(?<month>\d{2})-(?<day>\d{2})/g;
// // let match = date.match(reg).groups;
// // let format = match[3] + "." + match[2] + "." + match[1];
// // // console.log(format);  // 30.05.2026
// // console.log(match.day + "." + match.month + "." + match.year);
// let res = date.matchAll(reg);
// console.log(res);

// for(let result of res){
//     let {year, month, day} = result.groups;

//     document.writeln(`${day}.${month}.${year}`);

// }

// let st = "-1.5 0 2 -123.4."
// let reg = /-?\d+(\.\d+)?/g;
// document.writeln(st.match(reg));  // -1.5,0,2,-123.4


// let st = "John Smith";
// let re = /(\w+)\s(\w+)/;
// document.writeln(st.replace(re, "$2 $1"));

// function add(str){
//     return str.replace(/([A-Z])/g, " $1");
// }

// console.log(add("camelCase"));  // camel Case
// console.log(add("helloWorldItIsMe"));  // hello World It Is Me

// let text = "red color: #F00 and green: #090";
// let ex = /(#[a-f0-9]{3})/ig;
// text = text.replace(ex, "<span style='color:$1'>$1</span>");
// document.writeln("<p>" + text + "</p>");


// let text = "I like htmlbook.ru and yandex.com.ru";
// let ex = /(([a-z0-9-]{2,}\.)+([a-z]{2,4}))/ig;
// text = text.replace(ex, "<a href='https://$1'>$1</a>");
// document.writeln("<p>" + text + "</p>");

// 7 (XXX) XXX-XX-XX  или  8 (XXX) XXX-XX-XX

// function formatPhoneNumber(phone){
//     let cleaned = phone.replace(/\D/g, "");

//     return cleaned.replace(/(7|8)?(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 ($2) $3-$4-$5");
// }

// console.log(formatPhoneNumber("+7 999 1234567"));
// console.log(formatPhoneNumber("8 999 1234567"));
// console.log(formatPhoneNumber("999 1234567"));
// console.log(formatPhoneNumber("79991234567"));
// console.log(formatPhoneNumber("7(999)123 45 67"));


// document.writeln("Люблю HTML".replace(/HTML/, "$& и JavaScript"));

// let st = `Он сказал: "I'm at home".`;
// // let re = /(["'])(.*)\1/g;
// let re = /(?<quote>["'])(.*)\k<quote>/g;
// document.writeln(st.match(re) + "<br>");  // "I'm at home"

// let st = "1 курс стоит 30 руб";
// document.writeln(st.match(/\d+(?= руб)/g) + "<br>");
// document.writeln(st.match(/\d+(?! руб)/g) + "<br>");

// let st = "1 курс стоит $30";
// document.writeln(st.match(/(?<=\$)\d+/g) + "<br>");
// document.writeln(st.match(/(?<!\$)\d+/g) + "<br>");

// document.writeln("Hello, Error".match(/^(?=.*[eE][rR][rR][oO][rR]).{1,50}$/));


// (?=.*...)

// function validPassword(psw){
//     let pswEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!#$%^&*]).{8,}$/;
//     return pswEx.test(psw);
// }

// console.log(validPassword("@QWerqwee!#5"));
// console.log(validPassword("$qwERqq5qq"));


// let but = document.querySelector("#but");
// but.addEventListener("click", smsUser);

// function smsUser(){
//     let name = document.querySelector("#your_name").value;
//     let text = document.querySelector("#text").value;
//     let regExpBBMail = /(.*?)<(b|u|i|s|h1|p)>(.*?)<(\/\2)>(.*?)/ig;
//     text = text.replace(regExpBBMail, "$1 <span style='color:red'>&lt;$2&gt;</span>$3<span style='color:red'>&lt;$4&gt;</span> $5");
//     // 
//     console.log(text);

//     // document.writeln(`
//     //     <fieldset>
//     //         <legend>${name}</legend>
//     //         <div>${text}</div>
//     //     </fieldset>    
//     // `);

//     let form = document.querySelector("form");
//     form.insertAdjacentHTML("afterend", `<fieldset>
//              <legend><b>${name}</b></legend>
//              <div>${text}</div>
//          </fieldset>  `);

// }

// let st = "  текст строки первой    ";
// st = st.replace(/^\s+|\s+$/g, "");
// console.log(">" + st + "<");


// let date = "25-10-2026, 14/09/2025, 10.03.2022, 12:02:2014";
// let re = date.split(/[-\/,.:]/);
// console.log(re);

// console.log("Вносим изменения");

// console.log("Вносим изменения на другом рабочем месте");

// let registrastionForm = document.getElementById("registrastionForm");
// let errorMessages = document.getElementById("errorMessages");


// registrastionForm.addEventListener("submit", function(event){
//     event.preventDefault();

//     let [username, email, password] = registrastionForm.elements;

//     errorMessages.innerHTML = "";

//     if(!username.value.trim()){
//         displayError("Имя пользователя обязательно");
//         return;
//     }

//     if(!email.value.trim() || !isValidEmail(email.value)){
//         displayError("Введите адрес электронной почты");
//         return;
//     }

//     if(!password.value.trim() || !isStrongPassword(password.value)){
//         displayError("Пароль должен состоять как минимум из 8 символов и как минимум одну заглавную букву, одну строчную букву, одну цифру и специальный символ");
//     }

//     alert("Register successfull!");
//     registrastionForm.reset();
// });

// function displayError(message){
//     errorMessages.innerHTML += `<div class='error'>${message}</div>`;
// }

// function isValidEmail(email){
//     return /^[\w.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email);
// }

// function isStrongPassword(password){
//     return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);
// }

// let car = new Object();
// let car1 = {};

// console.log(car);
// console.log(car1);

// let car = new Object();
// car["type brand"] = "BMW";
// car["color"] = "white";
// console.log(car);
// document.writeln(car["type brand"] + " " + car.color + "<br>");  

// let car1 = new Object();
// car1.type = "BMW";
// car1.color = "black";
// document.writeln(car1.type + " " + car1["color"] + "<br>");


// let menu1 = {};
// menu1.width = 300;
// menu1.height = 200;
// menu1.title = "Menu";
// console.log(menu1);
// document.writeln(menu1.title + ": " + menu1.width + " x " + menu1.height + "<br>");

// let menu = {
//     width: 300,
//     height: 200,
//     title: "Menu"
// };
// console.log(menu);
// document.writeln(menu.title + ": " + menu.width + " x " + menu.height + "<br>");

// // delete menu.width;
// delete(menu.width);
// document.writeln(menu.title + ": " + menu.width + " x " + menu.height + "<br>");

// console.log("height" in menu);

// menu.age = 25;

// let counter = 0;
// for(let key in menu){
//     document.writeln("<br>Ключ = " + key + ", значение = " + menu[key]);
//     counter++;
// }

// document.writeln("<br><br>Всего свойств: " + counter + "<br>");

// document.writeln("<br>Имена ключей: " + Object.keys(menu) + "<br>");
// document.writeln("<br>Всего свойств: " + Object.keys(menu).length + "<br>");

// console.log(Object.keys(menu));

// Object.keys(menu).forEach(function(key){
//     document.writeln("<br>" + key + ": " + menu[key]);
// })

// Object.values(menu).forEach(function(v){
//     document.writeln("<br>" + v );
// })

// console.log(Object.values(menu));
// console.log(Object.entries(menu));

// for(let el of Object.entries(menu)){
//     console.log(el[0], el[1]);
//     document.writeln("<br>" + el);
// }

/* let area = document.getElementById("area");
let curentPlayer = document.getElementById("curPlayer");
let cell;

let player = "x";
let stat = {
    'x': 0,
    'o': 0,
    'd': 0
}

let winIndex = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

for (let i = 1; i <= 9; i++) {
    area.innerHTML += "<div class='cell' data-pos='" + i + "'>";
}

cell = document.querySelectorAll(".cell");

for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("click", cellClick);
}

function cellClick() {
    let data = [];

    if (!this.innerHTML) {
        this.innerHTML = player;
    } else {
        alert("Ячейка занята");
        return;
    }

    for (let i in cell) {
        if (cell[i].innerHTML == player) {
            data.push(cell[i].getAttribute("data-pos"));
        }
    }

    if(checkWin(data)){
        stat[player] += 1;
        restart("Выиграл: " + player);
    } else {
        let draw = true;
        for(let i in cell){
            if(cell[i].innerHTML == ''){
                draw = false;
            }
        }
        if(draw){
            stat.d += 1;
            restart("Ничья");
        }
    }

    player = player == 'x' ? "o" : "x";
    curentPlayer.innerHTML = player.toUpperCase();

    console.log(data);
}

function checkWin(data){
   
    
    for(let i in winIndex){
        let win = true;
        for(let j in winIndex[i]){
            let id = String(winIndex[i][j]);
              let ind = data.indexOf(id);
            if(ind == -1){
                win = false;
            }
        }
        if(win){
            return true; 
        }
    }

    return false;
}

function restart(text){
    alert(text);
    for (let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = "";        
    }
    updateStat();
}

function updateStat(){
    document.getElementById("sX").innerHTML = stat.x;
    document.getElementById("sO").innerHTML = stat.o;
    document.getElementById("sD").innerHTML = stat.d;
} */

// let car = {
//     name: "Volvo",
//     year: 2019,
//     colors: {
//         first: "yellow",
//         second: "blue"
//     },
//     color: [
//         "black",
//         "white",
//         "red",
//         "blue"
//     ],
//     hello: function(){
//         document.writeln("Привет<br>");        
//     }
// };

// console.log(car);
// document.writeln(car.name + " " + car.color[1] + " " + car.colors.second);  // свойсто
// car.hello();  // метод
// hello()

// // let fill = car.color.filter(function(elem){
// //     return elem.length < 5;
// // });
// // document.writeln(fill + "<br>");

// // let mas = car.color.map(function(elem, index, all){
// //     return index + ") " + elem + " массив: " + all + "<br>";
// // })
// // document.writeln("<br>" + mas + "<br>");

// // let mas1 = car.color.map(elem => elem.toUpperCase());
// // document.writeln("<br>" + mas1 + "<br>");

// let mas2 = Object.keys(car.colors).map(function(elem){
//     return elem + ": " + car.colors[elem] + "<br>";
// })

// document.writeln("<br>" + mas2 + "<br>");


// let calc = {
//     num1: 5,
//     num2: 6,
//     calculate: function(){
//         this.res = this.num1 * this.num2;        
//     }
// }


// calc.calculate();
// document.writeln(calc.res);

/* let x = 15, y = 10;

// let coords = {
//     x: x,
//     y: y,
//     calcSq: function(){
//         document.writeln(this.x * this.y);        
//     }
// }
let coords = {x,y,
    calcSq(){
        document.writeln(this.x * this.y);        
    }
}

coords.calcSq(); */

// let user = {
//     login: {
//         firstName: 'Kate',
//         lastName: "Pavlova"
//     },
//     psw: 'qwerty',
//     role: 'guest'
// }



// let {psw: password, login: {firstName: f, lastName: l}, role} = user;
// document.writeln(f + " " + l + " " + password + " " + role);

// let {psw, login: {firstName: f, lastName: l}, ...rest} = user;
// document.writeln(f + " " + l + " " + psw + " " + rest.role);

// let log = user.login.firstName;
// console.log(log);


// Создать объект, который выиграл автомобиль (цвет случайным образом). В объекте хранится имя, массив цветов и марка автомобиля (свойства объекта). Вывод информации будет в методе
// Игорь выиграл красный Bentley

// Функция-констуруктор
// function Car(n, year){
//     this.name = n;
//     this.year = year;
// }

// Car.prototype.getAge = function(){
//     return new Date().getFullYear() - this.year;
// }

// Car.prototype.color = "black";

// let ford = new Car('Ford', 2019);
// console.log(ford);
// console.log(ford.getAge());
// ford.color = "red";
// console.log(ford.color);


// let bmw = new Car('BMW', 2017);
// console.log(bmw);
// console.log(bmw.getAge());
// console.log(bmw.color);


// function User(pName, pAge){
//     this.name = pName;
//     this.age = pAge;
//     this.displayInfo = function(){
//         document.writeln("Имя: " + this.name + "; возраст: " + this.age + "<br>");        
//     }
// }

// let tom = new User("Tom", 26);
// tom.displayInfo();

// let form = document.form1;
// form.addEventListener("submit", event => {
//     event.preventDefault();

//     let title = form.title.value;
//     let text = form.text.value;
//     let description = form.description.value;

//     // console.log(title, text);
//     saveForm({title, text, description}); // {title: title, text: text}
// })

// // function saveForm(obj){
// //     let {title, text, description} = obj;

// // function saveForm({title, text, description}){

// function saveForm(obj){
//     let formData = {
//         date: new Date().toLocaleDateString(),
//         ...obj
//     }

//     console.log("Form data: ", formData);    
// }

/* let cardsArray = [
    { name: 'card1', img: 'c0.gif' },
    { name: 'card2', img: 'c1.gif' },
    { name: 'card3', img: 'c2.gif' },
    { name: 'card4', img: 'c3.gif' },
    { name: 'card5', img: 'c4.gif' },
    { name: 'card6', img: 'c5.gif' },
    { name: 'card7', img: 'c6.gif' },
    { name: 'card8', img: 'c7.gif' }
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;

function createBoard(){
    let gameBoard = document.querySelector(".game-board");
    let shuffledCards = [...cardsArray, ...cardsArray].sort(() => 0.5 - Math.random());

    shuffledCards.forEach(card => {
        let cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.dataset.name = card.name;

        let cardImage = document.createElement("img");
        cardImage.src = card.img;
        cardElement.append(cardImage);

        cardElement.addEventListener('click', flipCard);
        gameBoard.append(cardElement);
    })

}

function flipCard(){
    if(lockBoard){
        return;
    }
    if(this === firstCard){
        return;
    }
    this.classList.add("flipper");

    if(!firstCard){
       firstCard = this;
       return; 
    }
    secondCard = this;
    checkForMatch();
}

function checkForMatch(){
    if(firstCard.dataset.name === secondCard.dataset.name){
        disabledCard();
    } else {
        unflipCards();
    }
}

function disabledCard(){
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoar();
}

function unflipCards(){
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("flipper");
        secondCard.classList.remove("flipper");
        resetBoar();
    }, 1000);
}

function resetBoar(){
    // [firstCard, secondCard, lockBoard] = [null, null, null];
    firstCard = null;
    secondCard = null;
    lockBoard = null;
}

createBoard(); */

// let a = 5;
// let b = 10;
// console.log("a:", a);
// console.log("b:", b);
// // a, b = b, a;  // не работает
// [a, b] = [b, a];
// console.log("a:", a);
// console.log("b:", b);

// let mas = [5, 3, 2];
// for (let i = 0; i < mas.length; i++) {
//     mas[i] = 0;
// }
// console.log(mas);

// const week = {
//     name: "John"
// }
// week.name = "Peter";

// // const week = ["qqq", "www"];
// // week[0] = "Привет";
// // week = "Строка"

// console.log(week);

// const book = {title: 'Дюна'};
// // const anotherBook = {title: 'Дюна'};
// const edition = {published: 2025, title: "Вьюга"}
// const anotherBook = Object.assign({}, book, edition);

// console.log(book == anotherBook);

// // anotherBook['price'] = 315;
// console.log(book);
// console.log(edition);
// console.log(anotherBook);


// let a = 5;
// let b = 5;
// console.log(a == b);

// const mas1 = [1,2,3];
// const mas2 = [1,2,3];
// console.log(mas1 == mas2);
// console.log(mas1);



// function Automobile(manufact, model, year, color){
//     this.manufact = manufact;
//     this.model = model;
//     this.year = year;
//     this.color = color;

//     this.whatColor = function(){
//         document.writeln("Цвет машины: " + this.color + " ")
//     }
//     this.autoInfo = function(){
//         document.writeln("Модель машины: " + this.manufact + " " + this.model + "<br>" + "Год выпуска: " + this.year + "<br>" + "Производитель автомобиля: " + this.manufact + "<br>")
//     }
// }

// let mas = [
//     new Automobile("Nissan", "Skyline", 2007, "Red"), 
//     new Automobile("Toyota", "Corolla", 2009, "Black"), 
//     new Automobile("Volkswagen", "Golf", 2009, "Blue")
// ];

// console.log(mas);
// let nissan = new Automobile("Nissan", "Skyline", 2007, "Red");
// let toyota = new Automobile("Toyota", "Corolla", 2009, "Black");
// let volk = new Automobile("Volkswagen", "Golf", 2009, "Blue");

// let mas = [nissan, toyota, volk];

// for (let i = 0; i < mas.length; i++) {
//      mas[i].whatColor();
//      mas[i].autoInfo();
//      document.writeln("<br>");     
// }



// nissan.whatColor()
// nissan.autoInfo();
// toyota.whatColor();
// toyota.autoInfo();
// volk.whatColor();
// volk.autoInfo();

// const personData = [["name", "Сергей"], ["age", 37]];
// console.log(personData);
// const person = Object.fromEntries(personData);
// console.log(person);


// const first = null;
// const second = {name: "Bob"}

// function printName(person){
//     console.log(person?.name);    
// }

// printName(first);
// printName(second);

// const first = null;
// const second = {
//     name: "Bob",
//     sayHi(){
//         console.log(`Hi! I am ${this.name}`);        
//     }
// };

// function printName(person){
//     console.log(person?.name);    
// }

// printName(first);
// printName(second);
// first?.sayHi();
// second?.sayHi();


// const obj = {name: "Ирина"};
// Object.preventExtensions(obj);
// obj.age = 25;
// console.log(obj);


// const obj = {name: "Ирина"};
// Object.freeze(obj);
// // obj.name = "Марина";
// obj.age = 25;
// console.log(obj);


// Контекст

// let person = {
//     age: 24,
//     name: "Irina",
//     job: "Programmer",
//     displayInfo: function(){
//         console.log("name:", this.name);
//         console.log("age:", this.age);
//         console.log("job:", this.job);        
//     }
// }

// person.displayInfo();

// let person = {
//     age: 24,
//     name: "Irina",
//     job: "Programmer",
//     displayInfo: function (ms) {
//         let self = this;

//         setTimeout(function () {
//             console.log(self);
//             console.log("name:", self.name);
//             console.log("age:", self.age);
//             console.log("job:", self.job);
//         }, ms);
//     }
// }
// // console.log(this);

// person.displayInfo(2000);

// let person = {
//     age: 24,
//     name: "Irina",
//     job: "Programmer",
//     displayInfo: function (ms) {  

//         setTimeout(function () {
//             console.log(this);
//             console.log("name:", this.name);
//             console.log("age:", this.age);
//             console.log("job:", this.job);
//         }.bind(this), ms);
//     }
// }

// person.displayInfo(2000);

// let person = {
//     age: 24,
//     name: "Irina",
//     job: "Programmer",
//     displayInfo: function (ms) {  

//         setTimeout(() => {
//             console.log(this);
//             console.log("name:", this.name);
//             console.log("age:", this.age);
//             console.log("job:", this.job);
//         }, ms);
//     }
// }

// person.displayInfo(2000);

// let person = {
//     age: 24,
//     name: "Irina",
//     job: "Programmer",
//     displayInfo(ms) { 
//         console.log(this);

//         setTimeout(() => {
//             console.log(this);
//             console.log("name:", this.name);
//             console.log("age:", this.age);
//             console.log("job:", this.job);
//         }, ms);
//     }
// }

// person.displayInfo(2000);

// let h = document.querySelector("h1");
// h.addEventListener("click", () => {
//     h.style.color = "red";
// })

// window.alert("Hello");

// window.document.querySelector("h1").style.color = "red";

// let modal = document.querySelector("#modal");

// document.querySelector("#btn").addEventListener("click", function () {
//     modal.style.display = "block";
// })

// document.querySelector(".close").addEventListener("click", function () {
//     modal.style.display = "none";
// })

// window.addEventListener("click", function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// })

// let w = document.documentElement.clientWidth;
// let h = document.documentElement.clientHeight;

// document.querySelector("#window").innerHTML = "Ширина окна: " + w + ", высота окна: " + h;

// console.log("Ширина окна", window.innerWidth);
// console.log("Высота окна", window.innerHeight);


// let box = document.querySelector(".box");
// // let width = box.clientWidth;
// // let height = box.clientHeight;
// // let width = box.offsetWidth;
// // let height = box.offsetHeight;
// let width = box.scrollWidth;
// let height = box.scrollHeight;

// // console.log(width, height);
// let hh = box.offsetHeight;
// let flag;

// document.querySelector("button").addEventListener("click", function () {
//    /*  if (!flag) {
//         box.style.height = box.scrollHeight + "px";                
//     } else {
//         box.style.height = hh + "px";  
//     }
//     flag = !flag; */
//     // console.log(box.scrollTop);
//     // console.log(box.getBoundingClientRect());
//     // console.log(box.getBoundingClientRect().top);
//     // console.log("offsetTop", box.offsetTop);

//     if(!flag){
//         box.style.overflow = "hidden";
//     } else {
//         box.style.overflow = "";
//     }
//     flag = !flag;

// })


// window.addEventListener("scroll", myFunction);

// function myFunction(){
//     let winScroll = document.documentElement.scrollTop;
//     let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

//     let scrolled = winScroll / height * 100;

//     document.querySelector("#myBar").style.width = scrolled + "%";

//     document.querySelector("img").style.transform = "translate("+ (document.documentElement.clientWidth - 94) * scrolled / 100 +"px, 0px)";
// }

// let win = null;

// let open = document.querySelector("#show");
// open.addEventListener("click", function(){
//     // window.open("https://yandex.com");
//     win = window.open(
//         "str.html", 
//         "new_window",
//         "width=420,height=220,left=200,top=200,resizable=yes"
//     );
//     console.log(win);

// });

// let cls = document.querySelector("#close");
// cls.addEventListener("click", function(){
//     if(typeof win == "object"){
//          win.close();
//     }   
// })

// console.log(window.location);
// console.log(location);
// // console.log(document.location);
// console.log(location.href);
// alert(location);

// location.href = "https://htmlbook.ru";

// let open = document.querySelector("#show");
// open.addEventListener("click", function(){
//     // window.location.assign("https://htmlbook.ru");
//     window.location.assign("str.html");
// })

// let btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//     let url = document.getElementById("url").value;
//     location.assign(url);
//     // location.replace(url);
//     // location.reload(url);
// })

// console.log("В истории " + history.length + " страниц");
// // history.back();
// // history.forward();
// history.go(-1);

// console.log(window.navigator.userAgent);
// console.log(window.screen);


/* try{
    // код, гда может произойти ошибка
} catch (error){
    // выполнится, если ошибка произошла
} finally {
    // выполнится в любом случае
}
 */

// let a = 5;

// try{
//     console.log(b);
// } catch (error){
//     console.error("Ошибка:", error.message);
// }

// console.log(a);

// try{
//     let num = 16;
//     console.log(num());
// } catch (e){
//     console.log(e.name);
//     console.log(e.message);
//     console.log(e.stack);    
// }

// try{
//     let arr = new Array(-5);
// } catch(err){
//     let text = err.name + "<br>" + err.message + "<br>" + err.stack;
//     document.getElementById("demo").innerHTML = text;
// }


// setTimeout(function () {
//     try {
//         alert(x);
//         alert(2 + 2);
//     } catch (e) {
//         alert(e.name + ": " + e.message);
//     }
// }, 10);


// try {
//     // alert(x);
//     alert(2 + 2);
// } catch (e) {
//     alert(e.name + ": " + e.message);
// } finally{
//     alert("Код в блоке finally");
// }

// let flag = false;
// let but = document.querySelector("button");

// but.addEventListener("click", function(){
//     try{
//         if(!flag){
//             document.body.style.background = "12px";
//         } else {
//             document.body.style.background = "greenyellow";
//         }
//     } catch (e){
//         alert(e);
//     } finally{
//         flag = !flag;
//     }
// })

// function divide(a, b){
//     if(b == 0){
//         throw new Error("Делить на 0 нельзя");
//     }
//     return a / b;
// }

// let res;
// try{
//     res = divide(5, 0);
//     console.log(res);    
// } catch(error){
//     console.log(error.name + ": " + error.message + ", stack: " + error.stack);    
// }

// let but = document.querySelector("button");
// but.addEventListener("click", myFunction);

// function myFunction(){
//     let message = document.getElementById("txt");
//     let x = document.getElementById("demo").value;
//     message.innerHTML = "";
//     try{
//         if(x == ""){
//             throw "пусто";
//         } 
//         if(isNaN(x)){
//             throw "не число";
//         }
//         if(x < 5){
//             throw "слишком мало";
//         }
//         if(x > 10){
//             throw "слишком много";
//         }
//     } catch(err){
//         message.innerHTML = "Вы ввели " + err;
//     }
// }

// function calculate(a, b){
//     if(typeof a != "number"){
//         throw "a - не число";
//     }
//     return a + (b ** 2) / 3;
// }

// console.log(calculate("2", 3));
// console.log(calculate(5, 3));

// Классы

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const person1 = new Person("Андрей", 23);
// console.log(person1);

// class Person2 {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHi(){
//         document.writeln("Привет, " + this.name + "!");
//     }
// }

// const person2 = new Person2("Андрей", 23);
// console.log(person2);
// person2.sayHi();
// alert(typeof Person2);

// let User = class {
//     sayHi(){
//         alert("Привет");
//     }
// }

// let user = new User();
// user.sayHi();
// function makeClass(text) {
//     return class {
//         sayHi() {
//             alert(text);
//         }
//     }
// }

// let User = makeClass("Привет");
// new User().sayHi();

// class Rectangle{
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }

//     area(){
//         return this.height * this.width;
//     }
// }

// const rectangle = new Rectangle(10, 20);
// rectangle.color = "red";
// console.log(rectangle);

// console.log(rectangle.area());

// const rectangle1 = new Rectangle(40, 30);
// console.log(rectangle1);

// Создать два класса Круг и Треугольник. Найти площадь и переметр.


// class User{
//     constructor(name='Гость', role='viewer', isActive=false){
//         this.name = name;
//         this.role = role;
//         this.isActive = isActive;
//         this.createdAt = new Date();
//     }

//     activate(){
//        this.isActive = true;
//        return `Пользователь ${this.name} активирован`; 
//     }
// }

// const admin = new User('Админ', 'admin', true);
// const guest = new User();
// console.log(guest);
// console.log(guest.activate());


// // console.log(admin);
// console.log(guest);

// class Person{
//     #name;
//     #age;
//     constructor(name, age=1){
//         this.#name = name;
//         this.#age = age;
//     }

//     set age(year){
//         if(year > 0 && year < 110){
//            this.#age = year; 
//         }        
//     }

//     get age(){
//         return this.#age;
//     }

//     print(){
//         console.log(`Name: ${this.#name} Age: ${this.#age}`);        
//     }   
// }

// const tom = new Person("Tom", 37);
// tom.print();
// tom.age = 22;
// // tom.#name = "Sam";
// tom.age = -45;
// tom.print();
// console.log(tom.age);

// const sam = new Person("Sam");
// sam.print();
// sam.age = -78;
// sam.print();
// console.log(sam.age);


// class User {
//     constructor(login) {
//         this.login = login;  // вызов сеттера
//     }

//     get login() {
//         return this._login;
//     }

//     set login(value) {
//         if (value.length < 6) {
//             console.log("Логин слишком короткий");
//             return
//         }
//         this._login = value;
//     }

//     getLogin(){
//         return this._login;
//     }

//     setLogin(value){
//         if (value.length < 6) {
//             console.log("Логин слишком короткий");
//             return
//         }
//         this._login = value;
//     }
// }

// let user = new User("administrator");
// // console.log(user.login);
// console.log(user.getLogin());

// // user.login = "admin_admin";
// user.setLogin('admin_admin');
// // console.log(user.login);
// console.log(user.getLogin());

// class Person{
//     constructor(firstName, lastName){
//         this._firstName = firstName;
//         this._lastName = lastName;
//     }

//     get fullName(){
//         return this._firstName + " " + this._lastName;
//     }

//     set fullName(value){
//         [this._firstName, this._lastName] = value.split(/\s+/)
//     }

// }

// let people = new Person("Сергей", "Михайлов");
// document.writeln(people.fullName + "<br>");
// people.fullName = "Анна Петрова";
// document.writeln(people.fullName + "<br>");


// class Mail{
//     constructor(sender){
//         this._sender = sender;
//     }

//     get sender(){
//         return "Почта: " + this._sender;
//     }

//     set sender(val){
//         this._sender = val.toLowerCase();
//     }
// }

// const m = new Mail("test@mail.ru");
// m.sender = "MyTest@MAIL.ru";
// document.writeln(m.sender);


// class Worker{
//     constructor(name, surname, rate, days){
//         this._name = name;
//         this._surname = surname;
//         this._rate = rate;
//         this._days = days;
//     }

//     get name(){
//         return this._name;
//     }

//     get surname(){
//         return this._surname;
//     }

//     get getFullName(){
//        return this._surname + " " + this._name;
//     }

//     get rate(){
//         return this._rate;
//     }

//     get days(){
//         return this._days;
//     }

//     getSalary(){
//         return this.rate * this.days;
//     }
// }

// const worker = new Worker("Иван", "Иванов", 10, 31);
// console.log(worker.name);
// console.log(worker.surname);
// console.log(worker.getFullName);
// console.log(worker.rate);
// console.log(worker.days);
// console.log(worker.getSalary());


// class Animal{
//     constructor(name){
//         this.speed = 0;
//         this.name = name;
//     }

//     run(speed){
//         this.speed = speed;
//         document.writeln(`${this.name} бежить со скоростью ${this.speed} км/ч.<br>`);        
//     }

//     stop(){
//         this.speed = 0;
//         document.writeln(`${this.name} стоит.<br>`);``        
//     }
// }

// class Rabbit extends Animal{
//     constructor(name, earLength){
//         super(name);
//         this.earLength = earLength;
//     }
//     hide(){
//         document.writeln(`${this.name} прячется!<br>`);        
//     }
//     stop(){
//         super.stop();
//         this.hide();   
//     }
// }

// let animal = new Animal("Мой питомец");
// animal.run(80);
// animal.stop();

// let rabbit = new Rabbit("Белый кролик", 10);
// rabbit.run(5);
// rabbit.hide();
// rabbit.stop();
// document.writeln(rabbit.name + "<br>");
// document.writeln(rabbit.earLength + "<br>");


// class Shape{
//     constructor(name){
//         this.name = name;
//     }

//     calculateArea(){
//         throw new Error("Метод calculateArea должен быть реализован");        
//     }

//     describe(){
//         console.log(`Это ${this.name} с площадью ${this.calculateArea()}`);        
//     }
// }

// class Circle extends Shape{
//     constructor(name, radius){
//         super(name);
//         this.radius = radius;
//     }

//     calculateArea(){
//         return (Math.PI * this.radius ** 2).toFixed(2);
//     }
// }

// class Square extends Shape{
//     constructor(name, side){
//         super(name);
//         this.side = side;
//     }

//     calculateArea(){
//         return this.side ** 2
//     }
// }

// class Triangle extends Shape{
//     constructor(name, base, height){
//         super(name);
//         this.base = base;
//         this.height = height;
//     }

//     calculateArea(){
//         return this.base * this.height / 2;
//     }
// }

/* const circle = new Circle("Круг", 5);
circle.describe();

const square = new Square("Квадрат", 4);
square.describe();

const triangle = new Triangle("Треугольник", 6, 3);
triangle.describe(); */

// const shapes = [
//     new Circle("Круг", 5),
//     new Square("Квадрат", 4),
//     new Triangle("Треугольник", 6, 3)
// ];

// shapes.forEach(shape => shape.describe());


// class Animal{
//     static count = 0;

//     constructor(name){
//         this.speed = 0;
//         this.name = name;
//         Animal.count++;
//     }

//     static counter(){
//         return Animal.count;
//     }

//     run(speed){
//         this.speed = speed;
//         document.writeln(`${this.name} бежить со скоростью ${this.speed} км/ч.<br>`);        
//     }

//     stop(){
//         this.speed = 0;
//         document.writeln(`${this.name} стоит.<br>`);``        
//     }
// }

// let animal1 = new Animal("Мой питомец 1");
// let animal2 = new Animal("Мой питомец 2");
// let animal3 = new Animal("Мой питомец 3");
// // console.log(animal1.name);
// // console.log(animal2.name);
// // console.log(Animal.count);
// console.log(Animal.counter());


// class User{
//     static takenNames = [];

//     static isNameTaken(name){
//         return User.takenNames.includes(name);
//     }

//     constructor(name){
//         this.name = name;
//         User.takenNames.push(name);
//     }
// }

// const user1 = new User("Сергей");
// const user2 = new User("Марина");
// console.log(User.takenNames);
// console.log(User.isNameTaken("Сергей"));
// console.log(User.isNameTaken("Алексей"));



// class MathUtils {
//     static PI = 3.141592653589793;

//     static sum(...number) {
//         return number.reduce((total, num) => total + num, 0);
//     }

//     static average(...number){
//         return MathUtils.sum(...number) / number.length;
//     }
// }

// console.log(MathUtils.PI);
// console.log(MathUtils.sum(1, 2, 3, 4));
// console.log(MathUtils.average(1, 2, 3, 4));


/* 
let total = 0;
let num = 2;
0 + 1
1 + 2
3 + 3
6 + 4
10
*/

// class Task{
//     constructor(title = Task.getDefaultTitle()){
//         this.title = title;
//         this.done = false;
//         Task.count++;
//         // console.log("Происходит создание задачи");        
//     }

//     static getDefaultTitle(){
//         return "Задача";
//     }

//     get done(){
//         return this._done === true ? "Задача выполнена" : "Задача не выполнена"; 
//     }

//     set done(value){
//         if(value !== undefined && typeof value == 'boolean'){
//            this._done = value; 
//         } else {
//             console.error("Ошибка! Укажите значение true или false");
//         }
//     }

//     complete(){
//         this.done = true;
//         console.log(`Задача "${this.title}" выполнена`);        
//     }
// }

// Task.count = 0;

// let task1 = new Task("Выучить JavaScript");
// let task2 = new Task("Выучить frameworks");
// let task3 = new Task();

// console.log(task1.title);
// console.log(task2.title);
// console.log(task3.title);

// console.log("Созданных задач: " + Task.count);

// task2.complete();
// task3.complete();

// console.log(task1.done);
// console.log(task2.done);
// console.log(task3.done);

// class Header {
//     constructor(image, h1, h2) {
//         this.src = image;
//         this.h1 = h1;
//         this.h2 = h2;
//         this.out = "";
//     }

//     render(id) {
//         this.out = `
//             <img src="${this.src}" alt="Изображение">
//             <h1>${this.h1}</h1>
//             <h2>${this.h2}</h2>
//         `;
//         document.querySelector(`#${id}`).innerHTML = this.out;
//     }
// }

// class HeaderExt extends Header {
//     constructor(image, h1, h2, tel) {
//         super(image, h1, h2);
//         this.tel = tel;
//     }

//     get tel(){
//         return this._tel;
//     }

//     set tel(value){
//         let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
//         if(reg.test(value)){
//             this._tel = value;
//         } else{
//             alert("Некорректный номер телефона");
//         }
//     }

//     render(id) {
//         super.render(id);

//         this.out += `<h3>${this.tel}</h3>`;
//         document.querySelector(`#${id}`).innerHTML = this.out;
//     }
// }

// let img = "https://images.icon-icons.com/2667/PNG/96/folder_js_icon_161291.png";
// let header1 = new Header(img, "Заголовок", "Описание");
// header1.render("header");

// let img2 = "https://images.icon-icons.com/1098/PNG/96/1485481257-48_78629.png";
// let header2 = new Header(img2, "Второй заголовок", "Другое описание");
// header2.render("header2");

// let img3 = "https://images.icon-icons.com/3206/PNG/96/square_js_icon_195777.png";
// let header3 = new HeaderExt(img3, "Название", "Описание", "+7 987 654-54-32");

// // header3.tel = "Hello";
// header3.tel = "+7 950 555-77-99";

// header3.render("header-ext");

/* const canvas = document.getElementById("test");
const c = canvas.getContext("2d");

// c.fillStyle = "#369";
// c.fillRect(10, 10, 60, 50);

// c.fillStyle = "#f60";
// c.fillRect(40, 50, 100, 90);

// c.setLineDash([15, 5]);
// c.lineWidth = 4.5;
// c.strokeStyle = "#369";
// c.strokeRect(5, 5, 140, 140);

// c.clearRect(30, 30, 50, 50);


// c.fillRect(20, 20, 160, 160); 
// c.clearRect(50, 50, 100, 100); 
// c.lineWidth = 4.5;
// c.strokeRect(60, 60, 80, 80);

// c.beginPath();
// c.rect(30, 180, 100, 90);
// c.closePath();

// c.fillStyle = "yellow";
// c.strokeStyle = "brown";
// c.fill();
// c.stroke();

// c.clip();

// c.beginPath();
// c.rect(10, 200, 140, 90);
// c.closePath();
// c.stroke();

// c.beginPath();

// c.moveTo(80, 50);
// c.lineTo(100, 80);
// c.lineTo(100, 30);

// c.closePath();
// c.strokeStyle = "brown";
// c.stroke();
// c.fillStyle = "yellow";
// c.fill();

// c.beginPath();
// c.arc(200, 80, 40, 0, Math.PI * 2);
// c.stroke();
// c.closePath();

// c.beginPath();
// c.moveTo(300, 80);
// c.arc(300, 80, 40, 0, Math.PI / 2, true);
// c.closePath();
// c.stroke();

// c.beginPath();
// c.moveTo(310, 90);
// c.arc(310, 90, 40, 0, Math.PI / 2, false);
// c.closePath();
// c.stroke();

// c.beginPath();
// c.moveTo(410, 90);
// c.arc(410, 90, 40, 0, Math.PI);
// c.closePath();
// c.stroke();

// c.beginPath();
// c.moveTo(180, 220);
// c.quadraticCurveTo(230, 160, 290, 220);
// c.closePath();
// c.strokeStyle = "red";
// c.stroke();


// c.beginPath();
// c.moveTo(180, 260);
// c.bezierCurveTo(240, 200, 220, 320, 290, 260);
// c.closePath();
// c.strokeStyle = "red";
// c.stroke();

// c.fillStyle = "blue";
// c.font = "30px Arial";
// c.fillText("Hello World", 160, 30);
// c.strokeText("Hello World", 320, 30);

// c.font = "30px Verdana";
// c.fillStyle = "orange";
// c.textAlign = "center";

// c.shadowOffsetX = 3;
// c.shadowOffsetY = 3;
// c.shadowBlur = 3;
// c.shadowColor = "#AAA";

// c.fillText("Hello World", canvas.width / 2, canvas.height / 2);

// let pic = new Image();
// pic.src = "golden_star.png";
// pic.addEventListener("load", function(){
//     c.drawImage(pic, 150, 100);

//     c.drawImage(pic, 160, 0, 300, 130);
// })

// let gr = c.createLinearGradient(320, 0, 470, 0);

// gr.addColorStop(0, "red");
// gr.addColorStop(0.4, "magenta");
// gr.addColorStop(1, "yellow");

// c.fillStyle = gr;
// c.fillRect(320, 170, 150, 60);

// let st = c.createLinearGradient(320, 0, 470, 0);
// st.addColorStop(0, "yellow");
// st.addColorStop(1, "orange");
// c.strokeStyle = st;
// c.lineWidth = 10;
// c.strokeRect(320, 170, 150, 60);

// let grd = c.createRadialGradient(400, 270, 5, 400, 270, 60);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "yellow");
// c.fillStyle = grd;
// c.fillRect(320, 240, 150, 60);


// c.shadowOffsetX = 10;
// c.shadowOffsetY = 15;
// c.shadowBlur = 10;
// c.shadowColor = "#0F0";

// let gr = c.createRadialGradient(60, 60, 15, 75, 75, 75);
// gr.addColorStop(0, "#0F0");
// gr.addColorStop(1, "#0DA805");

// c.fillStyle = gr;

// c.beginPath();
// c.arc(75, 75, 75, 0, Math.PI * 2);
// c.closePath();
// c.fill();


// c.fillStyle = "brown";
// c.fillRect(50, 50, 100, 100);

// c.fillStyle = "orange";
// c.globalAlpha = 0.5;
// // c.translate(50, 25);
// // c.rotate(.52);
// c.scale(1.5, 1.5);
// c.fillRect(50, 50, 100, 100);

const w = canvas.width;
const h = canvas.height;

const mouse = { x: 0, y: 0 };
let draw = false;

// нажатие мыши
canvas.addEventListener("mousedown", function (e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    draw = true;
    c.beginPath();
    c.moveTo(mouse.x, mouse.y);
});

// перемещение мыши
canvas.addEventListener("mousemove", function (e) {
    if (draw) {  // draw == true
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        c.lineTo(mouse.x, mouse.y);
        c.stroke();
    }
});

// отпускаем мыши
canvas.addEventListener("mouseup", function (e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    c.lineTo(mouse.x, mouse.y);
    c.stroke();
    c.closePath();
    draw = false;
}); */


// let info = '{"first_name":"Ivan","age":36,"mother":{"name":"Olga","age":58},"children":["Kate","Igor","Misha"],"married":true,"dog":null}';

// console.log(info);

// let person = JSON.parse(info);
// console.log(person);

// person.first_name = "Petr";
// document.writeln(person.first_name + "<br><br>");

// delete person.age;

// for(let i in person){
//     document.writeln(i + ": " + person[i] + "<br>");    
// }

// person.work = "programmer";
// document.writeln("<br>");
// for(let i in person){
//     document.writeln(i + ": " + person[i] + "<br>");    
// }
// document.writeln("<br>");
// delete person.children[1];
// document.writeln(person.children + "<br><br>");

// person.children.splice(1,1);
// document.writeln(person.children + "<br><br>");

// person.children.push("Ira");
// document.writeln(person.children + "<br><br>");

// let personString = JSON.stringify(person);
// console.log(personString);


// const user = {
//     name: "Вадим",
//     surname: "Ветров",
//     age: 23,
//     city: "Москва"
// };

// // const json = JSON.stringify(user);
// const json = JSON.stringify(user, ["name", "age"], 2);

// console.log(json);


// function parseJSON(jsonString, value = {}){
//     try{
//         return JSON.parse(jsonString);
//     } catch(error){
//         console.log("Failed to parse JSON:", error.message);
//         return value;
//     }    
// }

// const validJSON = '{"name": "Igor", "age": 30}';
// const invalidJSON = '{"name": "Igor", age: 30}';

// console.log(parseJSON(validJSON));
// console.log(parseJSON(invalidJSON));

// if(navigator.cookieEnabled === false){
//     alert("Cookies отключены");
// } else{
//     alert("Cookies включены");
// }

// document.cookie = "user=Сергей";
// alert(document.cookie);
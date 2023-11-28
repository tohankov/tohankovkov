//створюємо ім'я корістувача
const username = prompt('Напішіть Ваше імя');
//Виводимо в консоль питання по імя 
console.log(`Привіт, ${username}`);
//Обєднали стрінги в один рядок

//Створили поточний рік
const year = 2023;
const age = prompt('Напишіть рік Вашого народження');
//Рахуємо вік народження
console.log(year - age);

const bank = prompt('Введіть кількість $')
const euro = 1.1;
const count = Math.floor(bank * euro);
console.log(count);

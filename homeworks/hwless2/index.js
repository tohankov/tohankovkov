//Робимо математично правільне рівняння і все
let result = (0.1 * 10 + 0.2 * 10) / 10;
console.log(result);

const srt = "1";
const num = 2;
//Переводімо стрінг в намбер через консольлог
console.log(Number(srt) + num);

//Вводимо скільки МБ у ГБ
const gig = 1024;
const howGB = prompt("Вкажіть обсяг флешки в ГБ: ");
//Переводимо ГБ в МБ
const howMB = gig * howGB
//Дізнаємось скількі файлів вмиститься у к-сть введеного ГБ
const res1 = Math.floor(howMB / 820);
console.log(res1);

//Записуємо кількість грошей
const money = prompt("Скільки у Вас грошей в гаманці: ");
//Записуємо скільки коштує шоколадка
const cost = prompt("Скільки rоштує 1 шоколадка: ");
//Рахуємо скільки шоколадок можемо купити
const res2 = Math.floor(money / cost);
//Знаходимо решту
const proc = money % cost;
console.log(`На свою сумму Ви модете прідбати ${res2} шоколадок, у Вас залишіться ${proc} гривень`);

//!Намагався робити сам, але концепцію дав чат ДЖПТ, потім змінив константи на лет, але я нічого не зрозумів, в цілому код працює, але я не зміг на калькуляторі відтвориті це ривняння, але не виходило
let number = prompt('Введіть трьохзначне число, та отримаєте реверс числа: ');
let revNumber = 0;
while (number > 0) {
revNumber = revNumber * 10 + (number % 10);
number = Math.floor(number / 10);
}
console.log(revNumber);

let dep = prompt('Введіть суму вкладу в банк: ');
let pros2 = 5;
let months = 2;
//Рахуємо завдяки пропорції, 1. визначаємо скільки грн нарахує в рік, потім ділимо на кількість місяців. Все просто, але дуже довго думав. 
let interestAmount = (dep * pros2 * months) / (12 * 100);
console.log(`Сума нарахованих відсотків: ${interestAmount.toFixed(2)} грн`);
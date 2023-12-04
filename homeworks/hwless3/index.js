let age = +prompt("Введіть ваш вік: ");
//Робимо перевірку на число и чи воно бильше за 0
if (!isNaN(age) && age >= 0) {
  //Робимо пусту змінну, щоб потім її переписати
  let category = "";
  if (age <= 11) {
    category = "Дитина";
  } else if (age >= 12 && age <= 17) {
    category = "Підліток";
  } else if (age >= 18 && age <= 59) {
    category = "Дорослий";
  } else {
    category = "Пенсіонер";
  }
  //Виводимо коректні дані
  console.log(`Ваш вік ${age}, Ви ${category}.`);
  //Якщо коректні дані введени не вірно, відпрацьовує елсе
} else {
  console.log("Введіть коректні данні!");
}

//Робимо через світч кейс
let num = +prompt("Введіть чісло від 0 до 9: ");
if (!isNaN(num) && num >= 0 && num <= 9) {
  let specSym = "";
  switch (num) {
    case 0:
      specSym = ")";
      break;
    case 1:
      specSym = "!";
      break;
    case 2:
      specSym = "@";
      break;
    case 3:
      specSym = "#";
      break;
    case 4:
      specSym = "$";
      break;
    case 5:
      specSym = "%";
      break;
    case 6:
      specSym = "^";
      break;
    case 7:
      specSym = "&";
      break;
    case 8:
      specSym = "*";
      break;
    case 9:
      specSym = "(";
      break;
    default:
      console.log("Введіть число від 0 до 9");
  }
  console.log(`Ваш спеціальний символ: ${specSym}`);
} else {
  console.log("Некоректне введення данних, введіть число!");
}

//Зациклюємо чісло від першого до другого з +1, та += додаємо значення, виводимо сумму
let num1 = +prompt("Введіть перше число: ");
let num2 = +prompt("Введіть друге число: ");
let sum = 0;
for (let i = num1; i <= num2; i++) {
  sum += i;
}
console.log(
  `Ви ввели чісла ${num1} та ${num2}, сума в діапозоні цих чисел = ${sum}`
);

// Запитати у користувача два числа
let num3 = parseInt(prompt("Введіть перше число:"));
let num4 = parseInt(prompt("Введіть друге число:"));

// Визначити менше з двох чисел
let min = num3 < num4 ? num3 : num4;

// Знайти найбільший спільний дільник
let gcd;
for (let i = 1; i <= min; i++) {
  if (num3 % i === 0 && num4 % i === 0) {
    gcd = i;
  }
}

console.log(
  `Найбільший спільний дільник чисел ${num3} і ${num4} дорівнює: ${gcd}`
);

// Запитати у користувача число
let number = parseInt(prompt("Введіть число:"));

// Вивести всі дільники числа
console.log(`Дільники числа ${number}:`);
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    console.log(i);
  }
}

//через спліт реверс та джоін перевертаємо число, та дізнаємось чи воно є паліндромом
let str = prompt("Введіть п'ятибуквене слово :");
if (str.length === 5) {
  let reversedStr = str.split("").reverse("").join("");
  if (str === reversedStr) {
    console.log(`Слово ${str} є паліндромом.`);
  } else {
    console.log(`слово ${str} не є паліндромом.`);
  }
} else {
  console.log("Будь ласка, введіть п'ятибуквене слово.");
}

//Перевіряємо в якому діапазоні знаходиться сума, математичною дією рахуємо скільки знижка, та виводимо суму до сплати
//Виводимо ціле число, без дробових
let money = parseFloat(prompt("Введіть суму покупки:"));
if (!isNaN(money)) {
  let discount = 0;
  if (money >= 200 && money < 300) {
    discount = 3;
  } else if (money >= 300 && money < 500) {
    discount = 5;
  } else if (money >= 500) {
    discount = 7;
  }
  let discountedFin = money - (money * discount) / 100;
  console.log(`Сума до оплати зі знижкою: ${discountedFin.toFixed(0)}`);
} else {
  console.log("Будь ласка, введіть коректну суму покупки.");
}

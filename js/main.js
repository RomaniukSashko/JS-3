// Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.

const result = 5 + 5 + "5";
console.log(result);
console.log(typeof(result));

// Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів. Результат виведіть в консоль.

// пошта вигадана
const email = "romaniukoleksandrviacheslavovych@gmail.com";
console.log(email.includes("@"));
console.log(email.length);

// Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.

const first = "My";
const second = "name";
const third = "is";
const fullName = first + " " + second + " " + third + " " + "Viktor";
console.log(fullName);

// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»

const userName = "Олександра";
const payment = "300 гривень";
console.log(`Дякуємо, ${userName.slice(0,9)}о! До сплати ${payment}`);

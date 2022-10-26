// task1
// var age = prompt("Enter your age");
// if(age >= 0 && age <= 2) alert("You are child.");
// if(age >= 12 && age < 18) alert("You are adolescent.");
// if(age >= 18 && age < 60) alert("You are adult.");
// if(age >= 60) alert("You are pensioner.");

// task2
// var key = prompt("Enter key(0-9)");
// var key_spis = { "0": ")", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&", "8": "*", "9": "("};
// alert(key_spis[key]);

// task3
// var num = prompt("Enter number");
// var count = 0;
// var spis = {};
// for(let i = 0; i < 3; i++)
// {
//     if(spis[num[i]] != null) count++;
//     else spis[num[i]] = 0;
// }
// if(count == 0) alert("There are no identical numbers")
// else alert(`There are identical numbers`);

// task4
// var g = prompt("Enter year")
// if (g % 4 == 0) {
//     if ((g % 100 != 0) || (g % 400 == 0)) {
//         alert("visokosniy");
//     }
//     else alert("ne visokosniy");
// }
// else alert("ne visokosniy");

//task 5
// var number = +prompt('Enter num');
// n5 = ((((number % 10000) % 1000) % 100 ) % 10);
// n4 = Math.trunc((number % 100) / 10);
// n2 = Math.trunc((number % 10000) / 1000);
// n1 = Math.trunc(number / 10000);
// if (n5 == n1 && n4 == n2) {
//     alert ("Palindrom")
// } else {
//     alert ("Ne palindrom")
// };

// task6
// var dollar = +prompt("Count of dollars");
// var currency = prompt("USD to currency: EUR, UAN, AZN");
// const to_eur = 0.9;
// const to_uan = 24.74;
// const to_azn = 1.7;
// var result = 0;

// switch (true) {
//     case currency == 'EUR':
//         result = dollar * to_eur;
//         alert (`EUR: ${result}`);
//         break;
//     case currency == 'UAN':
//         result = dollar * to_uan;
//         alert (`UAN: ${result}`);
//         break;
//     case currency == 'AZN':
//         result = dollar * to_azn;
//         alert (`AZN: ${result}`);
//         break;
// }; 

// task7
// var sum = +prompt("Enter sum");
// var discount = 0;
// var result = 0;
// switch (true) {
//     case sum >= 200 && sum <= 300:
//         discount = 0.03;
//         result = sum - (discount * sum);
//         break;
//     case sum > 300 && sum <= 500:
//         discount = 0.05;
//         result = sum - (discount * sum);
//         break;
//     case sum > 500:
//         discount = 0.07;
//         result = sum - (discount * sum);
//         break;
//     default:            
//         break;
// };
// alert (`Sum with discount: ${result}`);

// task8
// var C = +prompt("Circle length");
// var P = +prompt("Square perimetr");
// var R = C / (2 * Math.PI);
// var side = P / 4;
// if (R <= side / 2) {
//     alert ("Can")
// } else {
//     alert ("Cannot")
// };

// task9
// var questionOne = prompt("2 + 2 = ? | 4, 5, -3");
// var questionTwo = prompt("2 = 2 ? | Yes, No, Impossible to solve");
// var questionThree = prompt("3^3 = ? | 9, 27, -100000012");
// var points = 0;
// if (questionOne == '4') points += 2;
// if (questionTwo == 'Yes') points += 2;
// if (questionThree == '27') points += 2;
// alert (`Sum of points: ${points}`)

// task10
var day = +prompt("Enter day");
var month = +prompt("enter month");
var year = +prompt("Enter year");
var date = new Date(year, month - 1, day);
var next_day = new Date(date);
next_day.setDate (date.getDate() + 1);
alert (`Next day: ${next_day}`); 
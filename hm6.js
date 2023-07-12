// let number = max(25, 50);
// console.log(number);

// function max(number1, number2){
// if (number1 > number2)
// return number1;
// return number2;
// }




// let amount = maxNumber(100, 500);
// console.log(amount);

// function maxNumber(number1, number2){
// if (number1 > number2)
// return number1;
// return number2;

// }

// let amount1 = maxNumber(100, 2000)
// console.log(amount1);

// function maxNumber(a, b){
// if (a > b)
// return a;
// return b;
// }


// let amount2 = maxNumber(150, 1000)
// console.log(amount2);

// function maxNumber(a, b){
// if (a >= b){
// console.log('option a is true')
// return a;
// } else {
// console.log('option b is true')
// return b;
// }
// }




// function checkAge(age) {
//     if (age < 18){
//     return false;
//     } else {
//     return true;
//     }
// }

// const result = checkAge(17);
// console.log(result)

// const result2 = checkAge(20);
// console.log(result2)



// Переписати  “ДЗ 4. Усічення рядка” на окрему функцію.

// Можете залишити prompt, або отримувати параметри, як аргумент.


// prompt('Який ваш довільний рядок?');

// const question1 = 'Який ваш довільний рядок?';
// const str1 = ` ${question1}`;
// console.log(str1.length);
// const minLengthWidth= "26"

// const result1 = prompt('Яка ваша максимальна довжина рядка?');

// const question2 = 'Яка ваша максимальна довжина рядка?';
// const str2 = ` ${question2}`;
// console.log(str2.length);
// const maxLengthWidth = "36"



// const str = 'Яка ваша максимальна довжина рядка?'
// const maxLength = 25

// const str3 = "Який ваш довільний рядок?"


// function cutString (str, maxLength){
//     if (str.length > maxLength) {
//         return str.slice(0, maxLength) +"...";
//     } else {
//         return str;
//     }
    
// }
// function cutString2 (str3, str){
//     if (str3.length < str.length ) {
//         return str3 +"...........";

//     }
// }




// const result = cutString(str, maxLength);
// console.log(result);

// const result4 = cutString2(str3, str);
//console.log(result4);


 

// 4. Напишіть функцію checkWord(str, word), яка приймає рядок str і слово word.

// Функція має повернути true, якщо слово знаходиться у рядку, інакше повернути false.

const str = "How many letters are there in that word?"

function checkWord (str){
    if (str.includes("word")){
        return true;
    } else {
        return false;
    }
}
function checkWord1 (str){
    if (str.includes("repeat")){
        return true;
    } else {
        return false;
    }
}

const result = checkWord(str)
console.log(result)

const result1 = checkWord1(str)
console.log(result1)




//test

const str = "What are you doing right now?";
const maxLength = 15;

function cutString(str, maxLength) 
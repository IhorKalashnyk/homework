//1. Написати функцію maxNumber(a, b), яка отримує два числа, то повертає більший з них.

// let number = max(25, 50);
// console.log(number);

// function max(number1, number2){
// if (number1 > number2)
// return number1;
// return number2;
// }


//test
// const number = maxNumber(60, 65);
// console.log(number);

// function maxNumber(number1, number2){
//     if (number1 > number2) {
//         console.log("false")
//         return number1;
//     } else {
//         console.log('true')
//         return number2;
//     }
        
        
    
    
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

//test arowFunction homework7

// const maxNumber = (a, b) => a > b;
// const result = maxNumber(150, 1000);
// console.log(result)

// const maxNumber = (a, b) => {return a < b};
// const result = maxNumber(100, 1000);
// console.log(result);

//2. Написати функцію checkAge(age), яка отримую вік користувача і якщо йому меньше 18, тоді повертати false, інакше - true

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
// console.log(result2);

//test homeework arrowfunction

// const checkAge = (age) => age < 18;
// const result = checkAge(17);
// console.log(result);

// const checkAge1 = (age) => age < 18;
// const result1 = checkAge1(20);
// console.log(result1);


// const checkAge = (age) => age < 18;
// const result = checkAge(17);
// console.log(result);

// const checkAge = (age) => {return age > 18};
// const result = checkAge(17);
// console.log(result)

// const checkAge = (age) => {return age < 45};
// const result = checkAge(100);
// console.log(result);

// 3. Переписати  “ДЗ 4. Усічення рядка” на окрему функцію.

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



  //test homework7 arrowfunction

//   const cutString = (str, maxLength) => {
//     if (str.length > maxLength) { 
//         return str.slice(0, maxLength) +'...';
//     } else {
//         return str;
//     }
    

// }
// console.log(cutString("Яка ваша максимальна довжина рядка?", 25)); 

// const cutString = (str, maxLength) =>{
//     if (str.length > maxLength) {
//         return str.slice(0, maxLength) +"..."
//     } else {
//         return str;
//     }
// }
//  console.log(cutString("Яка Ваша довільна довжина рядка?", 25));

// const cutString = (str, maxLength) =>{
//     if (str.length > maxLength) {
//         return str.slice(0, maxLength) +"...";
//     } else {
//         return str;
//     }
// }
// console.log(cutString("What are you doing write now?", 25));

// const cutString = (str, maxLength) =>{
//     if (str.length > maxLength){
//         return str.slice(0, maxLength) +"...";
//     } else {
//         return str;
//     }
// }
// console.log(cutString("gtgrtttttnthnhnhnhnhnhtnhtt", 25));

// const cutString = (str, maxLength) =>{
//     if (str.length > maxLength) {
//         return str.slice(0, maxLength) +"..grgthgh";
//     } else {
//         return str;
//     }
// }
//   console.log(cutString('ergghhrhththtyytytttmmm', 15));
// 4. Напишіть функцію checkWord(str, word), яка приймає рядок str і слово word.

// Функція має повернути true, якщо слово знаходиться у рядку, інакше повернути false.

// const str = "How many letters are there in that word?"

// function checkWord (str){
//     if (str.includes("word")){
//         return true;
//     } else {
//         return false;
//     }
// }
// function checkWord1 (str){
//     if (str.includes("repeat")){
//         return true;
//     } else {
//         return false;
//     }
// }

// const result = checkWord(str)
// console.log(result)

// const result1 = checkWord1(str)
// console.log(result1)

const checkWord = (str) =>{
    if (str.includes('word')){
        return true;
    } else {
        return false;
    }
}
const result = checkWord('How many letters are there in that word?');
console.log(result)
//another way
console.log(checkWord("How many letters are there in that word?"));
//Test 

// const str = "How many words are there in the boock?"
// const maxLength = "15"

// function cutString(str, maxLength){
//     if (str.length > maxLength) {
//         return str.slice(0, maxLength) +"...";
//     } else {
//         return str;
//     }


// }
// const result = cutString(str, maxLength);
// console.log(result)



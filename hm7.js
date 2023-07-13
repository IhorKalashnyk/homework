//1. Написати функцію maxNumber(a, b), яка отримує два числа, то повертає більший з них.
// const maxNumber = (a, b) => a > b;
// const result = maxNumber(150, 1000);
// console.log(result)

// const maxNumber = (a, b) => {return a < b};
// const result = maxNumber(100, 1000);
// console.log(result);

//2. Написати функцію checkAge(age), яка отримую вік користувача і якщо йому меньше 18, тоді повертати false, інакше - true
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

// 3. Переписати  “ДЗ 4. Усічення рядка” на окрему функцію. Можете залишити prompt, або отримувати параметри, як аргумент.

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
// console.log(cutString("How much wood would a woodchuck chuck if a woodchuck could chuck wood?", 25));

//  const cutString = (str, maxLength) => {
//     if (str.length > maxLength) {
//          return str.slice(0, maxLength) +".....? As much wood as a woodchuck could chuck, If a woodchuck could chuck wood!";
//      } else {
//         return str;
//      }
//  }
//    console.log(cutString('How much wood would a woodchuck chuck if a woodchuck could chuck wood?', 15));

// 4. Напишіть функцію checkWord(str, word), яка приймає рядок str і слово word.
 const checkWord = (str) =>{ 
     if (str.includes('word')){
        return true;
     } else {
         return false;
    }

 } 
    
 const result = checkWord('How many letters are there in that word?');
 console.log(result)
// //another way
 console.log(checkWord("How many letters are there in that word?"));
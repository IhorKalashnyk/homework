// Напишіть функцію findAverage(array), яка приймає массив чисел та обчислює середнє значення чисел.
// Приклад:
// findAverage([1, 2, 4, 7, 10]) // 4.8
// findAverage([]) // 0
// Примітка: Порожні масиви мають повертати 0.


const numbersArray = [1, 2, 4, 7, 10]

 function findAverage(numbers) {
     if (numbers.length === 0) {
        return 0;
     }
     const  amountPluss = numbers.reduce((acc, numbers)=> acc + numbers, 0);

     return amountPluss / numbers.length 
 }


 const result = findAverage(numbersArray);
 console.log(result);




// const numberArray = [1, 2, 4, 7, 10];
// function findAverage (number) {
//     if (number.length === 0)
//     return 0;


//     const amountPluss = number.reduce((acc, number) => acc + number)
//     return amountPluss / number.length

// }


// const result = findAverage(numberArray)
// console.log(result)



























// const numbersArray = [1, 2, 4, 7, 10];
// function findAverage(numbers) {
//     if (numbers.length === 0)
//     return 0;

//     const amountPlus = numbers.map((acc, numbers)=> acc + numbers, 0)
//     return amountPlus / numbers;
// }

 
// const result = (findAvresult);


























//  const numbersArray = [1, 2, 3, 4, 7, 10];
//  function findAverage(numbers) {
//     if (numbers.length === 0)
//     return 0;


//     const amountPluss = numbers.map((acc, numbers)=> acc + numbers, 0)
//     return amountPluss / numbers.length
//  }

// const result = findAverage(numbersArray);
// console.log(result)
























// const numbersArray = [1, 2, 3, 4, 7, 10];
// function findAverage(numbers) {
//     if (numbers.length === 0)
//     return 0;


//     const amountPlus = numbers.reduce((acc, numbers)=> acc + numbers, 0)
//     return amountPlus / numbers.length
// }
// const result = findAverage(numbersArray);
// console.log(result);


// const numbersArray = [1, 2, 3, 4, 7, 10];

// function findAverage (numbers) {
//     if (numbers.length === 0)
//     return 0
// }

// const amountPluss = numbers.reduce((acc, numbers)=> acc + numbers, 0);
// return amountPluss / numbers.length 

// const result = findAverage(numbersArray);
// consolr.log(result);
// ;



// const numbersArray = [1, 2, 3, 4, 7, 10]
// function findAverage(numbers) {
//     if (numbers.length ===0) {
//         return 0;
//     }

//     const amountPlus = numbers.reduce((acc, numbers)=> acc + numbers, 0);

//     return amountPlus / numbers.length

// }

// const result = findAverage(numbersArray);
// console.log(result);






//   const numbersArray = []

//  function findAverage(numbers) {
//      if (numbers.length === 0) {
//         return 0;
//      }
//      const  amountPluss = numbers.reduce((acc, numbers)=> acc + numbers, 0);

//      return amountPluss / numbers.length 
//  }


//  const result = findAverage(numbersArray);
//  console.log(result);



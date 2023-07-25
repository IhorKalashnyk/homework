// Напишіть функцію findAverage(array), яка приймає массив чисел та обчислює середнє значення чисел.
// Приклад:
// findAverage([1, 2, 4, 7, 10]) // 4.8
// findAverage([]) // 0
// Примітка: Порожні масиви мають повертати 0.



  const numbersArray = []

 function findAverage(numbers) {
     if (numbers.length === 0) {
        return 0;
     }
     const  amountPluss = numbers.reduce((acc, numbers)=> acc + numbers, 0);

     return amountPluss / numbers.length 
 }


 const result = findAverage(numbersArray);
 console.log(result);



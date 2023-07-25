// Є массив:
// const users = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6'];



// Перше завдання:
// Вам треба перевірити чи всі елементи довше ніж 4 символа.
// Та вивести у консоль результат (true або false).


//В данному прикладі буде true, тому що всі елементи в array відповідають умові
 const usersNames = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6'];
 function checkEveryElementsMoreThan(users){
     return users.every(user => user.length > 4)
 }
 const result = checkEveryElementsMoreThan(usersNames);
 console.log(result);

//В цьому прикладі більше елементів, які не відповідають у мові, а ніж тих елементів, які відповідають тому тут false.
 const usersNames1 = ['user', 'user', 'user', 'user', 'user2', 'user3']; 
 function checkEveryElementsMoreThan4(users){
     return users.every(user => user.length > 4);
 }
 const result1 = checkEveryElementsMoreThan4(usersNames1);
 console.log(result1);



// Друге завдання:
// Вам треба перевірити хоча б один елемент довше ніж 4 символа.
// Та вивести у консоль результат (true або false).


//В данному прикладі буде true тому, що метод some зупиняється шукати на першому знайденому елементі  
 const usersNames2 = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6'];
 function checkSomeElementsMoreThan(users){
     return users.some(user => user.length > 4);
}
const result2 = checkSomeElementsMoreThan(usersNames2);
console.log(result2);



//В данному прикладі буде false тому, що метод some не знайшов жоден елемент який би відповідав умові 
const usersNames3 = ['user', 'user', 'user', 'user', 'user', 'user'];
function checkSomeElementsMoreThan2(users){
    return users.some(user => user.length > 4);
}
const result3 = checkSomeElementsMoreThan2(usersNames3);
console.log(result3); 



// Трете завдання:
// Потрібно перетворити массив користувачів таким чином, щоб ми отримали новий массив з назвамикористувачів написанних капслоком.
// Приклад: user1 -> USER1

//   const usersNames4 = ['user1', 'user20', 'user300', 'user4000', 'user50000', 'user600000'];
//   function rebuildMapToUppercase(users) {
//       return users.map(user => user.toUpperCase());
//  }

//  const result4 = rebuildMapToUppercase(usersNames4);
//  console.log(result4)



const usersNames4 = ['user1', 'user20', 'user300', 'user4000', 'user50000', 'user600000'];
function rebuildMapToUppercase(users) {
    return users.map (users => users.toUpperCase());
}

const result7 = rebuildMapToUppercase(usersNames4);
console.log(result7);
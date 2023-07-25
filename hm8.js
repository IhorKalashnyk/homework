
// 1. Створити попоредньо створити массив елементів.
// Треба пройтись по всім елементам массива на вивести їх у консоль.
// const usersNames = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6']
// console.log(usersNames)

//1.1 Чому цей код не працює?
// const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//  function callback(item) {
//     if( 2 >= item){
//         return 2;
//     } else {
//         return item;
//     }
//     console.log(item)
// }
// sum.forEach(callback);


// чому  цей код повертає цифри більше двох?
// const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//  function callback(item) {
//     if( 2 >= item){
//         return 2;
//     } 
//     console.log(item)
// }
// sum.forEach(callback);



//А цей працює?
// const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//  function callback(element){
//     if(2 >= element)
//     console.log(element)
//  }
    

// sum.forEach(callback);





// В мене не виходить зробити arrow function 
// const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   function callback(element){
//     if(2 >= element) 
//     console.log(element)
    
//   }
// sum.forEach(callback);





//2. Реалізувати функцію, яка має приймати массив та елемент, який ми будемо шукати.Функція має шукати елемент у массиві та повертати true або false

// const userNames = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6']
// console.log(userNames.includes('user3'));
// console.log(userNames.includes('user8'))


//3. У вас є список юзерів ['user', 'user1', 'user10', 'user100', 'user1000'], вам потрібно повернути перший елемент, який відповідає умові str.length > 4
 

// const usersNames = ['user','user1', 'user10', 'user100', 'user1000'];

// function findUserByLength(users) {
// return users.find(user => user.length > 4);
// }

// const result = findUserByLength(usersNames);
// console.log(result); 






// const usersNames = ['user', 'user2', 'user30']
// function findUserByLength(users){
//     return users.find(user => user.length >=4 )
// }
// const result = findUserByLength(usersNames);
// console.log(result)





//4.У нас є массив з попереднього завдання, але треба повернути не перший елемент, а массив всіх значеннь. Треба зробити фільтрацію.


// const userNames = ['user', 'user1', 'user10', 'user100', 'user1000'];
// const result = userNames.filter(userName => userName.length > 5);
// console.log(result);


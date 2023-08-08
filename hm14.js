const number = +prompt('Введіть число між 0 та 3', '');

 switch (number) {     
 case 0:
    alert('ви ввели число 0')
    console.log('ви ввели число 0 ')
    break;
    case 1:
    alert('Ви ввели число 1')
    console.log('ви ввели число 1')
    break;
    case 2:
    case 3:
    alert('Ви ввели число 2 або 3')
    console.log('ви ввели число 2 або 3')
    break;
    default:
    alert('ви ввели число більше 3')
    console.log('ви ввели число більше 3')
    break;
}    

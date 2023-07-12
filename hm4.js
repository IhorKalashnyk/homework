prompt('Який ваш довільний рядок?');

const question1 = 'Який ваш довільний рядок?';
const str1 = ` ${question1}`;
console.log(str1.length);
const minlength = "26"

const result1 = prompt('Яка ваша максимальна довжина рядка?');

const question2 = 'Яка ваша максимальна довжина рядка?';
const str2 = ` ${question2}`;
console.log(str2.length);
const maxLength = "36"




if (maxLength > minlength) {
    console.log('maxLength > minlength')
    const result = str2.slice(0, 26);
    console.log(result);
} else if (maxLength < minlength) {
    console.log('maxLength < minlength')
    const result = str2.slice(0, 36);
    console.log(result); 
}











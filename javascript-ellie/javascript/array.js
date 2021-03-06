'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. index position
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruit
// (1). for
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//(2). for of
for(let fruit of fruits) {
    console.log(fruit);
}

//(3). foreEach
// fruits.forEach(function (fruit, index) {
//     console.log(fruit, index);
// });
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: μμ΄νμ λ€μλ€κ° μΆκ°
fruits.push('π', 'π');
console.log(fruits);
// pop: λ€μ μλ μμ΄νμ μ κ±°
fruits.pop();
const poped = fruits.pop();
console.log(poped);
console.log(fruits);
fruits.pop();
console.log(fruits);
// unshift: μμ΄νμ μμλ€κ° μΆκ°
fruits.unshift('π','π')
console.log(fruits);
// shift: μμ μμΉν μμ΄νμ μ­μ 
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

// note: shift , unshift λ pop, push λ³΄λ€ λλ¦¬λ€. μ΄μ λ λ€μ μΆκ°νκ±°λ μ κ±°ν λλ λ°λ‘ μΆκ°μ μ κ±°λ₯Ό νλ©΄ λλλ° μμλ€ νλ κ²½μ° μμ μλ κ°λ€μ λ€λ‘ λ³΄λ΄λ κ³Όμ μμ
// μκ°μ΄ λ°μνλ€. κ·Έλ κΈ° λλ¬Έμ pop, pushλ₯Ό μ¬μ©νλ κ²μ΄ μ’λ€.

// splice: μ§μ λ μμΉμ μμ΄νμ μ§μ°κΈ°
fruits.push('π', 'π', 'π');
console.log(fruits);
fruits.splice(2,1);
console.log(fruits);
fruits.splice(2.1, 'π', 'π');
console.log(fruits);

// combine two arrays :  λ λ°°μ΄μ ν©μ³μ£Όλ μ­ν μ νλ€.
const fruits2 = ['π', 'π₯₯']
const newFruit = fruits.concat(fruits2);
console.log(newFruit);

// 5. Searching : λ°°μ΄μμ μ΄λ€ κ°μ΄ λͺλ²μ§Έ indexμ μλ μ§ μ μ μκ² ν΄μ€λ€.
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π'));
console.log(fruits.includes('π'));
console.log(fruits.includes('π'));

//  lastIndexOf
fruits.push('π');
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.lastIndexOf('π'));


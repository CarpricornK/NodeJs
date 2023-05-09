// //ESM

// import {s1, s2, s3} from './a.js';

// // console.log(s);

// console.log(s1);

// console.log(s2);

// console.log(s3(3));

// import {b, c} from './a.js';

// console.log(b, c);

//CJS
const a = require('./a.js');
console.log(a.sayHi("MEVN"))
console.log(a.sayLove("MEVN"))
console.log(a.value)

a.cook.create(a.pasta)
a.cook.create(a.steak)

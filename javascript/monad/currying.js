const R = require('ramda')
const a = R.add(1)
const b = a(2)

const addFourNumbers = (a, b, c, d) => a + b + c + d
const curriedAddFourNumbers = R.curry(addFourNumbers)
const f = curriedAddFourNumbers(1, 2)
const g = f(3)

console.log(g(6))

const curry = fn => a => b => fn(a, b)

// var curry = function (fn) {
//     return function (a) {
//         return function (b) {
//             return fn(a, b)
//         }
//     }
// }

const f1 = curry((a, b) => a + b)
const f2 = f1(1)
const ret = f2(2)
console.log(ret)

// 2를 곱하고 1을 더한다.
const ret2 = R.compose(Math.abs, R.add(1), R.multiply(2))(-4)
console.log(`ret2:${ret2}`)

// -1을 곱하고 1을 더한다.
const ret3 = R.pipe(R.negate, R.inc)
console.log(`ret3:${ret3(-1)}`)
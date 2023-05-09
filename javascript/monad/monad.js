// 고차함수
// map
// const a = (a) => {
//     return a + 10
// }
// const b = [1,2,3].map(a)
// console.log(b)

const _call = (a, b) => a() + b()

const a = val => () => val

// function a(val) {
//     return function() {
//         return val
//     }
// }

console.log(a_lazy())


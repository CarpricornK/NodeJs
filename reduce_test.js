function a(a, b, c) {
    
    return a - b;
}

function plus(a) {
    
    return a * a;
}

let testArray = [100,2,5,6,7]

let test = testArray.reduce(a)

let test2 = testArray.map(plus)

console.log("test1:"+test);

console.log("test2:"+test2);

const b = (i) => {   
        return i >= 3;
    }
let arr = [2, 3, 5, 7];

let arrtest = arr.find(b);

console.log(arrtest);

let findindextest = arr.findIndex(b => b === 2);

console.log(findindextest);
console.log(arr.indexOf(2));
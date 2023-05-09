
// // ESM
// export const s1 = 1
// export const s2 = 2
// export const s3 = a => a + 2

// export let b = 1
// export let c = 1
// b = 2;
// c = 3;
// export default {b, c}


// CJS
exports.sayLove = name => `${name} I love you`
exports.sayHi = name => {
    console.log(this.sayLove("MEVN"))
    return `${name} Hi`
}
exports.value = 1

const cook = {
    create : recipe => recipe.start()
}

const pasta = {
    start : () => console.log("pasta start")
}

const steak = {
    start : () => console.log("steak start")
}

module.exports = { cook, pasta, steak, value : 1, sayLove : name => `${name} I love you`, sayHi : name => `${name} Hi`};




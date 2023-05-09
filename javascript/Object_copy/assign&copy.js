const a = {"b" : 1}
let b = {...a}
let c = Object.assign({}, a)
c.b = 3
b.b = 3
console.log(a)


const a2 = {
    "b" : 1,
    "c" : {
        "d" : 2
    }
}

let b2 = {...a2}
let c2 = Object.assign({}, a2)
c2.c.d = 3
console.log(`a2: ${JSON.stringify(a2)}`)
console.log(JSON.parse(JSON.stringify(b2)))
console.log(c2)


const copy = o => {
    let out = {}
    let value, key

    for(key in o) {
        value = o[key]
        out[key] = (typeof value === "object" && value !== null) ? copy(value) : value
    }
    return out
}

let copy_a2 = copy(a2)
console.log(`copy_a2: ${JSON.stringify(copy_a2)}`)
console.log(a2["c"])
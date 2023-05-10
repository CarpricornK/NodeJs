const FxJS = require("fxjs")
const _ = require("fxjs/Strict")
const L = require("fxjs/Lazy")
const C = require("fxjs/Concurrency")
const log = a => {
    return console.log(`${new Date()}} : ${a}`)
}

const delay = (val) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(val)
        }, 1000)
    })
}

async function test_fp() {
    const list = [1, 3, 5, 6, 7, 9]
    return await _.go( //go는 파이프라인을 만들어주는 함수(합성 함수)
        list,
        L.map(a => a + 100),
        L.map(delay),
        _.each(log)
    )
}

test_fp().then((ret)=> console.log(ret))

const users = [
    { id: 1, name: "홍철", age: 35 },
    { id: 2, name: "서영", age: 22 },
    { id: 3, name: "홍구", age: 31 },
    { id: 4, name: "구철", age: 26 },
]

const f = (info, user) => {

    console.log(`info:${JSON.stringify(info)}, user:${JSON.stringify(user)}`)
    const group = user.age - user.age % 10
    info.count[group] = (info.count[group] || 0) + 1
    info.total[group] = (info.total[group] || 0) + user.age
    return info
}

const ret = _.reduce(f, { count: {}, total: {}}, users)
console.log(ret)
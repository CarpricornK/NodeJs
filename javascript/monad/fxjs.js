const {map, filter, pipe, values, go} = require('fxjs')
const f_pipe = pipe(
    map(a => a + 1),
    filter(a => a % 2 === 0)
)
const _ret = f_pipe([1,2,3,4])
console.log(_ret)

const L = require('fxjs')
const 친구들 = [
    {
        "name" : "연제호",
        "do" : "군인"
    },{
        "name" : "박종선",
        "do" : "사장"
    },{
        "name" : "윤성용",
        "do" : "개발자"
    },{
        "name" : "박동영",
        "do" : "회장"
    },{
        "name" : "연제주",
        "do" : "개발자"
    },
]

const t = 친구들.map(e => e.do === "개발자" ? e.name : null).filter(e => e)
const prop = key => obj => obj[key]
const propEqual = value => key => obj => obj[key] === value
console.log(t)
const t2 = go(
    친구들,
    L.filter(propEqual('개발자')('do')),
    L.takeAll
)
console.log(t2)
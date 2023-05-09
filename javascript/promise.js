const a = (c = "네이버") => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(`${c}으로부터 요청`)          
        }, 1 * 1000)

    })
}

a().then(ret => {
    console.log(ret)
    return a(`카카오`)   
}).then(ret => {
    console.log(ret)
}).catch(err => {
    console.log(err)
})


const async = param => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            param = "구글"
            resolve(`${param}으로부터 요청`)
        }, 1 * 1000)
    })
}


async().then(ret => { console.log(ret) }).catch(err => { console.log(err) })



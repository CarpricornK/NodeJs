const express = require('express')
const path = require('path')
const logger = require('morgan')
const app = express()
const PORT = 12010
const _path = path.join(__dirname, './dist')
console.log(_path)
app.use('/dist', express.static(_path))
app.use(logger('tiny')) // -> GET /book/책이름 304 - - 3.740 ms

app.use((req, res, next) => {
    console.log('요청이 들어왔습니다')
    next()
})

//http://localhost:12010/book/책이름 -> 책이름은 책이름입니다
app.get('/book/:bookName', (req, res) => {
    const {bookName} = req.params
    res.send(`책이름은 ${bookName}입니다`)
})

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})
const express = require('express')
const app = express()
const PORT = 3000
// --- 1번 로직

app.use((req, res, next) => {
    console.log('첫번째 미들웨어')
    res.status(200).send('Hello World')
    next()
})

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})
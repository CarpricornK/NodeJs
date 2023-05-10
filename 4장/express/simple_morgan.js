const express = require('express')
const app = express()
const logger = require('morgan')
const PORT = 3000

app.use(logger('tiny'))

app.use((req, res, next) => {
    console.log('1time :',Date.now())
    res.status(200).send('Hello World')
    next()
})

app.use((req, res, next) => {
    console.log('2time :',Date.now())
    next()
})

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})
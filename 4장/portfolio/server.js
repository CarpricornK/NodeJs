const express = require('express')
const app = express()
const PORT = 12010
const path = require('path')

const _path = path.join(__dirname, './dist')
app.use(express.static(_path))
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
    console.log('log:',_path)
})
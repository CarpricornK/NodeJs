const http = require('http')
const PORT = 12010
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'charset=utf-8')
    const obj = {
        name: 'John',
    }
    res.end(JSON.stringify(obj))
})

server.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})
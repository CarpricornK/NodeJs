const http = require('http')
const PORT = 12010
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'charset=utf-8')
    const obj = {
        name: 'John',
    }
    res.end(JSON.stringify(obj))
})

setTimeout(() => {
    JSON.parse("{Z}")
}, 1000)

server.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})

// pm2 명령어
// pm2 list
// pm2 start <fileName>
// pm2 monit --
// pm2 stop <id or name>
// pm2 delete <id or name>





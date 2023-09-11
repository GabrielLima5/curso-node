const { readFile } = require('fs')
const http = require('http')
let html;

readFile('./index.html', 'utf-8', (err, data) => {
    if (err) throw err
    html = data
})

const hostname = '127.0.0.1'
const port = '3000'
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(html)
})

server.listen(port, hostname, () => {
    console.log('server rodando!')
})
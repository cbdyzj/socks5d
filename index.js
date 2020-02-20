const socks5 = require('simple-socks')
const port = process.argv[2] || 1080
const server = socks5.createServer()
server.listen(port, '0.0.0.0', () => {
    console.log('listening ' + port)
})

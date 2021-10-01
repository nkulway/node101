const http = require('http')

function random() {
    return Math.floor(Math.random() * 100) + 1;
}


const server = http.createServer((req, res) => {
    console.log(req.method, req.url)
    res.statusCode = 200;
        if (req.url === '/pancake') {
            res.end('<h1>Hello Pancake</h1>')
        } else {
    res.end('<h1>Hello World:' + random() + '</h1>');
        }
})



console.log('Starting Server')


server.listen(3000, '127.0.0.1', () => {
    console.log('Server is now listening on http://127.0.0.1:3000')
})

const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const path = require('path')

app.set('view engine', 'ejs')
app.use(express.static('public'))

let firstConnected = false;

io.on('connection', (socket) => { 
    this.first = false

    console.log('client connected')

    if (!firstConnected) {
        socket.username = 'me'
        firstConnected = true
        this.first = true
    } else {
        socket.username = 'anonymous'
    }

    socket.on('new_message', data => {
        io.sockets.emit('new_message', { message: data.message, username: socket.username })
    })

    socket.on('disconnect', () => {
        if (this.first) {
            firstConnected = false
        }
    })
})

app.get('/', function(req, res){
    res.render('index')
})

const port = 3000
server.listen(port, () => console.log(`Server listening on port ${port}!`))
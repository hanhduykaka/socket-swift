const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)


const port = process.env.PORT || 5000;

// app.set('view engine', 'ejs')
// app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.redirect(`/${uuidV4()}`)
// })

// app.get('/:room', (req, res) => {
//   res.render('room', { roomId: req.params.room })
// })

io.on('connection', socket => {


  socket.on("message", (data) => {
    console.log("recieved data:");
    console.log(data);

    var bufArr = new ArrayBuffer(4);
    var bufView = new Uint8Array(bufArr);
    bufView[0] = 6;
    bufView[1] = 7;
    bufView[2] = 8;
    bufView[3] = 9;
    socket.emit('message-rev', bufArr);
  });

  socket.on('disconnect', () => {
    socket.broadcast.emit('user-disconnected', userId)
  })

})

server.listen(port)
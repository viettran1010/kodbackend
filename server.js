const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const http = require('http')
const ioCreate = require('socket.io')
mongoose.connect('mongodb+srv://admin:admin123456@cluster0.9m6f6.mongodb.net/KingofDiamonds?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
},(err)=>{
    if (err) console.log(err)
    else console.log('Connection successfully')
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(morgan());
const server = http.createServer(app)
const io = ioCreate(server)



const PORT = process.env.PORT || 3000


app.use(require('./routers'))

server.listen(PORT, ()=>{
    console.log('server running on port ' + PORT)
})






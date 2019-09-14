const express = require('express')
const app = express()

let counter = 0

app.use(function(req, res, next){
    console.log('Request Received ', req.path)
    next()
})

app.get('/ping', function(req, res, next){
    res.send('pong!')
})

app.post('/increment', function(req, res, next){
    counter++
    res.send('increment done')
    next()
})

app.post('/decrement', function(req, res, next){
    counter--
    res.send('decrement done')
    next()

})

app.get('/value', function(req, res, next){
    res.send('Current Value: ' + counter)
    next()
})

app.use(function(req, res, next){
    console.log('Current Value is... ', counter)
})



app.listen(3000, function(){
    console.log('server is running... with port 3000')
})
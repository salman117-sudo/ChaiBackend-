require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello salman how are u')
})

app.get('/about', (req, res) => {
    res.send('salman.com////')
})

app.get('/login', (req, res) => {
    res.send('Login Page')
})

app.get('/youtube',(req, res) => {
    res.send('<h1>Welcome to YouTube</h1><')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})





// we have create the server 

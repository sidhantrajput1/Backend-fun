require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Radhe Krishana')
})

app.get('/home', (req , res) => {
    res.send('Virndavan')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listing on port ${port}`);
})


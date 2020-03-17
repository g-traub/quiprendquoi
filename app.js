const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', { title: 'Qui prend quoi ?', person: 'g-traub' })
})

app.post('/party', (req, res) => {
  res.send('Post ok !')
})
app.listen(port, () => console.log(`Front app listening on port ${port}!`))

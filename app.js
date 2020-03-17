const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const axios = require('axios')
const express = require('express')
const app = express()
const port = process.env.PORT

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', { title: 'Qui prend quoi ?', person: 'g-traub' })
})

app.post('/party', (req, res) => {
  axios
    .post(`${process.env.API_URL}/party`, req.body)
    .then(({ data }) => console.log(data))
    .catch(err => console.error(err))
})
app.listen(port, () => console.log(`Front app listening on port ${port}!`))

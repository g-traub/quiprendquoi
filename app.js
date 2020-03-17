const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Gooood morning vietnam')
})

app.listen(port, () => console.log(`Front app listening on port ${port}!`))

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// http requests include get, put, post, patch, delete

app.get('/status', (req, res) => {
  res.send({
    message: 'The setup is running correctly!'
  })
})

app.listen(process.env.port || 8081)

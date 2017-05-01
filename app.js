const request = require('request')
const cors = require('cors')
const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()

const URL_BASE = 'http://partners.api.skyscanner.net/apiservices/reference/v1.0'

const options = {
  headers: {
    'Accept': 'application/json'
  }
}

app.use(cors())

let counter = 0
app.get('*', function (req, res) {
  options.url = URL_BASE + req.originalUrl + '?apiKey=' + process.env.API_KEY
  console.log(options.url)
  console.log('num requests')
  console.log(++counter)
  request(options, function (error, response, body) {
    if (error) throw error
    console.log(response)
    const parsedJSON = JSON.parse(body)
    res.json(parsedJSON)
  })
})

app.listen(PORT, () => console.log(`listening on port ${PORT}...`))


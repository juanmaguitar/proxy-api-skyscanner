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

app.get('*', function (req, res) {
  const urlRequested = req.originalUrl
  console.log('urlRequested: ' + urlRequested)
  if (!urlRequested.includes('favicon.ico')) {
    options.url = URL_BASE + req.originalUrl + '?apiKey=' + process.env.API_KEY
    request(options, function (error, response, body) {
      if (error) res.status(500).send('Something went wrong!')
      else if (body) res.json(JSON.parse(body))
      else res.status(404).send('No results!')
    })
  } else {
    res.status(200).send('Cannot find anything about: ' + urlRequested)
  }
})

app.listen(PORT, () => console.log(`listening on port ${PORT}...`))


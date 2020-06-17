const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
var fs = require('fs')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var data = fs.readFileSync('reports.json')
var reports = JSON.parse(data)

app.get('/getReports', (req, res) => {
  res.send({ reports })
})

app.put('/reports/:reportId', (req, res) => {
  reports.elements.id === req.body.reportId
  reports.elements.filter((item) => {
    if (item.id === req.body.reportId && item.state != 'CLOSED') {
      item.state = 'CLOSED'
      const updatedData = JSON.stringify(reports)
      fs.writeFile('reports.json', updatedData, function (err, result) {
        if (err) console.log('error', err)
      })
    }
  })
  res.send(reports)
})

app.put('/reports/blocked/:reportId', (req, res) => {
  reports.elements.id === req.body.reportId
  console.log('reee', req.body.reportId)
  reports.elements.filter((item) => {
    if (item.id === req.body.reportId) {
      item.isHiddenFromUsers = true
      const updatedData = JSON.stringify(reports)
      fs.writeFile('reports.json', updatedData, function (err, result) {
        if (err) console.log('error', err)
      })
    }
  })
  res.send(reports)
})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')))

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

app.listen(port, () => console.log(`Listening on port ${port}`))

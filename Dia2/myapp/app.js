const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
    if (!req.query.file) {
        res.sendFile(url + "app.js")
    }else if (FileSystem.existsSync(url + `${req.query.file}.html`)){ 
        res.sendFile(url + `${req.query.file}.html`)
    }else {
        res.sendFile(url)
    }
  })
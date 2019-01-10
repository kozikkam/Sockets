const express = require('express')
const fs = require('fs')

const app = express()
const port = 4321

app.get('/', (req, res) => {
  const readStream = fs.createReadStream('lotsoftext.txt')
  readStream.pipe(res)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const express = require('express')
const app = express()
const port = 3000

app.get('/orderForm', (req, res) => {
  res.send('Testing')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

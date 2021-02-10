const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Please use either /orderForm or /currentOrders depending onyou needs')
})

app.get('/orderForm', (req, res) => {
  res.sendFile(__dirname + '/orderForm.html')
})
app.get('/currentOrders', (req, res) => {
  res.sendFile(__dirname + '/currentOrders.html')
})
app.listen(port, () => {
  console.log(`latte app listening at http://localhost:${port}`)
})

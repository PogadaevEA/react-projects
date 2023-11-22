const express = require('express')
const cors = require('cors')
const booksData = require('./data/books.json')

const app = express()

app.use(cors())

app.get('/random-book', (req, res) => {
  const randomIndex = Math.floor(Math.random() * booksData.length)
  res.json(booksData[randomIndex])
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

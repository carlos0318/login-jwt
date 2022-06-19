require('dotenv').config()
require('./mongo')

const express = require('express')
const app = express()
const usersRouter = require('./routes/users')
const authRouter = require('./routes/auth')

app.use(express.json())
app.use('/api/users', usersRouter)
app.use('/api', authRouter)

app.get('/user', function (req, res) {
  res.status(200).json({ name: 'john' })
})

app.get('/', (req, res) => {
  res.status(200).send('Hola')
})

const PORT = process.env.PORT || 3001
const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})

module.exports = { app, server }

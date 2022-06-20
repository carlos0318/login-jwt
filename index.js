require('dotenv').config()
require('./mongo')

const express = require('express')
const app = express()
const usersRouter = require('./routes/users')
const authRouter = require('./routes/auth')
const { verifyToken } = require('./utils/handleJwt')

app.use(express.json())
app.use('/api/users', usersRouter)
app.use('/api', authRouter)

app.get('/user', function (req, res) {
  res.status(200).json({ name: 'john' })
})

app.get('/', (req, res) => {
  res.status(200).send('Hola')
})

app.get('/user/data', async function (req, res) {
  const { authorization } = req.headers

  if (!authorization) return res.status(401)

  const data = await verifyToken(authorization)
  res.status(200).send(data)
})

const PORT = process.env.PORT || 3001
const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})

module.exports = { app, server }

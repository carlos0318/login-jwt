const User = require('../models/User')
const { compare } = require('../utils/handlePassword')

const login = async (req, res) => {
  const { username, password } = req.body

  const user = await User.findOne({ username })
  const passwordCorrect = user === null
    ? false
    : await compare(password, user.passwordHash)

  if (!passwordCorrect) {
    res.status(401).json({ error: 'invalid user or password' })
  }

  res.status(200).send({
    name: user.name,
    username: user.username
  })
}

module.exports = {
  login
}

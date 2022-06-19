const User = require('../models/User')
const { compare } = require('../utils/handlePassword')
const { tokenSign } = require('../utils/handleJwt')

const login = async (req, res) => {
  const { username, password } = req.body

  const user = await User.findOne({ username })
  const passwordCorrect = user === null
    ? false
    : await compare(password, user.passwordHash)

  if (!passwordCorrect) {
    res.status(401).json({ error: 'invalid user or password' })
  }

  const userForToken = {
    id: user._id,
    username: user.username
  }

  const token = tokenSign(userForToken)

  res.status(200).send({
    name: user.name,
    username: user.username,
    token
  })
}

module.exports = {
  login
}

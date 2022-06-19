const jwt = require('jsonwebtoken')

const tokenSign = (user) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username
    },
    process.env.JWT_SECRET
  )
}

module.exports = {
  tokenSign
}

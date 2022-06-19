const jwt = require('jsonwebtoken')

const tokenSign = async (user) => {
  return jwt.sign(
    {
      _id: user._id,
      username: user.username
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '2h'
    }
  )
}

module.exports = {
  tokenSign
}

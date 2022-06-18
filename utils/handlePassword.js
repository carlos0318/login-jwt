const bcrypt = require('bcryptjs')

const encrypt = async (passwordPlain) => {
  const saltRounds = 10
  return await bcrypt.hash(passwordPlain, saltRounds)
}

const compare = async (passwordPlain, hashPassword) => {
  return await bcrypt.compare(passwordPlain, hashPassword)
}

module.exports = {
  encrypt,
  compare
}

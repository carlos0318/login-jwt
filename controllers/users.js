const User = require('../models/User')
const { encrypt } = require('../utils/handlePassword')

const addNewUser = async (req, res) => {
  try {
    const { username, name, password } = req.body
    const passwordHash = await encrypt(password)
    const user = new User({
      username,
      name,
      passwordHash
    })

    const savedUser = await user.save()

    res.status(200).json(savedUser)
  } catch (error) {
    res.status(400).json({ error })
  }
}

module.exports = {
  addNewUser
}

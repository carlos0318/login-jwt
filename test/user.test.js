const User = require('../models/User')
const { encrypt } = require('../utils/handlePassword')
const { api, server, getUsers } = require('./helpers')
const mongoose = require('mongoose')

describe('creating a new user', () => {
  beforeEach(async () => {
    await User.deleteMany({}) // elimina todos los usuarios de la base de datos test

    const passwordHash = await encrypt('pswd')
    const user = new User({
      username: 'astaroth',
      name: 'carlos',
      passwordHash
    })

    await user.save() // añade un nuevo usuario a la base de datos test
  })

  test('works as expected creating a fresh username', async () => {
    const usersAtStart = await getUsers()

    const newUser = {
      username: 'astaroth2',
      name: 'Carlos',
      password: '123456'
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await getUsers()

    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(u => u.username)
    expect(usernames).toContain(newUser.username)
  })

  test('creation fails with proper statuscode and message if username is already taken', async () => {
    const usersAtStart = await getUsers()

    const newUser = {
      username: 'astaroth',
      name: 'Carlos',
      password: '123456'
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error.errors.username.message).toContain('`username` to be unique')

    const usersAtEnd = await getUsers()
    expect(usersAtEnd).toHaveLength(usersAtStart.length)
  })

  afterAll(() => {
    mongoose.connection.close()
    server.close()
  })
})

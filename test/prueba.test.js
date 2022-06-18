const { server } = require('../index')
const { api } = require('./helpers')

test('user is returned as json', async () => {
  await api
    .get('/user')
    .expect('Content-Type', /json/)
    .expect(200)
})

test('hola', async () => {
  const response = await api.get('/')

  expect(response.text).toBe('Hola')
})

afterAll(() => {
  server.close()
})

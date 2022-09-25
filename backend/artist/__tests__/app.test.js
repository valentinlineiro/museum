const request = require('supertest')
const app = require('../app/app')

describe('POST / test suite', () => {
  it('should create a new artist', async () => {
    const response = await request(app)
      .post('/')
      .send({
        name: 'Mr. Miyagi',
        bio: 'Mr. Miyagi is a complex artist',
        tags: ['japanese', 'old'],
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)

    expect(response.body).toEqual({
      id: expect.any(String),
      name: 'Mr. Miyagi',
      bio: 'Mr. Miyagi is a complex artist',
      tags: ['japanese', 'old'],
    })
  }),
    it('should return 400 when name is missing', async () => {
      const response = await request(app)
        .post('/')
        .send({
          bio: 'Bio...',
          tags: ['tag'],
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(400)

      expect(response.body).toEqual({
        message: 'Mandatory field name is missing',
      })
    })
})

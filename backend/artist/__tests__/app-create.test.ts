import { describe, expect, it } from '@jest/globals';
import { createTestApp } from '../src/app';
import request from 'supertest';

const app = createTestApp();

describe('POST / test suite', () => {
  shouldSucceedCreatingArtistWithRequiredFields(),
    shouldSucceedCreatingArtistWithAllFields(),
    shouldFailCreatingArtistWithBadRequestWhenNameIsMissing();
});

function shouldSucceedCreatingArtistWithRequiredFields() {
  return it('should create a new artist with required fields', async () => {
    const response = await request(app)
      .post('/')
      .send({
        name: 'Mr. Miyagi',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201);
    expect(response.body).toEqual({
      id: expect.any(String),
      created: expect.any(Number),
      resource: {
        name: 'Mr. Miyagi',
        tags: [],
      },
    });
  });
}

function shouldSucceedCreatingArtistWithAllFields() {
  return it('should create a new artist with all fields', async () => {
    const response = await request(app)
      .post('/')
      .send({
        name: 'Mr. Miyagi',
        bio: 'Mr. Miyagi is a complex artist',
        tags: ['japanese', 'old'],
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201);
    expect(response.body).toEqual({
      id: expect.any(String),
      created: expect.any(Number),
      resource: {
        name: 'Mr. Miyagi',
        bio: 'Mr. Miyagi is a complex artist',
        tags: ['japanese', 'old'],
      },
    });
  });
}

function shouldFailCreatingArtistWithBadRequestWhenNameIsMissing() {
  return it('should return 400 when name is missing', async () => {
    const response = await request(app)
      .post('/')
      .send({
        bio: 'Bio...',
        tags: ['tag'],
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400);
    expect(response.body).toEqual({
      status: 400,
      message: 'Missing mandatory field name',
      stack: expect.any(Object),
    });
  });
}

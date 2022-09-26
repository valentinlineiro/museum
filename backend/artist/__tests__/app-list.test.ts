import { describe, expect, it } from '@jest/globals';
import { Deta } from 'deta';
import request from 'supertest';
import { app } from '../src/app';

// TODO: Replace by a fake solution to have faster tests

const deta = Deta(process.env.PROJECT_KEY);
const db = deta.Base(process.env.TEST_DB_NAME as string);

describe('GET / test suite', () => {
  shouldSucceedListingArtistsWhenThereAreNone();
});

function shouldSucceedListingArtistsWhenThereAreNone() {
  return it('should list no artists', async () => {
    const response = await requestToApi('/', 200);
    expect(response.body).toEqual({
      items: [],
      count: 0,
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
    await clean(response.body.id);
  });
}

function shouldFailCreatingArtistWithBadRequestWhenNameIsMissing() {
  return it('should return 400 when name is missing', async () => {
    const response = await requestToApi('/', 200);
    expect(response.body).toEqual({
      status: 400,
      message: 'Missing mandatory field name',
      stack: expect.any(Object),
    });
  });
}

function requestToApi(endpoint, status) {
  return request(app)
    .get(endpoint)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(status);
}

async function clean(id: string) {
  await db.delete(id);
}

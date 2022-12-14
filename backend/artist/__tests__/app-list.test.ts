import { describe, expect, it } from '@jest/globals';
import { createTestApp } from '../src/app';
import request from 'supertest';

const app = createTestApp();

describe('POST /search test suite', () => {
  shouldFindNoArtists();
});

function shouldFindNoArtists() {
  return it('should find no artists', async () => {
    const response = await request(app)
      .post('/search')
      .send({ search: '', filters: [], count: 10 })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body).toEqual({
      items: [],
      count: 0,
    });
  });
}

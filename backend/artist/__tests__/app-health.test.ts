import { describe, expect, it } from '@jest/globals';
import { createTestApp } from '../src/app';
import request from 'supertest';

const app = createTestApp();

describe('GET / test suite', () => {
  shouldReturnUp();
});

function shouldReturnUp() {
  return it('should return up', async () => {
    const response = await request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body).toEqual({
      status: 'UP',
    });
  });
}

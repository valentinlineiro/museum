import { describe, expect, it } from '@jest/globals';
import { Deta } from 'deta';
import request from 'supertest';
import { app } from '../src/app';
import { postToApi } from './utils/utils';

// TODO: Replace by a fake solution to have faster tests

const deta = Deta(process.env.PROJECT_KEY);
const db = deta.Base(process.env.TEST_DB_NAME as string);

describe('POST / test suite', () => {
  shouldSucceedCreatingArtistWithRequiredFields(),
    shouldSucceedCreatingArtistWithAllFields(),
    shouldFailCreatingArtistWithBadRequestWhenNameIsMissing();
});

function shouldSucceedCreatingArtistWithRequiredFields() {
  return it('should create a new artist with required fields', async () => {
    const response = await postToApi(
      app,
      '/',
      {
        name: 'Mr. Miyagi',
      },
      201
    );
    expect(response.body).toEqual({
      id: expect.any(String),
      created: expect.any(Number),
      resource: {
        name: 'Mr. Miyagi',
        tags: [],
      },
    });
    await clean(response.body.id);
  });
}

function shouldSucceedCreatingArtistWithAllFields() {
  return it('should create a new artist with all fields', async () => {
    const response = await postToApi(
      app,
      '/',
      {
        name: 'Mr. Miyagi',
        bio: 'Mr. Miyagi is a complex artist',
        tags: ['japanese', 'old'],
      },
      201
    );
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
    const response = await postToApi(
      app,
      '/',
      {
        bio: 'Bio...',
        tags: ['tag'],
      },
      400
    );
    expect(response.body).toEqual({
      status: 400,
      message: 'Missing mandatory field name',
      stack: expect.any(Object),
    });
  });
}

async function clean(id: string) {
  await db.delete(id);
}

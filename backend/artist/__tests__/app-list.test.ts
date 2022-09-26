import { describe, expect, it } from '@jest/globals';
import { Deta } from 'deta';
import request from 'supertest';
import { app } from '../src/app';
import { postToApi } from './utils/utils';

// TODO: Replace by a fake solution to have faster tests

const deta = Deta(process.env.PROJECT_KEY);
const db = deta.Base(process.env.TEST_DB_NAME as string);

describe('POST /search test suite', () => {
  shouldFindNoArtists();
});

function shouldFindNoArtists() {
  return it('should find no artists', async () => {
    const response = await postToApi(
      app,
      '/search',
      { search: '', filters: [], count: 10 },
      200
    );
    expect(response.body).toEqual({
      items: [],
      count: 0,
    });
  });
}

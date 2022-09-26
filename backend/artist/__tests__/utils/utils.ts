import request from 'supertest';

export function postToApi(app, endpoint, body, status) {
  return request(app)
    .post(endpoint)
    .send(body)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(status);
}

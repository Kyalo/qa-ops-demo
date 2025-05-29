const request = require('supertest');
const app = require('../../app/server');

describe('Unit Test: /health route', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});

describe('Unit Test: GET /hello', () => {
  it('responds with Hello World', async () => {
    const response = await request(app).get('/hello');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World');
  });
});

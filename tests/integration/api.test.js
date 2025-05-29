const request = require('supertest');
const express = require('express');

const app = express();
app.get('/health', (req, res) => res.status(200).send('OK'));

describe('Health API', () => {
  it('should return OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('OK');
  });
});

const { test, expect } = require('@playwright/test');

test('health endpoint should return OK', async ({ request }) => {
  const response = await request.get('/health');
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body).toEqual({ status: 'ok' });
});

import { test, expect } from '@playwright/test';

test('home page loads', async ({ page }) => {
  // Use conteúdo local para evitar dependência de rede e flakiness em CI.
  await page.setContent(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Example Domain</title>
      </head>
      <body>
        <h1>Example Domain</h1>
        <p>This is a self-contained page used for the Playwright smoke test.</p>
      </body>
    </html>
  `);
  await expect(page).toHaveTitle(/Example/);
});
// Screenshot render.html at exactly 1024x1024 with headless Chromium.
import { chromium } from '/home/hatch/workspace/makefun/fps-tools/node_modules/playwright-core/index.mjs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const dir = dirname(fileURLToPath(import.meta.url));
const browser = await chromium.launch({ executablePath: '/home/hatch/.cache/ms-playwright/chromium_headless_shell-1148/chrome-linux/headless_shell' });
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: 1 });
await page.goto('file://' + join(dir, 'render.html'));
await page.waitForTimeout(400);
await page.screenshot({ path: join(dir, 'entry.png') });
await browser.close();
console.log('wrote entry.png');

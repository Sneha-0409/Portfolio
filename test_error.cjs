const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('CONSOLE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  await page.goto('https://portfolio-cyan-chi-oqdmcsrqvs.vercel.app', { waitUntil: 'networkidle2' });
  const content = await page.evaluate(() => document.body.innerText);
  console.log('PAGE CONTENT:', content.substring(0, 200));
  await browser.close();
})();

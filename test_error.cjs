const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 10000 }).catch(e => console.log(e));
  
  await new Promise(r => setTimeout(r, 4000));
  
  await page.evaluate(() => {
    document.querySelector('#about').scrollIntoView();
  });
  
  for(let i=0; i<8; i++) {
    await new Promise(r => setTimeout(r, 500));
    const style = await page.evaluate(() => {
      const img = document.querySelectorAll('.hero-image')[1];
      return img ? img.getAttribute('style') : null;
    });
    console.log(`[${i*0.5}s] style:`, style);
  }
  
  await browser.close();
})();

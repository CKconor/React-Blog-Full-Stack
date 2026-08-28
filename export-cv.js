const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);

  const filePath = 'file://' + path.resolve(__dirname, 'cv-conor-kemp.html').replace(/\\/g, '/');
  await page.goto(filePath, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: 'cv-conor-kemp.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();
  console.log('CV exported to cv-conor-kemp.pdf');
})();

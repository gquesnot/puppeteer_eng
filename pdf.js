const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://github.com');
    await page.pdf({
        path: 'github_pdf.pdf',
        format: 'a4'
    });
    await browser.close();
})();


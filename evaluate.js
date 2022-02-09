const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://facebook.com');
    const result = await page.evaluate(() => {
        return document.querySelectorAll('a').length
    })
    console.log('nb Links:', result) // 49
    await page.screenshot({
        path:'facebook_evaluate.png'
    })
    await browser.close();
})();


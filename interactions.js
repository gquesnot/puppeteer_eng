const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://github.com');
    await page.waitForSelector('a.HeaderMenu-link:nth-child(3)')
    let githubSignUpLink =  await page.$('a.HeaderMenu-link:nth-child(3)')
    let url = await(await githubSignUpLink.getProperty('href')).jsonValue()
    await page.goto(url)
    await page.screenshot({
        path:'github_interactions.png'
    })

    await browser.close();
})();


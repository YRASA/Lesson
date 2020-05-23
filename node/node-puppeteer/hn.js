const puppeteer = require('puppeteer');
// 没有界面的浏览器, 人操作不了
// 而是用代码来操作浏览器执行某某行为
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.baidu.com/', { waitUntil: 'networkidle2' });
    let input = await page.$('#kw');
    await input.focus();
    await page.keyboard.type('大众点评');
    let btn = await page.$('#su');
    await btn.click();
    // 内容不是立马出来的
    // 等一会
    setTimeout(async () => {
        await page.pdf({ path: 'hn.pdf', format: 'A4' });
        await browser.close();
    }, 3000);
})();
import puppeteer from 'puppeteer';

jest.setTimeout(30000);

describe('Card valid form', () => {
  
  test('should return invalid status', async () => {
    const baseUrl = 'http://localhost:9000';
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto(baseUrl);

    const form = await page.waitForSelector('.form-widget');
    const input = await page.waitForSelector('.number-field');
    const submit = await page.waitForSelector('.validate-btn');    

    await input.type('4561261212345464');
    await submit.click();

    const result = await page.evaluate(() => {
      const text = document.querySelector('.message-box').innerText;
      return text;      
    });
     
    await browser.close();
    expect(result).toBe('Card number is invalid!');    
  });

  test('should return valid status', async () => {
    const baseUrl = 'http://localhost:9000';
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto(baseUrl);

    const form = await page.waitForSelector('.form-widget');
    const input = await page.waitForSelector('.number-field');
    const submit = await page.waitForSelector('.validate-btn');    

    await input.type('4561261212345467');
    await submit.click();

    const result = await page.evaluate(() => {
      const text = document.querySelector('.message-box').innerText;
      return text;      
    });
     
    await browser.close();
    expect(result).toBe('Card number is valid!');    
  });  
});

const puppeteer = require('puppeteer')
const express = require('express')
const app = express()

app.get('/scrape', async function (req, res) {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto(req.query.url);
  const screenshot = await page.screenshot();
  res.type('png').send(screenshot)
})

app.listen(3000)
console.log('Running on localhost:3000')
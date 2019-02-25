const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs. createWriteStream('post.csv');

// Header
writeStream.write(`Entire html file`);

request('http://klanti-islam.tk/',(error, response, html) => {
  if(!error && response.statusCode==200){
    const $ = cheerio.load(html);
    const pageTop = $('#page-top');
    // Write To CSV
      writeStream.write(`${pageTop}`);
    }
    console.log("Scraping went ok.....");
});

/*
pair programmed with
@jcon3dev
@christylumm
@timajuma

*/

const website = process.argv.slice(2)[0]; //website = string
const path = process.argv.slice(3)[0];  //file storage path = string

const request = require('request');
request(website, (error, response, body) => {
  fs = require('fs');
  fs.writeFile(path, body, function(err) {
    if (err) return console.log(err);
    //console.log('I FRIGGIN DID IT RAAAAAH');
    
    let size = fs.statSync(path);
    //console.log('File Size in Bytes:- ' + size.size);
    //console.log(size.size);
    
    console.log(`Downloaded and saved ${size.size} bytes to ${path}`);
  })

  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.

});
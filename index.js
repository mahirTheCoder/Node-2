const fs = require('fs');
// const crypto = require('crypto');

const express = require('express')
const app = express()
// -------------stream -----

// const readStream = fs.createReadStream('input.txt');


// ---------buffer 
// readStream.on('data', (chunk) => {
//     console.log('Received chunk:', chunk);
// });



// -----------buffer to string

// readStream.on('data', (chunk) => {
//     console.log('Received chunk:', chunk. toLocaleString());
// });


// ------------crypto thats mean password hide 
// const hash = crypto.createHash('sha256');


// Update the hash with data
// hash.update('Hello, World!');

// Get the digest in hexadecimal format
// const digest = hash.digest('hex');
// console.log(digest);










console.log('Hello, World!');

app.listen(8000, () => console.log('Server is running on port 8000'));
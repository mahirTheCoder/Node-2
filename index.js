const fs = require('fs');
const crypto = require('crypto');


// -------------stream -----

const readStream = fs.createReadStream('input.txt');


// ---------buffer 
// readStream.on('data', (chunk) => {
//     console.log('Received chunk:', chunk);
// });



// -----------buffer to string

// readStream.on('data', (chunk) => {
//     console.log('Received chunk:', chunk. toLocaleString());
// });


// ------------crypto thats mean password hide 
const hash = crypto.createHash('sha256');


// Update the hash with data
hash.update('Hello, World!');

// Get the digest in hexadecimal format
const digest = hash.digest('hex');
console.log(digest);


const fs = require('fs');


// -------------stream -----

const readStream = fs.createReadStream('input.txt');


// ---------buffer 
// readStream.on('data', (chunk) => {
//     console.log('Received chunk:', chunk);
// });



// -----------buffer to string

readStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk.toString());
});
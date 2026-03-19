const fs = require('fs');
// const crypto = require('crypto');

const express = require('express')
const app = express()
// -------------stream -----

app.use(express.json());

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




// ------------routing

app.get('/', (req , res) =>{

    res.status(200).send('Welcome to home path!');

})


app.get('/about', (req , res) =>{

    res.status(200).send('Welcome to about path!'); 

})


app.post('/login', (req , res)=>{

    // res.status(201).send('Login successful!');

    const {email , password} = req.body;
    // if(email === '' || password === ''){
    //     res.status(400).send('Email and password are required!');
    // }



    if(!email ) return res.status(404 ).send('Email is required!');
    if(!password ) return res.status(404 ).send('Password is required!');

    console.log(req.body);
})





app.listen(8000, () => console.log('Server is running on port 8000'));
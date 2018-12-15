
const express = require('express'); 
const app = express(); 
const port = 3000;
const { mongoose } = require('./config/db');
const { routes } = require('./config/routes');
const axios = require('axios');

app.use(express.json());
app.use('/', routes); 
// let url = 'https://talaikis.com/api/quotes/random/';

// app.get('/', (req,res) => {
//     res.send('<h1>Quotify</h1>');
        
// });


app.listen(port, function() {
    console.log('listening on port', port); 
}); 
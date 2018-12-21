const express = require('express'); 
const router = express.Router(); 
const { Quote } = require('../models/quote'); 
const axios = require('axios');

router.get('/quote', (req, res) => {
    axios.get('https://talaikis.com/api/quotes/random/').then(function (response) {
            res.send(
                `<h1 style="position: fixed; right: 50%; top: -10px;">Quotify</h1>
                <div><h2 style="margin: 50px; position: fixed;left: 20%; bottom: 60%;">${response.data.quote}</h2>
                <p style="position: fixed; right: 50%; bottom: 50%;"><b>${response.data.author}</b></p>
                <button style="position: fixed; right: 20%; bottom: 60%;" type="submit" onClick={${save_load(response)} }; >Save</button>
                </div>
                <button style="position: fixed; right: 50%; bottom: 40%;" type="submit" id="myButton" onClick={window.location.reload();}>Get Another Quote</button>
                `
                );
            console.log(response.data);
            
        })
        .catch(function (error) {
            console.log(error);
        });
});

router.get('/',(req,res)=>{
    Quote.find().populate('quotes').then((quotes)=>{
        res.send(quotes);
    }).catch((err)=>{
        res.send(err);
    });
})

router.get('/:id',(req,res)=>{
    let id = req.params.id
    Quote.findById(id).then((quote)=>{
        res.send(quote);
    }).catch((err)=>{
        res.send(err);
    });
})


router.get('/random_quote',(req,res)=>{
    axios.get('https://talaikis.com/api/quotes/random/')
    .then(function (response) {
        res.send( response.data);
    })
    .catch(function(error){
        res.send(err); 
    })
})

router.post('/', (req, res) => {
    let body = req.body;
    console.log(req.body);
     
    let quote = new Quote(body); 
    quote.save().then((quote) => {
        res.send({
            quote, 
            notice: 'Successfully created a quote'
        }); 
    }).catch((err) => {
        res.send(err); 
    })
})

function save_load(body) {
    console.log('====================================')
    console.log(body.data);
    console.log('====================================')
    let quote = new Quote(body.data); 
    quote.save().then((quote) => {
        notice: 'Successfully created a quote'
    }).catch((err) => {
        notice: 'Not created a quote'
    })
}
// 5c1a699792b1512ea88bd39e
module.exports = {
    quotesController: router
}
const express = require('express'); 
const router = express.Router(); 
const axios = require('axios');

router.get('/', (req, res) => {
    axios.get('https://talaikis.com/api/quotes/random/').then(function (response) {
            res.send(
                `<h1 style="position: fixed; right: 50%; top: -10px;">Quotify</h1><div><h2 style="margin: 50px; position: fixed;left: 10%;">${response.data.quote}</h2>
                <p style="position: fixed; right: 50%; bottom: 50%;"><b>${response.data.author}</b></p>
                </div>
                <button style="position: fixed; right: 50%; bottom: 40%;" type="submit" id="myButton" onClick={window.location.reload();}>Get Another Qouote</button>
                `
                );
            console.log(response.data);
            
        })
        .catch(function (error) {
            console.log(error);
        });
}); 


module.exports = {
    quotesController: router
}
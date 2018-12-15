const express = require('express'); 
const router = express.Router(); 

const { quotesController } = require('../app/controllers/quotes_controller');



router.use('/quotes', quotesController); 



module.exports = {
    routes: router
}
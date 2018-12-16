const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const quoteSchema = new Schema({
    quote:{
        type: String,
        required: true,
        minlength: 4, 
        maxlength: 1000,
    },
    author:{
        type: String,
        required: true,
        minlength: 4, 
        maxlength: 24
    }
})

const Quote = mongoose.model('Quote', quoteSchema)

module.exports = {
    Quote
} 
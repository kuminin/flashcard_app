var mongoose = require('mongoose');

var cardSchema = {
    question: { type: String, required: true },
    answer: { type: String, required: true, maxlength: 140 },
    parent: {
        type: String,
        ref: 'Card'
    }
};

module.exports = new mongoose.Schema(cardSchema);
module.exports.cardSchema = cardSchema;
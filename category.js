var mongoose = require('mongoose');
var Card = require('./card');

var categorySchema = {
    subject: { type: String, required: true, maxlength: 4 },
    title: { type: String, maxlength: 140 }
    number: { type: Number, required: true },
    college: { type: String },
    card: Card.cardSchema
};

module.exports = new mongoose.Schema(categorySchema);
module.exports.categorySchema = categorySchema;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    id: { type: Number, required: true },
    imgUrl: { type: String },
    name: { type: String },
    category: { type: String },
    pricePU: { type: Number },
    description: { type: String },
});
module.exports = mongoose.model('food', schema)
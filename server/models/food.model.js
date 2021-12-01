var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    imgUrl: { type: String },
    name: { type: String },
    category: { type: String },
    pricePU: { type: Number },
    description: { type: String },
    isDeleted: { type: Boolean },
    star: { type: Number },
});
module.exports = mongoose.model('food', schema)
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    foodID: { type: String },
    star: { type: String },
    email: { type: String }
});
module.exports = mongoose.model('star', schema)
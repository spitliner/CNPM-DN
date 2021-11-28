var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    foodID: { type: String, require: true },
    feedback: { type: String, require: true },
    email: { type: String, require: true }
});
module.exports = mongoose.model('feedback', schema)
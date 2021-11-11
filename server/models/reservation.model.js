var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    email: { type: String, require: true },
    numberOfPersons: { type: Number, require: true },
    date: { type: String, require: true },
    time: { type: String, require: true },
    message: { type: String, require: true }
});
module.exports = mongoose.model('Reservation', schema)
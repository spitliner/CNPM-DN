var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    email: { type: String, require: true },
    code: { type: String, require: true },
    createdAt: { type: Date, default: Date.now }
});
schema.index({ "createdAt": 1 }, { expireAfterSeconds: 180 }); // expire after 180s
module.exports = mongoose.model('verify-token', schema)
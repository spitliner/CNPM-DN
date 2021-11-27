var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    voucherCode: { type: String, require: true },
    discount: { type: Number, require: true }
});
module.exports = mongoose.model('voucher', schema)
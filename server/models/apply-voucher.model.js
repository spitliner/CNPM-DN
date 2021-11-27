var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    email: { type: String, require: true },
    voucherCode: { type: String, require: true },
});
module.exports = mongoose.model('apply_voucher', schema)
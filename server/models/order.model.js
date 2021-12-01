var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
    email: { type: String },
    cartItems: { type: Array },
    paymentType: { type: String },
    takeAwayOrEatIn: { type: String },
    address: { type: String },
    bank: { type: String },
    creditCardNumber: { type: String },
    voucherCode: { type: String },
    totalCost: { type: Number },
    finalCost: { type: Number },
    time: { type: Date },
    status: { type: String },
    reason: { type: String }
});
module.exports = mongoose.model('order', schema)
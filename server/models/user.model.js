// models/user.model.js
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
// định nghĩ cấu trúc user model
var Schema = mongoose.Schema;
var schema = new Schema({
    name: { type: String, require: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true }
});
schema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};
schema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model('User', schema);
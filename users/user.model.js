const mongoose = require('mongoose');
const role = require('./../_helpers/role');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: { type: Number, unique: true },
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    role: { type: role, default: role.User }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);
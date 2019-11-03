const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  // username: { type: String, required: true },
  password: { type: String, required: true },
}, {
  timestamps: true,
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
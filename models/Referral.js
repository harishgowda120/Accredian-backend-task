const mongoose = require('mongoose');

const ReferralSchema = new mongoose.Schema({
  referrerName: {
    type: String,
    required: true,
  },
  referrerEmail: {
    type: String,
    required: true,
  },
  refereeName: {
    type: String,
    required: true,
  },
  refereeEmail: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Referral', ReferralSchema);
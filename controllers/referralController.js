const Referral = require('../models/Referral');
const { sendReferralEmail } = require('../services/emailService');

exports.submitReferral = async (req, res) => {
  const { referrerName, referrerEmail, refereeName, refereeEmail, courseName } = req.body;

  try {
    const newReferral = new Referral({
      referrerName,
      referrerEmail,
      refereeName,
      refereeEmail,
      courseName,
    });

    await newReferral.save();
    // await sendReferralEmail(referrerEmail, refereeEmail, courseName);

    res.status(201).json({ message: 'Referral submitted successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
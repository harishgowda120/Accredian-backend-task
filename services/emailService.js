const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendReferralEmail = async (referrerEmail, refereeEmail, courseName) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: refereeEmail,
    subject: 'You have been referred!',
    text: `You have been referred by ${referrerEmail} for the course ${courseName}.`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendReferralEmail };
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  tls: {
    ciphers: "SSLv3",
  },
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

module.exports = transporter;

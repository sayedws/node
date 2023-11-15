const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sayedwissem@gmail.com', 
    pass: 'wisseed2001', 
  },
});


const mailOptions = {
  from: 'sayedwissem@gmail.com', 
  to: 'messouselma68@gmail.com', 
  subject: 'Hello from Node.js',
  text: 'Hello, this is a test email sent from Node.js!',
};


transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});

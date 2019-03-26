var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'taruna.panchal@codezeros.com',
    pass: 'T@runa1612'
  }
});

var mailOptions = {
  from: 'taruna.panchal@codezeros.com',
  to: 'tarunapanchal974@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Hiii!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
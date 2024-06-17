var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anhvse172857@fpt.edu.vn',
    pass: 'ecxvueaypfmpfdch'
  }
});

var mailOptions = {
  from: 'anhvse172857@fpt.edu.vn',
  to: 'vanan161203@gmail.com',
  subject: 'Dang ki thanh cong lich booking',
  text: 'Ban bam vao day de xac nhan'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
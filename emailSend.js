var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'itshira696@gmail.com',
        password: "298gl&HA01$"
    }
});

var mailOptions = {
    from: 'itshira696@gmail.com',
    to: 'itshira696@gmail.com',
    subject: 'Email using Node',
    text: 'Hello Hira'
}

transporter.sendMail(mailOptions, (err, res) => {
    err ? console.log(err) : console.log('Email has been send', res.response);
})
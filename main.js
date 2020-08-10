require('dotenv').config()
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const cors = require('cors');
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(cors());

app.use(express.static(__dirname + '/public'));
// app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + 'index.html'))
});

app.post('/send', (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Company: ${req.body.company}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false,
    auth: {
      user: 'apikey', 
      pass: process.env.API_KEY
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  let mailOptions = {
    from: '"Nodemailer Contact" <newholm1@hotmail.com>',
    to: 'donaldnewholmiii@gmail.com, newholm1@hotmail.com',
    subject: "Node",
    text: "Hello world?",
    html: output
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Messsage sent: %s', info.messageId)
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.render('contact', {msg:'Message has been sent.'});
  })
});
 
app.listen((process.env.PORT || 3000), () =>
console.log(`Listening on ${(process.env.PORT || '3000')}!`),
);




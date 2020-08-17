require('dotenv').config()
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const cors = require('cors');
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
 
app.engine('handlebars', exphbs({
  helpers: {
    json: function (value) {
      return JSON.stringify(value);
    }
  },
  partialsDir: ['views/partials/'],
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use(cors());

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('layouts/main', { messageSent: false })
});

app.post('/', (req, res) => {
  if (req.body.message && req.body.name && req.body.email) {
    const output = `
      <p style="font-size:150%;text-align:center;font-weight:bold">You have received a new message via tricky-susan.herokuapp.com.</p>
      <p style="padding-left:5%;padding-right:5%;text-align:justify">"${req.body.message}"</p>
      <p style="text-align:right;padding-right:5%;font-size:150%"><b> - ${req.body.name},</b><i> ${req.body.email}</i></p>
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
      to: 'donaldnewholmiii@gmail.com',
      subject: "Node",
      text: "Hello world?",
      html: output
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId)
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      res.send('Message Sent.');
    })
  } else {
    res.send('Message Not Sent.')
  }
});

app.listen((process.env.PORT || 3000), () =>
console.log(`Listening on ${(process.env.PORT || '3000')}!`),
);
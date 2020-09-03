require('dotenv').config()
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const nodemailer = require('nodemailer');
const validator = require("email-validator");
const app = express();

const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  password: process.env.DATABASE_PASSWORD,
  host: 'localhost',
  database: 'trickysusan',
  port: 5432
});

client.connect();

const query = `
  SELECT * FROM news;
`;

app.get('/news', (req, res) => {
  client.query(query, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    const retrievedData = [];
    for (let row of res.rows) {
      retrievedData.push(row);
    }
    console.log(retrievedData[(retrievedData.length-1)]);

  })
})

app.use(cors());

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile('/admin.html')
});

app.post('/', (req, res) => {
  if (req.body.message && req.body.name && validator.validate(req.body.email)) {
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
      subject: "Tricky Susan",
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

app.get('/admin', (req, res) => {
  res.sendFile('admin.html')
})

const port = (process.env.PORT || 3000)
app.listen(port, () =>
console.log(`Listening on ${port}.`),
);
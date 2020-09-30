require('dotenv').config()
const moment = require('moment');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const nodemailer = require('nodemailer');
const validator = require("email-validator");
const app = express();
const path = require('path');
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

app.use(cors());

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/news', async(req, res) => {
  try {
    const allNews = await client.query("SELECT * FROM news ORDER BY date")
    res.json(allNews.rows);
  }
  catch (err) {
    console.error(err.message);
  }    
})

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

app.get('/admin', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/admin.html'));
})

app.post('/admin/login', async (req, res) => {
  try {
    console.log(req)
    const users = await client.query("SELECT * FROM users");
    users.rows.forEach(user => {
      if (user.username === req.body.username && user.password === req.body.password) {
        res.send("Login Successful.")
      } else {
        res.send("Username or Password incorrect.")
      }
    })
  }
  catch (err) {
    console.error(error.message);
  }
})

app.get('/users', async (req, res) => {
  try {

    res.json(users.rows);
  }
  catch (err) {
    console.error(err.message);
  }
});

app.post("/admin/add-news", async(req, res) => {
	try {
    const newPost = await client.query(`INSERT INTO news (date, post) 
                                        VALUES ( '${req.body.date}', '${req.body.post}' ) 
                                        RETURNING *`);                                  
	res.send("Post Added.");
	} catch (err) {
    console.error(err.message);
    res.send("Post Not Added.")
	}
});

app.delete("/admin/delete-news/:id", async(req, res) => {
  try {
    const { id } = req.params;
    const deletePost = await client.query("DELETE FROM news WHERE post_id = $1 RETURNING *", [
      id
    ]);
    res.json("Post Deleted.");
  } catch (err) {
    console.error(err.message);
    res.send("Post Not Deleted.")
  }
})

const port = (process.env.PORT || 3000)
app.listen(port, () =>
console.log(`Listening on ${port}.`),
);
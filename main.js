require('dotenv').config()
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const cors = require('cors');
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const path = require('path');
 
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + 'index.html'))
});
 
app.listen((process.env.PORT || 3000), () =>
console.log(`Listening on ${(process.env.PORT || '3000')}!`),
);

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
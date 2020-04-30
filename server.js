require('dotenv').config()
const cors = require('cors');
const express = require('express');
const app = express();
const path = require('path');
 
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/frontend/index.html'))
});

app.listen(process.env.PORT, () =>
console.log(`Example listening on ${process.env.PORT}!`),
);
console.log('Hello Endless Project.');
console.log(process.env.MY_SECRET);
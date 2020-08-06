require('dotenv').config()
const cors = require('cors');
const express = require('express');
const app = express();
const path = require('path');
 
app.use(cors());

app.use(express.static(__dirname + '/web'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/web/index.php'))
});

app.listen((process.env.PORT || 3000), () =>
console.log(`Example listening on ${(process.env.PORT || '3000')}!`),
);
console.log('Hello Endless Project.');
console.log(process.env.MY_SECRET);
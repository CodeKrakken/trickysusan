require('dotenv').config()
const cors = require('cors');
const express = require('express');
const app = express();
 
app.use(cors());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});
app.listen(process.env.PORT, () =>
console.log(`Example listening on ${process.env.PORT}!`),
);
console.log('Hello Endless Project.');
console.log(process.env.MY_SECRET);
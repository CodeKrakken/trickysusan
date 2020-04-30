const cors = require('cors');
const express = require('express');
const app = express();
 
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(process.env.PORT, () =>
console.log(`Example listening on ${process.env.PORT}!`),
);
console.log('Hello Endless Project.');
console.log(process.env.MY_SECRET);
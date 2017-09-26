require('newrelic');
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  // ejs render automatically looks in the views folder
  res.render('dist/index.html');
});

app.listen(PORT, () => {
  console.log('Listening to', PORT);
});

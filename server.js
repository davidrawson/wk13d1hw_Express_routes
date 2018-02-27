const express = require('express');
const app = express();
// const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./controllers/index'));

app.listen(3000, function () {
  console.log('App running on port '+this.address().port);
});

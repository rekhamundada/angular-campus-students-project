const express = require('express');
const bodyParser = require('body-parser');
const volleyball = require('volleyball');

const path = require('path');
//const app = new express.Router();
const port = process.env.PORT || 4200;
const app = express();

const db = require('../models');
const campusRouter = require('./campusRoutes');
const studentRouter = require('./studentsRoutes');

app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// static middleware
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', express.static('public')); // include our routes!
app.use('/campuses', campusRouter);
app.use('/students', studentRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
// error handling middleware
app.use((err, req, res, next) => {
  console.log(err.message);
  console.log(err.stack);
  res.status(500).send('Something went wrong!');
});

// db.sync({force: true})
// .then(() => {
//   app.listen( port, () => console.log(`studiously serving silly sounds on port 4200`));
// });

module.exports = app;

const chalk = require('chalk');
const Sequelize = require('sequelize');
// const pkg = require('../../package.json');

console.log(chalk.yellow('Opening database connection'));
const db = new Sequelize(`postgres://localhost:5432/angular-campus-students-project`, {logging: true});

db.authenticate()
.then(() => {
  console.log(chalk.yellow('Connection has been established successfully.'));
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
module.exports = db;

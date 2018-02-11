
const db = require('./db');
const Students = require('./models');
const Campuses = require('./models');

// Students.belongsTo(Campuses);
// Campuses.hasMany(Students);


Campuses.associate = () => {
  Students.belongsTo(Campuses);
  Campuses.hasMany(Students);
};

 db.sync({ force: true  }).then(function () {
  console.log('Database Configured');
});

module.exports = db;
// module.exports = {Campuses, Students }
//{ onDelete: 'cascade', hooks: true

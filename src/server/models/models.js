const Sequelize = require('sequelize');
const db = require('./db');


const Campuses = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
      validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "iim-ahmedabad.jpg"

  },
  description: {
    type: Sequelize.TEXT
  }
});

const Students = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  gpa: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    validate: {
      min: 0.0, max: 4.0
    }
  },
  name: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.getDataValue('firstName') + ' ' +  this.getDataValue('lastName');
    }
  },
});
//  Campuses.sync({force: true})
//  Students.sync({force: true})
module.exports = {
  Campuses: Campuses,
  Students: Students
};

const Sequelize = require('sequelize')
const db = require('./database')

// title - not empty or null
// deadline - a date
// priority - an integer between 1 and 10
// completed - boolean value, defaults to false
// description - extremely large text

const Project = db.define('project', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  deadline: {
    type: Sequelize.DATE
  },
  priority: {
    type: Sequelize.INTEGER,
    validate: {min: 1, max: 10}
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  description: {
    type: Sequelize.TEXT
  },
})

module.exports = Project

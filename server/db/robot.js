const Sequelize = require('sequelize')
const db = require('./database')

// name - not empty or null
// fuelType - can be one of gas, diesel, or electric(defaults to electric)
// fuelLevel - can be a decimal value between 0 and 100(defaults to 100)
// imageUrl - with a default value

const Robot = db.define('robot', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  fuelType: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['gas', 'diesel', 'electric']]
    }
  },
  fuelLevel: {
    type: Sequelize.DECIMAL,
    validate: { min: 0, max: 100 }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/robot.png'
  }
})

module.exports = Robot

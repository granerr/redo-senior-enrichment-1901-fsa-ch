const Sequelize = require('sequelize')
const db = require('./database')

const ProjectTeam = db.define('projectTeams', {
  robotId: {
    type: Sequelize.INTEGER
  },
  projectId: {
    type: Sequelize.INTEGER
  }
})

module.exports = ProjectTeam

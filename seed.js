const { green, red } = require('chalk')
const { db, Project, Robot } = require('./server/db')
const { robotData, projectData, projectTeams } = require('./server/db/dataForDB')

const seed = async () => {
  try {
    await db.sync({ force: true })
    // seed your database here!
    const robots = await Promise.all(robotData.map(robot =>
      Robot.create(robot, {
        include: [{
          model: Project,
          through: 'ProjectTeam'
        }]
      })
    ));
    const projects = await Promise.all(projectData.map(project =>
      Project.create(project, {
        include: [{
          model: Robot,
          through: 'ProjectTeam'
        }]
      })
    ));
    const projectTeamsData = await db.models.ProjectTeam.bulkCreate(projectTeams)
  } catch (err) {
   console.log(red(err))
  }
}

module.exports = seed
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'))
      db.close()
    })
    .catch(err => {
      console.error(red('Oh noes! Something went wrong!'))
      console.error(err)
      db.close()
    })
}

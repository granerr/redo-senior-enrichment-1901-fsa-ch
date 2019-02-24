'use strict'

const router = require('express').Router()
const Robot = require('../db/robot')
const Project = require('../db/project')

// Your routes go here!
// NOTE: Any routes that you put here are ALREADY mounted on `/api`
// You can put all routes in this file HOWEVER,
// this file should almost be like a table of contents for the routers you create!
// For example:
//
// For your `/api/puppies` routes:
// router.use('/puppies', require('./puppies'))
//
// And for your `/api/kittens` routes:
// router.use('/kittens', require('./kittens'))

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!


//ALLROBOTS API ROUTE
router.get('/robots', async (req, res, next) => {
  try {
    const data = await Robot.findAll({
      include: [{ model: Project }]
    })
    res.json(data)
  } catch (err) {
    next(err)
  }
})

//ALLPROJECTS API ROUTE
router.get('/projects', async (req, res, next) => {
  try {
    const data = await Project.findAll({
      include: [{ model: Robot }]
    })
    res.json(data)
  } catch (err) {
    next(err)
  }
})

//SINGLEROBOT API ROUTE
router.get('/robots/:robotId', async (req, res, next) => {
  try {
    const robotId = req.params.robotId
    const data = await Robot.findById(robotId,
      {
        include: [{ model: Project }]
      })
    res.json(data)
  } catch (err) {
    next(err)
  }
})

//SINGLEPROJECT API ROUTE
router.get('/projects/:projectId', async (req, res, next) => {
  try {
    const projectId = req.params.projectId
    const data = await Project.findById(projectId,
      {
        include: [{
          model: Robot,
          through: 'ProjectTeam'
        }]
      })
    res.json(data)
  } catch (err) {
    next(err)
  }
})

//ADDROBOT API ROUTE
router.post('/robots', async (req, res, next) => {
  try {
    const newRobot = new Robot(req.body)
    const savingRobot = await newRobot.save()
    res.json(savingRobot)
  } catch (err) {
    next(err)
  }
})

//ADDPROJECT API ROUTE
router.post('/projects', async (req, res, next) => {
  try {
    const newProject = new Project(req.body)
    const savingProject = await newProject.save()
    res.json(savingProject)
  } catch (err) {
    next(err)
  }
})

//DELETEROBOT API ROUTE
router.delete('/robots/:robotId', async (req, res, next) => {
  const robotId = req.params.robotId
  try {
    const data = await Robot.findById(robotId)
    await data.destroy()
    res.json('deleted successfully')
  } catch (err) {
    next(err)
  }
})

//DELETEPROJECT API ROUTE
router.delete('/projects/:projectId', async (req, res, next) => {
  const projectId = req.params.projectId
  try {
    const data = await Project.findById(projectId)
    await data.destroy()
    res.json('deleted successfully')
  } catch (err) {
    next(err)
  }
})

//UPDATEROBOT API ROUTE
router.put('/robots/:robotId', async (req, res, next) => {
  try {
    const foundRobot = await Robot.findById(req.params.robotId)
    const updatedRobot = await foundRobot.update(req.body)
    res.json({
      message: 'Updated successfully',
      robot: updatedRobot
    })
  } catch (err) {
    next(err)
  }
})

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router

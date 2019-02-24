const robotData = [
  { name: 'R2-D2', imageUrl: 'https://loremflickr.com/cache/resized/4832_31416818757_8d47a07ec9_n_320_240_nofilter.jpg', fuelType: 'electric', projectId: 1 },
  { name: 'WALLL-E', imageUrl: 'https://loremflickr.com/cache/resized/4832_31416818757_8d47a07ec9_n_320_240_nofilter.jpg', fuelType: 'electric', projectId: 1 },
  { name: 'MARVIN', imageUrl: 'https://loremflickr.com/cache/resized/4832_31416818757_8d47a07ec9_n_320_240_nofilter.jpg', fuelType: 'electric', projectId: [4, 4] },
  { name: 'BENDER', imageUrl: 'https://loremflickr.com/cache/resized/4832_31416818757_8d47a07ec9_n_320_240_nofilter.jpg', fuelType: 'diesel', projectId: 2 }
]

const projectData = [
  {
    title: 'Make saag paneer',
    deadline: new Date(),
    priority: 8,
    completed: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    title: 'Make pizza',
    deadline: new Date(),
    priority: 9,
    completed: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    title: 'Make chana masala',
    deadline: new Date(),
    priority: 1,
    completed: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    title: 'Redo senior enrichment project',
    deadline: new Date(),
    priority: 5,
    completed: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  }
]

const projectTeams = [
  { projectId: 1, robotId: 1 },
  { projectId: 2, robotId: 1 },
  { projectId: 1, robotId: 2 },
  { projectId: 3, robotId: 1 },
  { projectId: 1, robotId: 3 },
]

module.exports = { robotData, projectData, projectTeams }

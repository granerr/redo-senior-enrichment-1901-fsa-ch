// import { combineReducers } from 'redux'
// import robotsReducer from './robots'
// // This reducer is just a stub. We should probably do something
// // with that combineReducers thing up there...

// // const appReducer = () => {}
// const appReducer = combineReducers({
//   robotsReducer,
// })

// export default appReducer

import axios from 'axios'

const initialState = {
  robots: [],
  selectedRobot: {},
  projects: [],
  selectedProject: {}
}

export const GET_ROBOTS = 'GET_ROBOTS'
export const GET_PROJECTS = 'GET_PROJECTS'
export const GET_ROBOT = 'GET_ROBOT'
export const GET_PROJECT = 'GET_PROJECT'
export const ADD_ROBOT = 'ADD_ROBOT'
export const ADD_PROJECT = 'ADD_PROJECT'

export const getRobots = (robots) => ({
  type: GET_ROBOTS,
  robots
})

export const getRobot = (robot) => ({
  type: GET_ROBOT,
  robot
})

export const getProjects = (projects) => ({
  type: GET_PROJECTS,
  projects
})

export const getProject = (project) => ({
  type: GET_PROJECT,
  project
})

export const addRobot = (robot) => ({
  type: ADD_ROBOT,
  robot
})

export const addProject = (project) => ({
  type: ADD_PROJECT,
  project
})

export const fetchRobots = () => {
  return async (dispatch, getState) => {
    const { data } = await axios.get('/api/robots')
    dispatch(getRobots(data))
  }
}

export const fetchRobot = (robotId) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`/api/robots/${robotId}`)
    dispatch(getRobot(data))
  }
}

export const fetchProjects = () => {
  return async (dispatch, getState) => {
    const { data } = await axios.get('/api/projects')
    dispatch(getProjects(data))
  }
}

export const fetchProject = (projectId) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`/api/projects/${projectId}`)
    dispatch(getProject(data))
  }
}

export const fetchNewRobot = (robot) => async dispatch => {
  try {
    const res = await axios.post('/api/robots', robot)
    dispatch(addRobot(res.data))
    fetchRobots()
  } catch (err) {
    next(err)
  }
}

export const fetchNewProject = (project) => async dispatch => {
  try {
    const res = await axios.post('/api/projects', project)
    dispatch(addProject(res.data))
    fetchProjects()
  } catch (err) {
    next(err)
  }
}
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROBOTS:
      return {
        ...state,
        robots: action.robots
      }
    case GET_ROBOT:
      return {
        ...state,
        selectedRobot: action.robot
      }
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.projects
      }
    case GET_PROJECT:
      return {
        ...state,
        selectedProject: action.project
      }
    case ADD_ROBOT:
      return {
        ...state,
        robots: [...state.robots, action.robot]
      }
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.project]
      }
    default:
      return state
  }
}

export default appReducer

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
  selectedRobot: {}
}

export const GET_ROBOTS = 'GET_ROBOTS'

export const getRobots = (robots) => ({
  type: GET_ROBOTS,
  robots
})
export const fetchRobots = () => {
  return async (dispatch, getState) => {
    const { data } = await axios.get('/api/robots')
    dispatch(getRobots(data))
  }
}


async dispatch => {
  try {
    const { data } = await axios.get('/api/robots')
    const action = getRobots(data)
    dispatch(action)
  } catch (err) {
    console.error(err)
  }
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROBOTS:

      return {
        ...state,
        robots: action.robots
      }

    default:
      return state
  }
}

export default appReducer

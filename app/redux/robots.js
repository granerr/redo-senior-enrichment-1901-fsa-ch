// import axios from 'axios'

// const initialState = {
//   robots: [],
//   selectedRobot: {}
// }

// export const GET_ROBOTS = 'GET_ROBOTS'

// export const getRobots = (robots) => ({
//   type: GET_ROBOTS,
//   robots
// })

// // export const fetchRobots = () => async dispatch => {
// //   try {
// //     const {data} = await axios.get('/api/robots')
// //     const action = getRobots(data)
// //     dispatch(action)
// //   } catch (err) {
// //     console.error(err)
// //   }
// // }


// export const fetchRobots = () => {
//   return async(dispatch, getState) => {
//     const {data} = await axios.get('/api/robots')
//     dispatch(getRobots(data))
//   }
// }


// async dispatch => {
//   try {
//     const { data } = await axios.get('/api/robots')
//     const action = getRobots(data)
//     dispatch(action)
//   } catch (err) {
//     console.error(err)
//   }
// }

// const robotsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_ROBOTS:

//       return {
//         ...state,
//         robots: action.robots
//       }

//     default:
//       return state
//   }
// }

// export default robotsReducer

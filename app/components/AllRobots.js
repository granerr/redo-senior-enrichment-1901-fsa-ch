// import React from 'react';
// // import { prependOnceListener } from 'cluster';
// import { connect } from 'react-redux';
// import { Route, Switch, BrowserRouter as Router, Redirect, withRouter } from 'react-router-dom'
// import { fetchRobots } from '../redux/robots'

// const mapStateToProps = state => ({
//   robots: state.robots
// })

// export const AllRobots = (props) => {
//   console.log(props)
//   return (

//   <div>
// does this work
// {
//   (props.robots)
//   ? props.robots.map(robot =>
//     <h1>yes</h1>
//   )
//   : 'nope'
// }
//       </div >

//   )
// }

// // const mapDispatchToProps = {
// //   fetchRobots
// // }
// const mapDispatchToProps = (dispatch) => ({
//   fetchRobots: () => dispatch(fetchRobots())
// })
// // Currently, we're just exporting the component as-is. When we're ready to
// // hook it up to the redux store, we'll export the connected component by default:
// // export default connect(mapState)(AllRobots)
// const allRobotsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AllRobots))
// export default allRobotsContainer




import React from 'react';
// import { prependOnceListener } from 'cluster';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter as Router, Redirect, withRouter } from 'react-router-dom'
import { fetchRobots } from '../redux'
import store from '../store';


class AllRobots extends React.Component {
  componentDidMount () {
    // store.dispatch(this.props.fetchRobots)
    this.props.fetchRobots()
  }

  render() {
    return (
      <div>
        does this work
        {console.log(this.props)}
        {(this.props.robots && this.props.robots.length)
           ? this.props.robots.map(robot =>
             <h1>yes</h1>
           )
          :  `${this.props.robots}`
     }
      </div>
    )
  }



}



const mapStateToProps = state => ({
  robots: state.robots
})

const mapDispatchToProps = (dispatch) => ({
  fetchRobots: () => dispatch(fetchRobots())
})


// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllRobots))
export default connect(mapStateToProps, mapDispatchToProps)(AllRobots)

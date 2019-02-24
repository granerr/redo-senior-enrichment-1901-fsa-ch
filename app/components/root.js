import React from 'react'
import { Link, Route, Switch, BrowserRouter as Router, Redirect, withRouter } from 'react-router-dom'
import AllRobots from './AllRobots'
import AllProjects from './AllProjects'
import SingleRobot from './SingleRobot'
import SingleProject from './SingleProject'
import AddRobot from './AddRobot'
import {connect} from 'react-redux'

class Root extends React.Component {
  constructor(props) {
    super(props)
  }
    componentDidMount() {
    // Huh, I wonder what this mysterious componentDidMount is doing here... 🤔
    // this.props.fetchRobots()
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            Welcome!
            <Link to="/robots">Robots</Link>
            <Link to="/projects">Projects</Link>
          </nav>
          <h1>Welcome to StackBot Project Management: your robot employees are awaiting assignments!</h1>
          <p>This seems like a nice place to get started with some Routes!</p>
          <Switch>
            <Route exact path="/robots"
              component={AllRobots}
            />
            <Route exact path="/projects"
              component={AllProjects}
            />
            <Route path="/robots/:robotId" component={SingleRobot} />
            <Route path="/projects/:projectId" component={SingleProject} />
            <Route exact path="/addrobot"
              component={AddRobot}
            />
            {/* <Redirect to="/" /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

////
// const mapStateToProps = state => ({
//   robots: state.robots
// })

// const mapDispatchToProps = (dispatch) => ({
//   fetchRobots: () => dispatch(fetchRobots())
// })
////

// const rootContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Root))

const rootContainer = connect()(Root)

export default rootContainer

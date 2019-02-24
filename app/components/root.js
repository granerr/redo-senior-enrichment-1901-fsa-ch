import React from 'react'
import { Route, Switch, BrowserRouter as Router, Redirect, withRouter } from 'react-router-dom'
// import { withRouter } from "react-router";
import AllRobots from './AllRobots'
import {fetchRobots} from '../redux'
import store from '../store';
import {connect} from 'react-redux'
//if component splitting issue crops up: 'exact path' and also move router to main.js


class Root extends React.Component {
  constructor(props) {
    super(props)
  }
    componentDidMount() {
    // Huh, I wonder what this mysterious componentDidMount is doing here... 🤔

    this.props.fetchRobots()
  }

  render() {
    console.log('this props', this.props)
    console.log('store get state', store.getState())
    return (
      <Router>
        <div>
          <nav>
            Welcome!
          </nav>
          <h1>Welcome to StackBot Project Management: your robot employees are awaiting assignments!</h1>
          <p>This seems like a nice place to get started with some Routes!</p>
          <Switch>
            <Route path="/robots"
              component={AllRobots}
            />
            {/* <Redirect to="/" /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

////
const mapStateToProps = state => ({
  robots: state.robots
})

const mapDispatchToProps = (dispatch) => ({
  fetchRobots: () => dispatch(fetchRobots())
})
////

const rootContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Root))

export default rootContainer

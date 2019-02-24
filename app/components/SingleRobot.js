import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchRobot } from '../redux'
import { Link, Route, Switch, BrowserRouter as Router, Redirect, withRouter } from 'react-router-dom'
export class SingleRobot extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    //update robot thunk here
    const robotId = this.props.match.params.robotId
    console.log(Number(robotId))
    this.props.fetchRobot(robotId)
  }

  render() {
    const robot = this.props.selectedRobot
    console.log(this.props)
    return (
      <div>
        <img src={robot.imageUrl} alt="boohoo"></img>
        <br />
        Name: {robot.name}
        <br />
        Fuel Type: {robot.fuelType}
        <br />
        Fuel Level: {robot.fuelLevel}
        <br />
        {(robot.projects && robot.projects.length)
          ?
          <div>
            Projects:
          <ul>
              {
                robot.projects.map(project =>
                  <li key={project.id}>
                    <Link to={`/projects/${project.id}`}>{project.title}</Link>
                  </li>
                )
              }
            </ul>
          </div>
          : 'No projects here!'
        }
        <br />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // robots: state.robots
  selectedRobot: state.selectedRobot
})

const mapDispatchToProps = (dispatch) => ({
  fetchRobot: (robotId) => dispatch(fetchRobot(robotId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleRobot)

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchProject } from '../redux'
import { Link, Route, Switch, BrowserRouter as Router, Redirect, withRouter } from 'react-router-dom'

export class SingleProject extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    //update robot thunk here
    const projectId = this.props.match.params.projectId
    console.log(Number(projectId))
    this.props.fetchProject(projectId)
  }

  render() {
    const project = this.props.selectedProject
    console.log('project', this.props)
    return (
      <div>
        <br />
        Title: {project.title}
        <br />
        Complete: {
          (project.complete)
            ? 'Done!'
            : 'Not done.'
        }
        <br />
        Deadline: {project.deadline}
        <br />
        Priority: {project.priority}
        <br />
        Description: {project.description}
        <br />
        {(project.robots && project.robots.length)
          ?
          <div>
            Robots:
          <ul>
              {
                project.robots.map(robot =>
                  <li key={robot.id}>
                    <Link to={`/robots/${robot.id}`}>{robot.name}</Link>
                  </li>

                )
              }
            </ul>
          </div>
          : 'No robots here!'
        }
        <br />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // robots: state.robots
  selectedProject: state.selectedProject
})

const mapDispatchToProps = (dispatch) => ({
  fetchProject: (projectId) => dispatch(fetchProject(projectId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProject)

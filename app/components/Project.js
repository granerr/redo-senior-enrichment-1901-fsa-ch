import React from 'react'
import { Link, Route, Switch, BrowserRouter as Router, Redirect, withRouter } from 'react-router-dom'

export const Project = (props) => {
  const project = props.project
  return (
    <div>
      <br />
      Title: <Link to={`/projects/${project.id}`}>{project.title}
      </Link>
      <br />
      Deadline: {project.deadline}
      <br />
      <br />
    </div>
  )
}

export default Project

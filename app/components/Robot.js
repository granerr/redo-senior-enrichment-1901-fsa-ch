import React from 'react'
import { Link, Route, Switch, BrowserRouter as Router, Redirect, withRouter } from 'react-router-dom'

export const Robot = (props) => {
  const robot = props.robot
  console.log(props)
  return (
    <div>
      <img src={robot.imageUrl} alt="boohoo"></img>
      <br />
      Name: <Link to={`/robots/${robot.id}`}>
      {robot.name}
      </Link>


      <button onClick={props.handleDelete}>
        X
      </button>
      <br />
    </div>
  )
}

export default Robot

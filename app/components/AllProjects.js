import React from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../redux'
import {fetchNewProject} from '../redux'
import Project from './Project'
import axios from 'axios'

class AllProjects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      deadline: new Date(),
      priority: 1,
      completed: false,
      description: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.props.fetchProjects()
  }

  async handleSubmit(event) {
    try {
      event.preventDefault();
      alert('A project was submitted: ' + this.state.name);
      this.props.fetchNewProject(this.state)
    } catch (err) {
      console.error(err)
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleDelete(project) {
    try {
      event.preventDefault();
      alert('A project was deleted');
      await axios.delete(`/api/projects/${project.id}`)
      this.props.fetchProjects()
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return (
      <div>
        {console.log(this.props)}
        {(this.props.projects && this.props.projects.length)
          ? this.props.projects.map(project =>
            <Project key={project.id} project={project} handleDelete={() =>
              this.handleDelete(project)}/>
          )
          : `Where are the projects???`
        }


        <form className="container" onSubmit={this.handleSubmit} >
          <div>
            <label>
              Title:
          <input value={this.state.title} type='text' name='title' onChange={this.handleChange} />
            </label>
          </div>

          {/* <div>
        <label>
          Deadline:
          <DatePicker
          name="deadline"
          value={this.state.deadline}
          type="date"
        selected={this.state.deadline}
        onChange={this.handleChange}
      />
        </label>
      </div> */}

          <div>
            <label>
              Priority:
          <input value={this.state.priority} type='number' name='priority' onChange={this.handleChange} />
            </label>
          </div>

          <div>
            <label>
              Completed:
          <input
                name="completed"
                type="checkbox"
                checked={this.state.completed}
                onChange={this.handleChange} />
            </label>
          </div>

          <div>
            <label>
              Description:
          <input value={this.state.description} type='text' name='description' onChange={this.handleChange} />
            </label>
          </div>
          <input type="submit" value="Submit" />
        </form>


      </div>
    )
  }
}

const mapStateToProps = state => ({
  projects: state.projects
})

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
  fetchNewProject: (newProject) => dispatch(fetchNewProject(newProject)),
  deleteRobot: (projectToDelete) => dispatch(deleteRobot(projectToDelete))
})


// Currently, we're just exporting the component as-is. When we're ready to
// hook it up to the redux store, we'll export the connected component by default:
// export default connect(mapState)(AllProjects)
export default connect(mapStateToProps, mapDispatchToProps)(AllProjects)

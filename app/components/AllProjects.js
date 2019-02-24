import React from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../redux'
import Project from './Project'

class AllProjects extends React.Component {
  componentDidMount() {
    this.props.fetchProjects()
  }

  render() {
    return (
      <div>
        {console.log(this.props)}
        {(this.props.projects && this.props.projects.length)
          ? this.props.projects.map(project =>
            <Project key={project.id} project={project} />
          )
          : `Where are the projects???`
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  projects: state.projects
})

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects())
})


// Currently, we're just exporting the component as-is. When we're ready to
// hook it up to the redux store, we'll export the connected component by default:
// export default connect(mapState)(AllProjects)
export default connect(mapStateToProps, mapDispatchToProps)(AllProjects)

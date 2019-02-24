import React from 'react';

export const AllProjects = (props) => {
  return (

    <div>
      {props.projects.map(project =>
        <div> {project.name} </div>
        )}

    </div>


  )

}



// Currently, we're just exporting the component as-is. When we're ready to
// hook it up to the redux store, we'll export the connected component by default:
// export default connect(mapState)(AllProjects)
export default AllProjects

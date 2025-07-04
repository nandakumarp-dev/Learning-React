import React from 'react'

function Projects({projects}) {

  return (
    <div className="container">
        <h2>Projects</h2>
        <div className="project-row">
            {projects.map(project=>(

                <div className="col-4">
                <div className="card">
                    <h5>{project.title}</h5>
                    <p>Company : {project.company}</p>
                    <p>Code At : <a href={project.link}></a></p>
                    <p>Tech Used : </p>
                    <ul>
                        {project.techs.map(tech=>(
                            <li>{tech}</li>
                        ))}
                    </ul>
                </div>
                </div>
                
            ))}
            
        </div>
    </div>
  )
}

export default Projects
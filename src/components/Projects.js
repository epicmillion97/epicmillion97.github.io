import React from 'react'
import Project from './Project'

var json = require("../projects.json")

const Projects = () => {
  return (
    <div id="Projects">
        <h2 className="projectsTitle">Projects</h2>
        <div className="projectHolder">{json.projects.map((project)=> <Project project={project} id={project.id}/>)}</div>
    </div>
  )
}

export default Projects
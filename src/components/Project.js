import React from 'react'
import { FaGithub, FaPython, FaHtml5, FaReact, FaTerminal, } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'

const Project = ( { project, id }) => {
  return (
    <div id={id} className="projectBox">
      <h1 className="projectTitle">{project.title}</h1>
      <a className="projectImageA" href={project.workingURL}><img className="projectImage" src={project.imageURL.includes("window.location") ? eval(project.imageURL) : project.imageURL} alt="" /></a>
      <h2 className="projectAuthor">{project.author}</h2>
      <div className="projectLanguageDiv">
      {project.languages.map((language) =>{ 
        switch(language){
          case 'python':
            return <a className="projectLanguageA" href='https://www.python.org/'> <FaPython key={Math.random()*1000} className='projectLanguage' size='35px' /> </a>
          case 'javascript':
            return <a className="projectLanguageA" href='https://www.javascript.com/'> <SiJavascript key={Math.random()*1000 } className='projectLanguage' size='35px'/> </a>
          case 'html':
            return <a className="projectLanguageA" href='https://www.w3schools.com/html/'> <FaHtml5 key={Math.random()*1000} className='projectLanguage' size='35px'/> </a>
          case 'react':
            return <a className="projectLanguageA" href='https://reactjs.org/'> <FaReact key={Math.random()*1000} className='projectLanguage' size='35px'/> </a>
          case 'shell':
            return <a className="projectLanguageA" href='javascript: void(0)'> <FaTerminal key={Math.random()*1000} className='projectLanguage' size='35px'/> </a>
        }
       })}
       </div>
      <a href={project.githubLink} className="projectGithub"><FaGithub size="40px"/></a>
    </div>
  )
}

export default Project
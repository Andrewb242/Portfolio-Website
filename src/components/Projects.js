import React from 'react'

import './Projects.css'
import ProjectDescriptor from './ProjectDescriptor'

import ProjectInformation from "../data/projectInformation.json"

export default function Projects() {

  const { projects } = ProjectInformation

  return (
    <div className='proj-container'>
        {projects.map((project, index) => (
          <ProjectDescriptor
              projectName={project.title}
              gitHubLink={project.github}
              projectDescription={project.description}
              key={index}
          />
        ))}
    </div>
  )
}

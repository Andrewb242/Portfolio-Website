import React, {useState, useRef} from 'react'
import { MdOutlineExpandMore, MdExpandLess } from "react-icons/md";
import './ProjectDescriptor.css'

export default function ProjectDescriptor({projectName, gitHubLink, projectDescription}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='project-dsc-container'>
      <button onClick={toggleOpen} className='project-dsc-glance-button'>
        <div>{projectName}</div>
        <div className='project-dsc-expand-container'>
          {isOpen ? (<MdExpandLess/>) : (<MdOutlineExpandMore/>)}
        </div>
      </button>
      <div 
        className={`project-dsc-info-container ${isOpen ? 'open' : ''}`}
        ref={contentRef}
        style={{
          height: isOpen ? contentRef.current?.scrollHeight + 'px' : '0px'
        }}
      >
        <div className='project-dsc-content'>
          <div className='project-dsc-github-head'>GitHub Repository: </div>
          <a href={gitHubLink} target="_blank" rel="noopener noreferrer" className="proj-dsc-link">
            {gitHubLink}
          </a>
          <div className='project-dsc-info-p'>{projectDescription}</div>
        </div>
      </div>
    </div>
  )
}
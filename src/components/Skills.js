import React from 'react'

import './Skills.css'
import SkillIndicator from './SkillIndicator'

import skillData from "../data/skillsData.json"


export default function Skills() {

  const { skills } = skillData

  return (
    <div className='skills-container'>
      {skills.map((skill, index) => (
        <SkillIndicator skillText={skill.skill} key={index}/>
      ))}
    </div>
  )
}

import React from 'react'

import './SkillIndicator.css'

export default function SkillIndicator({skillText}) {
  return (
    <div className='skill-indicator-container'>
        <div className='skill-indicator-text'>{skillText}</div>
    </div>
  )
}

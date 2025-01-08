import React from 'react'
import "./Education.css"

export default function Education() {
  return (
    <div>
        <div className='edu-info-container'>
            <div className='edu-sheet'>
                <div className='edu-info-psu'>Penn State University</div>
                <div className='edu-info-psu-desc'>Penn State University Park</div>
                <div className='edu-info-psu-desc'>Major: Computer Science</div>
                <div className='edu-info-psu-desc'>Minors: Cybersecurity and Mathematics</div>
                <div className='edu-info-psu-desc'>Current Year: Junior</div>
                <div className='edu-info-psu-desc'>Expected Graduation: May 2026</div>
            </div>
            <div className='edu-sheet'>
                <div className='edu-info-gpa-label'>Current GPA</div>
                <div className='edu-info-gpa'>3.58</div>
            </div>
            <img src='/images/edu-nittany-lion.jpg' alt="Penn State University" className="edu-info-img" />
        </div>
        <div className='edu-info-container'>
        <div className='edu-course-highlights-div'>
          <div className='edu-sheet'>
            <div className='edu-course-highlights'>Course Highlights</div>
            <div className='edu-course-highlights-container'>
              <div>
                <div className='edu-course-highlights-dsc'>CMPEN 331: Computer Organization And Design</div>
                <div className='edu-course-highlights-dsc'>CMPSC 311: Introduction to Systems Programming</div>
                <div className='edu-course-highlights-dsc'>CMPSC 461: Programming Language Concepts</div>
              </div>
              <div>
                <div className='edu-course-highlights-dsc'>MATH 415: Introduction to Mathematical Statistics</div>
                <div className='edu-course-highlights-dsc'>CMPSC 465: Data Structures and Algorithms (Currently Enrolled)</div>
                <div className='edu-course-highlights-dsc'>CMPSC 473: OS Design and Construction (Currently Enrolled)</div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

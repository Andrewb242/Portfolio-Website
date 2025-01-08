import React from 'react'

import './Home.css'

export default function Home() {
  return (
    <div>
        <div className='home-container'>
          <div className='home-name-container'>
          <ul className='home-list'>
            <li><text className='home-name'>Andrew Boob</text></li>
            <li><text className='home-major'>Computer Science</text></li>
            <li><text className='home-minor'>Cybersecurity and Mathematics</text></li>
          </ul>
          </div>
          <h2 className='home-about-header'>A Little About Me...</h2>
          <div className='home-about-paragraph'>
            <p>
              Hi, I’m Andrew Boob, a Junior at Penn State University pursuing a degree in Computer Science, 
              with minors in Cyber Security and Mathematics. I am also minoring in Cyber Security and Mathematics. 
              I've gained a solid foundation in programming, algorithms, and security principles, 
              equipping me with the skills to contribute to development teams and tackle real-world challenges.
            </p>
            <p>
              Outside of academics, I stay active with hobbies like hiking, soccer, and strength training. 
              I also enjoy playing guitar and collaborating with friends to create music. 
              I find that these activities teach me valuable lessons in teamwork, discipline, 
              and creativity—skills I carry into every aspect of my life.
            </p>
            <p>
              I am driven by the ability to learn quickly and solve problems efficiently. 
              Whether facing a tough coding challenge or working under tight deadlines, 
              I approach each problem with determination and a calm mindset. 
              I thrive in high-pressure environments and am always eager to learn 
              new tools and technologies to overcome obstacles.
            </p>
            <p>
              Above all, my faith in Jesus Christ is central to my life. 
              It provides me with a sense of purpose and shapes the way I approach my career. 
              In all things, I strive to "work heartily, as for the Lord and not for men" (Colossians 3:23), 
              and I aim to honor God through my work, relationships, and contributions to any team I join.
            </p>
          </div>
        </div>
    </div>
  )
}

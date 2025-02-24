import React from 'react';
import './Home.css';
import resume from './KotaSivaPrasadT.pdf'

export default function Home({ height }) {
  return (
    <div className='main' style={{ height: `${height}px` }}>
      <div className='background'></div>
      <div className='text-overlay'>
        <div>
          I am <br/> 
          <span style={{color:'#00aae2'}}>a DevOps </span> <br/>
          <span>Engineer</span>
        </div>
      <a 
          href={resume} 
          download='KotaSivaPrasadT.pdf' 
          className='download-link'
        >
            <i className='fas fa-download'></i>
          Download CV
        </a>
      </div>
    </div>
  );
}

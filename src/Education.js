import React from 'react';
import EducationCard from './EducationCard';
import './Education.css';

export default function Education() {
  const educationData = [
    { 
      title: 'Bachelor of Technology (B.Tech)', 
      name: 'Sree Rama engineering College(JNTUA)',
      duration: '2016 - 2020',
      location: 'Tirupathi, Andhra Pradesh',
      score: '66.65%'
    },
    { 
      title: 'Board of Intermediate Education', 
      name: 'Sri Chaitanya Junior College',
      duration: '2014 - 2016',
      location: 'Tirupathi, Andhra Pradesh',
      score: '78.7%' 
    },
    { 
      title: 'Secondary School Certificate (SSC)', 
      name: 'A P R School',
      duration: '2013-2014',
      location: 'SathyaVedu, Andhra Pradesh',
      score: '85%'
    },
  ];

  return (
    <div>
        <div>
        <h2 className="header-text"><i className="fas fa-graduation-cap"></i> Education</h2>

        </div>
        <div  className="education-container">
        {educationData.map((edu, index) => (
        <EducationCard 
          key={index} 
          title={edu.title} 
          name={edu.name}
          duration={edu.duration}
          location={edu.location}
          score={edu.score}
        />
      ))}
        </div>
      
    </div>
  );
}

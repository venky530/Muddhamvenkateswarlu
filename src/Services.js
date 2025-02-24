import React from 'react';
import Card from './Card';
import './Services.css';

export default function Services() {
  const technologies = [
    { iconClass: 'fab fa-react', title: 'React', description: 'A JavaScript library for building user interfaces.' },
    { iconClass: 'fab fa-html5', title: 'HTML', description: 'The standard markup language for documents designed to be displayed in a web browser.' },
    { iconClass: 'fab fa-css3-alt', title: 'CSS', description: 'Style sheet language used for describing the presentation of a document written in HTML.' },
    { 
        iconClass: 'fab fa-js-square',
        title: 'JavaScript', 
        description: `JavaScript is a versatile programming language, and TypeScript is its strict syntactical superset adding optional static typing.` 
      },
      { 
        iconClass: 'fab fa-php',
        title: 'PHP', 
        description: `CodeIgniter is a lightweight MVC framework for PHP, known for its speed, simplicity, and flexibility in building web applications. It provides a structured approach to development while maintaining high performance.` 
      },
      { 
        iconClass: 'fab fa-brands fa-bootstrap',
        title: 'BootStrap', 
        description: `Bootstrap is a popular front-end framework, providing pre-styled components and a responsive grid system to streamline web development.` 
      },
  ];

  return (
    <div>
      <h2 className="header-text"><i className="fas fa-cogs"></i> Technologies</h2>
      <div className="card-container">
        {technologies.map((tech, index) => (
          <Card 
            key={index} 
            iconClass={tech.iconClass} 
            title={tech.title} 
            description={tech.description} 
          />
        ))}
      </div>
    </div>
  );
}

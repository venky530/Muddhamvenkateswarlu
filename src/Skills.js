import React from 'react';
import './Skills.css'; // Import your CSS file for styling

const skills = [
  { name: 'React', percentage: 85, color: '#61dafb' },
  { name: 'HTML', percentage: 90, color: '#653e00' },
  { name: 'CSS', percentage: 70, color: '#2965f1' },
  { name: 'JavaScript', percentage: 80, color: '#f7df1e' },  
  { name: 'React-Native', percentage: 75, color: '#dd0031' },
  { name: 'BootStrap', percentage: 80, color: '#007acc' },
];

export default function Skills() {
  return (
    <div className="skills-container">
      <h2 className="header-text"><i className="fas fa-lightbulb"></i> My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-name">{skill.name}</div>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${skill.percentage}%`, backgroundColor: skill.color }}
              >
                {skill.percentage}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import Card from './Card';
import './Services.css';

export default function Services() {
  const technologies = [
    { iconClass: 'fab fa-aws', title: 'AWS', description: 'Cloud computing platform offering scalable and flexible infrastructure solutions.' },
    { iconClass: 'fab fa-docker', title: 'K8s & Docker', description: 'Container orchestration and management platform for deploying scalable applications.' },
    { iconClass: 'fas fa-cube', title: 'Terraform', description: 'Infrastructure as Code (IaC) tool for automating cloud resource provisioning.' },
    { 
        iconClass: 'fas fa-tools',
        title: 'Ansible', 
        description: 'Configuration management and automation tool for managing infrastructure efficiently.' 
    },
    { 
        iconClass: 'fas fa-cogs',
        title: 'Jenkins', 
        description: 'Automation server used for building, testing, and deploying applications in CI/CD pipelines.' 
    },
    { 
        iconClass: 'fas fa-chart-line',
        title: 'Grafana & Prometheus', 
        description: 'Monitoring and observability tools for visualizing and analyzing system metrics.' 
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

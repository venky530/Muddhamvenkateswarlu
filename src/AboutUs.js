import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us">
      <h2 className="header-text">
        <i className="fas fa-user"></i> About Me
      </h2>
      <p>
      To leverage my technical and interpersonal skills in achieving the goals
       of a company that prioritizes automation, reliability, and efficiency in 
       software development and operations. Adept at designing, implementing, and 
       managing CI/CD pipelines, cloud infrastructure, and containerized applications. 
       Proficient in DevOps tools and technologies, including Terraform, Kubernetes, Docker, 
       Ansible, Jenkins, AWS, and monitoring solutions like Prometheus and Grafana. 
       Able to work independently on automation projects as well as collaborate effectively 
       within cross-functional teams to drive innovation and operational excellence.
      </p>

      <h3 className="sub-header">
        <i className="fas fa-bullseye"></i> My Professional Philosophy
      </h3>
      <p>
      Harnessing automation, cloud infrastructure, and DevOps 
      best practices to create scalable, resilient, and high-performing systems. 
      Dedicated to optimizing software delivery, enhancing reliability, and driving 
      continuous innovation to exceed business and operational goals.
      </p>

      <h3 className="sub-header">
        <i className="fas fa-heart"></i> Core Beliefs
      </h3>
      <ul className="values-list">
        <li>
           Automation First : Streamlining workflows and reducing manual effort to enhance efficiency and reliability.
        </li>
        <li>
           Scalability & Reliability : Designing infrastructure and CI/CD pipelines that ensure seamless deployments and system resilience.
        </li>
        <li>Continuous Improvement : Embracing a culture of learning, iteration, and innovation to optimize performance and processes.</li>
        <li>
           Security & Compliance : Embedding security best practices into every stage of development and deployment.
        </li>
        <li>Collaboration & Transparency : Fostering strong cross-team communication to bridge the gap between development and operations.</li>
      </ul>

      <h3 className="sub-header">
        <i className="fas fa-cogs"></i> What I Bring
      </h3>
      <p>
        With a strong focus on front-end development and foundational knowledge
        of back-end technologies, I offer a comprehensive skill set:
      </p>
      <ul className="expertise-list">
        <li>
          Administration: Database, Linux, Appian, vmware management
        </li>
        <li>
          DevOps Tools: Terraform, Kubernetes, Docker, Jenkins, Ansible)
        </li>
        <li>Security Tools: Sonar Scanner, owasp-dependency-check, trivy, owasp zap</li>
        <li>
           Cloud Aws services: Vpc, Ec2, Elb, Auto scaling, Rds, Route 53, s3, Iam, Cloud watch, Ecs</li>
      </ul>
    </div>
  );
}

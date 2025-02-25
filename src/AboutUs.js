import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us">
      <h2 className="header-text">
        <i className="fas fa-user"></i> About Me
      </h2>
      <p>
      I am a DevOps Engineer passionate about automation, cloud infrastructure, and CI/CD pipeline optimization. My expertise lies in bridging the gap between development and operations to ensure seamless, scalable, and highly reliable deployments. I thrive in dynamic environments where I can drive efficiency, security, and innovation in software delivery.

With a strong background in container orchestration, cloud computing, and infrastructure as code (IaC), I help organizations accelerate their development lifecycle while maintaining stability and security.
      </p>

      <h3 className="sub-header">
        <i className="fas fa-bullseye"></i> My Professional Philosophy
      </h3>
      <p>
      🚀 "Automate Everything, Scale Efficiently, Deliver Seamlessly."

          I believe in leveraging cutting-edge DevOps tools and best practices to create high-performance, resilient, and self-healing systems. My goal is to eliminate bottlenecks, enhance security, and optimize deployments to ensure faster and more reliable software delivery.
      </p>

      <h3 className="sub-header">
        <i className="fas fa-heart"></i> Core Beliefs
      </h3>
      <ul className="values-list">
        <li>
           Automation First : Eliminating manual effort to enhance speed, consistency, and efficiency.
        </li>
        <li>
           Scalability & Reliability : Designing robust, fault-tolerant infrastructure and CI/CD pipelines.
        </li>
        <li>Continuous Improvement : Embracing a culture of learning, iteration, and optimization.</li>
        <li>
           Security & Compliance :  Embedding security at every stage of development and deployment.
        </li>
        <li>Collaboration & Transparency : Building strong communication between Dev, Ops, and Security teams.</li>
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
        Infrastructure & Automation: Terraform, Ansible, Kubernetes, Docker.
        </li>
        <li>
        CI/CD & DevOps Pipelines: Jenkins, GitHub Actions, GitLab CI/CD
        </li>
        <li>Cloud Expertise: AWS (VPC, EC2, ELB, Auto Scaling, RDS, Route 53, S3, IAM, ECS, CloudWatch)</li>
        <li>
        Security & Compliance: SonarQube, OWASP Dependency Check, Trivy, OWASP ZAP</li>
        <li> Monitoring & Logging: Prometheus, Grafana, CloudWatch </li>
        <li>Administration & Management: Linux, Database Administration, Appian, VMware</li>
      </ul>
    </div>
  );
}

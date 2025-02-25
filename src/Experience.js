import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="experience-container">
      <h2 className="header-text">
        <i className="fas fa-briefcase"></i> Experience
      </h2>
      <div className="work-experience">
        <h3 className="role-title">
          <i className="fas fa-laptop-code"></i> Associate
        </h3>
        <p className="company-details">
          <i className="fas fa-building"></i> Company Name: Machint Solutions
          Ltd
        </p>
        <p className="company-location">
          <i className="fas fa-map-marker-alt"></i> Company Location: Hyderabad
        </p>
        <p className="duration">
          <i className="fas fa-calendar-alt"></i> Duration: 3.2 Years
        </p>
        <div className="skills">
          <h4 className="skills-header">
            <i className="fas fa-tools"></i> Key Skills & Technologies:
          </h4>
          <p>
            AWS, Terraform, Kubernetes, Docker, Ansible, Jenkins, Grafana , Prometheous, Shell Script, Linux.
          </p>
        </div>
        <div className="achievements">
          <h4 className="achievements-header">
            <i className="fas fa-trophy"></i> Achievements & Contributions:
          </h4>
          <ul className="achievements-list">
  <li>
    <i className="fas fa-check-circle"></i> Designed and implemented CI/CD pipelines to automate build, testing, and deployment processes, improving release efficiency.
  </li>
  <li>
    <i className="fas fa-check-circle"></i> Led infrastructure automation initiatives using Terraform, Ansible, and Kubernetes, ensuring scalable and reliable deployments.
  </li>
  <li>
    <i className="fas fa-check-circle"></i> Managed cloud infrastructure on AWS, provisioning and optimizing resources like EC2, S3, RDS, and IAM.
  </li>
  <li>
    <i className="fas fa-check-circle"></i> Integrated monitoring and logging solutions using Prometheus, Grafana, and CloudWatch to enhance system observability and troubleshooting.
  </li>
  <li>
    <i className="fas fa-check-circle"></i> Improved deployment speed and system reliability by configuring auto-scaling, load balancing, and container orchestration with Kubernetes.
  </li>
  <li>
    <i className="fas fa-check-circle"></i> Implemented security best practices by integrating SonarQube, Trivy, and OWASP Dependency Check into DevOps workflows.
  </li>
  <li>
    <i className="fas fa-check-circle"></i> Collaborated with development teams to streamline code integration and deployment, reducing downtime and enhancing workflow efficiency.
  </li>
  <li>
    <i className="fas fa-check-circle"></i> Managed source code repositories using Git and GitHub/GitLab, ensuring proper branching strategies and version control.
  </li>
  <li>
    <i className="fas fa-check-circle"></i> Contributed to system performance optimization by automating infrastructure scaling and reducing deployment time.
  </li>
  <li>
    <i className="fas fa-check-circle"></i> Participated in incident management, debugging, and root cause analysis to minimize downtime and improve system resilience.
  </li>
</ul>

        </div>
      </div>
      {/* &nbsp;&nbsp;
      <div className="work-experience">
        <h3 className="role-title">
          <i className="fas fa-laptop-code"></i>Senior Engineer
        </h3>
        <p className="company-details">
          <i className="fas fa-building"></i> Company Name: L&T Technology
          Services
        </p>
        <p className="company-location">
          <i className="fas fa-map-marker-alt"></i> Company Location: Hyderabad
        </p>
        <p className="duration">
          <i className="fas fa-calendar-alt"></i> Duration: 3 Months
        </p>
        <div className="skills">
          <h4 className="skills-header">
            <i className="fas fa-tools"></i> Key Skills & Technologies:
          </h4>
          <p>HTML, CSS, JavaScript, React, Git</p>
        </div>
        <div className="achievements">
          <h4 className="achievements-header">
            <i className="fas fa-trophy"></i> Achievements & Contributions:
          </h4>
          <ul className="achievements-list">
            <li>
              <i className="fas fa-check-circle"></i> Developed user-friendly,
              responsive, and visually appealing UI components using modern web
              technologies.
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Building responsive and
              high-performance web applications using React.js, ensuring
              cross-browser compatibility and optimizing performance.
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Collaborated closely with
              design and backend teams to deliver fully functional, user-centric
              applications.
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Managed version control
              and project repositories using Git, ensuring a streamlined
              development process.
            </li>
          </ul>
        </div>
      </div>
      &nbsp;&nbsp;
      <div className="work-experience">
        <h3 className="role-title">
          <i className="fas fa-laptop-code"></i>Senior Software Engineer
        </h3>
        <p className="company-details">
          <i className="fas fa-building"></i> Company Name: HighGo Info
          Solutions Pvt Ltd
        </p>
        <p className="company-location">
          <i className="fas fa-map-marker-alt"></i> Company Location: Hyderabad
        </p>
        <p className="duration">
          <i className="fas fa-calendar-alt"></i> Duration: 4.7 Years
        </p>
        <div className="skills">
          <h4 className="skills-header">
            <i className="fas fa-tools"></i> Key Skills & Technologies:
          </h4>
          <p>
            HTML, CSS, JavaScript, React, JSON, Git, PHP, React-Native, Redux
          </p>
        </div>
        <div className="achievements">
          <h4 className="achievements-header">
            <i className="fas fa-trophy"></i> Achievements & Contributions:
          </h4>
          <ul className="achievements-list">
            <li>
              <i className="fas fa-check-circle"></i> Developed user-friendly,
              responsive, and visually appealing UI components using modern web
              technologies.
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Integrated complex APIs,
              facilitating smooth data flow between the front end and back end
              using React and Spring Boot.
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Enhanced application
              performance by 30% through code optimization and refactoring.
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Contributed to the design
              and implementation of application architecture, improving
              maintainability and scalability.
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Collaborated closely with
              design and backend teams to deliver fully functional, user-centric
              applications.
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}

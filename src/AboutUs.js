import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us">
      <h2 className="header-text">
        <i className="fas fa-user"></i> About Me
      </h2>
      <p>
        To make use of my interpersonal skills to achieve the goals of a company
        that focuses on customer satisfaction and customer experience. Able to
        effectively self-manage during independent projects, as well as
        collaborate as part of a productive team. Proficient in an assortment of
        front-end technologies, including React, Redux, React Native, HTML, CSS,
        and JavaScript.
      </p>
      <p>
        Experienced in front-end development with a strong focus on building
        responsive and user-friendly interfaces. Adept at collaborating with
        teams to deliver high-quality solutions and enhancing the overall user
        experience.
      </p>

      <h3 className="sub-header">
        <i className="fas fa-bullseye"></i> My Professional Philosophy
      </h3>
      <p>
        Leveraging technology to build seamless, user-friendly applications that
        enhance user experience and satisfaction. Committed to delivering
        robust, innovative solutions that exceed organizational expectations.
      </p>

      <h3 className="sub-header">
        <i className="fas fa-heart"></i> Core Beliefs
      </h3>
      <ul className="values-list">
        <li>
          User Satisfaction: Prioritizing the needs of our users to deliver the
          best experience.
        </li>
        <li>
          Continuous Improvement: Striving for excellence in every project.
        </li>
        <li>Integrity: Maintaining transparency and honesty in my work.</li>
        <li>
          Collaboration: Building strong, productive relationships within our
          teams and organizations.
        </li>
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
          Front-End: React, React-Redux, React-Native, HTML, CSS, JavaScript
        </li>
        <li>
          Back-End: Node.js (basic knowledge), PHP (worked at the start of
          my career)
        </li>
        <li>Tools & Platforms: Git, Jenkins, Jira</li>
        <li>
          Methodologies: Agile, Scrum, Continuous Integration/Continuous
          Deployment (CI/CD)
        </li>
      </ul>
    </div>
  );
}

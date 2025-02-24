import React, { useState } from "react";
import "./Projects.css"; // Import a CSS file for styling

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Campost Money",
      icon: "fas fa-money-bill-wave",
      summary: `Developing live Production web app using React functional components.Developed components of Different Level Management and details page where users can choose the currency, country they origin for creating money transfer`,
      details: `Initiated the project from scratch and successfully developed multiple core modules, laying a strong foundation for scalability.
        Built key UI components for different levels of management, enhancing user accessibility and system efficiency.
        Optimized performance and usability, leading to improved transaction efficiency and a better customer experience.
        Contributed to a reliable and scalable solution, enabling smooth financial operations for users while maintaining high security and compliance standards.`,
      impact: `- Reduced customer complaints by 25% through the implementation of intuitive user interfaces and error-handling mechanisms.
        - Improved system efficiency by 30%, allowing for more seamless data processing and interaction.`,
      technologies: ["React", "HTML", "CSS", "JavaScript", "Redux"],
    },
    {
      title: " Alkhairi Care Insurance",
      icon: "fas fa-shield-alt",
      summary: `Alkhairi Care is an insurance platform that provides two specialized insurance programs ensuring travelers have flexible coverage based on their needs. he platform supports two types of user accounts customers and agents.`,
      details: `Developed a responsive insurance web platform using React, ensuring a seamless and user-friendly experience.
Designed and implemented policy management modules, allowing users to browse, compare, and purchase insurance plans easily.
Integrated secure payment gateways to facilitate smooth premium payments and policy renewals.
Built an intuitive claims processing system, enabling users to submit and track claims efficiently.
Implemented role-based access control, ensuring secure and personalized user experiences for policyholders, agents, and administrators.
Optimized API integrations for real-time policy verification, reducing processing time and enhancing system reliability.`,
      impact: ` -Enhanced User Engagement: Improved accessibility and usability, leading to higher customer satisfaction. -Increased Efficiency: Streamlined policy management and claims processing, reducing manual workload and response time.-Scalability & Performance: Developed a scalable architecture to support growing user demand and future feature expansions. -Security & Compliance: Ensured secure transactions and data protection, adhering to industry regulations. -Business Growth: Enabled faster policy enrollments and renewals, boosting revenue and customer retention.`,
      technologies: ["React", "Redux", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "SCLAN",
      icon: "fas fa-music",
      summary: `SCLAN is a home automation web application designed for music management and playback. It allows users to organize and play music based on contextual settings. The application includes features such as artists, albums, songs, and playlists that can be customized for different scenarios.`,
      details: `Playlist Management: Users can create playlists with selected songs for specific contexts.
Import & Export Features: Music data (artists, albums) can be imported via ZIP files and exported based on searches.
Repository Management: The system detects new storage devices attached to the server, categorizing them as "unknown repositories" until the user enables them.
Automated Audio Scanning: Once a repository is activated, all audio files are scanned and integrated into the application.`,
      impact: ` - Enhanced Music Automation: Enables users to play music automatically based on location and context. - Efficient Media Management: Simplifies the process of importing, exporting, and organizing audio content. - Seamless Device Integration: Supports external storage devices, ensuring dynamic expansion of the music library. -Improved User Experience: Provides a customized and automated music experience for home environments. - Business Value: Serves a German client, demonstrating global usability and adaptability.`,
      technologies: ["React", "HTML", "JavaScript", "CSS", "Redux"],
    },
    {
      title: "Calvary Services",
      icon: "fas fa-church",
      summary: `Calvary Services is a mobile application that consolidates all the services of Calvary in one place, providing real-time access to essential statistics and reports. The app enables users to track and compare various key metrics related to Calvary’s operations.`,
      details: `Inventory Management: Displays Calvary Inventory Details Count for easy tracking.
Partner & Sponsor Tracking: Shows Main Partners and Sponsors Count to monitor engagements.
Temple Visit Analytics: Provides Calvary Temple visit counts with a comparison between Sundays for attendance trends.
Date Picker Feature: Allows users to select custom date ranges for more detailed comparison`,
      impact: `- Centralized Information Hub: Users can access all Calvary-related data in one application. -Data-Driven Decision-Making: Provides insights into attendance trends and sponsorship details for strategic planning. -Improved Inventory & Partner Management: Ensures efficient tracking of Calvary’s resources and collaborations. -Enhanced User Engagement: Offers a seamless experience with real-time updates and comparisons. -Business Value: Helps in better organization, forecasting, and management of Calvary services.`,
      technologies: ["React-Native", "CSS", "JavaScript", "Bootstrap"],
    },
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div>
      <h2 className="header-text">
        <i className="fas fa-project-diagram"></i> My Projects
      </h2>
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <i className={`fas ${project.icon} project-icon`}></i>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <button
                className="project-button"
                onClick={() => handleOpenModal(project)}
              >
                View More
              </button>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <button className="close-button" onClick={handleCloseModal}>
                ✖
              </button>
              <h2 className="modal-title">
                <i className={`fas ${selectedProject.icon} modal-icon`}></i>{" "}
                {selectedProject.title}
              </h2>
              <p className="modal-details">{selectedProject.details}</p>
              <h4>Technologies Used:</h4>
              <ul className="technologies-list">
                {selectedProject.technologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
              <h4>Project Impact:</h4>
              <p className="modal-impact">{selectedProject.impact}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import React from 'react'
import './Projects.css';

const Projects = () => {
  return (
    <div className='project-container'>
      <h2>Projects</h2>

      {/* LEFT SIDE */}
      <div className="project-row left">
        <div className="project-box">
          <h2>Transparency in carbon credit</h2>
          <ul>
            <li>Ensured transparent reporting of carbon credit project activities and outcomes.</li>
            <li>Prepared clear and accurate project documentation for carbon credit verification.</li>
            <li>Maintained transparent data records for emissions calculations and monitoring results.</li>
            <li>Communicated project methodologies and assumptions clearly to stakeholders.</li>
            <li>Supported audits by providing complete and transparent project information.</li>
          </ul>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="project-row right">
        <div className="project-box">
          <h2>Task Management System</h2>
          <ul>
            <li>Developed a task management system using Spring Boot microservices architecture.</li>
            <li>Integrated Eureka, API Gateway, Config Server, and Load Balancer.</li>
            <li>Implemented authentication using Spring Security + JWT.</li>
            <li>Used RESTful APIs for inter-service communication.</li>
            <li>Centralized configuration and logging for easier monitoring.</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Projects;

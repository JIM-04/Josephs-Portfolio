// src/components/ProjectsSection.js
import React, { useState } from 'react';
import './ProjectsSection.css';
import project1Image from '../assets/project1.png'; // Import the image

const projects = [
  {
    id: 1,
    title: 'International Travel Planner',
    description: 'A web application to search for hotels and convert currency.',
    image: project1Image, // Use the imported image
    link: 'https://travisjblack.github.io/International-Travel-Planner/' // Add the project link
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of project 2.',
    image: 'path/to/another-image.jpg', // Replace with the actual path to your other project image
    link: '#'
  },
  // Add more projects here
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="projects-section">
      <div className="carousel-container">
        <button className="carousel-button left" onClick={handlePrev}>←</button>
        <div className="carousel-wrapper">
          <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {projects.map((project) => (
              <div key={project.id} className="carousel-item">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="image-link">
                  <img src={project.image} alt={project.title} className="carousel-image" />
                </a>
                <div className="carousel-info">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-button right" onClick={handleNext}>→</button>
      </div>
    </section>
  );
}

export default ProjectsSection;

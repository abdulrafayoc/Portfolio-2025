import React from "react";
import "./Projects.css"; // Import the CSS file
import project1 from "../assets/case-1.png";
import project2 from "../assets/case-2.png";
import project3 from "../assets/case-1.png";
import ProjectItem from "../components/ProjectItem";

const Projects = () => {
  const projects = [
    { id: 1, image: project1, title: "Project 1", category: "Web Design" },
    { id: 2, image: project2, title: "Project 2", category: "UI/UX" },
    { id: 3, image: project3, title: "Project 3", category: "Development" },
    // Add more projects as needed
  ];

  const categories = ["All", "Web Design", "UI/UX", "Development"];

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="projects-container">
      <div className="container">
        <h1>Projects</h1>

        {/* Filter Section */}
        <div className="filter-section">
          <ul>
            {categories.map((category, index) => (
              <li
                key={index}
                className={selectedCategory === category ? "text-white" : "text-gray-100"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
            <ProjectItem image={project1} title="Project 1" description="Description 1" year="2023" counter="1" />
            <ProjectItem image={project1} title="Project 1" description="Description 1" year="2023" counter="1" />
            <ProjectItem image={project1} title="Project 1" description="Description 1" year="2023" counter="1" />
            <ProjectItem image={project1} title="Project 1" description="Description 1" year="2023" counter="1" />
            <ProjectItem image={project1} title="Project 1" description="Description 1" year="2023" counter="1" />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
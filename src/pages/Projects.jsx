import React from "react";
import "./Projects.css";
import project1 from "../assets/case-1.png";
import project2 from "../assets/case-2.png";
import project3 from "../assets/case-1.png";

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
    <div className="projects-container bg-black text-white min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-imbue mb-12">Projects</h1>

        {/* Filter Section */}
        <div className="filter-section mb-12">
          <ul className="flex gap-4">
            {categories.map((category, index) => (
              <li
                key={index}
                className={`cursor-pointer text-lg font-imbue ${
                  selectedCategory === category
                    ? "text-white underline"
                    : "text-gray-400"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-item group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover filter grayscale transition-all duration-300 group-hover:grayscale-0"
              />
              <div className="mt-4">
                <h3 className="text-2xl font-imbue">{project.title}</h3>
                <p className="text-gray-400">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
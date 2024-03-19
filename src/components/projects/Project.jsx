import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import ProjectItems from "./ProjectItems";

const Project = () => {
  const [selectedItem, setSelectedItem] = useState({ name: "All" }); // Changed name to selectedItem
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    console.log("Selected category:", selectedItem.name);
    if (selectedItem.name === "All") {
      console.log("Setting projects to all projectsData");
      setProjects(projectsData);
    } else {
      console.log("Filtering projectsData for category:", selectedItem.name);
      const newProjects = projectsData.filter((project) => {
        return (
          project.category.toLowerCase() === selectedItem.name.toLowerCase()
        );
      });
      console.log("Filtered projects:", newProjects);
      setProjects(newProjects);
    }
  }, [selectedItem]);

  const handleClick = (index) => {
    setActive(index);
    setSelectedItem(projectsNav[index]);
  };

  return (
    <div id="portfolio">
      <div className="work__filters">
        {projectsNav.map((navItem, index) => {
          // Changed iterator name to navItem
          return (
            <span
              key={index}
              onClick={() => handleClick(index)}
              className={`${active === index ? "active-work" : ""} work__item`}
            >
              {navItem.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((projectItem) => {
          // Changed iterator name to projectItem
          return <ProjectItems item={projectItem} key={projectItem.id} />;
        })}
      </div>
    </div>
  );
};

export default Project;

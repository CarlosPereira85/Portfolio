import React from 'react';

const ProjectItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="Work Picture" className="work__img" />

      <h3 className="work__title">{item.title}</h3>
      <p className="work__description">{item.description}</p>
      <a href={item.demoLink} className="work__button" target="_blank" rel="noopener noreferrer">
      zur Seite <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default ProjectItems;

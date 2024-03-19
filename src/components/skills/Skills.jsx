import './skills.css';
import React from 'react'
import FrontEnd from './FrontEnd';
import BackEnd from './BackEnd';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Mein technisches Niveau</span>

        <div className="skills__container container grid">
            <FrontEnd />
            


            <BackEnd />
        </div>
    </section>
  )
}

export default Skills;
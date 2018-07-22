import React, { Component } from 'react';
import '../css/Projects.css';

const projects = [
  {
    name: 'Dissenter',
    link: 'https://dissenter.baumish.com',
    thumbnail: '/img/project/Dissenter.png',
    description: 'A reddit-like web application built using MongoDB, Express, and Handlebars',
  },
  {
    name: 'Pallite',
    link: 'http://baumish.com/projects/pallite/picker',
    thumbnail: '/img/project/Pallite.png',
    description: 'A lite pallate picking utility with functionality for creasing hue-based swatches.',
  },
  {
    name: 'My-Markov',
    link: 'https://github.com/nathanbaum/my-markov',
    thumbnail: '/img/project/Markov.png',
    description: 'A simple command-line Markov chain generator built in C++.',
  },
  {
    name: 'Complexity_Viz',
    link: 'https://nathanbaum.github.io/complexity_vis',
    thumbnail: '/img/project/Complexity_Vis.png',
    description: 'A client side web utility that can visualize the real-world time complexity of an algorithm by timing it at increasing values of n and graphing the results.',
  },
  {
    name: 'Computer Graphics',
    link: 'http://baumish.com/projects/graphics.html',
    thumbnail: '/img/project/Graphics.png',
    description: 'The assignments page for Computer Graphics, taught by Ken Perlin (inventor of Perlin Noise function)',
  },
];

class Projects extends Component {

  getProjects() {
    const components = [];
    for( const project in projects ) {
      components.push(
        <a key={project} href={projects[project].link} className="Project Anchor">
          <div className={"Project Container " + (project%2 === 0 ? "RightHanded" : "LeftHanded")}>
            <div className="Project Image Wrapper"><img className="Project Image" src={projects[project].thumbnail}/></div>
            <div className="Project Title Wrapper"><div className="Project Title">{projects[project].name}</div></div>
            <div className="Project Description">{projects[project].description}</div>
          </div>
        </a>
      );
    }
    return components;
  }

  render() {
    return (
      <div className="ProjectList">
        {this.getProjects()}
      </div>
    );
  }

}
//
export { Projects };

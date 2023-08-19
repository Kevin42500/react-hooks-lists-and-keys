import React from 'react';
import NavBar from './NavBar';
import ProjectList from './ProjectList';

const App = () => {
  const links = ['Home', 'About', 'Contact'];
  const projects = [
    {
      id: 1,
      name: 'Project 1',
      description: 'Description for Project 1',
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'Description for Project 2',
    },
  ];

  const technologies = ['React', 'Node.js', 'Express.js'];

  return (
    <div>
      <NavBar links={links} />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;

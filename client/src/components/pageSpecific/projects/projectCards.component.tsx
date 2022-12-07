import { useState } from 'react';
import { BsShieldLock as Lock, BsGlobe2 as Globe, BsThreeDots as ThreeDots } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import Card from '../../card/card.component';
import UserInitials from './userInitials.component';

import { projectsDummyData } from './projectsData';

import './projectCards.styles.scss';

const ProjectCards = () => {
  const [projects, setProjects] = useState<any[]>(projectsDummyData);

  return (
    <div className='projects-card-container'>
      {projects.map(project => (
        <Card key={project.title} cardClass='project-card'>
          <div className='project-access'>
            <span className='project-privacy'>
              {project.access === 'private' ? <Lock /> : <Globe />}
              {project.access}
            </span>

            <span className='edit-project'>
              <ThreeDots />
            </span>
          </div>
          <div className='project-details'>
            <Link className='project-title' to='/project-tasks'>
              {project.title}
            </Link>
            <div className='users-initials'>
              <UserInitials users={project.users.concat(project.admins)} totalUsers={project.totalUsers} />
            </div>
          </div>
          <div className='created-on'>Created on: {project.createdAt}</div>
        </Card>
      ))}
    </div>
  );
};

export default ProjectCards;

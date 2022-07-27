import { useEffect, useState } from 'react';
import ApiFeatures from '../../../api/apiFeatures';
import Card from '../../card/card.component';
import UserLogos from './userLogos.component';
import { ReactComponent as Dots } from '../../../assets/svg/icons/dots.svg';

const ProjectsList = () => {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    const taskApi = new ApiFeatures();
    const projectsList = taskApi.getAllProjects();

    setProjectsList(projectsList);
  }, []);

  return (
    <div className='projects-list'>
      {projectsList.map((project, i) => (
        <Card key={i} className='project'>
          <div className='project-card-head'>
            <div className='project-type'>
              <span className='project-type-icon'>{project.projectVisibility === 1 ? 'Private' : 'Public'}</span>
            </div>
            <span className='project-edit-options'>
              <Dots />
            </span>
          </div>
          <div className='project-name'>Arun Bohra</div>
          <div className='project-users'>
            {project.projectVisibility === 1 && <UserLogos users={project.projectUsers} totalUsers={project.totalUsers} />}
            {project.projectVisibility === 2 && <div className='user-logo user-logo-purple'>All</div>}
          </div>
          <div className='created-on'>Created on: 10 Jun 2022 04:45 PM</div>
        </Card>
      ))}
    </div>
  );
};

export default ProjectsList;

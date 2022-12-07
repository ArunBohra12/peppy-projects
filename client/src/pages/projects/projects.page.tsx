import { updatePageAndPath } from '../../hooks/updatePageAndPath.hook';

import ProjectCards from '../../components/pageSpecific/projects/projectCards.component';

const Projects = (): JSX.Element => {
  updatePageAndPath();

  return (
    <div className='dashboard-page'>
      <h1 className='all-projects-heading'>All Projects</h1>

      <ProjectCards />
    </div>
  );
};

export default Projects;

import ProjectsList from '../../components/pages/projects/projectsList.component';

import './projects.styles.scss';

const Projects = () => {
  return (
    <>
      <h2 className='page-title'>All Projects</h2>

      <ProjectsList />
    </>
  );
};

export default Projects;

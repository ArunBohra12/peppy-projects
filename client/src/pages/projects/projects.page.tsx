import { updatePageAndPath } from '../../hooks/updatePageAndPath.hook';

const Projects = (): JSX.Element => {
  updatePageAndPath();

  return <div>Projects page</div>;
};

export default Projects;

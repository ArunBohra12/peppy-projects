import { updatePageAndPath } from '../../hooks/updatePageAndPath.hook';

const Tasks = (): JSX.Element => {
  updatePageAndPath();

  return <div>tasks page</div>;
};

export default Tasks;

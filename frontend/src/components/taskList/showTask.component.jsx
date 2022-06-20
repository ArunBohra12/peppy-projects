const ShowTask = props => {
  const { task } = props;

  console.log(task);
  return (
    <div className='task-show'>
      <div className='task-show-header'></div>
      <div className='task-show-body'></div>
      <div className='task-show-footer'></div>
    </div>
  );
};

export default ShowTask;

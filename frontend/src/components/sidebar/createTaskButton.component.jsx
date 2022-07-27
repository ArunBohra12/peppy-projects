import { useState } from 'react';
import { ReactComponent as CreateTaskIcon } from '../../assets/svg/icons/add-icon.svg';
import Modal from '../modal/modal.component';

const CreateTaskButton = () => {
  const [createTaskModalState, setCreateTaskModalState] = useState(false);
  const closeModal = () => setCreateTaskModalState(false);

  return (
    <>
      <div className='create-task' onClick={() => setCreateTaskModalState(prev => !prev.createTaskModalState)}>
        <CreateTaskIcon />
        <div className='actions-title'>Create Task</div>
      </div>

      <Modal state={createTaskModalState} closeModal={closeModal}>
        arun bohra
      </Modal>
    </>
  );
};

export default CreateTaskButton;

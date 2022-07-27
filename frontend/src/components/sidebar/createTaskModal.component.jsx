import { useState } from 'react';

import Modal from '../modal/modal.component';

const CreateTaskModal = props => {
  const { createTask: createTaskModalState } = props;
  console.log(createTaskModalState);

  const [createTask, setCreateTask] = useState(createTaskModalState);

  return (
    <>
      <Modal>arun bohra</Modal>
    </>
  );
};

export default CreateTaskModal;

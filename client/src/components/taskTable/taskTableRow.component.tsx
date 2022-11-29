import './taskTableRow.styles.scss';

type TaskTableRowProps = {
  rowsData: any[]; // Will change the any type when we get the data from the server
};

const TaskTableRow = ({ rowsData }: TaskTableRowProps): JSX.Element => {
  return (
    <>
      {rowsData.map(row => (
        <tr key={row.id}>
          <td>#{row.id}</td>
          <td>{row.title}</td>
          <td className='tasks-table-assignee'>{row.assignee}</td>
          <td className='tasks-table-status'>{row.status}</td>
          <td className='tasks-table-priority'>{row.priority}</td>
          <td className='tasks-table-due-date'>{row.dueDate}</td>
        </tr>
      ))}
    </>
  );
};

export default TaskTableRow;

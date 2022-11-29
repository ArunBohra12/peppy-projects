import { TableHeadCells } from '../table/table.component';

export const tasksTableHeadCells: TableHeadCells = [
  {
    name: 'ID',
    className: 'tasks-table-id',
  },
  {
    name: 'Title',
    className: 'tasks-table-title',
  },
  {
    name: 'Assignee',
    className: 'tasks-table-assignee',
  },
  {
    name: 'Status',
    className: 'tasks-table-status',
  },
  {
    name: 'Priority',
    className: 'tasks-table-priority',
  },
  {
    name: 'Due Date',
    className: 'tasks-table-due-date',
  },
];

// Will change the any type when we get the data from the server
export const tasksTableDummyData: any[] = [
  {
    id: 13,
    title: 'arun',
    assignee: 'arun',
    status: 'todo',
    priority: 'high',
    dueDate: 'tomorrow',
  },
  {
    id: 14,
    title: 'arun',
    assignee: 'arun',
    status: 'todo',
    priority: 'high',
    dueDate: 'tomorrow',
  },
  {
    id: 15,
    title: 'arun',
    assignee: 'arun',
    status: 'todo',
    priority: 'high',
    dueDate: 'tomorrow',
  },
  {
    id: 16,
    title: 'arun',
    assignee: 'arun',
    status: 'todo',
    priority: 'high',
    dueDate: 'tomorrow',
  },
  {
    id: 17,
    title: 'arun',
    assignee: 'arun',
    status: 'todo',
    priority: 'high',
    dueDate: 'tomorrow',
  },
];

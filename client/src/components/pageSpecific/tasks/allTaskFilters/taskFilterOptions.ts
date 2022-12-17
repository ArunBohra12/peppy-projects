type TaskFilterOption = {
  value: string;
  label: string;
};

type Filter = {
  name: string;
  options: TaskFilterOption[];
};

export const tasksFilters: Filter[] = [
  {
    name: 'Project',
    options: [
      { value: '1', label: 'Project' },
      { value: '2', label: 'Chelsea Project' },
      { value: '3', label: 'Task manager project' },
    ],
  },
  {
    name: 'Issue Status',
    options: [
      { value: '', label: 'Issue Status' },
      { value: '1', label: 'To Do' },
      { value: '2', label: 'In Progress' },
      { value: '3', label: 'In Review' },
      { value: '4', label: 'Done' },
    ],
  },

  {
    name: 'Priority',
    options: [
      { value: '', label: 'Issue Status' },
      { value: '1', label: 'High' },
      { value: '2', label: 'Medium' },
      { value: '3', label: 'Low' },
    ],
  },

  {
    name: 'Assigned To',
    options: [
      { value: '', label: 'Assigned to' },
      { value: '2', label: 'Arun' },
      { value: '34', label: 'Angela' },
      { value: '4', label: 'Jim' },
      { value: '5', label: 'Bombos' },
    ],
  },
  {
    name: 'Reported By',
    options: [
      { value: '', label: 'Select' },
      { value: '2', label: 'Arun' },
      { value: '34', label: 'Angela' },
      { value: '4', label: 'Jim' },
      { value: '5', label: 'Bombos' },
    ],
  },
];

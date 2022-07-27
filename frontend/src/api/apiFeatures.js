class ApiFeatures {
  getTaskList(filters) {
    const tasks = [
      {
        id: 504,
        title: 'This is a test task title not a real one',
        assignee: { name: 'Arun Bohra', id: 'a293jfsdljlk2j3ksj' },
        status: 'In Review',
        priority: 'Low',
        dueDate: '19 May 2020 17:00 PM',
        createdAt: '19 May 2020 17:00 PM',
        createdBy: 'Root user',
        description: 'JSON STRING FOR THE DESCRIPTION',
        project: 'Project 1',
        comments: [
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
        ],
      },
      {
        id: 504,
        title: 'This is a test task title not a real one',
        assignee: { name: 'Arun Bohra', id: 'a293jfsdljlk2j3ksj' },
        status: 'To Do',
        priority: 'Urgent',
        dueDate: '19 May 2020 17:00 PM',
        createdAt: '19 May 2020 17:00 PM',
        createdBy: 'Root user',
        description: 'JSON STRING FOR THE DESCRIPTION',
        project: 'Project 1',
        comments: [
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
        ],
      },
      {
        id: 504,
        title: 'This is a test task title not a real one',
        assignee: { name: 'Arun Bohra', id: 'a293jfsdljlk2j3ksj' },
        status: 'Done',
        priority: 'Medium',
        dueDate: '19 May 2020 17:00 PM',
        createdAt: '19 May 2020 17:00 PM',
        createdBy: 'Root user',
        description: 'JSON STRING FOR THE DESCRIPTION',
        project: 'Project 1',
        comments: [
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
        ],
      },
      {
        id: 1054,
        title: 'This is a test task title not a real one',
        assignee: { name: 'Arun Bohra', id: 'a293jfsdljlk2j3ksj' },
        status: 'In Progress',
        priority: 'High',
        dueDate: '19 May 2020 17:00 PM',
        createdAt: '19 May 2020 17:00 PM',
        createdBy: 'Root user',
        description: 'JSON STRING FOR THE DESCRIPTION',
        project: 'Project 1',
        comments: [
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
        ],
      },
      {
        id: 504,
        title: 'This is a test task title not a real one',
        assignee: { name: 'Arun Bohra', id: 'a293jfsdljlk2j3ksj' },
        status: 'In Review',
        priority: 'Low',
        dueDate: '19 May 2020 17:00 PM',
        createdAt: '19 May 2020 17:00 PM',
        createdBy: 'Root user',
        description: 'JSON STRING FOR THE DESCRIPTION',
        project: 'Project 1',
        comments: [
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
        ],
      },
      {
        id: 504,
        title: 'This is a test task title not a real one',
        assignee: { name: 'Arun Bohra', id: 'a293jfsdljlk2j3ksj' },
        status: 'To Do',
        priority: 'Urgent',
        dueDate: '19 May 2020 17:00 PM',
        createdAt: '19 May 2020 17:00 PM',
        createdBy: 'Root user',
        description: 'JSON STRING FOR THE DESCRIPTION',
        project: 'Project 1',
        comments: [
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
        ],
      },
      {
        id: 504,
        title: 'This is a test task title not a real one This is a test task title not a real one This is a test task title not a real one',
        assignee: { name: 'Arun Bohra', id: 'a293jfsdljlk2j3ksj' },
        status: 'Done',
        priority: 'Medium',
        dueDate: '19 May 2020 17:00 PM',
        createdAt: '19 May 2020 17:00 PM',
        createdBy: 'Root user',
        description: 'JSON STRING FOR THE DESCRIPTION',
        project: 'Project 1',
        comments: [
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
        ],
      },
      {
        id: 1054,
        title: 'This is a test task title not a real one',
        assignee: { name: 'Arun Bohra', id: 'a293jfsdljlk2j3ksj' },
        status: 'In Progress',
        priority: 'High',
        dueDate: '19 May 2020 17:00 PM',
        createdAt: '19 May 2020 17:00 PM',
        createdBy: 'Root user',
        description: 'JSON STRING FOR THE DESCRIPTION',
        project: 'Project 1',
        comments: [
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
        ],
      },
      {
        id: 504,
        title: 'This is a test task title not a real one',
        assignee: { name: 'Arun Bohra', id: 'a293jfsdljlk2j3ksj' },
        status: 'In Review',
        priority: 'Low',
        dueDate: '19 May 2020 17:00 PM',
        createdAt: '19 May 2020 17:00 PM',
        createdBy: 'Root user',
        description: 'JSON STRING FOR THE DESCRIPTION',
        project: 'Project 1',
        comments: [
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
        ],
      },
      {
        id: 504,
        title: 'This is a test task title not a real one',
        assignee: { name: 'Arun Bohra', id: 'a293jfsdljlk2j3ksj' },
        status: 'To Do',
        priority: 'Urgent',
        dueDate: '19 May 2020 17:00 PM',
        createdAt: '19 May 2020 17:00 PM',
        createdBy: 'Root user',
        description: 'JSON STRING FOR THE DESCRIPTION',
        project: 'Project 1',
        comments: [
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
        ],
      },
      {
        id: 504,
        title: 'This is a test task title not a real one',
        assignee: { name: 'Arun Bohra', id: 'a293jfsdljlk2j3ksj' },
        status: 'Done',
        priority: 'Medium',
        dueDate: '19 May 2020 17:00 PM',
        createdAt: '19 May 2020 17:00 PM',
        createdBy: 'Root user',
        description: 'JSON STRING FOR THE DESCRIPTION',
        project: 'Project 1',
        comments: [
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
        ],
      },
      {
        id: 1054,
        title: 'This is a test task title not a real one',
        assignee: { name: 'Arun Bohra', id: 'a293jfsdljlk2j3ksj' },
        status: 'In Progress',
        priority: 'High',
        dueDate: '19 May 2020 17:00 PM',
        createdAt: '19 May 2020 17:00 PM',
        createdBy: 'Root user',
        description: 'JSON STRING FOR THE DESCRIPTION',
        project: 'Project 1',
        comments: [
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
          { by: 'root', comment: 'this is a test comment', date: '23-03-2013' },
        ],
      },
    ];

    return { tasks, totalTasks: 33, resultPerPage: 10, totalPages: 4, currentPage: 1 };
  }

  createTask(task) {}

  getOneProject() {}

  getAllProjects() {
    const projects = [
      {
        projectName: 'Project 1',
        projectVisibility: 1,
        projectUsers: ['user arun', 'user varun', 'user test', 'user', 'arun bohra'],
        totalUsers: 22,
        createdOn: '03 Oct 2019 03:09 PM',
      },
      {
        projectName: 'Project 2',
        projectVisibility: 2,
        projectUsers: ['user arun', 'arun bohra'], // array of user names
        totalUsers: 22,
        createdOn: '03 Oct 2019 03:09 PM',
      },
      {
        projectName: 'Project 3',
        projectVisibility: 1,
        projectUsers: ['user arun', 'arun bohra'],
        totalUsers: 200,
        createdOn: '03 Oct 2019 03:09 PM',
      },
    ];

    return projects;
  }

  getBrandDesignInfo() {
    const info = {
      statusColors: {
        toDo: '#f5b101',
        inProgress: '#0000ff',
        inReview: '#b91f14',
        done: '#008000',
      },
    };

    return info;
  }
}

export default ApiFeatures;

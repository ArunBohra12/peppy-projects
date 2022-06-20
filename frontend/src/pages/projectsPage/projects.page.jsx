import { Component } from 'react';
import { IoLockClosed, IoEarthSharp } from 'react-icons/io5';
import Card from '../../components/card/card.component';
import Header from '../../components/header/header.component';
import UserLogos from '../../components/pages/projects/userLogos.component';

class ProjectPage extends Component {
  constructor() {
    super();

    this.state = {
      allProjects: [
        {
          projectName: 'Test name',
          projectType: 1,
          users: ['arun bohra', 'arun singh bohra', 'arun bohra arun', 'arun bohra', 'arun'],
          totalUsers: 12,
          createdOn: '10 Jun 2022 04:45 PM',
        },
        {
          projectName: 'Test name',
          projectType: 2,
          users: ['arun bohra', 'arun bohra', 'arun bohra', 'arun bohra', 'arun'],
          totalUsers: 223,
          createdOn: '10 Jun 2022 04:45 PM',
        },
        {
          projectName: 'Test name',
          projectType: 1,
          users: ['arun bohra', 'arun bohra', 'arun bohra', 'arun bohra', 'arun'],
          totalUsers: 42,
          createdOn: '10 Jun 2022 04:45 PM',
        },
        {
          projectName: 'Test name',
          projectType: 2,
          createdOn: '10 Jun 2022 04:45 PM',
        },
        {
          projectName: 'Test name',
          projectType: 2,
          createdOn: '10 Jun 2022 04:45 PM',
        },
        {
          projectName: 'Test name',
          projectType: 2,
          createdOn: '10 Jun 2022 04:45 PM',
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Header page='Projects' />
        <section className='projects panel'>
          <h2>All Projects</h2>

          <div className='all-projects'>
            {this.state.allProjects.map((project, id) => {
              return (
                <Card key={id} className='project'>
                  <div className='project-type'>
                    <span className='project-type-icon'>
                      {project.projectType === 1 ? <IoLockClosed /> : <IoEarthSharp />}
                      {project.projectType === 1 ? 'Private' : 'Public'}
                    </span>
                  </div>
                  <div className='project-name'>Arun Bohra</div>
                  <div className='project-users'>
                    {project.projectType === 1 && <UserLogos users={project.users} totalUsers={project.totalUsers} />}
                    {project.projectType === 2 && <div className='user-logo user-logo-purple'>All</div>}
                  </div>
                  <div className='created-on'>Created on: 10 Jun 2022 04:45 PM</div>
                </Card>
              );
            })}
          </div>
        </section>
      </>
    );
  }
}

export default ProjectPage;

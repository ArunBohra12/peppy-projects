import { IconType } from 'react-icons/lib';
import {
  BsGrid1X2Fill as DashboardBtn,
  BsFillFileTextFill as ProjectsBtn,
  BsUiChecks as TasksBtn,
  BsTools as SettingsBtn,
} from 'react-icons/bs';

type SidebarNavigationItem = {
  name: string;
  path: string;
  icon: IconType;
};

const sidebarNavigationItems: SidebarNavigationItem[] = [
  {
    name: 'Dashboard',
    path: '/',
    icon: DashboardBtn,
  },
  {
    name: 'Projects',
    path: '/projects',
    icon: ProjectsBtn,
  },
  {
    name: 'Tasks',
    path: '/tasks',
    icon: TasksBtn,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: SettingsBtn,
  },
];

export default sidebarNavigationItems;

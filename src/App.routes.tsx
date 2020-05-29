import Home from './pages/Home/Home.lazy';
import Skills from './pages/Skills/Skills.lazy';
import Projects from './pages/Projects/Projects.lazy';
// import Contact from './pages/Contact/Contact.lazy';
import WorkExperience from './pages/WorkExperience/WorkExperience.lazy';
import Events from 'pages/Events/Events.lazy';

export const routes = [
  {
    title: 'About',
    path: "/",
    component: Home,
    exact: true,
    icon: 'FaUserTie'
  },
  {
    title: 'Work Experience',
    path: "/work-experience",
    component: WorkExperience,
    exact: true,
    icon: 'FaClipboardList'
  },
  {
    path: "/skills",
    title: 'Skills',
    component: Skills,
    exact: true,
    icon: 'FaWrench'
  },
  {
    path: "/projects",
    title: 'Projects',
    component: Projects,
    exact: true,
    icon: 'FaToolbox'
  },
  {
    path: "/events",
    title: 'Events',
    component: Events,
    exact: true,
    icon: 'FaCalendarAlt'
  }
  // {
  //   path: "/contact",
  //   title: 'Contact',
  //   component: Contact,
  //   exact: true,
  //   icon: 'FaHandshake'
  // }
];

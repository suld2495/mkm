import type { RouteObject } from 'react-router-dom';
import Main from '../pages/Main.jsx';
import Intro from '../pages/Intro.jsx';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/intro',
    element: <Intro />,
  },
];

export default routes;

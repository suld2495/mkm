import type { RouteObject } from 'react-router-dom';
import Main from '../pages/Main';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
  },
];

export default routes;

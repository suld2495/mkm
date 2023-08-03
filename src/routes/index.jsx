import Layout from '../components/layout/Layout.jsx';
import SubLayout from '../components/layout/SubLayout.jsx';
import Main from '../pages/Main.jsx';
import Intro from '../pages/Intro.jsx';
import Fulfillment from '../pages/Fulfillment.jsx';
import Coupang from '../pages/Coupang.jsx';
import { Navigate } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <Layout><Main /></Layout>,
  },
  {
    path: '/company',
    element: <Navigate to="/company/company" replace />
  },
  {
    path: '/service',
    element: <Navigate to="/service/fulfillment" replace />
  },
  {
    path: '/company/company',
    element: <SubLayout><Intro /></SubLayout>,
  },
  {
    path: '/service/fulfillment',
    element: <SubLayout><Fulfillment /></SubLayout>,
  },
  {
    path: '/service/coupang',
    element: <SubLayout><Coupang /></SubLayout>,
  },
];

export default routes;

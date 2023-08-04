import { RouterProvider, createHashRouter } from 'react-router-dom';
import routes from './routes';
import Modal from 'react-modal'; 

function App() {
  const router = createHashRouter(routes);

  return (
    <RouterProvider router={router} />
  );
}

Modal.setAppElement('#root')

export default App;

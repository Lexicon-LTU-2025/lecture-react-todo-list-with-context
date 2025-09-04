import './index.css';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './router';
import { TodoContextProvider } from './features/todos/context';

createRoot(document.getElementById('root')!).render(
  <TodoContextProvider>
    <RouterProvider router={router} />
  </TodoContextProvider>
);

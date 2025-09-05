import './index.css';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './router';
import { TodoContextProvider } from './features/todos/context';
import { FavoriteContextProvider } from './features/favorites/context';

createRoot(document.getElementById('root')!).render(
  <TodoContextProvider>
    <FavoriteContextProvider>
      <RouterProvider router={router} />
    </FavoriteContextProvider>
  </TodoContextProvider>
);

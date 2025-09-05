import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';
import { App } from './components/app';
import { CreateTodo, TodoList } from './features/todos';
import { Favorites } from './features/favorites';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<TodoList />} />
      <Route path="create-todo" element={<CreateTodo />} />
      <Route path="favorites" element={<Favorites />} />
    </Route>
  )
);

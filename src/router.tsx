import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';
import { App } from './components/app';
import { CreateTodo, TodoList } from './features/todos';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<TodoList />} />
      <Route path="create-todo" element={<CreateTodo />} />
    </Route>
  )
);

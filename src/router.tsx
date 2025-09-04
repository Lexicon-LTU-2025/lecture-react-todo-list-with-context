import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router';
import { App } from './components/app';

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />}></Route>)
);

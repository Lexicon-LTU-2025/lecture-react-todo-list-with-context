import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { Header } from '../header';

export const App = () => {
  useEffect(() => {
    console.log('App was rendered');
  });

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;

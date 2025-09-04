import { useEffect } from 'react';
import { Outlet } from 'react-router';

export const App = () => {
  useEffect(() => {
    console.log('App was rendered');
  });

  return (
    <>
      <Outlet />
    </>
  );
};

export default App;

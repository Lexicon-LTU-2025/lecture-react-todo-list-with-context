import { NavLink } from 'react-router';

export const Header = () => {
  return (
    <header className="header">
      <h1>My Todo List</h1>
      <nav className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create-todo">Create Todo</NavLink>
      </nav>
    </header>
  );
};

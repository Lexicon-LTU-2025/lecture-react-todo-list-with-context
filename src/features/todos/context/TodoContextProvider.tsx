import { type ReactElement, type ReactNode } from 'react';
import type { ITodo } from '..';
import { useList } from '../../../useList';
import { TodoContext, type ITodoContext } from '.';

interface ITodoContextProviderProps {
  children: ReactNode;
}

// The provider component provides the actual data. See it as the publisher of the data.
export const TodoContextProvider = ({ children }: ITodoContextProviderProps): ReactElement => {
  // I don't have to use a custom hook here that encapsulates the logic, I can just wrote the logic inside this component since it is a regular React component. The hook already existed, that is why we used it.
  const todos = useList<ITodo>('todos', []);

  const values: ITodoContext = {
    todos: todos.list,
    add: todos.actions.add,
    move: todos.actions.move,
    remove: todos.actions.remove,
  };

  // Every component needs to return a JSX element and this is a special one from React. It exists on the context object. The value prop is the data that is shared to the children components.
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

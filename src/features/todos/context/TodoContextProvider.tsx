import { type ReactElement, type ReactNode } from 'react';
import type { ITodo } from '..';
import { useList } from '../../../useList';
import { TodoContext, type ITodoContext } from '.';

interface ITodoContextProviderProps {
  children: ReactNode;
}

// The provider component provides the actual data
export const TodoContextProvider = ({ children }: ITodoContextProviderProps): ReactElement => {
  const todos = useList<ITodo>('todos', []);

  const values: ITodoContext = {
    todos: todos.list,
    add: todos.actions.add,
    move: todos.actions.move,
    remove: todos.actions.remove,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

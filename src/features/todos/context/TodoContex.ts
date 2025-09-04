import { createContext } from 'react';
import type { Direction, ITodo } from '../types.todos';

export interface ITodoContext {
  todos: ITodo[];
  add: (todo: ITodo) => void;
  remove: (todo: ITodo) => void;
  move: (todo: ITodo, direction: Direction) => void;
}

// The context variable provides the functionality
export const TodoContext = createContext<ITodoContext>({} as ITodoContext);

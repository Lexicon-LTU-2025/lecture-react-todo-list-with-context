import type { ReactElement } from 'react';
import { Todo, type ITodo } from '.';
import { useList } from '../../useList';

export const TodoList = (): ReactElement => {
  const todos = useList<ITodo>('todos', []);

  return (
    <section className="todo-list">
      {todos.list.length === 0 ? (
        <p>No todos...</p>
      ) : (
        todos.list.map((todo) => (
          <Todo
            key={todo.id}
            onMove={todos.actions.move}
            onRemove={todos.actions.remove}
            todo={todo}
          />
        ))
      )}
    </section>
  );
};

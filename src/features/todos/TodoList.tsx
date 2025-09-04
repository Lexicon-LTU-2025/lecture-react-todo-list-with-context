import { useContext, type ReactElement } from 'react';
import { Todo } from '.';
import { TodoContext } from './context';

export const TodoList = (): ReactElement => {
  const { todos, move, remove } = useContext(TodoContext);

  return (
    <section className="todo-list">
      {todos.length === 0 ? (
        <p>No todos...</p>
      ) : (
        todos.map((todo) => <Todo key={todo.id} onMove={move} onRemove={remove} todo={todo} />)
      )}
    </section>
  );
};

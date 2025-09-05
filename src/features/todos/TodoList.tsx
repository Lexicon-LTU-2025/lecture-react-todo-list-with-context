import { useContext, type ReactElement } from 'react';
import { Todo } from '.';
import { TodoContext } from './context';

export const TodoList = (): ReactElement => {
  // This is the consumer part of the context. Here we 'subsribe' to the context and can use the data it shares.
  const { todos, move, remove } = useContext(TodoContext);

  return (
    <section className="todo-list">
      <h2>Todo List</h2>
      {todos.length === 0 ? (
        <p>No todos...</p>
      ) : (
        todos.map((todo) => <Todo key={todo.id} onMove={move} onRemove={remove} todo={todo} />)
      )}
    </section>
  );
};

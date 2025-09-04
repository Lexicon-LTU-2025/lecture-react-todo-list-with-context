import { useRef, type FormEventHandler, type ReactElement } from 'react';
import type { ITodo } from '.';

export const CreateTodo = (): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newTodo: ITodo = {
      id: Math.random(),
      content: inputRef.current!.value,
    };

    console.log('Submitted', newTodo);
    // todos.actions.add(newTodo);
    inputRef.current!.value = '';
  };

  return (
    <form className="create-todo" onSubmit={handleOnSubmit}>
      <div>
        <label htmlFor="">Todo name</label>
        <input ref={inputRef} type="text" />
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

import { useContext, useRef, type FormEventHandler, type ReactElement } from 'react';
import type { ITodo } from '.';
import { TodoContext } from './context';
import { useNavigate } from 'react-router';

export const CreateTodo = (): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { add } = useContext(TodoContext);
  const navigate = useNavigate();

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newTodo: ITodo = {
      id: Math.random(),
      content: inputRef.current!.value,
    };

    console.log('Submitted', newTodo);
    add(newTodo);
    inputRef.current!.value = '';
    navigate('/');
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

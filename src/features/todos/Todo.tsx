import { useContext, type ReactElement, type ReactNode } from 'react';
import type { Direction, ITodo } from './types.todos';
import { FavoriteContext } from '../favorites/context/FavoriteContext';

interface ITodoProps {
  onMove?: (todo: ITodo, direction: Direction) => void;
  onRemove: (todo: ITodo) => void;
  todo: ITodo;
}

export const Todo = ({ onMove, onRemove, todo }: ITodoProps): ReactElement => {
  const { checkIfFavorite, add, remove } = useContext(FavoriteContext);

  const isFavorite = checkIfFavorite(todo);
  const favClasses = ['material-symbols-outlined', 'favorite'];
  if (isFavorite) favClasses.push('is-favorite');

  const handleOnFavoriteClick = (): void => {
    if (isFavorite) {
      return remove(todo);
    }

    add(todo);
  };

  const renderMoveIcons = (): ReactNode => {
    if (onMove)
      return (
        <>
          <span className="material-symbols-outlined move-up" onClick={() => onMove(todo, 'UP')}>
            arrow_circle_up
          </span>
          <span
            className="material-symbols-outlined move-down"
            onClick={() => onMove(todo, 'DOWN')}
          >
            arrow_circle_down
          </span>
        </>
      );

    return null;
  };

  return (
    <article className="todo">
      <p>{todo.content}</p>
      <div className="actions">
        <span className="material-symbols-outlined" onClick={() => onRemove(todo)}>
          delete
        </span>
        {renderMoveIcons()}
        <span className={favClasses.join(' ')} onClick={handleOnFavoriteClick}>
          favorite
        </span>
      </div>
    </article>
  );
};

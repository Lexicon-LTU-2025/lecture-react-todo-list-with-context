import { useContext, type ReactElement, type ReactNode } from 'react';
import { FavoriteContext } from './context';
import { Todo } from '../todos';

export const Favorites = (): ReactElement => {
  const { favorites, remove } = useContext(FavoriteContext);

  const renderFavorites = (): ReactNode => {
    if (favorites.length) {
      return favorites.map((f) => <Todo key={f.id} todo={f} onRemove={remove} />);
    }

    return 'No selected favorites...';
  };

  return <section className="favorites">{renderFavorites()}</section>;
};

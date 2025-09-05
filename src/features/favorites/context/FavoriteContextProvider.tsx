import { useState, type ReactElement, type ReactNode } from 'react';
import { IFavoriteContext } from './FavoriteContext';
import type { ITodo } from '../../todos';

interface IFavoriteContextProviderProps {
  children: ReactNode;
}

export const FavoriteContextProvider = ({
  children,
}: IFavoriteContextProviderProps): ReactElement => {
  const [favorites, setFavorites] = useState<ITodo[]>([]);

  const add = (todo: ITodo): void => setFavorites([todo, ...favorites]);
  const isFavorite = (todo: ITodo): boolean => favorites.includes(todo);
  const remove = (todo: ITodo): void => setFavorites(favorites.filter((f) => f.id !== todo.id));

  const values: IFavoriteContext = {
    add,
    favorites,
    isFavorite,
    remove,
  };

  return <IFavoriteContext.Provider value={values}>{children}</IFavoriteContext.Provider>;
};

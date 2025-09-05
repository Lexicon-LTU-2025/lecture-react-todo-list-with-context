import { useState, type ReactElement, type ReactNode } from 'react';
import { FavoriteContext, type IFavoriteContext } from './FavoriteContext';
import type { ITodo } from '../../todos';

interface IFavoriteContextProviderProps {
  children: ReactNode;
}

export const FavoriteContextProvider = ({
  children,
}: IFavoriteContextProviderProps): ReactElement => {
  const [favorites, setFavorites] = useState<ITodo[]>([]);

  const add = (todo: ITodo): void => setFavorites([todo, ...favorites]);
  const checkIfFavorite = (todo: ITodo): boolean => favorites.includes(todo);
  const remove = (todo: ITodo): void => setFavorites(favorites.filter((f) => f.id !== todo.id));

  const values: IFavoriteContext = {
    add,
    favorites,
    checkIfFavorite,
    remove,
  };

  return <FavoriteContext.Provider value={values}>{children}</FavoriteContext.Provider>;
};

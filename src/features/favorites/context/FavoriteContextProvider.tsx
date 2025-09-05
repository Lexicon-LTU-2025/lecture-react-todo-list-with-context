import { useEffect, useState, type ReactElement, type ReactNode } from 'react';
import { FavoriteContext, type IFavoriteContext } from '.';
import type { ITodo } from '../../todos';

interface IFavoriteContextProviderProps {
  children: ReactNode;
}

export const FavoriteContextProvider = ({
  children,
}: IFavoriteContextProviderProps): ReactElement => {
  const [favorites, setFavorites] = useState<ITodo[]>(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? (JSON.parse(stored) as ITodo[]) : [];
  });

  const add = (todo: ITodo): void => setFavorites([todo, ...favorites]);
  const checkIfFavorite = (todo: ITodo): boolean => favorites.includes(todo);
  const remove = (todo: ITodo): void => setFavorites(favorites.filter((f) => f.id !== todo.id));

  const values: IFavoriteContext = {
    add,
    favorites,
    checkIfFavorite,
    remove,
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return <FavoriteContext.Provider value={values}>{children}</FavoriteContext.Provider>;
};
